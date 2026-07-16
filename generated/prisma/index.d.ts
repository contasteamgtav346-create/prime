
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model AgendaEvent
 * 
 */
export type AgendaEvent = $Result.DefaultSelection<Prisma.$AgendaEventPayload>
/**
 * Model TournamentState
 * 
 */
export type TournamentState = $Result.DefaultSelection<Prisma.$TournamentStatePayload>
/**
 * Model SiteMetric
 * 
 */
export type SiteMetric = $Result.DefaultSelection<Prisma.$SiteMetricPayload>
/**
 * Model UpdatePost
 * 
 */
export type UpdatePost = $Result.DefaultSelection<Prisma.$UpdatePostPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agendaEvent`: Exposes CRUD operations for the **AgendaEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgendaEvents
    * const agendaEvents = await prisma.agendaEvent.findMany()
    * ```
    */
  get agendaEvent(): Prisma.AgendaEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournamentState`: Exposes CRUD operations for the **TournamentState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TournamentStates
    * const tournamentStates = await prisma.tournamentState.findMany()
    * ```
    */
  get tournamentState(): Prisma.TournamentStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteMetric`: Exposes CRUD operations for the **SiteMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteMetrics
    * const siteMetrics = await prisma.siteMetric.findMany()
    * ```
    */
  get siteMetric(): Prisma.SiteMetricDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.updatePost`: Exposes CRUD operations for the **UpdatePost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UpdatePosts
    * const updatePosts = await prisma.updatePost.findMany()
    * ```
    */
  get updatePost(): Prisma.UpdatePostDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    AgendaEvent: 'AgendaEvent',
    TournamentState: 'TournamentState',
    SiteMetric: 'SiteMetric',
    UpdatePost: 'UpdatePost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "agendaEvent" | "tournamentState" | "siteMetric" | "updatePost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      AgendaEvent: {
        payload: Prisma.$AgendaEventPayload<ExtArgs>
        fields: Prisma.AgendaEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendaEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendaEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaEventPayload>
          }
          findFirst: {
            args: Prisma.AgendaEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendaEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaEventPayload>
          }
          findMany: {
            args: Prisma.AgendaEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaEventPayload>[]
          }
          create: {
            args: Prisma.AgendaEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaEventPayload>
          }
          createMany: {
            args: Prisma.AgendaEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgendaEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaEventPayload>[]
          }
          delete: {
            args: Prisma.AgendaEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaEventPayload>
          }
          update: {
            args: Prisma.AgendaEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaEventPayload>
          }
          deleteMany: {
            args: Prisma.AgendaEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendaEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgendaEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaEventPayload>[]
          }
          upsert: {
            args: Prisma.AgendaEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaEventPayload>
          }
          aggregate: {
            args: Prisma.AgendaEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendaEvent>
          }
          groupBy: {
            args: Prisma.AgendaEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendaEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendaEventCountArgs<ExtArgs>
            result: $Utils.Optional<AgendaEventCountAggregateOutputType> | number
          }
        }
      }
      TournamentState: {
        payload: Prisma.$TournamentStatePayload<ExtArgs>
        fields: Prisma.TournamentStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatePayload>
          }
          findFirst: {
            args: Prisma.TournamentStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatePayload>
          }
          findMany: {
            args: Prisma.TournamentStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatePayload>[]
          }
          create: {
            args: Prisma.TournamentStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatePayload>
          }
          createMany: {
            args: Prisma.TournamentStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatePayload>[]
          }
          delete: {
            args: Prisma.TournamentStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatePayload>
          }
          update: {
            args: Prisma.TournamentStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatePayload>
          }
          deleteMany: {
            args: Prisma.TournamentStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatePayload>[]
          }
          upsert: {
            args: Prisma.TournamentStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentStatePayload>
          }
          aggregate: {
            args: Prisma.TournamentStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournamentState>
          }
          groupBy: {
            args: Prisma.TournamentStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentStateCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentStateCountAggregateOutputType> | number
          }
        }
      }
      SiteMetric: {
        payload: Prisma.$SiteMetricPayload<ExtArgs>
        fields: Prisma.SiteMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMetricPayload>
          }
          findFirst: {
            args: Prisma.SiteMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMetricPayload>
          }
          findMany: {
            args: Prisma.SiteMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMetricPayload>[]
          }
          create: {
            args: Prisma.SiteMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMetricPayload>
          }
          createMany: {
            args: Prisma.SiteMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteMetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMetricPayload>[]
          }
          delete: {
            args: Prisma.SiteMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMetricPayload>
          }
          update: {
            args: Prisma.SiteMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMetricPayload>
          }
          deleteMany: {
            args: Prisma.SiteMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteMetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMetricPayload>[]
          }
          upsert: {
            args: Prisma.SiteMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteMetricPayload>
          }
          aggregate: {
            args: Prisma.SiteMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteMetric>
          }
          groupBy: {
            args: Prisma.SiteMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteMetricCountArgs<ExtArgs>
            result: $Utils.Optional<SiteMetricCountAggregateOutputType> | number
          }
        }
      }
      UpdatePost: {
        payload: Prisma.$UpdatePostPayload<ExtArgs>
        fields: Prisma.UpdatePostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpdatePostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpdatePostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePostPayload>
          }
          findFirst: {
            args: Prisma.UpdatePostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpdatePostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePostPayload>
          }
          findMany: {
            args: Prisma.UpdatePostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePostPayload>[]
          }
          create: {
            args: Prisma.UpdatePostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePostPayload>
          }
          createMany: {
            args: Prisma.UpdatePostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UpdatePostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePostPayload>[]
          }
          delete: {
            args: Prisma.UpdatePostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePostPayload>
          }
          update: {
            args: Prisma.UpdatePostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePostPayload>
          }
          deleteMany: {
            args: Prisma.UpdatePostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpdatePostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UpdatePostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePostPayload>[]
          }
          upsert: {
            args: Prisma.UpdatePostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePostPayload>
          }
          aggregate: {
            args: Prisma.UpdatePostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpdatePost>
          }
          groupBy: {
            args: Prisma.UpdatePostGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpdatePostGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpdatePostCountArgs<ExtArgs>
            result: $Utils.Optional<UpdatePostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    agendaEvent?: AgendaEventOmit
    tournamentState?: TournamentStateOmit
    siteMetric?: SiteMetricOmit
    updatePost?: UpdatePostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    agendaEvents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    agendaEvents?: boolean | UserCountOutputTypeCountAgendaEventsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAgendaEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendaEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    discordId: string | null
    avatarUrl: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    discordId: string | null
    avatarUrl: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    discordId: number
    avatarUrl: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    discordId?: true
    avatarUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    discordId?: true
    avatarUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    discordId?: true
    avatarUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    passwordHash: string
    discordId: string | null
    avatarUrl: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    discordId?: boolean
    avatarUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    agendaEvents?: boolean | User$agendaEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    discordId?: boolean
    avatarUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    discordId?: boolean
    avatarUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    discordId?: boolean
    avatarUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "passwordHash" | "discordId" | "avatarUrl" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    agendaEvents?: boolean | User$agendaEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      agendaEvents: Prisma.$AgendaEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      passwordHash: string
      discordId: string | null
      avatarUrl: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agendaEvents<T extends User$agendaEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$agendaEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly discordId: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.agendaEvents
   */
  export type User$agendaEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendaEvent
     */
    select?: AgendaEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendaEvent
     */
    omit?: AgendaEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaEventInclude<ExtArgs> | null
    where?: AgendaEventWhereInput
    orderBy?: AgendaEventOrderByWithRelationInput | AgendaEventOrderByWithRelationInput[]
    cursor?: AgendaEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendaEventScalarFieldEnum | AgendaEventScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    expiresAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "expiresAt" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly tokenHash: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model AgendaEvent
   */

  export type AggregateAgendaEvent = {
    _count: AgendaEventCountAggregateOutputType | null
    _min: AgendaEventMinAggregateOutputType | null
    _max: AgendaEventMaxAggregateOutputType | null
  }

  export type AgendaEventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startAt: Date | null
    endAt: Date | null
    borderColor: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdByUserId: string | null
  }

  export type AgendaEventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startAt: Date | null
    endAt: Date | null
    borderColor: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdByUserId: string | null
  }

  export type AgendaEventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startAt: number
    endAt: number
    borderColor: number
    published: number
    createdAt: number
    updatedAt: number
    createdByUserId: number
    _all: number
  }


  export type AgendaEventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startAt?: true
    endAt?: true
    borderColor?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
  }

  export type AgendaEventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startAt?: true
    endAt?: true
    borderColor?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
  }

  export type AgendaEventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startAt?: true
    endAt?: true
    borderColor?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
    _all?: true
  }

  export type AgendaEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgendaEvent to aggregate.
     */
    where?: AgendaEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgendaEvents to fetch.
     */
    orderBy?: AgendaEventOrderByWithRelationInput | AgendaEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendaEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgendaEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgendaEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgendaEvents
    **/
    _count?: true | AgendaEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendaEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendaEventMaxAggregateInputType
  }

  export type GetAgendaEventAggregateType<T extends AgendaEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendaEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendaEvent[P]>
      : GetScalarType<T[P], AggregateAgendaEvent[P]>
  }




  export type AgendaEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendaEventWhereInput
    orderBy?: AgendaEventOrderByWithAggregationInput | AgendaEventOrderByWithAggregationInput[]
    by: AgendaEventScalarFieldEnum[] | AgendaEventScalarFieldEnum
    having?: AgendaEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendaEventCountAggregateInputType | true
    _min?: AgendaEventMinAggregateInputType
    _max?: AgendaEventMaxAggregateInputType
  }

  export type AgendaEventGroupByOutputType = {
    id: string
    title: string
    description: string
    startAt: Date
    endAt: Date | null
    borderColor: string | null
    published: boolean
    createdAt: Date
    updatedAt: Date
    createdByUserId: string | null
    _count: AgendaEventCountAggregateOutputType | null
    _min: AgendaEventMinAggregateOutputType | null
    _max: AgendaEventMaxAggregateOutputType | null
  }

  type GetAgendaEventGroupByPayload<T extends AgendaEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendaEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendaEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendaEventGroupByOutputType[P]>
            : GetScalarType<T[P], AgendaEventGroupByOutputType[P]>
        }
      >
    >


  export type AgendaEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startAt?: boolean
    endAt?: boolean
    borderColor?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUserId?: boolean
    createdByUser?: boolean | AgendaEvent$createdByUserArgs<ExtArgs>
  }, ExtArgs["result"]["agendaEvent"]>

  export type AgendaEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startAt?: boolean
    endAt?: boolean
    borderColor?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUserId?: boolean
    createdByUser?: boolean | AgendaEvent$createdByUserArgs<ExtArgs>
  }, ExtArgs["result"]["agendaEvent"]>

  export type AgendaEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startAt?: boolean
    endAt?: boolean
    borderColor?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUserId?: boolean
    createdByUser?: boolean | AgendaEvent$createdByUserArgs<ExtArgs>
  }, ExtArgs["result"]["agendaEvent"]>

  export type AgendaEventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startAt?: boolean
    endAt?: boolean
    borderColor?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUserId?: boolean
  }

  export type AgendaEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startAt" | "endAt" | "borderColor" | "published" | "createdAt" | "updatedAt" | "createdByUserId", ExtArgs["result"]["agendaEvent"]>
  export type AgendaEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | AgendaEvent$createdByUserArgs<ExtArgs>
  }
  export type AgendaEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | AgendaEvent$createdByUserArgs<ExtArgs>
  }
  export type AgendaEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | AgendaEvent$createdByUserArgs<ExtArgs>
  }

  export type $AgendaEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgendaEvent"
    objects: {
      createdByUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      startAt: Date
      endAt: Date | null
      borderColor: string | null
      published: boolean
      createdAt: Date
      updatedAt: Date
      createdByUserId: string | null
    }, ExtArgs["result"]["agendaEvent"]>
    composites: {}
  }

  type AgendaEventGetPayload<S extends boolean | null | undefined | AgendaEventDefaultArgs> = $Result.GetResult<Prisma.$AgendaEventPayload, S>

  type AgendaEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgendaEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendaEventCountAggregateInputType | true
    }

  export interface AgendaEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgendaEvent'], meta: { name: 'AgendaEvent' } }
    /**
     * Find zero or one AgendaEvent that matches the filter.
     * @param {AgendaEventFindUniqueArgs} args - Arguments to find a AgendaEvent
     * @example
     * // Get one AgendaEvent
     * const agendaEvent = await prisma.agendaEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendaEventFindUniqueArgs>(args: SelectSubset<T, AgendaEventFindUniqueArgs<ExtArgs>>): Prisma__AgendaEventClient<$Result.GetResult<Prisma.$AgendaEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgendaEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgendaEventFindUniqueOrThrowArgs} args - Arguments to find a AgendaEvent
     * @example
     * // Get one AgendaEvent
     * const agendaEvent = await prisma.agendaEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendaEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendaEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendaEventClient<$Result.GetResult<Prisma.$AgendaEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgendaEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaEventFindFirstArgs} args - Arguments to find a AgendaEvent
     * @example
     * // Get one AgendaEvent
     * const agendaEvent = await prisma.agendaEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendaEventFindFirstArgs>(args?: SelectSubset<T, AgendaEventFindFirstArgs<ExtArgs>>): Prisma__AgendaEventClient<$Result.GetResult<Prisma.$AgendaEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgendaEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaEventFindFirstOrThrowArgs} args - Arguments to find a AgendaEvent
     * @example
     * // Get one AgendaEvent
     * const agendaEvent = await prisma.agendaEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendaEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendaEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendaEventClient<$Result.GetResult<Prisma.$AgendaEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgendaEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgendaEvents
     * const agendaEvents = await prisma.agendaEvent.findMany()
     * 
     * // Get first 10 AgendaEvents
     * const agendaEvents = await prisma.agendaEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendaEventWithIdOnly = await prisma.agendaEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgendaEventFindManyArgs>(args?: SelectSubset<T, AgendaEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgendaEvent.
     * @param {AgendaEventCreateArgs} args - Arguments to create a AgendaEvent.
     * @example
     * // Create one AgendaEvent
     * const AgendaEvent = await prisma.agendaEvent.create({
     *   data: {
     *     // ... data to create a AgendaEvent
     *   }
     * })
     * 
     */
    create<T extends AgendaEventCreateArgs>(args: SelectSubset<T, AgendaEventCreateArgs<ExtArgs>>): Prisma__AgendaEventClient<$Result.GetResult<Prisma.$AgendaEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgendaEvents.
     * @param {AgendaEventCreateManyArgs} args - Arguments to create many AgendaEvents.
     * @example
     * // Create many AgendaEvents
     * const agendaEvent = await prisma.agendaEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendaEventCreateManyArgs>(args?: SelectSubset<T, AgendaEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgendaEvents and returns the data saved in the database.
     * @param {AgendaEventCreateManyAndReturnArgs} args - Arguments to create many AgendaEvents.
     * @example
     * // Create many AgendaEvents
     * const agendaEvent = await prisma.agendaEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgendaEvents and only return the `id`
     * const agendaEventWithIdOnly = await prisma.agendaEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgendaEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AgendaEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgendaEvent.
     * @param {AgendaEventDeleteArgs} args - Arguments to delete one AgendaEvent.
     * @example
     * // Delete one AgendaEvent
     * const AgendaEvent = await prisma.agendaEvent.delete({
     *   where: {
     *     // ... filter to delete one AgendaEvent
     *   }
     * })
     * 
     */
    delete<T extends AgendaEventDeleteArgs>(args: SelectSubset<T, AgendaEventDeleteArgs<ExtArgs>>): Prisma__AgendaEventClient<$Result.GetResult<Prisma.$AgendaEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgendaEvent.
     * @param {AgendaEventUpdateArgs} args - Arguments to update one AgendaEvent.
     * @example
     * // Update one AgendaEvent
     * const agendaEvent = await prisma.agendaEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgendaEventUpdateArgs>(args: SelectSubset<T, AgendaEventUpdateArgs<ExtArgs>>): Prisma__AgendaEventClient<$Result.GetResult<Prisma.$AgendaEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgendaEvents.
     * @param {AgendaEventDeleteManyArgs} args - Arguments to filter AgendaEvents to delete.
     * @example
     * // Delete a few AgendaEvents
     * const { count } = await prisma.agendaEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendaEventDeleteManyArgs>(args?: SelectSubset<T, AgendaEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgendaEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgendaEvents
     * const agendaEvent = await prisma.agendaEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgendaEventUpdateManyArgs>(args: SelectSubset<T, AgendaEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgendaEvents and returns the data updated in the database.
     * @param {AgendaEventUpdateManyAndReturnArgs} args - Arguments to update many AgendaEvents.
     * @example
     * // Update many AgendaEvents
     * const agendaEvent = await prisma.agendaEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgendaEvents and only return the `id`
     * const agendaEventWithIdOnly = await prisma.agendaEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgendaEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AgendaEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgendaEvent.
     * @param {AgendaEventUpsertArgs} args - Arguments to update or create a AgendaEvent.
     * @example
     * // Update or create a AgendaEvent
     * const agendaEvent = await prisma.agendaEvent.upsert({
     *   create: {
     *     // ... data to create a AgendaEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgendaEvent we want to update
     *   }
     * })
     */
    upsert<T extends AgendaEventUpsertArgs>(args: SelectSubset<T, AgendaEventUpsertArgs<ExtArgs>>): Prisma__AgendaEventClient<$Result.GetResult<Prisma.$AgendaEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgendaEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaEventCountArgs} args - Arguments to filter AgendaEvents to count.
     * @example
     * // Count the number of AgendaEvents
     * const count = await prisma.agendaEvent.count({
     *   where: {
     *     // ... the filter for the AgendaEvents we want to count
     *   }
     * })
    **/
    count<T extends AgendaEventCountArgs>(
      args?: Subset<T, AgendaEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendaEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgendaEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgendaEventAggregateArgs>(args: Subset<T, AgendaEventAggregateArgs>): Prisma.PrismaPromise<GetAgendaEventAggregateType<T>>

    /**
     * Group by AgendaEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgendaEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendaEventGroupByArgs['orderBy'] }
        : { orderBy?: AgendaEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgendaEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendaEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgendaEvent model
   */
  readonly fields: AgendaEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgendaEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendaEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdByUser<T extends AgendaEvent$createdByUserArgs<ExtArgs> = {}>(args?: Subset<T, AgendaEvent$createdByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgendaEvent model
   */
  interface AgendaEventFieldRefs {
    readonly id: FieldRef<"AgendaEvent", 'String'>
    readonly title: FieldRef<"AgendaEvent", 'String'>
    readonly description: FieldRef<"AgendaEvent", 'String'>
    readonly startAt: FieldRef<"AgendaEvent", 'DateTime'>
    readonly endAt: FieldRef<"AgendaEvent", 'DateTime'>
    readonly borderColor: FieldRef<"AgendaEvent", 'String'>
    readonly published: FieldRef<"AgendaEvent", 'Boolean'>
    readonly createdAt: FieldRef<"AgendaEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"AgendaEvent", 'DateTime'>
    readonly createdByUserId: FieldRef<"AgendaEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AgendaEvent findUnique
   */
  export type AgendaEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendaEvent
     */
    select?: AgendaEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendaEvent
     */
    omit?: AgendaEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaEventInclude<ExtArgs> | null
    /**
     * Filter, which AgendaEvent to fetch.
     */
    where: AgendaEventWhereUniqueInput
  }

  /**
   * AgendaEvent findUniqueOrThrow
   */
  export type AgendaEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendaEvent
     */
    select?: AgendaEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendaEvent
     */
    omit?: AgendaEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaEventInclude<ExtArgs> | null
    /**
     * Filter, which AgendaEvent to fetch.
     */
    where: AgendaEventWhereUniqueInput
  }

  /**
   * AgendaEvent findFirst
   */
  export type AgendaEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendaEvent
     */
    select?: AgendaEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendaEvent
     */
    omit?: AgendaEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaEventInclude<ExtArgs> | null
    /**
     * Filter, which AgendaEvent to fetch.
     */
    where?: AgendaEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgendaEvents to fetch.
     */
    orderBy?: AgendaEventOrderByWithRelationInput | AgendaEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgendaEvents.
     */
    cursor?: AgendaEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgendaEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgendaEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgendaEvents.
     */
    distinct?: AgendaEventScalarFieldEnum | AgendaEventScalarFieldEnum[]
  }

  /**
   * AgendaEvent findFirstOrThrow
   */
  export type AgendaEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendaEvent
     */
    select?: AgendaEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendaEvent
     */
    omit?: AgendaEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaEventInclude<ExtArgs> | null
    /**
     * Filter, which AgendaEvent to fetch.
     */
    where?: AgendaEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgendaEvents to fetch.
     */
    orderBy?: AgendaEventOrderByWithRelationInput | AgendaEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgendaEvents.
     */
    cursor?: AgendaEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgendaEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgendaEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgendaEvents.
     */
    distinct?: AgendaEventScalarFieldEnum | AgendaEventScalarFieldEnum[]
  }

  /**
   * AgendaEvent findMany
   */
  export type AgendaEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendaEvent
     */
    select?: AgendaEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendaEvent
     */
    omit?: AgendaEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaEventInclude<ExtArgs> | null
    /**
     * Filter, which AgendaEvents to fetch.
     */
    where?: AgendaEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgendaEvents to fetch.
     */
    orderBy?: AgendaEventOrderByWithRelationInput | AgendaEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgendaEvents.
     */
    cursor?: AgendaEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgendaEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgendaEvents.
     */
    skip?: number
    distinct?: AgendaEventScalarFieldEnum | AgendaEventScalarFieldEnum[]
  }

  /**
   * AgendaEvent create
   */
  export type AgendaEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendaEvent
     */
    select?: AgendaEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendaEvent
     */
    omit?: AgendaEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaEventInclude<ExtArgs> | null
    /**
     * The data needed to create a AgendaEvent.
     */
    data: XOR<AgendaEventCreateInput, AgendaEventUncheckedCreateInput>
  }

  /**
   * AgendaEvent createMany
   */
  export type AgendaEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgendaEvents.
     */
    data: AgendaEventCreateManyInput | AgendaEventCreateManyInput[]
  }

  /**
   * AgendaEvent createManyAndReturn
   */
  export type AgendaEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendaEvent
     */
    select?: AgendaEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgendaEvent
     */
    omit?: AgendaEventOmit<ExtArgs> | null
    /**
     * The data used to create many AgendaEvents.
     */
    data: AgendaEventCreateManyInput | AgendaEventCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgendaEvent update
   */
  export type AgendaEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendaEvent
     */
    select?: AgendaEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendaEvent
     */
    omit?: AgendaEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaEventInclude<ExtArgs> | null
    /**
     * The data needed to update a AgendaEvent.
     */
    data: XOR<AgendaEventUpdateInput, AgendaEventUncheckedUpdateInput>
    /**
     * Choose, which AgendaEvent to update.
     */
    where: AgendaEventWhereUniqueInput
  }

  /**
   * AgendaEvent updateMany
   */
  export type AgendaEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgendaEvents.
     */
    data: XOR<AgendaEventUpdateManyMutationInput, AgendaEventUncheckedUpdateManyInput>
    /**
     * Filter which AgendaEvents to update
     */
    where?: AgendaEventWhereInput
    /**
     * Limit how many AgendaEvents to update.
     */
    limit?: number
  }

  /**
   * AgendaEvent updateManyAndReturn
   */
  export type AgendaEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendaEvent
     */
    select?: AgendaEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgendaEvent
     */
    omit?: AgendaEventOmit<ExtArgs> | null
    /**
     * The data used to update AgendaEvents.
     */
    data: XOR<AgendaEventUpdateManyMutationInput, AgendaEventUncheckedUpdateManyInput>
    /**
     * Filter which AgendaEvents to update
     */
    where?: AgendaEventWhereInput
    /**
     * Limit how many AgendaEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgendaEvent upsert
   */
  export type AgendaEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendaEvent
     */
    select?: AgendaEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendaEvent
     */
    omit?: AgendaEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaEventInclude<ExtArgs> | null
    /**
     * The filter to search for the AgendaEvent to update in case it exists.
     */
    where: AgendaEventWhereUniqueInput
    /**
     * In case the AgendaEvent found by the `where` argument doesn't exist, create a new AgendaEvent with this data.
     */
    create: XOR<AgendaEventCreateInput, AgendaEventUncheckedCreateInput>
    /**
     * In case the AgendaEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendaEventUpdateInput, AgendaEventUncheckedUpdateInput>
  }

  /**
   * AgendaEvent delete
   */
  export type AgendaEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendaEvent
     */
    select?: AgendaEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendaEvent
     */
    omit?: AgendaEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaEventInclude<ExtArgs> | null
    /**
     * Filter which AgendaEvent to delete.
     */
    where: AgendaEventWhereUniqueInput
  }

  /**
   * AgendaEvent deleteMany
   */
  export type AgendaEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgendaEvents to delete
     */
    where?: AgendaEventWhereInput
    /**
     * Limit how many AgendaEvents to delete.
     */
    limit?: number
  }

  /**
   * AgendaEvent.createdByUser
   */
  export type AgendaEvent$createdByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AgendaEvent without action
   */
  export type AgendaEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgendaEvent
     */
    select?: AgendaEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgendaEvent
     */
    omit?: AgendaEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaEventInclude<ExtArgs> | null
  }


  /**
   * Model TournamentState
   */

  export type AggregateTournamentState = {
    _count: TournamentStateCountAggregateOutputType | null
    _min: TournamentStateMinAggregateOutputType | null
    _max: TournamentStateMaxAggregateOutputType | null
  }

  export type TournamentStateMinAggregateOutputType = {
    id: string | null
    groupsJson: string | null
    bracketJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentStateMaxAggregateOutputType = {
    id: string | null
    groupsJson: string | null
    bracketJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentStateCountAggregateOutputType = {
    id: number
    groupsJson: number
    bracketJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TournamentStateMinAggregateInputType = {
    id?: true
    groupsJson?: true
    bracketJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentStateMaxAggregateInputType = {
    id?: true
    groupsJson?: true
    bracketJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentStateCountAggregateInputType = {
    id?: true
    groupsJson?: true
    bracketJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TournamentStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentState to aggregate.
     */
    where?: TournamentStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentStates to fetch.
     */
    orderBy?: TournamentStateOrderByWithRelationInput | TournamentStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TournamentStates
    **/
    _count?: true | TournamentStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentStateMaxAggregateInputType
  }

  export type GetTournamentStateAggregateType<T extends TournamentStateAggregateArgs> = {
        [P in keyof T & keyof AggregateTournamentState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournamentState[P]>
      : GetScalarType<T[P], AggregateTournamentState[P]>
  }




  export type TournamentStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentStateWhereInput
    orderBy?: TournamentStateOrderByWithAggregationInput | TournamentStateOrderByWithAggregationInput[]
    by: TournamentStateScalarFieldEnum[] | TournamentStateScalarFieldEnum
    having?: TournamentStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentStateCountAggregateInputType | true
    _min?: TournamentStateMinAggregateInputType
    _max?: TournamentStateMaxAggregateInputType
  }

  export type TournamentStateGroupByOutputType = {
    id: string
    groupsJson: string
    bracketJson: string
    createdAt: Date
    updatedAt: Date
    _count: TournamentStateCountAggregateOutputType | null
    _min: TournamentStateMinAggregateOutputType | null
    _max: TournamentStateMaxAggregateOutputType | null
  }

  type GetTournamentStateGroupByPayload<T extends TournamentStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentStateGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentStateGroupByOutputType[P]>
        }
      >
    >


  export type TournamentStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupsJson?: boolean
    bracketJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournamentState"]>

  export type TournamentStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupsJson?: boolean
    bracketJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournamentState"]>

  export type TournamentStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupsJson?: boolean
    bracketJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournamentState"]>

  export type TournamentStateSelectScalar = {
    id?: boolean
    groupsJson?: boolean
    bracketJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TournamentStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupsJson" | "bracketJson" | "createdAt" | "updatedAt", ExtArgs["result"]["tournamentState"]>

  export type $TournamentStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TournamentState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupsJson: string
      bracketJson: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tournamentState"]>
    composites: {}
  }

  type TournamentStateGetPayload<S extends boolean | null | undefined | TournamentStateDefaultArgs> = $Result.GetResult<Prisma.$TournamentStatePayload, S>

  type TournamentStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentStateCountAggregateInputType | true
    }

  export interface TournamentStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TournamentState'], meta: { name: 'TournamentState' } }
    /**
     * Find zero or one TournamentState that matches the filter.
     * @param {TournamentStateFindUniqueArgs} args - Arguments to find a TournamentState
     * @example
     * // Get one TournamentState
     * const tournamentState = await prisma.tournamentState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentStateFindUniqueArgs>(args: SelectSubset<T, TournamentStateFindUniqueArgs<ExtArgs>>): Prisma__TournamentStateClient<$Result.GetResult<Prisma.$TournamentStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TournamentState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentStateFindUniqueOrThrowArgs} args - Arguments to find a TournamentState
     * @example
     * // Get one TournamentState
     * const tournamentState = await prisma.tournamentState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentStateFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentStateClient<$Result.GetResult<Prisma.$TournamentStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentStateFindFirstArgs} args - Arguments to find a TournamentState
     * @example
     * // Get one TournamentState
     * const tournamentState = await prisma.tournamentState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentStateFindFirstArgs>(args?: SelectSubset<T, TournamentStateFindFirstArgs<ExtArgs>>): Prisma__TournamentStateClient<$Result.GetResult<Prisma.$TournamentStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentStateFindFirstOrThrowArgs} args - Arguments to find a TournamentState
     * @example
     * // Get one TournamentState
     * const tournamentState = await prisma.tournamentState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentStateFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentStateClient<$Result.GetResult<Prisma.$TournamentStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TournamentStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentStates
     * const tournamentStates = await prisma.tournamentState.findMany()
     * 
     * // Get first 10 TournamentStates
     * const tournamentStates = await prisma.tournamentState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentStateWithIdOnly = await prisma.tournamentState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentStateFindManyArgs>(args?: SelectSubset<T, TournamentStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TournamentState.
     * @param {TournamentStateCreateArgs} args - Arguments to create a TournamentState.
     * @example
     * // Create one TournamentState
     * const TournamentState = await prisma.tournamentState.create({
     *   data: {
     *     // ... data to create a TournamentState
     *   }
     * })
     * 
     */
    create<T extends TournamentStateCreateArgs>(args: SelectSubset<T, TournamentStateCreateArgs<ExtArgs>>): Prisma__TournamentStateClient<$Result.GetResult<Prisma.$TournamentStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TournamentStates.
     * @param {TournamentStateCreateManyArgs} args - Arguments to create many TournamentStates.
     * @example
     * // Create many TournamentStates
     * const tournamentState = await prisma.tournamentState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentStateCreateManyArgs>(args?: SelectSubset<T, TournamentStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TournamentStates and returns the data saved in the database.
     * @param {TournamentStateCreateManyAndReturnArgs} args - Arguments to create many TournamentStates.
     * @example
     * // Create many TournamentStates
     * const tournamentState = await prisma.tournamentState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TournamentStates and only return the `id`
     * const tournamentStateWithIdOnly = await prisma.tournamentState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentStateCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TournamentState.
     * @param {TournamentStateDeleteArgs} args - Arguments to delete one TournamentState.
     * @example
     * // Delete one TournamentState
     * const TournamentState = await prisma.tournamentState.delete({
     *   where: {
     *     // ... filter to delete one TournamentState
     *   }
     * })
     * 
     */
    delete<T extends TournamentStateDeleteArgs>(args: SelectSubset<T, TournamentStateDeleteArgs<ExtArgs>>): Prisma__TournamentStateClient<$Result.GetResult<Prisma.$TournamentStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TournamentState.
     * @param {TournamentStateUpdateArgs} args - Arguments to update one TournamentState.
     * @example
     * // Update one TournamentState
     * const tournamentState = await prisma.tournamentState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentStateUpdateArgs>(args: SelectSubset<T, TournamentStateUpdateArgs<ExtArgs>>): Prisma__TournamentStateClient<$Result.GetResult<Prisma.$TournamentStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TournamentStates.
     * @param {TournamentStateDeleteManyArgs} args - Arguments to filter TournamentStates to delete.
     * @example
     * // Delete a few TournamentStates
     * const { count } = await prisma.tournamentState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentStateDeleteManyArgs>(args?: SelectSubset<T, TournamentStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentStates
     * const tournamentState = await prisma.tournamentState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentStateUpdateManyArgs>(args: SelectSubset<T, TournamentStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentStates and returns the data updated in the database.
     * @param {TournamentStateUpdateManyAndReturnArgs} args - Arguments to update many TournamentStates.
     * @example
     * // Update many TournamentStates
     * const tournamentState = await prisma.tournamentState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TournamentStates and only return the `id`
     * const tournamentStateWithIdOnly = await prisma.tournamentState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentStateUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TournamentState.
     * @param {TournamentStateUpsertArgs} args - Arguments to update or create a TournamentState.
     * @example
     * // Update or create a TournamentState
     * const tournamentState = await prisma.tournamentState.upsert({
     *   create: {
     *     // ... data to create a TournamentState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentState we want to update
     *   }
     * })
     */
    upsert<T extends TournamentStateUpsertArgs>(args: SelectSubset<T, TournamentStateUpsertArgs<ExtArgs>>): Prisma__TournamentStateClient<$Result.GetResult<Prisma.$TournamentStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TournamentStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentStateCountArgs} args - Arguments to filter TournamentStates to count.
     * @example
     * // Count the number of TournamentStates
     * const count = await prisma.tournamentState.count({
     *   where: {
     *     // ... the filter for the TournamentStates we want to count
     *   }
     * })
    **/
    count<T extends TournamentStateCountArgs>(
      args?: Subset<T, TournamentStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TournamentState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentStateAggregateArgs>(args: Subset<T, TournamentStateAggregateArgs>): Prisma.PrismaPromise<GetTournamentStateAggregateType<T>>

    /**
     * Group by TournamentState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentStateGroupByArgs['orderBy'] }
        : { orderBy?: TournamentStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TournamentState model
   */
  readonly fields: TournamentStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TournamentState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TournamentState model
   */
  interface TournamentStateFieldRefs {
    readonly id: FieldRef<"TournamentState", 'String'>
    readonly groupsJson: FieldRef<"TournamentState", 'String'>
    readonly bracketJson: FieldRef<"TournamentState", 'String'>
    readonly createdAt: FieldRef<"TournamentState", 'DateTime'>
    readonly updatedAt: FieldRef<"TournamentState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TournamentState findUnique
   */
  export type TournamentStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentState
     */
    select?: TournamentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentState
     */
    omit?: TournamentStateOmit<ExtArgs> | null
    /**
     * Filter, which TournamentState to fetch.
     */
    where: TournamentStateWhereUniqueInput
  }

  /**
   * TournamentState findUniqueOrThrow
   */
  export type TournamentStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentState
     */
    select?: TournamentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentState
     */
    omit?: TournamentStateOmit<ExtArgs> | null
    /**
     * Filter, which TournamentState to fetch.
     */
    where: TournamentStateWhereUniqueInput
  }

  /**
   * TournamentState findFirst
   */
  export type TournamentStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentState
     */
    select?: TournamentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentState
     */
    omit?: TournamentStateOmit<ExtArgs> | null
    /**
     * Filter, which TournamentState to fetch.
     */
    where?: TournamentStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentStates to fetch.
     */
    orderBy?: TournamentStateOrderByWithRelationInput | TournamentStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentStates.
     */
    cursor?: TournamentStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentStates.
     */
    distinct?: TournamentStateScalarFieldEnum | TournamentStateScalarFieldEnum[]
  }

  /**
   * TournamentState findFirstOrThrow
   */
  export type TournamentStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentState
     */
    select?: TournamentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentState
     */
    omit?: TournamentStateOmit<ExtArgs> | null
    /**
     * Filter, which TournamentState to fetch.
     */
    where?: TournamentStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentStates to fetch.
     */
    orderBy?: TournamentStateOrderByWithRelationInput | TournamentStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentStates.
     */
    cursor?: TournamentStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentStates.
     */
    distinct?: TournamentStateScalarFieldEnum | TournamentStateScalarFieldEnum[]
  }

  /**
   * TournamentState findMany
   */
  export type TournamentStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentState
     */
    select?: TournamentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentState
     */
    omit?: TournamentStateOmit<ExtArgs> | null
    /**
     * Filter, which TournamentStates to fetch.
     */
    where?: TournamentStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentStates to fetch.
     */
    orderBy?: TournamentStateOrderByWithRelationInput | TournamentStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TournamentStates.
     */
    cursor?: TournamentStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentStates.
     */
    skip?: number
    distinct?: TournamentStateScalarFieldEnum | TournamentStateScalarFieldEnum[]
  }

  /**
   * TournamentState create
   */
  export type TournamentStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentState
     */
    select?: TournamentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentState
     */
    omit?: TournamentStateOmit<ExtArgs> | null
    /**
     * The data needed to create a TournamentState.
     */
    data: XOR<TournamentStateCreateInput, TournamentStateUncheckedCreateInput>
  }

  /**
   * TournamentState createMany
   */
  export type TournamentStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentStates.
     */
    data: TournamentStateCreateManyInput | TournamentStateCreateManyInput[]
  }

  /**
   * TournamentState createManyAndReturn
   */
  export type TournamentStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentState
     */
    select?: TournamentStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentState
     */
    omit?: TournamentStateOmit<ExtArgs> | null
    /**
     * The data used to create many TournamentStates.
     */
    data: TournamentStateCreateManyInput | TournamentStateCreateManyInput[]
  }

  /**
   * TournamentState update
   */
  export type TournamentStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentState
     */
    select?: TournamentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentState
     */
    omit?: TournamentStateOmit<ExtArgs> | null
    /**
     * The data needed to update a TournamentState.
     */
    data: XOR<TournamentStateUpdateInput, TournamentStateUncheckedUpdateInput>
    /**
     * Choose, which TournamentState to update.
     */
    where: TournamentStateWhereUniqueInput
  }

  /**
   * TournamentState updateMany
   */
  export type TournamentStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentStates.
     */
    data: XOR<TournamentStateUpdateManyMutationInput, TournamentStateUncheckedUpdateManyInput>
    /**
     * Filter which TournamentStates to update
     */
    where?: TournamentStateWhereInput
    /**
     * Limit how many TournamentStates to update.
     */
    limit?: number
  }

  /**
   * TournamentState updateManyAndReturn
   */
  export type TournamentStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentState
     */
    select?: TournamentStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentState
     */
    omit?: TournamentStateOmit<ExtArgs> | null
    /**
     * The data used to update TournamentStates.
     */
    data: XOR<TournamentStateUpdateManyMutationInput, TournamentStateUncheckedUpdateManyInput>
    /**
     * Filter which TournamentStates to update
     */
    where?: TournamentStateWhereInput
    /**
     * Limit how many TournamentStates to update.
     */
    limit?: number
  }

  /**
   * TournamentState upsert
   */
  export type TournamentStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentState
     */
    select?: TournamentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentState
     */
    omit?: TournamentStateOmit<ExtArgs> | null
    /**
     * The filter to search for the TournamentState to update in case it exists.
     */
    where: TournamentStateWhereUniqueInput
    /**
     * In case the TournamentState found by the `where` argument doesn't exist, create a new TournamentState with this data.
     */
    create: XOR<TournamentStateCreateInput, TournamentStateUncheckedCreateInput>
    /**
     * In case the TournamentState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentStateUpdateInput, TournamentStateUncheckedUpdateInput>
  }

  /**
   * TournamentState delete
   */
  export type TournamentStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentState
     */
    select?: TournamentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentState
     */
    omit?: TournamentStateOmit<ExtArgs> | null
    /**
     * Filter which TournamentState to delete.
     */
    where: TournamentStateWhereUniqueInput
  }

  /**
   * TournamentState deleteMany
   */
  export type TournamentStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentStates to delete
     */
    where?: TournamentStateWhereInput
    /**
     * Limit how many TournamentStates to delete.
     */
    limit?: number
  }

  /**
   * TournamentState without action
   */
  export type TournamentStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentState
     */
    select?: TournamentStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentState
     */
    omit?: TournamentStateOmit<ExtArgs> | null
  }


  /**
   * Model SiteMetric
   */

  export type AggregateSiteMetric = {
    _count: SiteMetricCountAggregateOutputType | null
    _avg: SiteMetricAvgAggregateOutputType | null
    _sum: SiteMetricSumAggregateOutputType | null
    _min: SiteMetricMinAggregateOutputType | null
    _max: SiteMetricMaxAggregateOutputType | null
  }

  export type SiteMetricAvgAggregateOutputType = {
    championshipsCount: number | null
    clansCount: number | null
  }

  export type SiteMetricSumAggregateOutputType = {
    championshipsCount: number | null
    clansCount: number | null
  }

  export type SiteMetricMinAggregateOutputType = {
    id: string | null
    championshipsCount: number | null
    clansCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteMetricMaxAggregateOutputType = {
    id: string | null
    championshipsCount: number | null
    clansCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteMetricCountAggregateOutputType = {
    id: number
    championshipsCount: number
    clansCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteMetricAvgAggregateInputType = {
    championshipsCount?: true
    clansCount?: true
  }

  export type SiteMetricSumAggregateInputType = {
    championshipsCount?: true
    clansCount?: true
  }

  export type SiteMetricMinAggregateInputType = {
    id?: true
    championshipsCount?: true
    clansCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteMetricMaxAggregateInputType = {
    id?: true
    championshipsCount?: true
    clansCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteMetricCountAggregateInputType = {
    id?: true
    championshipsCount?: true
    clansCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteMetric to aggregate.
     */
    where?: SiteMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteMetrics to fetch.
     */
    orderBy?: SiteMetricOrderByWithRelationInput | SiteMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteMetrics
    **/
    _count?: true | SiteMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMetricMaxAggregateInputType
  }

  export type GetSiteMetricAggregateType<T extends SiteMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteMetric[P]>
      : GetScalarType<T[P], AggregateSiteMetric[P]>
  }




  export type SiteMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteMetricWhereInput
    orderBy?: SiteMetricOrderByWithAggregationInput | SiteMetricOrderByWithAggregationInput[]
    by: SiteMetricScalarFieldEnum[] | SiteMetricScalarFieldEnum
    having?: SiteMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteMetricCountAggregateInputType | true
    _avg?: SiteMetricAvgAggregateInputType
    _sum?: SiteMetricSumAggregateInputType
    _min?: SiteMetricMinAggregateInputType
    _max?: SiteMetricMaxAggregateInputType
  }

  export type SiteMetricGroupByOutputType = {
    id: string
    championshipsCount: number
    clansCount: number
    createdAt: Date
    updatedAt: Date
    _count: SiteMetricCountAggregateOutputType | null
    _avg: SiteMetricAvgAggregateOutputType | null
    _sum: SiteMetricSumAggregateOutputType | null
    _min: SiteMetricMinAggregateOutputType | null
    _max: SiteMetricMaxAggregateOutputType | null
  }

  type GetSiteMetricGroupByPayload<T extends SiteMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteMetricGroupByOutputType[P]>
            : GetScalarType<T[P], SiteMetricGroupByOutputType[P]>
        }
      >
    >


  export type SiteMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    championshipsCount?: boolean
    clansCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteMetric"]>

  export type SiteMetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    championshipsCount?: boolean
    clansCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteMetric"]>

  export type SiteMetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    championshipsCount?: boolean
    clansCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteMetric"]>

  export type SiteMetricSelectScalar = {
    id?: boolean
    championshipsCount?: boolean
    clansCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SiteMetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "championshipsCount" | "clansCount" | "createdAt" | "updatedAt", ExtArgs["result"]["siteMetric"]>

  export type $SiteMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteMetric"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      championshipsCount: number
      clansCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["siteMetric"]>
    composites: {}
  }

  type SiteMetricGetPayload<S extends boolean | null | undefined | SiteMetricDefaultArgs> = $Result.GetResult<Prisma.$SiteMetricPayload, S>

  type SiteMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteMetricCountAggregateInputType | true
    }

  export interface SiteMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteMetric'], meta: { name: 'SiteMetric' } }
    /**
     * Find zero or one SiteMetric that matches the filter.
     * @param {SiteMetricFindUniqueArgs} args - Arguments to find a SiteMetric
     * @example
     * // Get one SiteMetric
     * const siteMetric = await prisma.siteMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteMetricFindUniqueArgs>(args: SelectSubset<T, SiteMetricFindUniqueArgs<ExtArgs>>): Prisma__SiteMetricClient<$Result.GetResult<Prisma.$SiteMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteMetric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteMetricFindUniqueOrThrowArgs} args - Arguments to find a SiteMetric
     * @example
     * // Get one SiteMetric
     * const siteMetric = await prisma.siteMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteMetricClient<$Result.GetResult<Prisma.$SiteMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteMetricFindFirstArgs} args - Arguments to find a SiteMetric
     * @example
     * // Get one SiteMetric
     * const siteMetric = await prisma.siteMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteMetricFindFirstArgs>(args?: SelectSubset<T, SiteMetricFindFirstArgs<ExtArgs>>): Prisma__SiteMetricClient<$Result.GetResult<Prisma.$SiteMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteMetricFindFirstOrThrowArgs} args - Arguments to find a SiteMetric
     * @example
     * // Get one SiteMetric
     * const siteMetric = await prisma.siteMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteMetricClient<$Result.GetResult<Prisma.$SiteMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteMetrics
     * const siteMetrics = await prisma.siteMetric.findMany()
     * 
     * // Get first 10 SiteMetrics
     * const siteMetrics = await prisma.siteMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteMetricWithIdOnly = await prisma.siteMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteMetricFindManyArgs>(args?: SelectSubset<T, SiteMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteMetric.
     * @param {SiteMetricCreateArgs} args - Arguments to create a SiteMetric.
     * @example
     * // Create one SiteMetric
     * const SiteMetric = await prisma.siteMetric.create({
     *   data: {
     *     // ... data to create a SiteMetric
     *   }
     * })
     * 
     */
    create<T extends SiteMetricCreateArgs>(args: SelectSubset<T, SiteMetricCreateArgs<ExtArgs>>): Prisma__SiteMetricClient<$Result.GetResult<Prisma.$SiteMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteMetrics.
     * @param {SiteMetricCreateManyArgs} args - Arguments to create many SiteMetrics.
     * @example
     * // Create many SiteMetrics
     * const siteMetric = await prisma.siteMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteMetricCreateManyArgs>(args?: SelectSubset<T, SiteMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteMetrics and returns the data saved in the database.
     * @param {SiteMetricCreateManyAndReturnArgs} args - Arguments to create many SiteMetrics.
     * @example
     * // Create many SiteMetrics
     * const siteMetric = await prisma.siteMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteMetrics and only return the `id`
     * const siteMetricWithIdOnly = await prisma.siteMetric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteMetricCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteMetric.
     * @param {SiteMetricDeleteArgs} args - Arguments to delete one SiteMetric.
     * @example
     * // Delete one SiteMetric
     * const SiteMetric = await prisma.siteMetric.delete({
     *   where: {
     *     // ... filter to delete one SiteMetric
     *   }
     * })
     * 
     */
    delete<T extends SiteMetricDeleteArgs>(args: SelectSubset<T, SiteMetricDeleteArgs<ExtArgs>>): Prisma__SiteMetricClient<$Result.GetResult<Prisma.$SiteMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteMetric.
     * @param {SiteMetricUpdateArgs} args - Arguments to update one SiteMetric.
     * @example
     * // Update one SiteMetric
     * const siteMetric = await prisma.siteMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteMetricUpdateArgs>(args: SelectSubset<T, SiteMetricUpdateArgs<ExtArgs>>): Prisma__SiteMetricClient<$Result.GetResult<Prisma.$SiteMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteMetrics.
     * @param {SiteMetricDeleteManyArgs} args - Arguments to filter SiteMetrics to delete.
     * @example
     * // Delete a few SiteMetrics
     * const { count } = await prisma.siteMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteMetricDeleteManyArgs>(args?: SelectSubset<T, SiteMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteMetrics
     * const siteMetric = await prisma.siteMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteMetricUpdateManyArgs>(args: SelectSubset<T, SiteMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteMetrics and returns the data updated in the database.
     * @param {SiteMetricUpdateManyAndReturnArgs} args - Arguments to update many SiteMetrics.
     * @example
     * // Update many SiteMetrics
     * const siteMetric = await prisma.siteMetric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteMetrics and only return the `id`
     * const siteMetricWithIdOnly = await prisma.siteMetric.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteMetricUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteMetric.
     * @param {SiteMetricUpsertArgs} args - Arguments to update or create a SiteMetric.
     * @example
     * // Update or create a SiteMetric
     * const siteMetric = await prisma.siteMetric.upsert({
     *   create: {
     *     // ... data to create a SiteMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteMetric we want to update
     *   }
     * })
     */
    upsert<T extends SiteMetricUpsertArgs>(args: SelectSubset<T, SiteMetricUpsertArgs<ExtArgs>>): Prisma__SiteMetricClient<$Result.GetResult<Prisma.$SiteMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteMetricCountArgs} args - Arguments to filter SiteMetrics to count.
     * @example
     * // Count the number of SiteMetrics
     * const count = await prisma.siteMetric.count({
     *   where: {
     *     // ... the filter for the SiteMetrics we want to count
     *   }
     * })
    **/
    count<T extends SiteMetricCountArgs>(
      args?: Subset<T, SiteMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteMetricAggregateArgs>(args: Subset<T, SiteMetricAggregateArgs>): Prisma.PrismaPromise<GetSiteMetricAggregateType<T>>

    /**
     * Group by SiteMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteMetricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteMetricGroupByArgs['orderBy'] }
        : { orderBy?: SiteMetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteMetric model
   */
  readonly fields: SiteMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteMetric model
   */
  interface SiteMetricFieldRefs {
    readonly id: FieldRef<"SiteMetric", 'String'>
    readonly championshipsCount: FieldRef<"SiteMetric", 'Int'>
    readonly clansCount: FieldRef<"SiteMetric", 'Int'>
    readonly createdAt: FieldRef<"SiteMetric", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteMetric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteMetric findUnique
   */
  export type SiteMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMetric
     */
    select?: SiteMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMetric
     */
    omit?: SiteMetricOmit<ExtArgs> | null
    /**
     * Filter, which SiteMetric to fetch.
     */
    where: SiteMetricWhereUniqueInput
  }

  /**
   * SiteMetric findUniqueOrThrow
   */
  export type SiteMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMetric
     */
    select?: SiteMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMetric
     */
    omit?: SiteMetricOmit<ExtArgs> | null
    /**
     * Filter, which SiteMetric to fetch.
     */
    where: SiteMetricWhereUniqueInput
  }

  /**
   * SiteMetric findFirst
   */
  export type SiteMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMetric
     */
    select?: SiteMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMetric
     */
    omit?: SiteMetricOmit<ExtArgs> | null
    /**
     * Filter, which SiteMetric to fetch.
     */
    where?: SiteMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteMetrics to fetch.
     */
    orderBy?: SiteMetricOrderByWithRelationInput | SiteMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteMetrics.
     */
    cursor?: SiteMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteMetrics.
     */
    distinct?: SiteMetricScalarFieldEnum | SiteMetricScalarFieldEnum[]
  }

  /**
   * SiteMetric findFirstOrThrow
   */
  export type SiteMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMetric
     */
    select?: SiteMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMetric
     */
    omit?: SiteMetricOmit<ExtArgs> | null
    /**
     * Filter, which SiteMetric to fetch.
     */
    where?: SiteMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteMetrics to fetch.
     */
    orderBy?: SiteMetricOrderByWithRelationInput | SiteMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteMetrics.
     */
    cursor?: SiteMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteMetrics.
     */
    distinct?: SiteMetricScalarFieldEnum | SiteMetricScalarFieldEnum[]
  }

  /**
   * SiteMetric findMany
   */
  export type SiteMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMetric
     */
    select?: SiteMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMetric
     */
    omit?: SiteMetricOmit<ExtArgs> | null
    /**
     * Filter, which SiteMetrics to fetch.
     */
    where?: SiteMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteMetrics to fetch.
     */
    orderBy?: SiteMetricOrderByWithRelationInput | SiteMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteMetrics.
     */
    cursor?: SiteMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteMetrics.
     */
    skip?: number
    distinct?: SiteMetricScalarFieldEnum | SiteMetricScalarFieldEnum[]
  }

  /**
   * SiteMetric create
   */
  export type SiteMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMetric
     */
    select?: SiteMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMetric
     */
    omit?: SiteMetricOmit<ExtArgs> | null
    /**
     * The data needed to create a SiteMetric.
     */
    data: XOR<SiteMetricCreateInput, SiteMetricUncheckedCreateInput>
  }

  /**
   * SiteMetric createMany
   */
  export type SiteMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteMetrics.
     */
    data: SiteMetricCreateManyInput | SiteMetricCreateManyInput[]
  }

  /**
   * SiteMetric createManyAndReturn
   */
  export type SiteMetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMetric
     */
    select?: SiteMetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMetric
     */
    omit?: SiteMetricOmit<ExtArgs> | null
    /**
     * The data used to create many SiteMetrics.
     */
    data: SiteMetricCreateManyInput | SiteMetricCreateManyInput[]
  }

  /**
   * SiteMetric update
   */
  export type SiteMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMetric
     */
    select?: SiteMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMetric
     */
    omit?: SiteMetricOmit<ExtArgs> | null
    /**
     * The data needed to update a SiteMetric.
     */
    data: XOR<SiteMetricUpdateInput, SiteMetricUncheckedUpdateInput>
    /**
     * Choose, which SiteMetric to update.
     */
    where: SiteMetricWhereUniqueInput
  }

  /**
   * SiteMetric updateMany
   */
  export type SiteMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteMetrics.
     */
    data: XOR<SiteMetricUpdateManyMutationInput, SiteMetricUncheckedUpdateManyInput>
    /**
     * Filter which SiteMetrics to update
     */
    where?: SiteMetricWhereInput
    /**
     * Limit how many SiteMetrics to update.
     */
    limit?: number
  }

  /**
   * SiteMetric updateManyAndReturn
   */
  export type SiteMetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMetric
     */
    select?: SiteMetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMetric
     */
    omit?: SiteMetricOmit<ExtArgs> | null
    /**
     * The data used to update SiteMetrics.
     */
    data: XOR<SiteMetricUpdateManyMutationInput, SiteMetricUncheckedUpdateManyInput>
    /**
     * Filter which SiteMetrics to update
     */
    where?: SiteMetricWhereInput
    /**
     * Limit how many SiteMetrics to update.
     */
    limit?: number
  }

  /**
   * SiteMetric upsert
   */
  export type SiteMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMetric
     */
    select?: SiteMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMetric
     */
    omit?: SiteMetricOmit<ExtArgs> | null
    /**
     * The filter to search for the SiteMetric to update in case it exists.
     */
    where: SiteMetricWhereUniqueInput
    /**
     * In case the SiteMetric found by the `where` argument doesn't exist, create a new SiteMetric with this data.
     */
    create: XOR<SiteMetricCreateInput, SiteMetricUncheckedCreateInput>
    /**
     * In case the SiteMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteMetricUpdateInput, SiteMetricUncheckedUpdateInput>
  }

  /**
   * SiteMetric delete
   */
  export type SiteMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMetric
     */
    select?: SiteMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMetric
     */
    omit?: SiteMetricOmit<ExtArgs> | null
    /**
     * Filter which SiteMetric to delete.
     */
    where: SiteMetricWhereUniqueInput
  }

  /**
   * SiteMetric deleteMany
   */
  export type SiteMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteMetrics to delete
     */
    where?: SiteMetricWhereInput
    /**
     * Limit how many SiteMetrics to delete.
     */
    limit?: number
  }

  /**
   * SiteMetric without action
   */
  export type SiteMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteMetric
     */
    select?: SiteMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteMetric
     */
    omit?: SiteMetricOmit<ExtArgs> | null
  }


  /**
   * Model UpdatePost
   */

  export type AggregateUpdatePost = {
    _count: UpdatePostCountAggregateOutputType | null
    _avg: UpdatePostAvgAggregateOutputType | null
    _sum: UpdatePostSumAggregateOutputType | null
    _min: UpdatePostMinAggregateOutputType | null
    _max: UpdatePostMaxAggregateOutputType | null
  }

  export type UpdatePostAvgAggregateOutputType = {
    changesCount: number | null
  }

  export type UpdatePostSumAggregateOutputType = {
    changesCount: number | null
  }

  export type UpdatePostMinAggregateOutputType = {
    id: string | null
    versionLabel: string | null
    bannerImage: string | null
    publishedAt: Date | null
    changesCount: number | null
    changesJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UpdatePostMaxAggregateOutputType = {
    id: string | null
    versionLabel: string | null
    bannerImage: string | null
    publishedAt: Date | null
    changesCount: number | null
    changesJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UpdatePostCountAggregateOutputType = {
    id: number
    versionLabel: number
    bannerImage: number
    publishedAt: number
    changesCount: number
    changesJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UpdatePostAvgAggregateInputType = {
    changesCount?: true
  }

  export type UpdatePostSumAggregateInputType = {
    changesCount?: true
  }

  export type UpdatePostMinAggregateInputType = {
    id?: true
    versionLabel?: true
    bannerImage?: true
    publishedAt?: true
    changesCount?: true
    changesJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UpdatePostMaxAggregateInputType = {
    id?: true
    versionLabel?: true
    bannerImage?: true
    publishedAt?: true
    changesCount?: true
    changesJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UpdatePostCountAggregateInputType = {
    id?: true
    versionLabel?: true
    bannerImage?: true
    publishedAt?: true
    changesCount?: true
    changesJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UpdatePostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpdatePost to aggregate.
     */
    where?: UpdatePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpdatePosts to fetch.
     */
    orderBy?: UpdatePostOrderByWithRelationInput | UpdatePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpdatePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpdatePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpdatePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UpdatePosts
    **/
    _count?: true | UpdatePostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UpdatePostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UpdatePostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpdatePostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpdatePostMaxAggregateInputType
  }

  export type GetUpdatePostAggregateType<T extends UpdatePostAggregateArgs> = {
        [P in keyof T & keyof AggregateUpdatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpdatePost[P]>
      : GetScalarType<T[P], AggregateUpdatePost[P]>
  }




  export type UpdatePostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpdatePostWhereInput
    orderBy?: UpdatePostOrderByWithAggregationInput | UpdatePostOrderByWithAggregationInput[]
    by: UpdatePostScalarFieldEnum[] | UpdatePostScalarFieldEnum
    having?: UpdatePostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpdatePostCountAggregateInputType | true
    _avg?: UpdatePostAvgAggregateInputType
    _sum?: UpdatePostSumAggregateInputType
    _min?: UpdatePostMinAggregateInputType
    _max?: UpdatePostMaxAggregateInputType
  }

  export type UpdatePostGroupByOutputType = {
    id: string
    versionLabel: string
    bannerImage: string | null
    publishedAt: Date
    changesCount: number
    changesJson: string
    createdAt: Date
    updatedAt: Date
    _count: UpdatePostCountAggregateOutputType | null
    _avg: UpdatePostAvgAggregateOutputType | null
    _sum: UpdatePostSumAggregateOutputType | null
    _min: UpdatePostMinAggregateOutputType | null
    _max: UpdatePostMaxAggregateOutputType | null
  }

  type GetUpdatePostGroupByPayload<T extends UpdatePostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpdatePostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpdatePostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpdatePostGroupByOutputType[P]>
            : GetScalarType<T[P], UpdatePostGroupByOutputType[P]>
        }
      >
    >


  export type UpdatePostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    versionLabel?: boolean
    bannerImage?: boolean
    publishedAt?: boolean
    changesCount?: boolean
    changesJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["updatePost"]>

  export type UpdatePostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    versionLabel?: boolean
    bannerImage?: boolean
    publishedAt?: boolean
    changesCount?: boolean
    changesJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["updatePost"]>

  export type UpdatePostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    versionLabel?: boolean
    bannerImage?: boolean
    publishedAt?: boolean
    changesCount?: boolean
    changesJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["updatePost"]>

  export type UpdatePostSelectScalar = {
    id?: boolean
    versionLabel?: boolean
    bannerImage?: boolean
    publishedAt?: boolean
    changesCount?: boolean
    changesJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UpdatePostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "versionLabel" | "bannerImage" | "publishedAt" | "changesCount" | "changesJson" | "createdAt" | "updatedAt", ExtArgs["result"]["updatePost"]>

  export type $UpdatePostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UpdatePost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      versionLabel: string
      bannerImage: string | null
      publishedAt: Date
      changesCount: number
      changesJson: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["updatePost"]>
    composites: {}
  }

  type UpdatePostGetPayload<S extends boolean | null | undefined | UpdatePostDefaultArgs> = $Result.GetResult<Prisma.$UpdatePostPayload, S>

  type UpdatePostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UpdatePostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UpdatePostCountAggregateInputType | true
    }

  export interface UpdatePostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UpdatePost'], meta: { name: 'UpdatePost' } }
    /**
     * Find zero or one UpdatePost that matches the filter.
     * @param {UpdatePostFindUniqueArgs} args - Arguments to find a UpdatePost
     * @example
     * // Get one UpdatePost
     * const updatePost = await prisma.updatePost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpdatePostFindUniqueArgs>(args: SelectSubset<T, UpdatePostFindUniqueArgs<ExtArgs>>): Prisma__UpdatePostClient<$Result.GetResult<Prisma.$UpdatePostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UpdatePost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UpdatePostFindUniqueOrThrowArgs} args - Arguments to find a UpdatePost
     * @example
     * // Get one UpdatePost
     * const updatePost = await prisma.updatePost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpdatePostFindUniqueOrThrowArgs>(args: SelectSubset<T, UpdatePostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpdatePostClient<$Result.GetResult<Prisma.$UpdatePostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UpdatePost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdatePostFindFirstArgs} args - Arguments to find a UpdatePost
     * @example
     * // Get one UpdatePost
     * const updatePost = await prisma.updatePost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpdatePostFindFirstArgs>(args?: SelectSubset<T, UpdatePostFindFirstArgs<ExtArgs>>): Prisma__UpdatePostClient<$Result.GetResult<Prisma.$UpdatePostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UpdatePost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdatePostFindFirstOrThrowArgs} args - Arguments to find a UpdatePost
     * @example
     * // Get one UpdatePost
     * const updatePost = await prisma.updatePost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpdatePostFindFirstOrThrowArgs>(args?: SelectSubset<T, UpdatePostFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpdatePostClient<$Result.GetResult<Prisma.$UpdatePostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UpdatePosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdatePostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UpdatePosts
     * const updatePosts = await prisma.updatePost.findMany()
     * 
     * // Get first 10 UpdatePosts
     * const updatePosts = await prisma.updatePost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const updatePostWithIdOnly = await prisma.updatePost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpdatePostFindManyArgs>(args?: SelectSubset<T, UpdatePostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdatePostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UpdatePost.
     * @param {UpdatePostCreateArgs} args - Arguments to create a UpdatePost.
     * @example
     * // Create one UpdatePost
     * const UpdatePost = await prisma.updatePost.create({
     *   data: {
     *     // ... data to create a UpdatePost
     *   }
     * })
     * 
     */
    create<T extends UpdatePostCreateArgs>(args: SelectSubset<T, UpdatePostCreateArgs<ExtArgs>>): Prisma__UpdatePostClient<$Result.GetResult<Prisma.$UpdatePostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UpdatePosts.
     * @param {UpdatePostCreateManyArgs} args - Arguments to create many UpdatePosts.
     * @example
     * // Create many UpdatePosts
     * const updatePost = await prisma.updatePost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpdatePostCreateManyArgs>(args?: SelectSubset<T, UpdatePostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UpdatePosts and returns the data saved in the database.
     * @param {UpdatePostCreateManyAndReturnArgs} args - Arguments to create many UpdatePosts.
     * @example
     * // Create many UpdatePosts
     * const updatePost = await prisma.updatePost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UpdatePosts and only return the `id`
     * const updatePostWithIdOnly = await prisma.updatePost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UpdatePostCreateManyAndReturnArgs>(args?: SelectSubset<T, UpdatePostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdatePostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UpdatePost.
     * @param {UpdatePostDeleteArgs} args - Arguments to delete one UpdatePost.
     * @example
     * // Delete one UpdatePost
     * const UpdatePost = await prisma.updatePost.delete({
     *   where: {
     *     // ... filter to delete one UpdatePost
     *   }
     * })
     * 
     */
    delete<T extends UpdatePostDeleteArgs>(args: SelectSubset<T, UpdatePostDeleteArgs<ExtArgs>>): Prisma__UpdatePostClient<$Result.GetResult<Prisma.$UpdatePostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UpdatePost.
     * @param {UpdatePostUpdateArgs} args - Arguments to update one UpdatePost.
     * @example
     * // Update one UpdatePost
     * const updatePost = await prisma.updatePost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpdatePostUpdateArgs>(args: SelectSubset<T, UpdatePostUpdateArgs<ExtArgs>>): Prisma__UpdatePostClient<$Result.GetResult<Prisma.$UpdatePostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UpdatePosts.
     * @param {UpdatePostDeleteManyArgs} args - Arguments to filter UpdatePosts to delete.
     * @example
     * // Delete a few UpdatePosts
     * const { count } = await prisma.updatePost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpdatePostDeleteManyArgs>(args?: SelectSubset<T, UpdatePostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpdatePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdatePostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UpdatePosts
     * const updatePost = await prisma.updatePost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpdatePostUpdateManyArgs>(args: SelectSubset<T, UpdatePostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpdatePosts and returns the data updated in the database.
     * @param {UpdatePostUpdateManyAndReturnArgs} args - Arguments to update many UpdatePosts.
     * @example
     * // Update many UpdatePosts
     * const updatePost = await prisma.updatePost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UpdatePosts and only return the `id`
     * const updatePostWithIdOnly = await prisma.updatePost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UpdatePostUpdateManyAndReturnArgs>(args: SelectSubset<T, UpdatePostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdatePostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UpdatePost.
     * @param {UpdatePostUpsertArgs} args - Arguments to update or create a UpdatePost.
     * @example
     * // Update or create a UpdatePost
     * const updatePost = await prisma.updatePost.upsert({
     *   create: {
     *     // ... data to create a UpdatePost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UpdatePost we want to update
     *   }
     * })
     */
    upsert<T extends UpdatePostUpsertArgs>(args: SelectSubset<T, UpdatePostUpsertArgs<ExtArgs>>): Prisma__UpdatePostClient<$Result.GetResult<Prisma.$UpdatePostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UpdatePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdatePostCountArgs} args - Arguments to filter UpdatePosts to count.
     * @example
     * // Count the number of UpdatePosts
     * const count = await prisma.updatePost.count({
     *   where: {
     *     // ... the filter for the UpdatePosts we want to count
     *   }
     * })
    **/
    count<T extends UpdatePostCountArgs>(
      args?: Subset<T, UpdatePostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpdatePostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UpdatePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdatePostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UpdatePostAggregateArgs>(args: Subset<T, UpdatePostAggregateArgs>): Prisma.PrismaPromise<GetUpdatePostAggregateType<T>>

    /**
     * Group by UpdatePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdatePostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UpdatePostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpdatePostGroupByArgs['orderBy'] }
        : { orderBy?: UpdatePostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UpdatePostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpdatePostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UpdatePost model
   */
  readonly fields: UpdatePostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UpdatePost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpdatePostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UpdatePost model
   */
  interface UpdatePostFieldRefs {
    readonly id: FieldRef<"UpdatePost", 'String'>
    readonly versionLabel: FieldRef<"UpdatePost", 'String'>
    readonly bannerImage: FieldRef<"UpdatePost", 'String'>
    readonly publishedAt: FieldRef<"UpdatePost", 'DateTime'>
    readonly changesCount: FieldRef<"UpdatePost", 'Int'>
    readonly changesJson: FieldRef<"UpdatePost", 'String'>
    readonly createdAt: FieldRef<"UpdatePost", 'DateTime'>
    readonly updatedAt: FieldRef<"UpdatePost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UpdatePost findUnique
   */
  export type UpdatePostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdatePost
     */
    select?: UpdatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdatePost
     */
    omit?: UpdatePostOmit<ExtArgs> | null
    /**
     * Filter, which UpdatePost to fetch.
     */
    where: UpdatePostWhereUniqueInput
  }

  /**
   * UpdatePost findUniqueOrThrow
   */
  export type UpdatePostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdatePost
     */
    select?: UpdatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdatePost
     */
    omit?: UpdatePostOmit<ExtArgs> | null
    /**
     * Filter, which UpdatePost to fetch.
     */
    where: UpdatePostWhereUniqueInput
  }

  /**
   * UpdatePost findFirst
   */
  export type UpdatePostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdatePost
     */
    select?: UpdatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdatePost
     */
    omit?: UpdatePostOmit<ExtArgs> | null
    /**
     * Filter, which UpdatePost to fetch.
     */
    where?: UpdatePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpdatePosts to fetch.
     */
    orderBy?: UpdatePostOrderByWithRelationInput | UpdatePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpdatePosts.
     */
    cursor?: UpdatePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpdatePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpdatePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpdatePosts.
     */
    distinct?: UpdatePostScalarFieldEnum | UpdatePostScalarFieldEnum[]
  }

  /**
   * UpdatePost findFirstOrThrow
   */
  export type UpdatePostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdatePost
     */
    select?: UpdatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdatePost
     */
    omit?: UpdatePostOmit<ExtArgs> | null
    /**
     * Filter, which UpdatePost to fetch.
     */
    where?: UpdatePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpdatePosts to fetch.
     */
    orderBy?: UpdatePostOrderByWithRelationInput | UpdatePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpdatePosts.
     */
    cursor?: UpdatePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpdatePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpdatePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpdatePosts.
     */
    distinct?: UpdatePostScalarFieldEnum | UpdatePostScalarFieldEnum[]
  }

  /**
   * UpdatePost findMany
   */
  export type UpdatePostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdatePost
     */
    select?: UpdatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdatePost
     */
    omit?: UpdatePostOmit<ExtArgs> | null
    /**
     * Filter, which UpdatePosts to fetch.
     */
    where?: UpdatePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpdatePosts to fetch.
     */
    orderBy?: UpdatePostOrderByWithRelationInput | UpdatePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UpdatePosts.
     */
    cursor?: UpdatePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpdatePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpdatePosts.
     */
    skip?: number
    distinct?: UpdatePostScalarFieldEnum | UpdatePostScalarFieldEnum[]
  }

  /**
   * UpdatePost create
   */
  export type UpdatePostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdatePost
     */
    select?: UpdatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdatePost
     */
    omit?: UpdatePostOmit<ExtArgs> | null
    /**
     * The data needed to create a UpdatePost.
     */
    data: XOR<UpdatePostCreateInput, UpdatePostUncheckedCreateInput>
  }

  /**
   * UpdatePost createMany
   */
  export type UpdatePostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UpdatePosts.
     */
    data: UpdatePostCreateManyInput | UpdatePostCreateManyInput[]
  }

  /**
   * UpdatePost createManyAndReturn
   */
  export type UpdatePostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdatePost
     */
    select?: UpdatePostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UpdatePost
     */
    omit?: UpdatePostOmit<ExtArgs> | null
    /**
     * The data used to create many UpdatePosts.
     */
    data: UpdatePostCreateManyInput | UpdatePostCreateManyInput[]
  }

  /**
   * UpdatePost update
   */
  export type UpdatePostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdatePost
     */
    select?: UpdatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdatePost
     */
    omit?: UpdatePostOmit<ExtArgs> | null
    /**
     * The data needed to update a UpdatePost.
     */
    data: XOR<UpdatePostUpdateInput, UpdatePostUncheckedUpdateInput>
    /**
     * Choose, which UpdatePost to update.
     */
    where: UpdatePostWhereUniqueInput
  }

  /**
   * UpdatePost updateMany
   */
  export type UpdatePostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UpdatePosts.
     */
    data: XOR<UpdatePostUpdateManyMutationInput, UpdatePostUncheckedUpdateManyInput>
    /**
     * Filter which UpdatePosts to update
     */
    where?: UpdatePostWhereInput
    /**
     * Limit how many UpdatePosts to update.
     */
    limit?: number
  }

  /**
   * UpdatePost updateManyAndReturn
   */
  export type UpdatePostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdatePost
     */
    select?: UpdatePostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UpdatePost
     */
    omit?: UpdatePostOmit<ExtArgs> | null
    /**
     * The data used to update UpdatePosts.
     */
    data: XOR<UpdatePostUpdateManyMutationInput, UpdatePostUncheckedUpdateManyInput>
    /**
     * Filter which UpdatePosts to update
     */
    where?: UpdatePostWhereInput
    /**
     * Limit how many UpdatePosts to update.
     */
    limit?: number
  }

  /**
   * UpdatePost upsert
   */
  export type UpdatePostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdatePost
     */
    select?: UpdatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdatePost
     */
    omit?: UpdatePostOmit<ExtArgs> | null
    /**
     * The filter to search for the UpdatePost to update in case it exists.
     */
    where: UpdatePostWhereUniqueInput
    /**
     * In case the UpdatePost found by the `where` argument doesn't exist, create a new UpdatePost with this data.
     */
    create: XOR<UpdatePostCreateInput, UpdatePostUncheckedCreateInput>
    /**
     * In case the UpdatePost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpdatePostUpdateInput, UpdatePostUncheckedUpdateInput>
  }

  /**
   * UpdatePost delete
   */
  export type UpdatePostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdatePost
     */
    select?: UpdatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdatePost
     */
    omit?: UpdatePostOmit<ExtArgs> | null
    /**
     * Filter which UpdatePost to delete.
     */
    where: UpdatePostWhereUniqueInput
  }

  /**
   * UpdatePost deleteMany
   */
  export type UpdatePostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpdatePosts to delete
     */
    where?: UpdatePostWhereInput
    /**
     * Limit how many UpdatePosts to delete.
     */
    limit?: number
  }

  /**
   * UpdatePost without action
   */
  export type UpdatePostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdatePost
     */
    select?: UpdatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdatePost
     */
    omit?: UpdatePostOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    discordId: 'discordId',
    avatarUrl: 'avatarUrl',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AgendaEventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startAt: 'startAt',
    endAt: 'endAt',
    borderColor: 'borderColor',
    published: 'published',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdByUserId: 'createdByUserId'
  };

  export type AgendaEventScalarFieldEnum = (typeof AgendaEventScalarFieldEnum)[keyof typeof AgendaEventScalarFieldEnum]


  export const TournamentStateScalarFieldEnum: {
    id: 'id',
    groupsJson: 'groupsJson',
    bracketJson: 'bracketJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TournamentStateScalarFieldEnum = (typeof TournamentStateScalarFieldEnum)[keyof typeof TournamentStateScalarFieldEnum]


  export const SiteMetricScalarFieldEnum: {
    id: 'id',
    championshipsCount: 'championshipsCount',
    clansCount: 'clansCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteMetricScalarFieldEnum = (typeof SiteMetricScalarFieldEnum)[keyof typeof SiteMetricScalarFieldEnum]


  export const UpdatePostScalarFieldEnum: {
    id: 'id',
    versionLabel: 'versionLabel',
    bannerImage: 'bannerImage',
    publishedAt: 'publishedAt',
    changesCount: 'changesCount',
    changesJson: 'changesJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UpdatePostScalarFieldEnum = (typeof UpdatePostScalarFieldEnum)[keyof typeof UpdatePostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    discordId?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    agendaEvents?: AgendaEventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    discordId?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    agendaEvents?: AgendaEventOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    discordId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    agendaEvents?: AgendaEventListRelationFilter
  }, "id" | "username" | "email" | "discordId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    discordId?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    discordId?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    tokenHash?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    tokenHash?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type AgendaEventWhereInput = {
    AND?: AgendaEventWhereInput | AgendaEventWhereInput[]
    OR?: AgendaEventWhereInput[]
    NOT?: AgendaEventWhereInput | AgendaEventWhereInput[]
    id?: StringFilter<"AgendaEvent"> | string
    title?: StringFilter<"AgendaEvent"> | string
    description?: StringFilter<"AgendaEvent"> | string
    startAt?: DateTimeFilter<"AgendaEvent"> | Date | string
    endAt?: DateTimeNullableFilter<"AgendaEvent"> | Date | string | null
    borderColor?: StringNullableFilter<"AgendaEvent"> | string | null
    published?: BoolFilter<"AgendaEvent"> | boolean
    createdAt?: DateTimeFilter<"AgendaEvent"> | Date | string
    updatedAt?: DateTimeFilter<"AgendaEvent"> | Date | string
    createdByUserId?: StringNullableFilter<"AgendaEvent"> | string | null
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AgendaEventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrderInput | SortOrder
    borderColor?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    createdByUser?: UserOrderByWithRelationInput
  }

  export type AgendaEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgendaEventWhereInput | AgendaEventWhereInput[]
    OR?: AgendaEventWhereInput[]
    NOT?: AgendaEventWhereInput | AgendaEventWhereInput[]
    title?: StringFilter<"AgendaEvent"> | string
    description?: StringFilter<"AgendaEvent"> | string
    startAt?: DateTimeFilter<"AgendaEvent"> | Date | string
    endAt?: DateTimeNullableFilter<"AgendaEvent"> | Date | string | null
    borderColor?: StringNullableFilter<"AgendaEvent"> | string | null
    published?: BoolFilter<"AgendaEvent"> | boolean
    createdAt?: DateTimeFilter<"AgendaEvent"> | Date | string
    updatedAt?: DateTimeFilter<"AgendaEvent"> | Date | string
    createdByUserId?: StringNullableFilter<"AgendaEvent"> | string | null
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AgendaEventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrderInput | SortOrder
    borderColor?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrderInput | SortOrder
    _count?: AgendaEventCountOrderByAggregateInput
    _max?: AgendaEventMaxOrderByAggregateInput
    _min?: AgendaEventMinOrderByAggregateInput
  }

  export type AgendaEventScalarWhereWithAggregatesInput = {
    AND?: AgendaEventScalarWhereWithAggregatesInput | AgendaEventScalarWhereWithAggregatesInput[]
    OR?: AgendaEventScalarWhereWithAggregatesInput[]
    NOT?: AgendaEventScalarWhereWithAggregatesInput | AgendaEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgendaEvent"> | string
    title?: StringWithAggregatesFilter<"AgendaEvent"> | string
    description?: StringWithAggregatesFilter<"AgendaEvent"> | string
    startAt?: DateTimeWithAggregatesFilter<"AgendaEvent"> | Date | string
    endAt?: DateTimeNullableWithAggregatesFilter<"AgendaEvent"> | Date | string | null
    borderColor?: StringNullableWithAggregatesFilter<"AgendaEvent"> | string | null
    published?: BoolWithAggregatesFilter<"AgendaEvent"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AgendaEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AgendaEvent"> | Date | string
    createdByUserId?: StringNullableWithAggregatesFilter<"AgendaEvent"> | string | null
  }

  export type TournamentStateWhereInput = {
    AND?: TournamentStateWhereInput | TournamentStateWhereInput[]
    OR?: TournamentStateWhereInput[]
    NOT?: TournamentStateWhereInput | TournamentStateWhereInput[]
    id?: StringFilter<"TournamentState"> | string
    groupsJson?: StringFilter<"TournamentState"> | string
    bracketJson?: StringFilter<"TournamentState"> | string
    createdAt?: DateTimeFilter<"TournamentState"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentState"> | Date | string
  }

  export type TournamentStateOrderByWithRelationInput = {
    id?: SortOrder
    groupsJson?: SortOrder
    bracketJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TournamentStateWhereInput | TournamentStateWhereInput[]
    OR?: TournamentStateWhereInput[]
    NOT?: TournamentStateWhereInput | TournamentStateWhereInput[]
    groupsJson?: StringFilter<"TournamentState"> | string
    bracketJson?: StringFilter<"TournamentState"> | string
    createdAt?: DateTimeFilter<"TournamentState"> | Date | string
    updatedAt?: DateTimeFilter<"TournamentState"> | Date | string
  }, "id">

  export type TournamentStateOrderByWithAggregationInput = {
    id?: SortOrder
    groupsJson?: SortOrder
    bracketJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TournamentStateCountOrderByAggregateInput
    _max?: TournamentStateMaxOrderByAggregateInput
    _min?: TournamentStateMinOrderByAggregateInput
  }

  export type TournamentStateScalarWhereWithAggregatesInput = {
    AND?: TournamentStateScalarWhereWithAggregatesInput | TournamentStateScalarWhereWithAggregatesInput[]
    OR?: TournamentStateScalarWhereWithAggregatesInput[]
    NOT?: TournamentStateScalarWhereWithAggregatesInput | TournamentStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TournamentState"> | string
    groupsJson?: StringWithAggregatesFilter<"TournamentState"> | string
    bracketJson?: StringWithAggregatesFilter<"TournamentState"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TournamentState"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TournamentState"> | Date | string
  }

  export type SiteMetricWhereInput = {
    AND?: SiteMetricWhereInput | SiteMetricWhereInput[]
    OR?: SiteMetricWhereInput[]
    NOT?: SiteMetricWhereInput | SiteMetricWhereInput[]
    id?: StringFilter<"SiteMetric"> | string
    championshipsCount?: IntFilter<"SiteMetric"> | number
    clansCount?: IntFilter<"SiteMetric"> | number
    createdAt?: DateTimeFilter<"SiteMetric"> | Date | string
    updatedAt?: DateTimeFilter<"SiteMetric"> | Date | string
  }

  export type SiteMetricOrderByWithRelationInput = {
    id?: SortOrder
    championshipsCount?: SortOrder
    clansCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SiteMetricWhereInput | SiteMetricWhereInput[]
    OR?: SiteMetricWhereInput[]
    NOT?: SiteMetricWhereInput | SiteMetricWhereInput[]
    championshipsCount?: IntFilter<"SiteMetric"> | number
    clansCount?: IntFilter<"SiteMetric"> | number
    createdAt?: DateTimeFilter<"SiteMetric"> | Date | string
    updatedAt?: DateTimeFilter<"SiteMetric"> | Date | string
  }, "id">

  export type SiteMetricOrderByWithAggregationInput = {
    id?: SortOrder
    championshipsCount?: SortOrder
    clansCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteMetricCountOrderByAggregateInput
    _avg?: SiteMetricAvgOrderByAggregateInput
    _max?: SiteMetricMaxOrderByAggregateInput
    _min?: SiteMetricMinOrderByAggregateInput
    _sum?: SiteMetricSumOrderByAggregateInput
  }

  export type SiteMetricScalarWhereWithAggregatesInput = {
    AND?: SiteMetricScalarWhereWithAggregatesInput | SiteMetricScalarWhereWithAggregatesInput[]
    OR?: SiteMetricScalarWhereWithAggregatesInput[]
    NOT?: SiteMetricScalarWhereWithAggregatesInput | SiteMetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SiteMetric"> | string
    championshipsCount?: IntWithAggregatesFilter<"SiteMetric"> | number
    clansCount?: IntWithAggregatesFilter<"SiteMetric"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SiteMetric"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteMetric"> | Date | string
  }

  export type UpdatePostWhereInput = {
    AND?: UpdatePostWhereInput | UpdatePostWhereInput[]
    OR?: UpdatePostWhereInput[]
    NOT?: UpdatePostWhereInput | UpdatePostWhereInput[]
    id?: StringFilter<"UpdatePost"> | string
    versionLabel?: StringFilter<"UpdatePost"> | string
    bannerImage?: StringNullableFilter<"UpdatePost"> | string | null
    publishedAt?: DateTimeFilter<"UpdatePost"> | Date | string
    changesCount?: IntFilter<"UpdatePost"> | number
    changesJson?: StringFilter<"UpdatePost"> | string
    createdAt?: DateTimeFilter<"UpdatePost"> | Date | string
    updatedAt?: DateTimeFilter<"UpdatePost"> | Date | string
  }

  export type UpdatePostOrderByWithRelationInput = {
    id?: SortOrder
    versionLabel?: SortOrder
    bannerImage?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    changesCount?: SortOrder
    changesJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UpdatePostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UpdatePostWhereInput | UpdatePostWhereInput[]
    OR?: UpdatePostWhereInput[]
    NOT?: UpdatePostWhereInput | UpdatePostWhereInput[]
    versionLabel?: StringFilter<"UpdatePost"> | string
    bannerImage?: StringNullableFilter<"UpdatePost"> | string | null
    publishedAt?: DateTimeFilter<"UpdatePost"> | Date | string
    changesCount?: IntFilter<"UpdatePost"> | number
    changesJson?: StringFilter<"UpdatePost"> | string
    createdAt?: DateTimeFilter<"UpdatePost"> | Date | string
    updatedAt?: DateTimeFilter<"UpdatePost"> | Date | string
  }, "id">

  export type UpdatePostOrderByWithAggregationInput = {
    id?: SortOrder
    versionLabel?: SortOrder
    bannerImage?: SortOrderInput | SortOrder
    publishedAt?: SortOrder
    changesCount?: SortOrder
    changesJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UpdatePostCountOrderByAggregateInput
    _avg?: UpdatePostAvgOrderByAggregateInput
    _max?: UpdatePostMaxOrderByAggregateInput
    _min?: UpdatePostMinOrderByAggregateInput
    _sum?: UpdatePostSumOrderByAggregateInput
  }

  export type UpdatePostScalarWhereWithAggregatesInput = {
    AND?: UpdatePostScalarWhereWithAggregatesInput | UpdatePostScalarWhereWithAggregatesInput[]
    OR?: UpdatePostScalarWhereWithAggregatesInput[]
    NOT?: UpdatePostScalarWhereWithAggregatesInput | UpdatePostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UpdatePost"> | string
    versionLabel?: StringWithAggregatesFilter<"UpdatePost"> | string
    bannerImage?: StringNullableWithAggregatesFilter<"UpdatePost"> | string | null
    publishedAt?: DateTimeWithAggregatesFilter<"UpdatePost"> | Date | string
    changesCount?: IntWithAggregatesFilter<"UpdatePost"> | number
    changesJson?: StringWithAggregatesFilter<"UpdatePost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UpdatePost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UpdatePost"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    discordId?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    agendaEvents?: AgendaEventCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    discordId?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    agendaEvents?: AgendaEventUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    agendaEvents?: AgendaEventUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    agendaEvents?: AgendaEventUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    discordId?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaEventCreateInput = {
    id?: string
    title: string
    description: string
    startAt: Date | string
    endAt?: Date | string | null
    borderColor?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUser?: UserCreateNestedOneWithoutAgendaEventsInput
  }

  export type AgendaEventUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    startAt: Date | string
    endAt?: Date | string | null
    borderColor?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
  }

  export type AgendaEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUser?: UserUpdateOneWithoutAgendaEventsNestedInput
  }

  export type AgendaEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgendaEventCreateManyInput = {
    id?: string
    title: string
    description: string
    startAt: Date | string
    endAt?: Date | string | null
    borderColor?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
  }

  export type AgendaEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TournamentStateCreateInput = {
    id: string
    groupsJson: string
    bracketJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentStateUncheckedCreateInput = {
    id: string
    groupsJson: string
    bracketJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupsJson?: StringFieldUpdateOperationsInput | string
    bracketJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupsJson?: StringFieldUpdateOperationsInput | string
    bracketJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentStateCreateManyInput = {
    id: string
    groupsJson: string
    bracketJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupsJson?: StringFieldUpdateOperationsInput | string
    bracketJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupsJson?: StringFieldUpdateOperationsInput | string
    bracketJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteMetricCreateInput = {
    id: string
    championshipsCount: number
    clansCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteMetricUncheckedCreateInput = {
    id: string
    championshipsCount: number
    clansCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteMetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    championshipsCount?: IntFieldUpdateOperationsInput | number
    clansCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteMetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    championshipsCount?: IntFieldUpdateOperationsInput | number
    clansCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteMetricCreateManyInput = {
    id: string
    championshipsCount: number
    clansCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteMetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    championshipsCount?: IntFieldUpdateOperationsInput | number
    clansCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteMetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    championshipsCount?: IntFieldUpdateOperationsInput | number
    clansCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpdatePostCreateInput = {
    id?: string
    versionLabel: string
    bannerImage?: string | null
    publishedAt: Date | string
    changesCount?: number
    changesJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UpdatePostUncheckedCreateInput = {
    id?: string
    versionLabel: string
    bannerImage?: string | null
    publishedAt: Date | string
    changesCount?: number
    changesJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UpdatePostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionLabel?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changesCount?: IntFieldUpdateOperationsInput | number
    changesJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpdatePostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionLabel?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changesCount?: IntFieldUpdateOperationsInput | number
    changesJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpdatePostCreateManyInput = {
    id?: string
    versionLabel: string
    bannerImage?: string | null
    publishedAt: Date | string
    changesCount?: number
    changesJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UpdatePostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionLabel?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changesCount?: IntFieldUpdateOperationsInput | number
    changesJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UpdatePostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    versionLabel?: StringFieldUpdateOperationsInput | string
    bannerImage?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changesCount?: IntFieldUpdateOperationsInput | number
    changesJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AgendaEventListRelationFilter = {
    every?: AgendaEventWhereInput
    some?: AgendaEventWhereInput
    none?: AgendaEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgendaEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    discordId?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    discordId?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    discordId?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AgendaEventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    borderColor?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type AgendaEventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    borderColor?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type AgendaEventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    borderColor?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TournamentStateCountOrderByAggregateInput = {
    id?: SortOrder
    groupsJson?: SortOrder
    bracketJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentStateMaxOrderByAggregateInput = {
    id?: SortOrder
    groupsJson?: SortOrder
    bracketJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentStateMinOrderByAggregateInput = {
    id?: SortOrder
    groupsJson?: SortOrder
    bracketJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SiteMetricCountOrderByAggregateInput = {
    id?: SortOrder
    championshipsCount?: SortOrder
    clansCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteMetricAvgOrderByAggregateInput = {
    championshipsCount?: SortOrder
    clansCount?: SortOrder
  }

  export type SiteMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    championshipsCount?: SortOrder
    clansCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteMetricMinOrderByAggregateInput = {
    id?: SortOrder
    championshipsCount?: SortOrder
    clansCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteMetricSumOrderByAggregateInput = {
    championshipsCount?: SortOrder
    clansCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UpdatePostCountOrderByAggregateInput = {
    id?: SortOrder
    versionLabel?: SortOrder
    bannerImage?: SortOrder
    publishedAt?: SortOrder
    changesCount?: SortOrder
    changesJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UpdatePostAvgOrderByAggregateInput = {
    changesCount?: SortOrder
  }

  export type UpdatePostMaxOrderByAggregateInput = {
    id?: SortOrder
    versionLabel?: SortOrder
    bannerImage?: SortOrder
    publishedAt?: SortOrder
    changesCount?: SortOrder
    changesJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UpdatePostMinOrderByAggregateInput = {
    id?: SortOrder
    versionLabel?: SortOrder
    bannerImage?: SortOrder
    publishedAt?: SortOrder
    changesCount?: SortOrder
    changesJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UpdatePostSumOrderByAggregateInput = {
    changesCount?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AgendaEventCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<AgendaEventCreateWithoutCreatedByUserInput, AgendaEventUncheckedCreateWithoutCreatedByUserInput> | AgendaEventCreateWithoutCreatedByUserInput[] | AgendaEventUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: AgendaEventCreateOrConnectWithoutCreatedByUserInput | AgendaEventCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: AgendaEventCreateManyCreatedByUserInputEnvelope
    connect?: AgendaEventWhereUniqueInput | AgendaEventWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AgendaEventUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<AgendaEventCreateWithoutCreatedByUserInput, AgendaEventUncheckedCreateWithoutCreatedByUserInput> | AgendaEventCreateWithoutCreatedByUserInput[] | AgendaEventUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: AgendaEventCreateOrConnectWithoutCreatedByUserInput | AgendaEventCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: AgendaEventCreateManyCreatedByUserInputEnvelope
    connect?: AgendaEventWhereUniqueInput | AgendaEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AgendaEventUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<AgendaEventCreateWithoutCreatedByUserInput, AgendaEventUncheckedCreateWithoutCreatedByUserInput> | AgendaEventCreateWithoutCreatedByUserInput[] | AgendaEventUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: AgendaEventCreateOrConnectWithoutCreatedByUserInput | AgendaEventCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: AgendaEventUpsertWithWhereUniqueWithoutCreatedByUserInput | AgendaEventUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: AgendaEventCreateManyCreatedByUserInputEnvelope
    set?: AgendaEventWhereUniqueInput | AgendaEventWhereUniqueInput[]
    disconnect?: AgendaEventWhereUniqueInput | AgendaEventWhereUniqueInput[]
    delete?: AgendaEventWhereUniqueInput | AgendaEventWhereUniqueInput[]
    connect?: AgendaEventWhereUniqueInput | AgendaEventWhereUniqueInput[]
    update?: AgendaEventUpdateWithWhereUniqueWithoutCreatedByUserInput | AgendaEventUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: AgendaEventUpdateManyWithWhereWithoutCreatedByUserInput | AgendaEventUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: AgendaEventScalarWhereInput | AgendaEventScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AgendaEventUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<AgendaEventCreateWithoutCreatedByUserInput, AgendaEventUncheckedCreateWithoutCreatedByUserInput> | AgendaEventCreateWithoutCreatedByUserInput[] | AgendaEventUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: AgendaEventCreateOrConnectWithoutCreatedByUserInput | AgendaEventCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: AgendaEventUpsertWithWhereUniqueWithoutCreatedByUserInput | AgendaEventUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: AgendaEventCreateManyCreatedByUserInputEnvelope
    set?: AgendaEventWhereUniqueInput | AgendaEventWhereUniqueInput[]
    disconnect?: AgendaEventWhereUniqueInput | AgendaEventWhereUniqueInput[]
    delete?: AgendaEventWhereUniqueInput | AgendaEventWhereUniqueInput[]
    connect?: AgendaEventWhereUniqueInput | AgendaEventWhereUniqueInput[]
    update?: AgendaEventUpdateWithWhereUniqueWithoutCreatedByUserInput | AgendaEventUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: AgendaEventUpdateManyWithWhereWithoutCreatedByUserInput | AgendaEventUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: AgendaEventScalarWhereInput | AgendaEventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAgendaEventsInput = {
    create?: XOR<UserCreateWithoutAgendaEventsInput, UserUncheckedCreateWithoutAgendaEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgendaEventsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutAgendaEventsNestedInput = {
    create?: XOR<UserCreateWithoutAgendaEventsInput, UserUncheckedCreateWithoutAgendaEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgendaEventsInput
    upsert?: UserUpsertWithoutAgendaEventsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAgendaEventsInput, UserUpdateWithoutAgendaEventsInput>, UserUncheckedUpdateWithoutAgendaEventsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type AgendaEventCreateWithoutCreatedByUserInput = {
    id?: string
    title: string
    description: string
    startAt: Date | string
    endAt?: Date | string | null
    borderColor?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendaEventUncheckedCreateWithoutCreatedByUserInput = {
    id?: string
    title: string
    description: string
    startAt: Date | string
    endAt?: Date | string | null
    borderColor?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendaEventCreateOrConnectWithoutCreatedByUserInput = {
    where: AgendaEventWhereUniqueInput
    create: XOR<AgendaEventCreateWithoutCreatedByUserInput, AgendaEventUncheckedCreateWithoutCreatedByUserInput>
  }

  export type AgendaEventCreateManyCreatedByUserInputEnvelope = {
    data: AgendaEventCreateManyCreatedByUserInput | AgendaEventCreateManyCreatedByUserInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    tokenHash?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type AgendaEventUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: AgendaEventWhereUniqueInput
    update: XOR<AgendaEventUpdateWithoutCreatedByUserInput, AgendaEventUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<AgendaEventCreateWithoutCreatedByUserInput, AgendaEventUncheckedCreateWithoutCreatedByUserInput>
  }

  export type AgendaEventUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: AgendaEventWhereUniqueInput
    data: XOR<AgendaEventUpdateWithoutCreatedByUserInput, AgendaEventUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type AgendaEventUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: AgendaEventScalarWhereInput
    data: XOR<AgendaEventUpdateManyMutationInput, AgendaEventUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type AgendaEventScalarWhereInput = {
    AND?: AgendaEventScalarWhereInput | AgendaEventScalarWhereInput[]
    OR?: AgendaEventScalarWhereInput[]
    NOT?: AgendaEventScalarWhereInput | AgendaEventScalarWhereInput[]
    id?: StringFilter<"AgendaEvent"> | string
    title?: StringFilter<"AgendaEvent"> | string
    description?: StringFilter<"AgendaEvent"> | string
    startAt?: DateTimeFilter<"AgendaEvent"> | Date | string
    endAt?: DateTimeNullableFilter<"AgendaEvent"> | Date | string | null
    borderColor?: StringNullableFilter<"AgendaEvent"> | string | null
    published?: BoolFilter<"AgendaEvent"> | boolean
    createdAt?: DateTimeFilter<"AgendaEvent"> | Date | string
    updatedAt?: DateTimeFilter<"AgendaEvent"> | Date | string
    createdByUserId?: StringNullableFilter<"AgendaEvent"> | string | null
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    discordId?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    agendaEvents?: AgendaEventCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    discordId?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    agendaEvents?: AgendaEventUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendaEvents?: AgendaEventUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendaEvents?: AgendaEventUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserCreateWithoutAgendaEventsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    discordId?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAgendaEventsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    discordId?: string | null
    avatarUrl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAgendaEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAgendaEventsInput, UserUncheckedCreateWithoutAgendaEventsInput>
  }

  export type UserUpsertWithoutAgendaEventsInput = {
    update: XOR<UserUpdateWithoutAgendaEventsInput, UserUncheckedUpdateWithoutAgendaEventsInput>
    create: XOR<UserCreateWithoutAgendaEventsInput, UserUncheckedCreateWithoutAgendaEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAgendaEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAgendaEventsInput, UserUncheckedUpdateWithoutAgendaEventsInput>
  }

  export type UserUpdateWithoutAgendaEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAgendaEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    discordId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AgendaEventCreateManyCreatedByUserInput = {
    id?: string
    title: string
    description: string
    startAt: Date | string
    endAt?: Date | string | null
    borderColor?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaEventUpdateWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaEventUncheckedUpdateWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaEventUncheckedUpdateManyWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borderColor?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}