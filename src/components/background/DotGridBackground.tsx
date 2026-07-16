import { useEffect, useMemo, useRef } from 'react'

type Dot = {
  x0: number
  y0: number
  x: number
  y: number
  size: number
  baseAlpha: number
  tone: number
  phase: number
  speed: number
  depth: number
}

type PointerState = {
  x: number
  y: number
  targetX: number
  targetY: number
  velocityX: number
  velocityY: number
  active: boolean
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
}

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value))
}

function smoothstep(edge0: number, edge1: number, value: number) {
  const t = clamp01((value - edge0) / (edge1 - edge0))
  return t * t * (3 - 2 * t)
}

export default function DotGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef<PointerState>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    velocityX: 0,
    velocityY: 0,
    active: false,
  })

  const settings = useMemo(
    () => ({
      spacing: 24,
      squareSize: 3.1,
      pulseAmount: 0.26,
      influence: 216,
      lensRadius: 70,
      ballRadius: 62,
      ballSurfaceBlend: 0.78,
      lensStrength: 10,
      parallax: 6.2,
      followEase: 0.2,
      idleEase: 0.09,
    }),
    [],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (prefersReducedMotion()) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let raf = 0
    let dots: Dot[] = []

    const toneAt = (col: number, row: number) => {
      const seed = Math.sin(col * 12.9898 + row * 78.233) * 43758.5453
      return seed - Math.floor(seed)
    }

    const createDot = (x: number, y: number, colSeed: number, rowSeed: number) => {
      const tone = toneAt(colSeed, rowSeed)
      const phase = toneAt(colSeed + 211, rowSeed + 89) * Math.PI * 2
      const speed = 0.48 + toneAt(colSeed + 307, rowSeed + 149) * 0.75
      const depth = 0.38 + toneAt(colSeed + 521, rowSeed + 223) * 0.92

      dots.push({
        x0: x,
        y0: y,
        x,
        y,
        size: settings.squareSize + tone * 0.52,
        baseAlpha: 0.12 + tone * 0.12,
        tone,
        phase,
        speed,
        depth,
      })
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, Math.floor(rect.width * dpr))
      canvas.height = Math.max(1, Math.floor(rect.height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const cols = Math.ceil(rect.width / settings.spacing) + 2
      const rows = Math.ceil(rect.height / settings.spacing) + 2
      const ox = (rect.width - (cols - 1) * settings.spacing) / 2
      const oy = (rect.height - (rows - 1) * settings.spacing) / 2

      dots = []
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          createDot(ox + col * settings.spacing, oy + row * settings.spacing, col, row)
        }
      }
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.targetX = event.clientX - rect.left
      mouseRef.current.targetY = event.clientY - rect.top
      mouseRef.current.x = mouseRef.current.targetX
      mouseRef.current.y = mouseRef.current.targetY

      mouseRef.current.active = true
    }

    const onDeactivate = () => {
      mouseRef.current.active = false
      mouseRef.current.velocityX = 0
      mouseRef.current.velocityY = 0
    }

    const tick = () => {
      const rect = canvas.getBoundingClientRect()
      const pointer = mouseRef.current
      const time = performance.now() * 0.001

      pointer.velocityX = pointer.targetX - pointer.x
      pointer.velocityY = pointer.targetY - pointer.y
      pointer.x = pointer.targetX
      pointer.y = pointer.targetY

      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const pointerNormX = pointer.active ? (pointer.x - centerX) / Math.max(centerX, 1) : 0
      const pointerNormY = pointer.active ? (pointer.y - centerY) / Math.max(centerY, 1) : 0
      const velocityMagnitude = Math.min(1, Math.hypot(pointer.velocityX, pointer.velocityY) / 18)

      ctx.clearRect(0, 0, rect.width, rect.height)

      for (const dot of dots) {
        let distortion = 0
        let depthLift = 0

        let targetX = dot.x0 + pointerNormX * settings.parallax * dot.depth
        let targetY = dot.y0 + pointerNormY * settings.parallax * dot.depth

        if (pointer.active) {
          const dx = dot.x0 - pointer.x
          const dy = dot.y0 - pointer.y
          const distance = Math.hypot(dx, dy) || 1

          if (distance < settings.influence) {
            const outer = 1 - smoothstep(settings.lensRadius, settings.influence, distance)
            const inner = clamp01((settings.ballRadius - distance) / settings.ballRadius)
            const ballMask = clamp01((settings.ballRadius - distance) / settings.ballRadius)
            const radialX = dx / distance
            const radialY = dy / distance
            const lensPush = outer * settings.lensStrength
            const wake = outer * velocityMagnitude * 2.6 * dot.depth

            targetX += radialX * (lensPush + wake)
            targetY += radialY * (lensPush + wake)

            if (ballMask > 0) {
              const surfaceX = pointer.x + radialX * settings.ballRadius
              const surfaceY = pointer.y + radialY * settings.ballRadius
              const blend = ballMask * ballMask * settings.ballSurfaceBlend
              targetX += (surfaceX - targetX) * blend
              targetY += (surfaceY - targetY) * blend
            }

            distortion = outer
            depthLift = inner * 0.44 + outer * 0.2 + ballMask * 0.2
          }
        }

        const ease = pointer.active ? settings.followEase : settings.idleEase
        dot.x += (targetX - dot.x) * ease
        dot.y += (targetY - dot.y) * ease

        if (Math.abs(targetX - dot.x) < 0.02) dot.x = targetX
        if (Math.abs(targetY - dot.y) < 0.02) dot.y = targetY

        const drift = Math.hypot(dot.x - dot.x0, dot.y - dot.y0)
        const pulse = (Math.sin(time * dot.speed + dot.phase) + 1) / 2
        const squareSize =
          dot.size +
          pulse * settings.pulseAmount +
          depthLift * (0.8 + dot.depth * 0.3) +
          Math.min(0.18, drift * 0.014)
        const alpha = dot.baseAlpha + pulse * 0.18 + distortion * 0.08 + dot.depth * 0.024
        const fillR = Math.round(8 + dot.tone * 8 + pulse * 10 + depthLift * 4)
        const fillG = Math.round(16 + dot.tone * 9 + pulse * 12 + depthLift * 5)
        const fillB = Math.round(72 + dot.tone * 38 + pulse * 42 + depthLift * 22)

        const reliefX = pointerNormX * (0.75 + dot.depth * 0.9)
        const reliefY = pointerNormY * (0.75 + dot.depth * 0.9)

        ctx.fillStyle = `rgba(2,6,20,${0.14 + depthLift * 0.12})`
        ctx.fillRect(
          dot.x - squareSize / 2 + reliefX,
          dot.y - squareSize / 2 + reliefY,
          squareSize,
          squareSize,
        )

        ctx.fillStyle = `rgba(${fillR},${fillG},${fillB},${alpha})`
        ctx.fillRect(dot.x - squareSize / 2, dot.y - squareSize / 2, squareSize, squareSize)
      }

      raf = window.requestAnimationFrame(tick)
    }

    resize()
    raf = window.requestAnimationFrame(tick)

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('blur', onDeactivate)
    document.addEventListener('mouseleave', onDeactivate)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('blur', onDeactivate)
      document.removeEventListener('mouseleave', onDeactivate)
      window.cancelAnimationFrame(raf)
    }
  }, [settings])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,28,0.08),rgba(8,12,28,0.08)),radial-gradient(circle_at_50%_18%,rgba(88,68,192,0.1),transparent_46%),radial-gradient(circle_at_22%_78%,rgba(66,52,154,0.06),transparent_46%),radial-gradient(circle_at_78%_72%,rgba(40,55,122,0.05),transparent_50%)]" />
    </div>
  )
}
