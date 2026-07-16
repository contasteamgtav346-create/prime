-- AlterTable
ALTER TABLE "User" ADD COLUMN "discordId" TEXT;
ALTER TABLE "User" ADD COLUMN "avatarUrl" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_discordId_key" ON "User"("discordId");
