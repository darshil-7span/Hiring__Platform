
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Currency
 * 
 */
export type Currency = $Result.DefaultSelection<Prisma.$CurrencyPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model State
 * 
 */
export type State = $Result.DefaultSelection<Prisma.$StatePayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CandidateProfile
 * 
 */
export type CandidateProfile = $Result.DefaultSelection<Prisma.$CandidateProfilePayload>
/**
 * Model RecruiterProfile
 * 
 */
export type RecruiterProfile = $Result.DefaultSelection<Prisma.$RecruiterProfilePayload>
/**
 * Model JobPost
 * 
 */
export type JobPost = $Result.DefaultSelection<Prisma.$JobPostPayload>
/**
 * Model JobSkill
 * 
 */
export type JobSkill = $Result.DefaultSelection<Prisma.$JobSkillPayload>
/**
 * Model CandidateSkill
 * 
 */
export type CandidateSkill = $Result.DefaultSelection<Prisma.$CandidateSkillPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CurrencyName: {
  Indian: 'Indian',
  USA: 'USA'
};

export type CurrencyName = (typeof CurrencyName)[keyof typeof CurrencyName]


export const CurrencyCode: {
  INR: 'INR',
  USD: 'USD'
};

export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode]


export const CurrencySymbol: {
  RUPEE: 'RUPEE',
  DOLLAR: 'DOLLAR'
};

export type CurrencySymbol = (typeof CurrencySymbol)[keyof typeof CurrencySymbol]


export const EmploymentType: {
  fulltime: 'fulltime',
  parttime: 'parttime',
  internship: 'internship'
};

export type EmploymentType = (typeof EmploymentType)[keyof typeof EmploymentType]


export const JobType: {
  Remote: 'Remote',
  OnSite: 'OnSite',
  Hybrid: 'Hybrid'
};

export type JobType = (typeof JobType)[keyof typeof JobType]


export const JobStatus: {
  Active: 'Active',
  Deactive: 'Deactive'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const ApplicationStatus: {
  Applied: 'Applied',
  Shortlisted: 'Shortlisted',
  Rejected: 'Rejected',
  Hired: 'Hired'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]

}

export type CurrencyName = $Enums.CurrencyName

export const CurrencyName: typeof $Enums.CurrencyName

export type CurrencyCode = $Enums.CurrencyCode

export const CurrencyCode: typeof $Enums.CurrencyCode

export type CurrencySymbol = $Enums.CurrencySymbol

export const CurrencySymbol: typeof $Enums.CurrencySymbol

export type EmploymentType = $Enums.EmploymentType

export const EmploymentType: typeof $Enums.EmploymentType

export type JobType = $Enums.JobType

export const JobType: typeof $Enums.JobType

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.currency`: Exposes CRUD operations for the **Currency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currency.findMany()
    * ```
    */
  get currency(): Prisma.CurrencyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.state`: Exposes CRUD operations for the **State** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more States
    * const states = await prisma.state.findMany()
    * ```
    */
  get state(): Prisma.StateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.candidateProfile`: Exposes CRUD operations for the **CandidateProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateProfiles
    * const candidateProfiles = await prisma.candidateProfile.findMany()
    * ```
    */
  get candidateProfile(): Prisma.CandidateProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recruiterProfile`: Exposes CRUD operations for the **RecruiterProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecruiterProfiles
    * const recruiterProfiles = await prisma.recruiterProfile.findMany()
    * ```
    */
  get recruiterProfile(): Prisma.RecruiterProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobPost`: Exposes CRUD operations for the **JobPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobPosts
    * const jobPosts = await prisma.jobPost.findMany()
    * ```
    */
  get jobPost(): Prisma.JobPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobSkill`: Exposes CRUD operations for the **JobSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobSkills
    * const jobSkills = await prisma.jobSkill.findMany()
    * ```
    */
  get jobSkill(): Prisma.JobSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidateSkill`: Exposes CRUD operations for the **CandidateSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CandidateSkills
    * const candidateSkills = await prisma.candidateSkill.findMany()
    * ```
    */
  get candidateSkill(): Prisma.CandidateSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Role: 'Role',
    Skill: 'Skill',
    Currency: 'Currency',
    Country: 'Country',
    State: 'State',
    City: 'City',
    User: 'User',
    CandidateProfile: 'CandidateProfile',
    RecruiterProfile: 'RecruiterProfile',
    JobPost: 'JobPost',
    JobSkill: 'JobSkill',
    CandidateSkill: 'CandidateSkill',
    Application: 'Application'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "skill" | "currency" | "country" | "state" | "city" | "user" | "candidateProfile" | "recruiterProfile" | "jobPost" | "jobSkill" | "candidateSkill" | "application"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Currency: {
        payload: Prisma.$CurrencyPayload<ExtArgs>
        fields: Prisma.CurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrencyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrencyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findFirst: {
            args: Prisma.CurrencyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrencyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          findMany: {
            args: Prisma.CurrencyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          create: {
            args: Prisma.CurrencyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          createMany: {
            args: Prisma.CurrencyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurrencyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          delete: {
            args: Prisma.CurrencyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          update: {
            args: Prisma.CurrencyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          deleteMany: {
            args: Prisma.CurrencyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrencyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurrencyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>[]
          }
          upsert: {
            args: Prisma.CurrencyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrencyPayload>
          }
          aggregate: {
            args: Prisma.CurrencyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrency>
          }
          groupBy: {
            args: Prisma.CurrencyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrencyCountArgs<ExtArgs>
            result: $Utils.Optional<CurrencyCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      State: {
        payload: Prisma.$StatePayload<ExtArgs>
        fields: Prisma.StateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findFirst: {
            args: Prisma.StateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          findMany: {
            args: Prisma.StateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          create: {
            args: Prisma.StateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          createMany: {
            args: Prisma.StateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          delete: {
            args: Prisma.StateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          update: {
            args: Prisma.StateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          deleteMany: {
            args: Prisma.StateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>[]
          }
          upsert: {
            args: Prisma.StateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatePayload>
          }
          aggregate: {
            args: Prisma.StateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateState>
          }
          groupBy: {
            args: Prisma.StateGroupByArgs<ExtArgs>
            result: $Utils.Optional<StateGroupByOutputType>[]
          }
          count: {
            args: Prisma.StateCountArgs<ExtArgs>
            result: $Utils.Optional<StateCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
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
      CandidateProfile: {
        payload: Prisma.$CandidateProfilePayload<ExtArgs>
        fields: Prisma.CandidateProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          findFirst: {
            args: Prisma.CandidateProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          findMany: {
            args: Prisma.CandidateProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>[]
          }
          create: {
            args: Prisma.CandidateProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          createMany: {
            args: Prisma.CandidateProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>[]
          }
          delete: {
            args: Prisma.CandidateProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          update: {
            args: Prisma.CandidateProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          deleteMany: {
            args: Prisma.CandidateProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>[]
          }
          upsert: {
            args: Prisma.CandidateProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateProfilePayload>
          }
          aggregate: {
            args: Prisma.CandidateProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateProfile>
          }
          groupBy: {
            args: Prisma.CandidateProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateProfileCountAggregateOutputType> | number
          }
        }
      }
      RecruiterProfile: {
        payload: Prisma.$RecruiterProfilePayload<ExtArgs>
        fields: Prisma.RecruiterProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecruiterProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecruiterProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterProfilePayload>
          }
          findFirst: {
            args: Prisma.RecruiterProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecruiterProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterProfilePayload>
          }
          findMany: {
            args: Prisma.RecruiterProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterProfilePayload>[]
          }
          create: {
            args: Prisma.RecruiterProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterProfilePayload>
          }
          createMany: {
            args: Prisma.RecruiterProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecruiterProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterProfilePayload>[]
          }
          delete: {
            args: Prisma.RecruiterProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterProfilePayload>
          }
          update: {
            args: Prisma.RecruiterProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterProfilePayload>
          }
          deleteMany: {
            args: Prisma.RecruiterProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecruiterProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecruiterProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterProfilePayload>[]
          }
          upsert: {
            args: Prisma.RecruiterProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecruiterProfilePayload>
          }
          aggregate: {
            args: Prisma.RecruiterProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecruiterProfile>
          }
          groupBy: {
            args: Prisma.RecruiterProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecruiterProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecruiterProfileCountArgs<ExtArgs>
            result: $Utils.Optional<RecruiterProfileCountAggregateOutputType> | number
          }
        }
      }
      JobPost: {
        payload: Prisma.$JobPostPayload<ExtArgs>
        fields: Prisma.JobPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>
          }
          findFirst: {
            args: Prisma.JobPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>
          }
          findMany: {
            args: Prisma.JobPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>[]
          }
          create: {
            args: Prisma.JobPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>
          }
          createMany: {
            args: Prisma.JobPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>[]
          }
          delete: {
            args: Prisma.JobPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>
          }
          update: {
            args: Prisma.JobPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>
          }
          deleteMany: {
            args: Prisma.JobPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>[]
          }
          upsert: {
            args: Prisma.JobPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>
          }
          aggregate: {
            args: Prisma.JobPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobPost>
          }
          groupBy: {
            args: Prisma.JobPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobPostCountArgs<ExtArgs>
            result: $Utils.Optional<JobPostCountAggregateOutputType> | number
          }
        }
      }
      JobSkill: {
        payload: Prisma.$JobSkillPayload<ExtArgs>
        fields: Prisma.JobSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>
          }
          findFirst: {
            args: Prisma.JobSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>
          }
          findMany: {
            args: Prisma.JobSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>[]
          }
          create: {
            args: Prisma.JobSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>
          }
          createMany: {
            args: Prisma.JobSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>[]
          }
          delete: {
            args: Prisma.JobSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>
          }
          update: {
            args: Prisma.JobSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>
          }
          deleteMany: {
            args: Prisma.JobSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>[]
          }
          upsert: {
            args: Prisma.JobSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobSkillPayload>
          }
          aggregate: {
            args: Prisma.JobSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobSkill>
          }
          groupBy: {
            args: Prisma.JobSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobSkillCountArgs<ExtArgs>
            result: $Utils.Optional<JobSkillCountAggregateOutputType> | number
          }
        }
      }
      CandidateSkill: {
        payload: Prisma.$CandidateSkillPayload<ExtArgs>
        fields: Prisma.CandidateSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidateSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidateSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>
          }
          findFirst: {
            args: Prisma.CandidateSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidateSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>
          }
          findMany: {
            args: Prisma.CandidateSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>[]
          }
          create: {
            args: Prisma.CandidateSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>
          }
          createMany: {
            args: Prisma.CandidateSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CandidateSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>[]
          }
          delete: {
            args: Prisma.CandidateSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>
          }
          update: {
            args: Prisma.CandidateSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>
          }
          deleteMany: {
            args: Prisma.CandidateSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidateSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CandidateSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>[]
          }
          upsert: {
            args: Prisma.CandidateSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidateSkillPayload>
          }
          aggregate: {
            args: Prisma.CandidateSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidateSkill>
          }
          groupBy: {
            args: Prisma.CandidateSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidateSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidateSkillCountArgs<ExtArgs>
            result: $Utils.Optional<CandidateSkillCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    skill?: SkillOmit
    currency?: CurrencyOmit
    country?: CountryOmit
    state?: StateOmit
    city?: CityOmit
    user?: UserOmit
    candidateProfile?: CandidateProfileOmit
    recruiterProfile?: RecruiterProfileOmit
    jobPost?: JobPostOmit
    jobSkill?: JobSkillOmit
    candidateSkill?: CandidateSkillOmit
    application?: ApplicationOmit
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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    job_skills: number
    candidate_skills: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_skills?: boolean | SkillCountOutputTypeCountJob_skillsArgs
    candidate_skills?: boolean | SkillCountOutputTypeCountCandidate_skillsArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountJob_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobSkillWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountCandidate_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateSkillWhereInput
  }


  /**
   * Count Type CurrencyCountOutputType
   */

  export type CurrencyCountOutputType = {
    job_posts: number
  }

  export type CurrencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_posts?: boolean | CurrencyCountOutputTypeCountJob_postsArgs
  }

  // Custom InputTypes
  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrencyCountOutputType
     */
    select?: CurrencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CurrencyCountOutputType without action
   */
  export type CurrencyCountOutputTypeCountJob_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    states: number
    users: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    states?: boolean | CountryCountOutputTypeCountStatesArgs
    users?: boolean | CountryCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type StateCountOutputType
   */

  export type StateCountOutputType = {
    cities: number
    candidate_profiles: number
    recruiter_profiles: number
    job_posts: number
  }

  export type StateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | StateCountOutputTypeCountCitiesArgs
    candidate_profiles?: boolean | StateCountOutputTypeCountCandidate_profilesArgs
    recruiter_profiles?: boolean | StateCountOutputTypeCountRecruiter_profilesArgs
    job_posts?: boolean | StateCountOutputTypeCountJob_postsArgs
  }

  // Custom InputTypes
  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StateCountOutputType
     */
    select?: StateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountCandidate_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateProfileWhereInput
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountRecruiter_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecruiterProfileWhereInput
  }

  /**
   * StateCountOutputType without action
   */
  export type StateCountOutputTypeCountJob_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    candidate_profiles: number
    recruiter_profiles: number
    job_posts: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate_profiles?: boolean | CityCountOutputTypeCountCandidate_profilesArgs
    recruiter_profiles?: boolean | CityCountOutputTypeCountRecruiter_profilesArgs
    job_posts?: boolean | CityCountOutputTypeCountJob_postsArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountCandidate_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateProfileWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountRecruiter_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecruiterProfileWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountJob_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    job_posts: number
    applications: number
    candidate_skills: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_posts?: boolean | UserCountOutputTypeCountJob_postsArgs
    applications?: boolean | UserCountOutputTypeCountApplicationsArgs
    candidate_skills?: boolean | UserCountOutputTypeCountCandidate_skillsArgs
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
  export type UserCountOutputTypeCountJob_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCandidate_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateSkillWhereInput
  }


  /**
   * Count Type JobPostCountOutputType
   */

  export type JobPostCountOutputType = {
    job_skills: number
    applications: number
  }

  export type JobPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_skills?: boolean | JobPostCountOutputTypeCountJob_skillsArgs
    applications?: boolean | JobPostCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * JobPostCountOutputType without action
   */
  export type JobPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPostCountOutputType
     */
    select?: JobPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobPostCountOutputType without action
   */
  export type JobPostCountOutputTypeCountJob_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobSkillWhereInput
  }

  /**
   * JobPostCountOutputType without action
   */
  export type JobPostCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    role_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    role_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    role_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    role_name?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    role_name?: true
    created_at?: true
    updated_at?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    role_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    role_name: string
    created_at: Date
    updated_at: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    role_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role_name" | "created_at" | "updated_at", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role_name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly role_name: FieldRef<"Role", 'String'>
    readonly created_at: FieldRef<"Role", 'DateTime'>
    readonly updated_at: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    job_skills?: boolean | Skill$job_skillsArgs<ExtArgs>
    candidate_skills?: boolean | Skill$candidate_skillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_skills?: boolean | Skill$job_skillsArgs<ExtArgs>
    candidate_skills?: boolean | Skill$candidate_skillsArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      job_skills: Prisma.$JobSkillPayload<ExtArgs>[]
      candidate_skills: Prisma.$CandidateSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job_skills<T extends Skill$job_skillsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$job_skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidate_skills<T extends Skill$candidate_skillsArgs<ExtArgs> = {}>(args?: Subset<T, Skill$candidate_skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'Int'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly created_at: FieldRef<"Skill", 'DateTime'>
    readonly updated_at: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.job_skills
   */
  export type Skill$job_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null
    where?: JobSkillWhereInput
    orderBy?: JobSkillOrderByWithRelationInput | JobSkillOrderByWithRelationInput[]
    cursor?: JobSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobSkillScalarFieldEnum | JobSkillScalarFieldEnum[]
  }

  /**
   * Skill.candidate_skills
   */
  export type Skill$candidate_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    where?: CandidateSkillWhereInput
    orderBy?: CandidateSkillOrderByWithRelationInput | CandidateSkillOrderByWithRelationInput[]
    cursor?: CandidateSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateSkillScalarFieldEnum | CandidateSkillScalarFieldEnum[]
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Currency
   */

  export type AggregateCurrency = {
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  export type CurrencyAvgAggregateOutputType = {
    id: number | null
  }

  export type CurrencySumAggregateOutputType = {
    id: number | null
  }

  export type CurrencyMinAggregateOutputType = {
    id: number | null
    name: $Enums.CurrencyName | null
    code: $Enums.CurrencyCode | null
    symbol: $Enums.CurrencySymbol | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CurrencyMaxAggregateOutputType = {
    id: number | null
    name: $Enums.CurrencyName | null
    code: $Enums.CurrencyCode | null
    symbol: $Enums.CurrencySymbol | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CurrencyCountAggregateOutputType = {
    id: number
    name: number
    code: number
    symbol: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CurrencyAvgAggregateInputType = {
    id?: true
  }

  export type CurrencySumAggregateInputType = {
    id?: true
  }

  export type CurrencyMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    symbol?: true
    created_at?: true
    updated_at?: true
  }

  export type CurrencyMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    symbol?: true
    created_at?: true
    updated_at?: true
  }

  export type CurrencyCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    symbol?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currency to aggregate.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Currencies
    **/
    _count?: true | CurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrencyMaxAggregateInputType
  }

  export type GetCurrencyAggregateType<T extends CurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrency[P]>
      : GetScalarType<T[P], AggregateCurrency[P]>
  }




  export type CurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrencyWhereInput
    orderBy?: CurrencyOrderByWithAggregationInput | CurrencyOrderByWithAggregationInput[]
    by: CurrencyScalarFieldEnum[] | CurrencyScalarFieldEnum
    having?: CurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrencyCountAggregateInputType | true
    _avg?: CurrencyAvgAggregateInputType
    _sum?: CurrencySumAggregateInputType
    _min?: CurrencyMinAggregateInputType
    _max?: CurrencyMaxAggregateInputType
  }

  export type CurrencyGroupByOutputType = {
    id: number
    name: $Enums.CurrencyName
    code: $Enums.CurrencyCode
    symbol: $Enums.CurrencySymbol
    created_at: Date
    updated_at: Date
    _count: CurrencyCountAggregateOutputType | null
    _avg: CurrencyAvgAggregateOutputType | null
    _sum: CurrencySumAggregateOutputType | null
    _min: CurrencyMinAggregateOutputType | null
    _max: CurrencyMaxAggregateOutputType | null
  }

  type GetCurrencyGroupByPayload<T extends CurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CurrencyGroupByOutputType[P]>
        }
      >
    >


  export type CurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    symbol?: boolean
    created_at?: boolean
    updated_at?: boolean
    job_posts?: boolean | Currency$job_postsArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    symbol?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    symbol?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["currency"]>

  export type CurrencySelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    symbol?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CurrencyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "symbol" | "created_at" | "updated_at", ExtArgs["result"]["currency"]>
  export type CurrencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_posts?: boolean | Currency$job_postsArgs<ExtArgs>
    _count?: boolean | CurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CurrencyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CurrencyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Currency"
    objects: {
      job_posts: Prisma.$JobPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: $Enums.CurrencyName
      code: $Enums.CurrencyCode
      symbol: $Enums.CurrencySymbol
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["currency"]>
    composites: {}
  }

  type CurrencyGetPayload<S extends boolean | null | undefined | CurrencyDefaultArgs> = $Result.GetResult<Prisma.$CurrencyPayload, S>

  type CurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurrencyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurrencyCountAggregateInputType | true
    }

  export interface CurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Currency'], meta: { name: 'Currency' } }
    /**
     * Find zero or one Currency that matches the filter.
     * @param {CurrencyFindUniqueArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrencyFindUniqueArgs>(args: SelectSubset<T, CurrencyFindUniqueArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Currency that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurrencyFindUniqueOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrencyFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrencyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrencyFindFirstArgs>(args?: SelectSubset<T, CurrencyFindFirstArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindFirstOrThrowArgs} args - Arguments to find a Currency
     * @example
     * // Get one Currency
     * const currency = await prisma.currency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrencyFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrencyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currency.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currencyWithIdOnly = await prisma.currency.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurrencyFindManyArgs>(args?: SelectSubset<T, CurrencyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Currency.
     * @param {CurrencyCreateArgs} args - Arguments to create a Currency.
     * @example
     * // Create one Currency
     * const Currency = await prisma.currency.create({
     *   data: {
     *     // ... data to create a Currency
     *   }
     * })
     * 
     */
    create<T extends CurrencyCreateArgs>(args: SelectSubset<T, CurrencyCreateArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Currencies.
     * @param {CurrencyCreateManyArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrencyCreateManyArgs>(args?: SelectSubset<T, CurrencyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Currencies and returns the data saved in the database.
     * @param {CurrencyCreateManyAndReturnArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currency = await prisma.currency.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Currencies and only return the `id`
     * const currencyWithIdOnly = await prisma.currency.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurrencyCreateManyAndReturnArgs>(args?: SelectSubset<T, CurrencyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Currency.
     * @param {CurrencyDeleteArgs} args - Arguments to delete one Currency.
     * @example
     * // Delete one Currency
     * const Currency = await prisma.currency.delete({
     *   where: {
     *     // ... filter to delete one Currency
     *   }
     * })
     * 
     */
    delete<T extends CurrencyDeleteArgs>(args: SelectSubset<T, CurrencyDeleteArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Currency.
     * @param {CurrencyUpdateArgs} args - Arguments to update one Currency.
     * @example
     * // Update one Currency
     * const currency = await prisma.currency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrencyUpdateArgs>(args: SelectSubset<T, CurrencyUpdateArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Currencies.
     * @param {CurrencyDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrencyDeleteManyArgs>(args?: SelectSubset<T, CurrencyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrencyUpdateManyArgs>(args: SelectSubset<T, CurrencyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies and returns the data updated in the database.
     * @param {CurrencyUpdateManyAndReturnArgs} args - Arguments to update many Currencies.
     * @example
     * // Update many Currencies
     * const currency = await prisma.currency.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Currencies and only return the `id`
     * const currencyWithIdOnly = await prisma.currency.updateManyAndReturn({
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
    updateManyAndReturn<T extends CurrencyUpdateManyAndReturnArgs>(args: SelectSubset<T, CurrencyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Currency.
     * @param {CurrencyUpsertArgs} args - Arguments to update or create a Currency.
     * @example
     * // Update or create a Currency
     * const currency = await prisma.currency.upsert({
     *   create: {
     *     // ... data to create a Currency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currency we want to update
     *   }
     * })
     */
    upsert<T extends CurrencyUpsertArgs>(args: SelectSubset<T, CurrencyUpsertArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currency.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends CurrencyCountArgs>(
      args?: Subset<T, CurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurrencyAggregateArgs>(args: Subset<T, CurrencyAggregateArgs>): Prisma.PrismaPromise<GetCurrencyAggregateType<T>>

    /**
     * Group by Currency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrencyGroupByArgs} args - Group by arguments.
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
      T extends CurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrencyGroupByArgs['orderBy'] }
        : { orderBy?: CurrencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Currency model
   */
  readonly fields: CurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Currency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job_posts<T extends Currency$job_postsArgs<ExtArgs> = {}>(args?: Subset<T, Currency$job_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Currency model
   */
  interface CurrencyFieldRefs {
    readonly id: FieldRef<"Currency", 'Int'>
    readonly name: FieldRef<"Currency", 'CurrencyName'>
    readonly code: FieldRef<"Currency", 'CurrencyCode'>
    readonly symbol: FieldRef<"Currency", 'CurrencySymbol'>
    readonly created_at: FieldRef<"Currency", 'DateTime'>
    readonly updated_at: FieldRef<"Currency", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Currency findUnique
   */
  export type CurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency findUniqueOrThrow
   */
  export type CurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency findFirst
   */
  export type CurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency findFirstOrThrow
   */
  export type CurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currency to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency findMany
   */
  export type CurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrencyOrderByWithRelationInput | CurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Currencies.
     */
    cursor?: CurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    distinct?: CurrencyScalarFieldEnum | CurrencyScalarFieldEnum[]
  }

  /**
   * Currency create
   */
  export type CurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Currency.
     */
    data: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
  }

  /**
   * Currency createMany
   */
  export type CurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Currency createManyAndReturn
   */
  export type CurrencyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * The data used to create many Currencies.
     */
    data: CurrencyCreateManyInput | CurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Currency update
   */
  export type CurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Currency.
     */
    data: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
    /**
     * Choose, which Currency to update.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency updateMany
   */
  export type CurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to update.
     */
    limit?: number
  }

  /**
   * Currency updateManyAndReturn
   */
  export type CurrencyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrencyUpdateManyMutationInput, CurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to update.
     */
    limit?: number
  }

  /**
   * Currency upsert
   */
  export type CurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Currency to update in case it exists.
     */
    where: CurrencyWhereUniqueInput
    /**
     * In case the Currency found by the `where` argument doesn't exist, create a new Currency with this data.
     */
    create: XOR<CurrencyCreateInput, CurrencyUncheckedCreateInput>
    /**
     * In case the Currency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrencyUpdateInput, CurrencyUncheckedUpdateInput>
  }

  /**
   * Currency delete
   */
  export type CurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    /**
     * Filter which Currency to delete.
     */
    where: CurrencyWhereUniqueInput
  }

  /**
   * Currency deleteMany
   */
  export type CurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currencies to delete
     */
    where?: CurrencyWhereInput
    /**
     * Limit how many Currencies to delete.
     */
    limit?: number
  }

  /**
   * Currency.job_posts
   */
  export type Currency$job_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    where?: JobPostWhereInput
    orderBy?: JobPostOrderByWithRelationInput | JobPostOrderByWithRelationInput[]
    cursor?: JobPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobPostScalarFieldEnum | JobPostScalarFieldEnum[]
  }

  /**
   * Currency without action
   */
  export type CurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    name: string | null
    iso_code: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    iso_code: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    iso_code: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    iso_code?: true
    created_at?: true
    updated_at?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    iso_code?: true
    created_at?: true
    updated_at?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    iso_code?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: number
    name: string
    iso_code: string | null
    created_at: Date
    updated_at: Date
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iso_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    states?: boolean | Country$statesArgs<ExtArgs>
    users?: boolean | Country$usersArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iso_code?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iso_code?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
    iso_code?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "iso_code" | "created_at" | "updated_at", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    states?: boolean | Country$statesArgs<ExtArgs>
    users?: boolean | Country$usersArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      states: Prisma.$StatePayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      iso_code: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
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
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    states<T extends Country$statesArgs<ExtArgs> = {}>(args?: Subset<T, Country$statesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Country$usersArgs<ExtArgs> = {}>(args?: Subset<T, Country$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'Int'>
    readonly name: FieldRef<"Country", 'String'>
    readonly iso_code: FieldRef<"Country", 'String'>
    readonly created_at: FieldRef<"Country", 'DateTime'>
    readonly updated_at: FieldRef<"Country", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.states
   */
  export type Country$statesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    where?: StateWhereInput
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    cursor?: StateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * Country.users
   */
  export type Country$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model State
   */

  export type AggregateState = {
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  export type StateAvgAggregateOutputType = {
    id: number | null
    country_id: number | null
  }

  export type StateSumAggregateOutputType = {
    id: number | null
    country_id: number | null
  }

  export type StateMinAggregateOutputType = {
    id: number | null
    country_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StateMaxAggregateOutputType = {
    id: number | null
    country_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StateCountAggregateOutputType = {
    id: number
    country_id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StateAvgAggregateInputType = {
    id?: true
    country_id?: true
  }

  export type StateSumAggregateInputType = {
    id?: true
    country_id?: true
  }

  export type StateMinAggregateInputType = {
    id?: true
    country_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type StateMaxAggregateInputType = {
    id?: true
    country_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type StateCountAggregateInputType = {
    id?: true
    country_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which State to aggregate.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned States
    **/
    _count?: true | StateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StateMaxAggregateInputType
  }

  export type GetStateAggregateType<T extends StateAggregateArgs> = {
        [P in keyof T & keyof AggregateState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateState[P]>
      : GetScalarType<T[P], AggregateState[P]>
  }




  export type StateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StateWhereInput
    orderBy?: StateOrderByWithAggregationInput | StateOrderByWithAggregationInput[]
    by: StateScalarFieldEnum[] | StateScalarFieldEnum
    having?: StateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StateCountAggregateInputType | true
    _avg?: StateAvgAggregateInputType
    _sum?: StateSumAggregateInputType
    _min?: StateMinAggregateInputType
    _max?: StateMaxAggregateInputType
  }

  export type StateGroupByOutputType = {
    id: number
    country_id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: StateCountAggregateOutputType | null
    _avg: StateAvgAggregateOutputType | null
    _sum: StateSumAggregateOutputType | null
    _min: StateMinAggregateOutputType | null
    _max: StateMaxAggregateOutputType | null
  }

  type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StateGroupByOutputType[P]>
            : GetScalarType<T[P], StateGroupByOutputType[P]>
        }
      >
    >


  export type StateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    cities?: boolean | State$citiesArgs<ExtArgs>
    candidate_profiles?: boolean | State$candidate_profilesArgs<ExtArgs>
    recruiter_profiles?: boolean | State$recruiter_profilesArgs<ExtArgs>
    job_posts?: boolean | State$job_postsArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["state"]>

  export type StateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["state"]>

  export type StateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["state"]>

  export type StateSelectScalar = {
    id?: boolean
    country_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type StateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country_id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["state"]>
  export type StateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    cities?: boolean | State$citiesArgs<ExtArgs>
    candidate_profiles?: boolean | State$candidate_profilesArgs<ExtArgs>
    recruiter_profiles?: boolean | State$recruiter_profilesArgs<ExtArgs>
    job_posts?: boolean | State$job_postsArgs<ExtArgs>
    _count?: boolean | StateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type StateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $StatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "State"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      cities: Prisma.$CityPayload<ExtArgs>[]
      candidate_profiles: Prisma.$CandidateProfilePayload<ExtArgs>[]
      recruiter_profiles: Prisma.$RecruiterProfilePayload<ExtArgs>[]
      job_posts: Prisma.$JobPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      country_id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["state"]>
    composites: {}
  }

  type StateGetPayload<S extends boolean | null | undefined | StateDefaultArgs> = $Result.GetResult<Prisma.$StatePayload, S>

  type StateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StateCountAggregateInputType | true
    }

  export interface StateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['State'], meta: { name: 'State' } }
    /**
     * Find zero or one State that matches the filter.
     * @param {StateFindUniqueArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StateFindUniqueArgs>(args: SelectSubset<T, StateFindUniqueArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one State that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StateFindUniqueOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(args: SelectSubset<T, StateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StateFindFirstArgs>(args?: SelectSubset<T, StateFindFirstArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first State that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindFirstOrThrowArgs} args - Arguments to find a State
     * @example
     * // Get one State
     * const state = await prisma.state.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(args?: SelectSubset<T, StateFindFirstOrThrowArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more States that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all States
     * const states = await prisma.state.findMany()
     * 
     * // Get first 10 States
     * const states = await prisma.state.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stateWithIdOnly = await prisma.state.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StateFindManyArgs>(args?: SelectSubset<T, StateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a State.
     * @param {StateCreateArgs} args - Arguments to create a State.
     * @example
     * // Create one State
     * const State = await prisma.state.create({
     *   data: {
     *     // ... data to create a State
     *   }
     * })
     * 
     */
    create<T extends StateCreateArgs>(args: SelectSubset<T, StateCreateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many States.
     * @param {StateCreateManyArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StateCreateManyArgs>(args?: SelectSubset<T, StateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many States and returns the data saved in the database.
     * @param {StateCreateManyAndReturnArgs} args - Arguments to create many States.
     * @example
     * // Create many States
     * const state = await prisma.state.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many States and only return the `id`
     * const stateWithIdOnly = await prisma.state.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StateCreateManyAndReturnArgs>(args?: SelectSubset<T, StateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a State.
     * @param {StateDeleteArgs} args - Arguments to delete one State.
     * @example
     * // Delete one State
     * const State = await prisma.state.delete({
     *   where: {
     *     // ... filter to delete one State
     *   }
     * })
     * 
     */
    delete<T extends StateDeleteArgs>(args: SelectSubset<T, StateDeleteArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one State.
     * @param {StateUpdateArgs} args - Arguments to update one State.
     * @example
     * // Update one State
     * const state = await prisma.state.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StateUpdateArgs>(args: SelectSubset<T, StateUpdateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more States.
     * @param {StateDeleteManyArgs} args - Arguments to filter States to delete.
     * @example
     * // Delete a few States
     * const { count } = await prisma.state.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StateDeleteManyArgs>(args?: SelectSubset<T, StateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many States
     * const state = await prisma.state.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StateUpdateManyArgs>(args: SelectSubset<T, StateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more States and returns the data updated in the database.
     * @param {StateUpdateManyAndReturnArgs} args - Arguments to update many States.
     * @example
     * // Update many States
     * const state = await prisma.state.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more States and only return the `id`
     * const stateWithIdOnly = await prisma.state.updateManyAndReturn({
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
    updateManyAndReturn<T extends StateUpdateManyAndReturnArgs>(args: SelectSubset<T, StateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one State.
     * @param {StateUpsertArgs} args - Arguments to update or create a State.
     * @example
     * // Update or create a State
     * const state = await prisma.state.upsert({
     *   create: {
     *     // ... data to create a State
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the State we want to update
     *   }
     * })
     */
    upsert<T extends StateUpsertArgs>(args: SelectSubset<T, StateUpsertArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of States.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateCountArgs} args - Arguments to filter States to count.
     * @example
     * // Count the number of States
     * const count = await prisma.state.count({
     *   where: {
     *     // ... the filter for the States we want to count
     *   }
     * })
    **/
    count<T extends StateCountArgs>(
      args?: Subset<T, StateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StateAggregateArgs>(args: Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>

    /**
     * Group by State.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StateGroupByArgs} args - Group by arguments.
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
      T extends StateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StateGroupByArgs['orderBy'] }
        : { orderBy?: StateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the State model
   */
  readonly fields: StateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for State.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cities<T extends State$citiesArgs<ExtArgs> = {}>(args?: Subset<T, State$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidate_profiles<T extends State$candidate_profilesArgs<ExtArgs> = {}>(args?: Subset<T, State$candidate_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recruiter_profiles<T extends State$recruiter_profilesArgs<ExtArgs> = {}>(args?: Subset<T, State$recruiter_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecruiterProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    job_posts<T extends State$job_postsArgs<ExtArgs> = {}>(args?: Subset<T, State$job_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the State model
   */
  interface StateFieldRefs {
    readonly id: FieldRef<"State", 'Int'>
    readonly country_id: FieldRef<"State", 'Int'>
    readonly name: FieldRef<"State", 'String'>
    readonly created_at: FieldRef<"State", 'DateTime'>
    readonly updated_at: FieldRef<"State", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * State findUnique
   */
  export type StateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findUniqueOrThrow
   */
  export type StateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State findFirst
   */
  export type StateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findFirstOrThrow
   */
  export type StateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which State to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of States.
     */
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State findMany
   */
  export type StateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter, which States to fetch.
     */
    where?: StateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of States to fetch.
     */
    orderBy?: StateOrderByWithRelationInput | StateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing States.
     */
    cursor?: StateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` States from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` States.
     */
    skip?: number
    distinct?: StateScalarFieldEnum | StateScalarFieldEnum[]
  }

  /**
   * State create
   */
  export type StateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to create a State.
     */
    data: XOR<StateCreateInput, StateUncheckedCreateInput>
  }

  /**
   * State createMany
   */
  export type StateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * State createManyAndReturn
   */
  export type StateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data used to create many States.
     */
    data: StateCreateManyInput | StateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * State update
   */
  export type StateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The data needed to update a State.
     */
    data: XOR<StateUpdateInput, StateUncheckedUpdateInput>
    /**
     * Choose, which State to update.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State updateMany
   */
  export type StateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
  }

  /**
   * State updateManyAndReturn
   */
  export type StateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * The data used to update States.
     */
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyInput>
    /**
     * Filter which States to update
     */
    where?: StateWhereInput
    /**
     * Limit how many States to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * State upsert
   */
  export type StateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * The filter to search for the State to update in case it exists.
     */
    where: StateWhereUniqueInput
    /**
     * In case the State found by the `where` argument doesn't exist, create a new State with this data.
     */
    create: XOR<StateCreateInput, StateUncheckedCreateInput>
    /**
     * In case the State was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StateUpdateInput, StateUncheckedUpdateInput>
  }

  /**
   * State delete
   */
  export type StateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    /**
     * Filter which State to delete.
     */
    where: StateWhereUniqueInput
  }

  /**
   * State deleteMany
   */
  export type StateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which States to delete
     */
    where?: StateWhereInput
    /**
     * Limit how many States to delete.
     */
    limit?: number
  }

  /**
   * State.cities
   */
  export type State$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    cursor?: CityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * State.candidate_profiles
   */
  export type State$candidate_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    where?: CandidateProfileWhereInput
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    cursor?: CandidateProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateProfileScalarFieldEnum | CandidateProfileScalarFieldEnum[]
  }

  /**
   * State.recruiter_profiles
   */
  export type State$recruiter_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileInclude<ExtArgs> | null
    where?: RecruiterProfileWhereInput
    orderBy?: RecruiterProfileOrderByWithRelationInput | RecruiterProfileOrderByWithRelationInput[]
    cursor?: RecruiterProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecruiterProfileScalarFieldEnum | RecruiterProfileScalarFieldEnum[]
  }

  /**
   * State.job_posts
   */
  export type State$job_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    where?: JobPostWhereInput
    orderBy?: JobPostOrderByWithRelationInput | JobPostOrderByWithRelationInput[]
    cursor?: JobPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobPostScalarFieldEnum | JobPostScalarFieldEnum[]
  }

  /**
   * State without action
   */
  export type StateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    id: number | null
    state_id: number | null
  }

  export type CitySumAggregateOutputType = {
    id: number | null
    state_id: number | null
  }

  export type CityMinAggregateOutputType = {
    id: number | null
    state_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CityMaxAggregateOutputType = {
    id: number | null
    state_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    state_id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    id?: true
    state_id?: true
  }

  export type CitySumAggregateInputType = {
    id?: true
    state_id?: true
  }

  export type CityMinAggregateInputType = {
    id?: true
    state_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    state_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    state_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: number
    state_id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
    candidate_profiles?: boolean | City$candidate_profilesArgs<ExtArgs>
    recruiter_profiles?: boolean | City$recruiter_profilesArgs<ExtArgs>
    job_posts?: boolean | City$job_postsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    state?: boolean | StateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    state_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "state_id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["city"]>
  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
    candidate_profiles?: boolean | City$candidate_profilesArgs<ExtArgs>
    recruiter_profiles?: boolean | City$recruiter_profilesArgs<ExtArgs>
    job_posts?: boolean | City$job_postsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
  }
  export type CityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | StateDefaultArgs<ExtArgs>
  }

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      state: Prisma.$StatePayload<ExtArgs>
      candidate_profiles: Prisma.$CandidateProfilePayload<ExtArgs>[]
      recruiter_profiles: Prisma.$RecruiterProfilePayload<ExtArgs>[]
      job_posts: Prisma.$JobPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      state_id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityCreateManyAndReturnArgs>(args?: SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {CityUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.updateManyAndReturn({
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
    updateManyAndReturn<T extends CityUpdateManyAndReturnArgs>(args: SelectSubset<T, CityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
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
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    state<T extends StateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StateDefaultArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidate_profiles<T extends City$candidate_profilesArgs<ExtArgs> = {}>(args?: Subset<T, City$candidate_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recruiter_profiles<T extends City$recruiter_profilesArgs<ExtArgs> = {}>(args?: Subset<T, City$recruiter_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecruiterProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    job_posts<T extends City$job_postsArgs<ExtArgs> = {}>(args?: Subset<T, City$job_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the City model
   */
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'Int'>
    readonly state_id: FieldRef<"City", 'Int'>
    readonly name: FieldRef<"City", 'String'>
    readonly created_at: FieldRef<"City", 'DateTime'>
    readonly updated_at: FieldRef<"City", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City createManyAndReturn
   */
  export type CityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City updateManyAndReturn
   */
  export type CityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to delete.
     */
    limit?: number
  }

  /**
   * City.candidate_profiles
   */
  export type City$candidate_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    where?: CandidateProfileWhereInput
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    cursor?: CandidateProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateProfileScalarFieldEnum | CandidateProfileScalarFieldEnum[]
  }

  /**
   * City.recruiter_profiles
   */
  export type City$recruiter_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileInclude<ExtArgs> | null
    where?: RecruiterProfileWhereInput
    orderBy?: RecruiterProfileOrderByWithRelationInput | RecruiterProfileOrderByWithRelationInput[]
    cursor?: RecruiterProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecruiterProfileScalarFieldEnum | RecruiterProfileScalarFieldEnum[]
  }

  /**
   * City.job_posts
   */
  export type City$job_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    where?: JobPostWhereInput
    orderBy?: JobPostOrderByWithRelationInput | JobPostOrderByWithRelationInput[]
    cursor?: JobPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobPostScalarFieldEnum | JobPostScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    country_id: number | null
    role_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
    country_id: number | null
    role_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    country_id: number | null
    role_id: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    country_id: number | null
    role_id: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone_number: number
    country_id: number
    role_id: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    country_id?: true
    role_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    country_id?: true
    role_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone_number?: true
    country_id?: true
    role_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone_number?: true
    country_id?: true
    role_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone_number?: true
    country_id?: true
    role_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    name: string | null
    email: string
    password: string | null
    phone_number: string | null
    country_id: number | null
    role_id: number
    is_active: boolean | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    country_id?: boolean
    role_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    country?: boolean | User$countryArgs<ExtArgs>
    candidate_profile?: boolean | User$candidate_profileArgs<ExtArgs>
    recruiter_profile?: boolean | User$recruiter_profileArgs<ExtArgs>
    job_posts?: boolean | User$job_postsArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    candidate_skills?: boolean | User$candidate_skillsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    country_id?: boolean
    role_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    country?: boolean | User$countryArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    country_id?: boolean
    role_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    country?: boolean | User$countryArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    country_id?: boolean
    role_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone_number" | "country_id" | "role_id" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    country?: boolean | User$countryArgs<ExtArgs>
    candidate_profile?: boolean | User$candidate_profileArgs<ExtArgs>
    recruiter_profile?: boolean | User$recruiter_profileArgs<ExtArgs>
    job_posts?: boolean | User$job_postsArgs<ExtArgs>
    applications?: boolean | User$applicationsArgs<ExtArgs>
    candidate_skills?: boolean | User$candidate_skillsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    country?: boolean | User$countryArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    country?: boolean | User$countryArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      country: Prisma.$CountryPayload<ExtArgs> | null
      candidate_profile: Prisma.$CandidateProfilePayload<ExtArgs> | null
      recruiter_profile: Prisma.$RecruiterProfilePayload<ExtArgs> | null
      job_posts: Prisma.$JobPostPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      candidate_skills: Prisma.$CandidateSkillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string | null
      email: string
      password: string | null
      phone_number: string | null
      country_id: number | null
      role_id: number
      is_active: boolean | null
      created_at: Date
      updated_at: Date
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
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    country<T extends User$countryArgs<ExtArgs> = {}>(args?: Subset<T, User$countryArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    candidate_profile<T extends User$candidate_profileArgs<ExtArgs> = {}>(args?: Subset<T, User$candidate_profileArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recruiter_profile<T extends User$recruiter_profileArgs<ExtArgs> = {}>(args?: Subset<T, User$recruiter_profileArgs<ExtArgs>>): Prisma__RecruiterProfileClient<$Result.GetResult<Prisma.$RecruiterProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    job_posts<T extends User$job_postsArgs<ExtArgs> = {}>(args?: Subset<T, User$job_postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends User$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    candidate_skills<T extends User$candidate_skillsArgs<ExtArgs> = {}>(args?: Subset<T, User$candidate_skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'BigInt'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly country_id: FieldRef<"User", 'Int'>
    readonly role_id: FieldRef<"User", 'Int'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.country
   */
  export type User$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
  }

  /**
   * User.candidate_profile
   */
  export type User$candidate_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    where?: CandidateProfileWhereInput
  }

  /**
   * User.recruiter_profile
   */
  export type User$recruiter_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileInclude<ExtArgs> | null
    where?: RecruiterProfileWhereInput
  }

  /**
   * User.job_posts
   */
  export type User$job_postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    where?: JobPostWhereInput
    orderBy?: JobPostOrderByWithRelationInput | JobPostOrderByWithRelationInput[]
    cursor?: JobPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobPostScalarFieldEnum | JobPostScalarFieldEnum[]
  }

  /**
   * User.applications
   */
  export type User$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * User.candidate_skills
   */
  export type User$candidate_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    where?: CandidateSkillWhereInput
    orderBy?: CandidateSkillOrderByWithRelationInput | CandidateSkillOrderByWithRelationInput[]
    cursor?: CandidateSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidateSkillScalarFieldEnum | CandidateSkillScalarFieldEnum[]
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
   * Model CandidateProfile
   */

  export type AggregateCandidateProfile = {
    _count: CandidateProfileCountAggregateOutputType | null
    _avg: CandidateProfileAvgAggregateOutputType | null
    _sum: CandidateProfileSumAggregateOutputType | null
    _min: CandidateProfileMinAggregateOutputType | null
    _max: CandidateProfileMaxAggregateOutputType | null
  }

  export type CandidateProfileAvgAggregateOutputType = {
    user_id: number | null
    state_id: number | null
    city_id: number | null
    experience_years: number | null
  }

  export type CandidateProfileSumAggregateOutputType = {
    user_id: bigint | null
    state_id: number | null
    city_id: number | null
    experience_years: number | null
  }

  export type CandidateProfileMinAggregateOutputType = {
    user_id: bigint | null
    state_id: number | null
    city_id: number | null
    qualification: string | null
    experience_years: number | null
    resume_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CandidateProfileMaxAggregateOutputType = {
    user_id: bigint | null
    state_id: number | null
    city_id: number | null
    qualification: string | null
    experience_years: number | null
    resume_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CandidateProfileCountAggregateOutputType = {
    user_id: number
    state_id: number
    city_id: number
    qualification: number
    experience_years: number
    resume_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CandidateProfileAvgAggregateInputType = {
    user_id?: true
    state_id?: true
    city_id?: true
    experience_years?: true
  }

  export type CandidateProfileSumAggregateInputType = {
    user_id?: true
    state_id?: true
    city_id?: true
    experience_years?: true
  }

  export type CandidateProfileMinAggregateInputType = {
    user_id?: true
    state_id?: true
    city_id?: true
    qualification?: true
    experience_years?: true
    resume_url?: true
    created_at?: true
    updated_at?: true
  }

  export type CandidateProfileMaxAggregateInputType = {
    user_id?: true
    state_id?: true
    city_id?: true
    qualification?: true
    experience_years?: true
    resume_url?: true
    created_at?: true
    updated_at?: true
  }

  export type CandidateProfileCountAggregateInputType = {
    user_id?: true
    state_id?: true
    city_id?: true
    qualification?: true
    experience_years?: true
    resume_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CandidateProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateProfile to aggregate.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateProfiles
    **/
    _count?: true | CandidateProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateProfileMaxAggregateInputType
  }

  export type GetCandidateProfileAggregateType<T extends CandidateProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateProfile[P]>
      : GetScalarType<T[P], AggregateCandidateProfile[P]>
  }




  export type CandidateProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateProfileWhereInput
    orderBy?: CandidateProfileOrderByWithAggregationInput | CandidateProfileOrderByWithAggregationInput[]
    by: CandidateProfileScalarFieldEnum[] | CandidateProfileScalarFieldEnum
    having?: CandidateProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateProfileCountAggregateInputType | true
    _avg?: CandidateProfileAvgAggregateInputType
    _sum?: CandidateProfileSumAggregateInputType
    _min?: CandidateProfileMinAggregateInputType
    _max?: CandidateProfileMaxAggregateInputType
  }

  export type CandidateProfileGroupByOutputType = {
    user_id: bigint
    state_id: number | null
    city_id: number | null
    qualification: string | null
    experience_years: number | null
    resume_url: string | null
    created_at: Date
    updated_at: Date
    _count: CandidateProfileCountAggregateOutputType | null
    _avg: CandidateProfileAvgAggregateOutputType | null
    _sum: CandidateProfileSumAggregateOutputType | null
    _min: CandidateProfileMinAggregateOutputType | null
    _max: CandidateProfileMaxAggregateOutputType | null
  }

  type GetCandidateProfileGroupByPayload<T extends CandidateProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateProfileGroupByOutputType[P]>
        }
      >
    >


  export type CandidateProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    state_id?: boolean
    city_id?: boolean
    qualification?: boolean
    experience_years?: boolean
    resume_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    state?: boolean | CandidateProfile$stateArgs<ExtArgs>
    city?: boolean | CandidateProfile$cityArgs<ExtArgs>
  }, ExtArgs["result"]["candidateProfile"]>

  export type CandidateProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    state_id?: boolean
    city_id?: boolean
    qualification?: boolean
    experience_years?: boolean
    resume_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    state?: boolean | CandidateProfile$stateArgs<ExtArgs>
    city?: boolean | CandidateProfile$cityArgs<ExtArgs>
  }, ExtArgs["result"]["candidateProfile"]>

  export type CandidateProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    state_id?: boolean
    city_id?: boolean
    qualification?: boolean
    experience_years?: boolean
    resume_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    state?: boolean | CandidateProfile$stateArgs<ExtArgs>
    city?: boolean | CandidateProfile$cityArgs<ExtArgs>
  }, ExtArgs["result"]["candidateProfile"]>

  export type CandidateProfileSelectScalar = {
    user_id?: boolean
    state_id?: boolean
    city_id?: boolean
    qualification?: boolean
    experience_years?: boolean
    resume_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CandidateProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "state_id" | "city_id" | "qualification" | "experience_years" | "resume_url" | "created_at" | "updated_at", ExtArgs["result"]["candidateProfile"]>
  export type CandidateProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    state?: boolean | CandidateProfile$stateArgs<ExtArgs>
    city?: boolean | CandidateProfile$cityArgs<ExtArgs>
  }
  export type CandidateProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    state?: boolean | CandidateProfile$stateArgs<ExtArgs>
    city?: boolean | CandidateProfile$cityArgs<ExtArgs>
  }
  export type CandidateProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    state?: boolean | CandidateProfile$stateArgs<ExtArgs>
    city?: boolean | CandidateProfile$cityArgs<ExtArgs>
  }

  export type $CandidateProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      state: Prisma.$StatePayload<ExtArgs> | null
      city: Prisma.$CityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: bigint
      state_id: number | null
      city_id: number | null
      qualification: string | null
      experience_years: number | null
      resume_url: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["candidateProfile"]>
    composites: {}
  }

  type CandidateProfileGetPayload<S extends boolean | null | undefined | CandidateProfileDefaultArgs> = $Result.GetResult<Prisma.$CandidateProfilePayload, S>

  type CandidateProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateProfileCountAggregateInputType | true
    }

  export interface CandidateProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateProfile'], meta: { name: 'CandidateProfile' } }
    /**
     * Find zero or one CandidateProfile that matches the filter.
     * @param {CandidateProfileFindUniqueArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateProfileFindUniqueArgs>(args: SelectSubset<T, CandidateProfileFindUniqueArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateProfileFindUniqueOrThrowArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileFindFirstArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateProfileFindFirstArgs>(args?: SelectSubset<T, CandidateProfileFindFirstArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileFindFirstOrThrowArgs} args - Arguments to find a CandidateProfile
     * @example
     * // Get one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateProfiles
     * const candidateProfiles = await prisma.candidateProfile.findMany()
     * 
     * // Get first 10 CandidateProfiles
     * const candidateProfiles = await prisma.candidateProfile.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const candidateProfileWithUser_idOnly = await prisma.candidateProfile.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends CandidateProfileFindManyArgs>(args?: SelectSubset<T, CandidateProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateProfile.
     * @param {CandidateProfileCreateArgs} args - Arguments to create a CandidateProfile.
     * @example
     * // Create one CandidateProfile
     * const CandidateProfile = await prisma.candidateProfile.create({
     *   data: {
     *     // ... data to create a CandidateProfile
     *   }
     * })
     * 
     */
    create<T extends CandidateProfileCreateArgs>(args: SelectSubset<T, CandidateProfileCreateArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateProfiles.
     * @param {CandidateProfileCreateManyArgs} args - Arguments to create many CandidateProfiles.
     * @example
     * // Create many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateProfileCreateManyArgs>(args?: SelectSubset<T, CandidateProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidateProfiles and returns the data saved in the database.
     * @param {CandidateProfileCreateManyAndReturnArgs} args - Arguments to create many CandidateProfiles.
     * @example
     * // Create many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidateProfiles and only return the `user_id`
     * const candidateProfileWithUser_idOnly = await prisma.candidateProfile.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CandidateProfile.
     * @param {CandidateProfileDeleteArgs} args - Arguments to delete one CandidateProfile.
     * @example
     * // Delete one CandidateProfile
     * const CandidateProfile = await prisma.candidateProfile.delete({
     *   where: {
     *     // ... filter to delete one CandidateProfile
     *   }
     * })
     * 
     */
    delete<T extends CandidateProfileDeleteArgs>(args: SelectSubset<T, CandidateProfileDeleteArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateProfile.
     * @param {CandidateProfileUpdateArgs} args - Arguments to update one CandidateProfile.
     * @example
     * // Update one CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateProfileUpdateArgs>(args: SelectSubset<T, CandidateProfileUpdateArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateProfiles.
     * @param {CandidateProfileDeleteManyArgs} args - Arguments to filter CandidateProfiles to delete.
     * @example
     * // Delete a few CandidateProfiles
     * const { count } = await prisma.candidateProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateProfileDeleteManyArgs>(args?: SelectSubset<T, CandidateProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateProfileUpdateManyArgs>(args: SelectSubset<T, CandidateProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateProfiles and returns the data updated in the database.
     * @param {CandidateProfileUpdateManyAndReturnArgs} args - Arguments to update many CandidateProfiles.
     * @example
     * // Update many CandidateProfiles
     * const candidateProfile = await prisma.candidateProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CandidateProfiles and only return the `user_id`
     * const candidateProfileWithUser_idOnly = await prisma.candidateProfile.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends CandidateProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CandidateProfile.
     * @param {CandidateProfileUpsertArgs} args - Arguments to update or create a CandidateProfile.
     * @example
     * // Update or create a CandidateProfile
     * const candidateProfile = await prisma.candidateProfile.upsert({
     *   create: {
     *     // ... data to create a CandidateProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateProfile we want to update
     *   }
     * })
     */
    upsert<T extends CandidateProfileUpsertArgs>(args: SelectSubset<T, CandidateProfileUpsertArgs<ExtArgs>>): Prisma__CandidateProfileClient<$Result.GetResult<Prisma.$CandidateProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileCountArgs} args - Arguments to filter CandidateProfiles to count.
     * @example
     * // Count the number of CandidateProfiles
     * const count = await prisma.candidateProfile.count({
     *   where: {
     *     // ... the filter for the CandidateProfiles we want to count
     *   }
     * })
    **/
    count<T extends CandidateProfileCountArgs>(
      args?: Subset<T, CandidateProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidateProfileAggregateArgs>(args: Subset<T, CandidateProfileAggregateArgs>): Prisma.PrismaPromise<GetCandidateProfileAggregateType<T>>

    /**
     * Group by CandidateProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateProfileGroupByArgs} args - Group by arguments.
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
      T extends CandidateProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateProfileGroupByArgs['orderBy'] }
        : { orderBy?: CandidateProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CandidateProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateProfile model
   */
  readonly fields: CandidateProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    state<T extends CandidateProfile$stateArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfile$stateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    city<T extends CandidateProfile$cityArgs<ExtArgs> = {}>(args?: Subset<T, CandidateProfile$cityArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CandidateProfile model
   */
  interface CandidateProfileFieldRefs {
    readonly user_id: FieldRef<"CandidateProfile", 'BigInt'>
    readonly state_id: FieldRef<"CandidateProfile", 'Int'>
    readonly city_id: FieldRef<"CandidateProfile", 'Int'>
    readonly qualification: FieldRef<"CandidateProfile", 'String'>
    readonly experience_years: FieldRef<"CandidateProfile", 'Int'>
    readonly resume_url: FieldRef<"CandidateProfile", 'String'>
    readonly created_at: FieldRef<"CandidateProfile", 'DateTime'>
    readonly updated_at: FieldRef<"CandidateProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CandidateProfile findUnique
   */
  export type CandidateProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile findUniqueOrThrow
   */
  export type CandidateProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile findFirst
   */
  export type CandidateProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateProfiles.
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateProfiles.
     */
    distinct?: CandidateProfileScalarFieldEnum | CandidateProfileScalarFieldEnum[]
  }

  /**
   * CandidateProfile findFirstOrThrow
   */
  export type CandidateProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfile to fetch.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateProfiles.
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateProfiles.
     */
    distinct?: CandidateProfileScalarFieldEnum | CandidateProfileScalarFieldEnum[]
  }

  /**
   * CandidateProfile findMany
   */
  export type CandidateProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter, which CandidateProfiles to fetch.
     */
    where?: CandidateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateProfiles to fetch.
     */
    orderBy?: CandidateProfileOrderByWithRelationInput | CandidateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateProfiles.
     */
    cursor?: CandidateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateProfiles.
     */
    skip?: number
    distinct?: CandidateProfileScalarFieldEnum | CandidateProfileScalarFieldEnum[]
  }

  /**
   * CandidateProfile create
   */
  export type CandidateProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidateProfile.
     */
    data: XOR<CandidateProfileCreateInput, CandidateProfileUncheckedCreateInput>
  }

  /**
   * CandidateProfile createMany
   */
  export type CandidateProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateProfiles.
     */
    data: CandidateProfileCreateManyInput | CandidateProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateProfile createManyAndReturn
   */
  export type CandidateProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CandidateProfiles.
     */
    data: CandidateProfileCreateManyInput | CandidateProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateProfile update
   */
  export type CandidateProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidateProfile.
     */
    data: XOR<CandidateProfileUpdateInput, CandidateProfileUncheckedUpdateInput>
    /**
     * Choose, which CandidateProfile to update.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile updateMany
   */
  export type CandidateProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateProfiles.
     */
    data: XOR<CandidateProfileUpdateManyMutationInput, CandidateProfileUncheckedUpdateManyInput>
    /**
     * Filter which CandidateProfiles to update
     */
    where?: CandidateProfileWhereInput
    /**
     * Limit how many CandidateProfiles to update.
     */
    limit?: number
  }

  /**
   * CandidateProfile updateManyAndReturn
   */
  export type CandidateProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * The data used to update CandidateProfiles.
     */
    data: XOR<CandidateProfileUpdateManyMutationInput, CandidateProfileUncheckedUpdateManyInput>
    /**
     * Filter which CandidateProfiles to update
     */
    where?: CandidateProfileWhereInput
    /**
     * Limit how many CandidateProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateProfile upsert
   */
  export type CandidateProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidateProfile to update in case it exists.
     */
    where: CandidateProfileWhereUniqueInput
    /**
     * In case the CandidateProfile found by the `where` argument doesn't exist, create a new CandidateProfile with this data.
     */
    create: XOR<CandidateProfileCreateInput, CandidateProfileUncheckedCreateInput>
    /**
     * In case the CandidateProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateProfileUpdateInput, CandidateProfileUncheckedUpdateInput>
  }

  /**
   * CandidateProfile delete
   */
  export type CandidateProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
    /**
     * Filter which CandidateProfile to delete.
     */
    where: CandidateProfileWhereUniqueInput
  }

  /**
   * CandidateProfile deleteMany
   */
  export type CandidateProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateProfiles to delete
     */
    where?: CandidateProfileWhereInput
    /**
     * Limit how many CandidateProfiles to delete.
     */
    limit?: number
  }

  /**
   * CandidateProfile.state
   */
  export type CandidateProfile$stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    where?: StateWhereInput
  }

  /**
   * CandidateProfile.city
   */
  export type CandidateProfile$cityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
  }

  /**
   * CandidateProfile without action
   */
  export type CandidateProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateProfile
     */
    select?: CandidateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateProfile
     */
    omit?: CandidateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateProfileInclude<ExtArgs> | null
  }


  /**
   * Model RecruiterProfile
   */

  export type AggregateRecruiterProfile = {
    _count: RecruiterProfileCountAggregateOutputType | null
    _avg: RecruiterProfileAvgAggregateOutputType | null
    _sum: RecruiterProfileSumAggregateOutputType | null
    _min: RecruiterProfileMinAggregateOutputType | null
    _max: RecruiterProfileMaxAggregateOutputType | null
  }

  export type RecruiterProfileAvgAggregateOutputType = {
    user_id: number | null
    state_id: number | null
    city_id: number | null
  }

  export type RecruiterProfileSumAggregateOutputType = {
    user_id: bigint | null
    state_id: number | null
    city_id: number | null
  }

  export type RecruiterProfileMinAggregateOutputType = {
    user_id: bigint | null
    designation: string | null
    state_id: number | null
    city_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RecruiterProfileMaxAggregateOutputType = {
    user_id: bigint | null
    designation: string | null
    state_id: number | null
    city_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RecruiterProfileCountAggregateOutputType = {
    user_id: number
    designation: number
    state_id: number
    city_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RecruiterProfileAvgAggregateInputType = {
    user_id?: true
    state_id?: true
    city_id?: true
  }

  export type RecruiterProfileSumAggregateInputType = {
    user_id?: true
    state_id?: true
    city_id?: true
  }

  export type RecruiterProfileMinAggregateInputType = {
    user_id?: true
    designation?: true
    state_id?: true
    city_id?: true
    created_at?: true
    updated_at?: true
  }

  export type RecruiterProfileMaxAggregateInputType = {
    user_id?: true
    designation?: true
    state_id?: true
    city_id?: true
    created_at?: true
    updated_at?: true
  }

  export type RecruiterProfileCountAggregateInputType = {
    user_id?: true
    designation?: true
    state_id?: true
    city_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RecruiterProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecruiterProfile to aggregate.
     */
    where?: RecruiterProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecruiterProfiles to fetch.
     */
    orderBy?: RecruiterProfileOrderByWithRelationInput | RecruiterProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecruiterProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecruiterProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecruiterProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecruiterProfiles
    **/
    _count?: true | RecruiterProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecruiterProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecruiterProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecruiterProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecruiterProfileMaxAggregateInputType
  }

  export type GetRecruiterProfileAggregateType<T extends RecruiterProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateRecruiterProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecruiterProfile[P]>
      : GetScalarType<T[P], AggregateRecruiterProfile[P]>
  }




  export type RecruiterProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecruiterProfileWhereInput
    orderBy?: RecruiterProfileOrderByWithAggregationInput | RecruiterProfileOrderByWithAggregationInput[]
    by: RecruiterProfileScalarFieldEnum[] | RecruiterProfileScalarFieldEnum
    having?: RecruiterProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecruiterProfileCountAggregateInputType | true
    _avg?: RecruiterProfileAvgAggregateInputType
    _sum?: RecruiterProfileSumAggregateInputType
    _min?: RecruiterProfileMinAggregateInputType
    _max?: RecruiterProfileMaxAggregateInputType
  }

  export type RecruiterProfileGroupByOutputType = {
    user_id: bigint
    designation: string | null
    state_id: number | null
    city_id: number | null
    created_at: Date
    updated_at: Date
    _count: RecruiterProfileCountAggregateOutputType | null
    _avg: RecruiterProfileAvgAggregateOutputType | null
    _sum: RecruiterProfileSumAggregateOutputType | null
    _min: RecruiterProfileMinAggregateOutputType | null
    _max: RecruiterProfileMaxAggregateOutputType | null
  }

  type GetRecruiterProfileGroupByPayload<T extends RecruiterProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecruiterProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecruiterProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecruiterProfileGroupByOutputType[P]>
            : GetScalarType<T[P], RecruiterProfileGroupByOutputType[P]>
        }
      >
    >


  export type RecruiterProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    designation?: boolean
    state_id?: boolean
    city_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    state?: boolean | RecruiterProfile$stateArgs<ExtArgs>
    city?: boolean | RecruiterProfile$cityArgs<ExtArgs>
  }, ExtArgs["result"]["recruiterProfile"]>

  export type RecruiterProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    designation?: boolean
    state_id?: boolean
    city_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    state?: boolean | RecruiterProfile$stateArgs<ExtArgs>
    city?: boolean | RecruiterProfile$cityArgs<ExtArgs>
  }, ExtArgs["result"]["recruiterProfile"]>

  export type RecruiterProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    designation?: boolean
    state_id?: boolean
    city_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    state?: boolean | RecruiterProfile$stateArgs<ExtArgs>
    city?: boolean | RecruiterProfile$cityArgs<ExtArgs>
  }, ExtArgs["result"]["recruiterProfile"]>

  export type RecruiterProfileSelectScalar = {
    user_id?: boolean
    designation?: boolean
    state_id?: boolean
    city_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RecruiterProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "designation" | "state_id" | "city_id" | "created_at" | "updated_at", ExtArgs["result"]["recruiterProfile"]>
  export type RecruiterProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    state?: boolean | RecruiterProfile$stateArgs<ExtArgs>
    city?: boolean | RecruiterProfile$cityArgs<ExtArgs>
  }
  export type RecruiterProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    state?: boolean | RecruiterProfile$stateArgs<ExtArgs>
    city?: boolean | RecruiterProfile$cityArgs<ExtArgs>
  }
  export type RecruiterProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    state?: boolean | RecruiterProfile$stateArgs<ExtArgs>
    city?: boolean | RecruiterProfile$cityArgs<ExtArgs>
  }

  export type $RecruiterProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecruiterProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      state: Prisma.$StatePayload<ExtArgs> | null
      city: Prisma.$CityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: bigint
      designation: string | null
      state_id: number | null
      city_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["recruiterProfile"]>
    composites: {}
  }

  type RecruiterProfileGetPayload<S extends boolean | null | undefined | RecruiterProfileDefaultArgs> = $Result.GetResult<Prisma.$RecruiterProfilePayload, S>

  type RecruiterProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecruiterProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecruiterProfileCountAggregateInputType | true
    }

  export interface RecruiterProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecruiterProfile'], meta: { name: 'RecruiterProfile' } }
    /**
     * Find zero or one RecruiterProfile that matches the filter.
     * @param {RecruiterProfileFindUniqueArgs} args - Arguments to find a RecruiterProfile
     * @example
     * // Get one RecruiterProfile
     * const recruiterProfile = await prisma.recruiterProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecruiterProfileFindUniqueArgs>(args: SelectSubset<T, RecruiterProfileFindUniqueArgs<ExtArgs>>): Prisma__RecruiterProfileClient<$Result.GetResult<Prisma.$RecruiterProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecruiterProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecruiterProfileFindUniqueOrThrowArgs} args - Arguments to find a RecruiterProfile
     * @example
     * // Get one RecruiterProfile
     * const recruiterProfile = await prisma.recruiterProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecruiterProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, RecruiterProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecruiterProfileClient<$Result.GetResult<Prisma.$RecruiterProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecruiterProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterProfileFindFirstArgs} args - Arguments to find a RecruiterProfile
     * @example
     * // Get one RecruiterProfile
     * const recruiterProfile = await prisma.recruiterProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecruiterProfileFindFirstArgs>(args?: SelectSubset<T, RecruiterProfileFindFirstArgs<ExtArgs>>): Prisma__RecruiterProfileClient<$Result.GetResult<Prisma.$RecruiterProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecruiterProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterProfileFindFirstOrThrowArgs} args - Arguments to find a RecruiterProfile
     * @example
     * // Get one RecruiterProfile
     * const recruiterProfile = await prisma.recruiterProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecruiterProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, RecruiterProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecruiterProfileClient<$Result.GetResult<Prisma.$RecruiterProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecruiterProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecruiterProfiles
     * const recruiterProfiles = await prisma.recruiterProfile.findMany()
     * 
     * // Get first 10 RecruiterProfiles
     * const recruiterProfiles = await prisma.recruiterProfile.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const recruiterProfileWithUser_idOnly = await prisma.recruiterProfile.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends RecruiterProfileFindManyArgs>(args?: SelectSubset<T, RecruiterProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecruiterProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecruiterProfile.
     * @param {RecruiterProfileCreateArgs} args - Arguments to create a RecruiterProfile.
     * @example
     * // Create one RecruiterProfile
     * const RecruiterProfile = await prisma.recruiterProfile.create({
     *   data: {
     *     // ... data to create a RecruiterProfile
     *   }
     * })
     * 
     */
    create<T extends RecruiterProfileCreateArgs>(args: SelectSubset<T, RecruiterProfileCreateArgs<ExtArgs>>): Prisma__RecruiterProfileClient<$Result.GetResult<Prisma.$RecruiterProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecruiterProfiles.
     * @param {RecruiterProfileCreateManyArgs} args - Arguments to create many RecruiterProfiles.
     * @example
     * // Create many RecruiterProfiles
     * const recruiterProfile = await prisma.recruiterProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecruiterProfileCreateManyArgs>(args?: SelectSubset<T, RecruiterProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecruiterProfiles and returns the data saved in the database.
     * @param {RecruiterProfileCreateManyAndReturnArgs} args - Arguments to create many RecruiterProfiles.
     * @example
     * // Create many RecruiterProfiles
     * const recruiterProfile = await prisma.recruiterProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecruiterProfiles and only return the `user_id`
     * const recruiterProfileWithUser_idOnly = await prisma.recruiterProfile.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecruiterProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, RecruiterProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecruiterProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecruiterProfile.
     * @param {RecruiterProfileDeleteArgs} args - Arguments to delete one RecruiterProfile.
     * @example
     * // Delete one RecruiterProfile
     * const RecruiterProfile = await prisma.recruiterProfile.delete({
     *   where: {
     *     // ... filter to delete one RecruiterProfile
     *   }
     * })
     * 
     */
    delete<T extends RecruiterProfileDeleteArgs>(args: SelectSubset<T, RecruiterProfileDeleteArgs<ExtArgs>>): Prisma__RecruiterProfileClient<$Result.GetResult<Prisma.$RecruiterProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecruiterProfile.
     * @param {RecruiterProfileUpdateArgs} args - Arguments to update one RecruiterProfile.
     * @example
     * // Update one RecruiterProfile
     * const recruiterProfile = await prisma.recruiterProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecruiterProfileUpdateArgs>(args: SelectSubset<T, RecruiterProfileUpdateArgs<ExtArgs>>): Prisma__RecruiterProfileClient<$Result.GetResult<Prisma.$RecruiterProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecruiterProfiles.
     * @param {RecruiterProfileDeleteManyArgs} args - Arguments to filter RecruiterProfiles to delete.
     * @example
     * // Delete a few RecruiterProfiles
     * const { count } = await prisma.recruiterProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecruiterProfileDeleteManyArgs>(args?: SelectSubset<T, RecruiterProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecruiterProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecruiterProfiles
     * const recruiterProfile = await prisma.recruiterProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecruiterProfileUpdateManyArgs>(args: SelectSubset<T, RecruiterProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecruiterProfiles and returns the data updated in the database.
     * @param {RecruiterProfileUpdateManyAndReturnArgs} args - Arguments to update many RecruiterProfiles.
     * @example
     * // Update many RecruiterProfiles
     * const recruiterProfile = await prisma.recruiterProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecruiterProfiles and only return the `user_id`
     * const recruiterProfileWithUser_idOnly = await prisma.recruiterProfile.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends RecruiterProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, RecruiterProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecruiterProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecruiterProfile.
     * @param {RecruiterProfileUpsertArgs} args - Arguments to update or create a RecruiterProfile.
     * @example
     * // Update or create a RecruiterProfile
     * const recruiterProfile = await prisma.recruiterProfile.upsert({
     *   create: {
     *     // ... data to create a RecruiterProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecruiterProfile we want to update
     *   }
     * })
     */
    upsert<T extends RecruiterProfileUpsertArgs>(args: SelectSubset<T, RecruiterProfileUpsertArgs<ExtArgs>>): Prisma__RecruiterProfileClient<$Result.GetResult<Prisma.$RecruiterProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecruiterProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterProfileCountArgs} args - Arguments to filter RecruiterProfiles to count.
     * @example
     * // Count the number of RecruiterProfiles
     * const count = await prisma.recruiterProfile.count({
     *   where: {
     *     // ... the filter for the RecruiterProfiles we want to count
     *   }
     * })
    **/
    count<T extends RecruiterProfileCountArgs>(
      args?: Subset<T, RecruiterProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecruiterProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecruiterProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecruiterProfileAggregateArgs>(args: Subset<T, RecruiterProfileAggregateArgs>): Prisma.PrismaPromise<GetRecruiterProfileAggregateType<T>>

    /**
     * Group by RecruiterProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruiterProfileGroupByArgs} args - Group by arguments.
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
      T extends RecruiterProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecruiterProfileGroupByArgs['orderBy'] }
        : { orderBy?: RecruiterProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecruiterProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecruiterProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecruiterProfile model
   */
  readonly fields: RecruiterProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecruiterProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecruiterProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    state<T extends RecruiterProfile$stateArgs<ExtArgs> = {}>(args?: Subset<T, RecruiterProfile$stateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    city<T extends RecruiterProfile$cityArgs<ExtArgs> = {}>(args?: Subset<T, RecruiterProfile$cityArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecruiterProfile model
   */
  interface RecruiterProfileFieldRefs {
    readonly user_id: FieldRef<"RecruiterProfile", 'BigInt'>
    readonly designation: FieldRef<"RecruiterProfile", 'String'>
    readonly state_id: FieldRef<"RecruiterProfile", 'Int'>
    readonly city_id: FieldRef<"RecruiterProfile", 'Int'>
    readonly created_at: FieldRef<"RecruiterProfile", 'DateTime'>
    readonly updated_at: FieldRef<"RecruiterProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecruiterProfile findUnique
   */
  export type RecruiterProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileInclude<ExtArgs> | null
    /**
     * Filter, which RecruiterProfile to fetch.
     */
    where: RecruiterProfileWhereUniqueInput
  }

  /**
   * RecruiterProfile findUniqueOrThrow
   */
  export type RecruiterProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileInclude<ExtArgs> | null
    /**
     * Filter, which RecruiterProfile to fetch.
     */
    where: RecruiterProfileWhereUniqueInput
  }

  /**
   * RecruiterProfile findFirst
   */
  export type RecruiterProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileInclude<ExtArgs> | null
    /**
     * Filter, which RecruiterProfile to fetch.
     */
    where?: RecruiterProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecruiterProfiles to fetch.
     */
    orderBy?: RecruiterProfileOrderByWithRelationInput | RecruiterProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecruiterProfiles.
     */
    cursor?: RecruiterProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecruiterProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecruiterProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecruiterProfiles.
     */
    distinct?: RecruiterProfileScalarFieldEnum | RecruiterProfileScalarFieldEnum[]
  }

  /**
   * RecruiterProfile findFirstOrThrow
   */
  export type RecruiterProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileInclude<ExtArgs> | null
    /**
     * Filter, which RecruiterProfile to fetch.
     */
    where?: RecruiterProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecruiterProfiles to fetch.
     */
    orderBy?: RecruiterProfileOrderByWithRelationInput | RecruiterProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecruiterProfiles.
     */
    cursor?: RecruiterProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecruiterProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecruiterProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecruiterProfiles.
     */
    distinct?: RecruiterProfileScalarFieldEnum | RecruiterProfileScalarFieldEnum[]
  }

  /**
   * RecruiterProfile findMany
   */
  export type RecruiterProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileInclude<ExtArgs> | null
    /**
     * Filter, which RecruiterProfiles to fetch.
     */
    where?: RecruiterProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecruiterProfiles to fetch.
     */
    orderBy?: RecruiterProfileOrderByWithRelationInput | RecruiterProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecruiterProfiles.
     */
    cursor?: RecruiterProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecruiterProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecruiterProfiles.
     */
    skip?: number
    distinct?: RecruiterProfileScalarFieldEnum | RecruiterProfileScalarFieldEnum[]
  }

  /**
   * RecruiterProfile create
   */
  export type RecruiterProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a RecruiterProfile.
     */
    data: XOR<RecruiterProfileCreateInput, RecruiterProfileUncheckedCreateInput>
  }

  /**
   * RecruiterProfile createMany
   */
  export type RecruiterProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecruiterProfiles.
     */
    data: RecruiterProfileCreateManyInput | RecruiterProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecruiterProfile createManyAndReturn
   */
  export type RecruiterProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * The data used to create many RecruiterProfiles.
     */
    data: RecruiterProfileCreateManyInput | RecruiterProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecruiterProfile update
   */
  export type RecruiterProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a RecruiterProfile.
     */
    data: XOR<RecruiterProfileUpdateInput, RecruiterProfileUncheckedUpdateInput>
    /**
     * Choose, which RecruiterProfile to update.
     */
    where: RecruiterProfileWhereUniqueInput
  }

  /**
   * RecruiterProfile updateMany
   */
  export type RecruiterProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecruiterProfiles.
     */
    data: XOR<RecruiterProfileUpdateManyMutationInput, RecruiterProfileUncheckedUpdateManyInput>
    /**
     * Filter which RecruiterProfiles to update
     */
    where?: RecruiterProfileWhereInput
    /**
     * Limit how many RecruiterProfiles to update.
     */
    limit?: number
  }

  /**
   * RecruiterProfile updateManyAndReturn
   */
  export type RecruiterProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * The data used to update RecruiterProfiles.
     */
    data: XOR<RecruiterProfileUpdateManyMutationInput, RecruiterProfileUncheckedUpdateManyInput>
    /**
     * Filter which RecruiterProfiles to update
     */
    where?: RecruiterProfileWhereInput
    /**
     * Limit how many RecruiterProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecruiterProfile upsert
   */
  export type RecruiterProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the RecruiterProfile to update in case it exists.
     */
    where: RecruiterProfileWhereUniqueInput
    /**
     * In case the RecruiterProfile found by the `where` argument doesn't exist, create a new RecruiterProfile with this data.
     */
    create: XOR<RecruiterProfileCreateInput, RecruiterProfileUncheckedCreateInput>
    /**
     * In case the RecruiterProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecruiterProfileUpdateInput, RecruiterProfileUncheckedUpdateInput>
  }

  /**
   * RecruiterProfile delete
   */
  export type RecruiterProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileInclude<ExtArgs> | null
    /**
     * Filter which RecruiterProfile to delete.
     */
    where: RecruiterProfileWhereUniqueInput
  }

  /**
   * RecruiterProfile deleteMany
   */
  export type RecruiterProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecruiterProfiles to delete
     */
    where?: RecruiterProfileWhereInput
    /**
     * Limit how many RecruiterProfiles to delete.
     */
    limit?: number
  }

  /**
   * RecruiterProfile.state
   */
  export type RecruiterProfile$stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    where?: StateWhereInput
  }

  /**
   * RecruiterProfile.city
   */
  export type RecruiterProfile$cityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
  }

  /**
   * RecruiterProfile without action
   */
  export type RecruiterProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruiterProfile
     */
    select?: RecruiterProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecruiterProfile
     */
    omit?: RecruiterProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecruiterProfileInclude<ExtArgs> | null
  }


  /**
   * Model JobPost
   */

  export type AggregateJobPost = {
    _count: JobPostCountAggregateOutputType | null
    _avg: JobPostAvgAggregateOutputType | null
    _sum: JobPostSumAggregateOutputType | null
    _min: JobPostMinAggregateOutputType | null
    _max: JobPostMaxAggregateOutputType | null
  }

  export type JobPostAvgAggregateOutputType = {
    id: number | null
    recruiter_id: number | null
    salary_min: number | null
    salary_max: number | null
    currency_id: number | null
    min_exp: number | null
    max_exp: number | null
    state_id: number | null
    city_id: number | null
    openings_count: number | null
  }

  export type JobPostSumAggregateOutputType = {
    id: bigint | null
    recruiter_id: bigint | null
    salary_min: bigint | null
    salary_max: bigint | null
    currency_id: number | null
    min_exp: bigint | null
    max_exp: bigint | null
    state_id: number | null
    city_id: number | null
    openings_count: number | null
  }

  export type JobPostMinAggregateOutputType = {
    id: bigint | null
    recruiter_id: bigint | null
    job_title: string | null
    description: string | null
    employment_type: $Enums.EmploymentType | null
    job_type: $Enums.JobType | null
    salary_min: bigint | null
    salary_max: bigint | null
    currency_id: number | null
    min_exp: bigint | null
    max_exp: bigint | null
    currency: string | null
    state_id: number | null
    city_id: number | null
    benefits: string | null
    openings_count: number | null
    application_deadline: Date | null
    job_status: $Enums.JobStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type JobPostMaxAggregateOutputType = {
    id: bigint | null
    recruiter_id: bigint | null
    job_title: string | null
    description: string | null
    employment_type: $Enums.EmploymentType | null
    job_type: $Enums.JobType | null
    salary_min: bigint | null
    salary_max: bigint | null
    currency_id: number | null
    min_exp: bigint | null
    max_exp: bigint | null
    currency: string | null
    state_id: number | null
    city_id: number | null
    benefits: string | null
    openings_count: number | null
    application_deadline: Date | null
    job_status: $Enums.JobStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type JobPostCountAggregateOutputType = {
    id: number
    recruiter_id: number
    job_title: number
    description: number
    employment_type: number
    job_type: number
    salary_min: number
    salary_max: number
    currency_id: number
    min_exp: number
    max_exp: number
    currency: number
    state_id: number
    city_id: number
    benefits: number
    openings_count: number
    application_deadline: number
    job_status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type JobPostAvgAggregateInputType = {
    id?: true
    recruiter_id?: true
    salary_min?: true
    salary_max?: true
    currency_id?: true
    min_exp?: true
    max_exp?: true
    state_id?: true
    city_id?: true
    openings_count?: true
  }

  export type JobPostSumAggregateInputType = {
    id?: true
    recruiter_id?: true
    salary_min?: true
    salary_max?: true
    currency_id?: true
    min_exp?: true
    max_exp?: true
    state_id?: true
    city_id?: true
    openings_count?: true
  }

  export type JobPostMinAggregateInputType = {
    id?: true
    recruiter_id?: true
    job_title?: true
    description?: true
    employment_type?: true
    job_type?: true
    salary_min?: true
    salary_max?: true
    currency_id?: true
    min_exp?: true
    max_exp?: true
    currency?: true
    state_id?: true
    city_id?: true
    benefits?: true
    openings_count?: true
    application_deadline?: true
    job_status?: true
    created_at?: true
    updated_at?: true
  }

  export type JobPostMaxAggregateInputType = {
    id?: true
    recruiter_id?: true
    job_title?: true
    description?: true
    employment_type?: true
    job_type?: true
    salary_min?: true
    salary_max?: true
    currency_id?: true
    min_exp?: true
    max_exp?: true
    currency?: true
    state_id?: true
    city_id?: true
    benefits?: true
    openings_count?: true
    application_deadline?: true
    job_status?: true
    created_at?: true
    updated_at?: true
  }

  export type JobPostCountAggregateInputType = {
    id?: true
    recruiter_id?: true
    job_title?: true
    description?: true
    employment_type?: true
    job_type?: true
    salary_min?: true
    salary_max?: true
    currency_id?: true
    min_exp?: true
    max_exp?: true
    currency?: true
    state_id?: true
    city_id?: true
    benefits?: true
    openings_count?: true
    application_deadline?: true
    job_status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type JobPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPost to aggregate.
     */
    where?: JobPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPosts to fetch.
     */
    orderBy?: JobPostOrderByWithRelationInput | JobPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobPosts
    **/
    _count?: true | JobPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobPostMaxAggregateInputType
  }

  export type GetJobPostAggregateType<T extends JobPostAggregateArgs> = {
        [P in keyof T & keyof AggregateJobPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobPost[P]>
      : GetScalarType<T[P], AggregateJobPost[P]>
  }




  export type JobPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostWhereInput
    orderBy?: JobPostOrderByWithAggregationInput | JobPostOrderByWithAggregationInput[]
    by: JobPostScalarFieldEnum[] | JobPostScalarFieldEnum
    having?: JobPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobPostCountAggregateInputType | true
    _avg?: JobPostAvgAggregateInputType
    _sum?: JobPostSumAggregateInputType
    _min?: JobPostMinAggregateInputType
    _max?: JobPostMaxAggregateInputType
  }

  export type JobPostGroupByOutputType = {
    id: bigint
    recruiter_id: bigint | null
    job_title: string | null
    description: string | null
    employment_type: $Enums.EmploymentType | null
    job_type: $Enums.JobType | null
    salary_min: bigint | null
    salary_max: bigint | null
    currency_id: number | null
    min_exp: bigint | null
    max_exp: bigint | null
    currency: string | null
    state_id: number | null
    city_id: number | null
    benefits: string | null
    openings_count: number | null
    application_deadline: Date | null
    job_status: $Enums.JobStatus | null
    created_at: Date
    updated_at: Date
    _count: JobPostCountAggregateOutputType | null
    _avg: JobPostAvgAggregateOutputType | null
    _sum: JobPostSumAggregateOutputType | null
    _min: JobPostMinAggregateOutputType | null
    _max: JobPostMaxAggregateOutputType | null
  }

  type GetJobPostGroupByPayload<T extends JobPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobPostGroupByOutputType[P]>
            : GetScalarType<T[P], JobPostGroupByOutputType[P]>
        }
      >
    >


  export type JobPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recruiter_id?: boolean
    job_title?: boolean
    description?: boolean
    employment_type?: boolean
    job_type?: boolean
    salary_min?: boolean
    salary_max?: boolean
    currency_id?: boolean
    min_exp?: boolean
    max_exp?: boolean
    currency?: boolean
    state_id?: boolean
    city_id?: boolean
    benefits?: boolean
    openings_count?: boolean
    application_deadline?: boolean
    job_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    recruiter?: boolean | JobPost$recruiterArgs<ExtArgs>
    currency_rel?: boolean | JobPost$currency_relArgs<ExtArgs>
    state?: boolean | JobPost$stateArgs<ExtArgs>
    city?: boolean | JobPost$cityArgs<ExtArgs>
    job_skills?: boolean | JobPost$job_skillsArgs<ExtArgs>
    applications?: boolean | JobPost$applicationsArgs<ExtArgs>
    _count?: boolean | JobPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPost"]>

  export type JobPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recruiter_id?: boolean
    job_title?: boolean
    description?: boolean
    employment_type?: boolean
    job_type?: boolean
    salary_min?: boolean
    salary_max?: boolean
    currency_id?: boolean
    min_exp?: boolean
    max_exp?: boolean
    currency?: boolean
    state_id?: boolean
    city_id?: boolean
    benefits?: boolean
    openings_count?: boolean
    application_deadline?: boolean
    job_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    recruiter?: boolean | JobPost$recruiterArgs<ExtArgs>
    currency_rel?: boolean | JobPost$currency_relArgs<ExtArgs>
    state?: boolean | JobPost$stateArgs<ExtArgs>
    city?: boolean | JobPost$cityArgs<ExtArgs>
  }, ExtArgs["result"]["jobPost"]>

  export type JobPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    recruiter_id?: boolean
    job_title?: boolean
    description?: boolean
    employment_type?: boolean
    job_type?: boolean
    salary_min?: boolean
    salary_max?: boolean
    currency_id?: boolean
    min_exp?: boolean
    max_exp?: boolean
    currency?: boolean
    state_id?: boolean
    city_id?: boolean
    benefits?: boolean
    openings_count?: boolean
    application_deadline?: boolean
    job_status?: boolean
    created_at?: boolean
    updated_at?: boolean
    recruiter?: boolean | JobPost$recruiterArgs<ExtArgs>
    currency_rel?: boolean | JobPost$currency_relArgs<ExtArgs>
    state?: boolean | JobPost$stateArgs<ExtArgs>
    city?: boolean | JobPost$cityArgs<ExtArgs>
  }, ExtArgs["result"]["jobPost"]>

  export type JobPostSelectScalar = {
    id?: boolean
    recruiter_id?: boolean
    job_title?: boolean
    description?: boolean
    employment_type?: boolean
    job_type?: boolean
    salary_min?: boolean
    salary_max?: boolean
    currency_id?: boolean
    min_exp?: boolean
    max_exp?: boolean
    currency?: boolean
    state_id?: boolean
    city_id?: boolean
    benefits?: boolean
    openings_count?: boolean
    application_deadline?: boolean
    job_status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type JobPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "recruiter_id" | "job_title" | "description" | "employment_type" | "job_type" | "salary_min" | "salary_max" | "currency_id" | "min_exp" | "max_exp" | "currency" | "state_id" | "city_id" | "benefits" | "openings_count" | "application_deadline" | "job_status" | "created_at" | "updated_at", ExtArgs["result"]["jobPost"]>
  export type JobPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recruiter?: boolean | JobPost$recruiterArgs<ExtArgs>
    currency_rel?: boolean | JobPost$currency_relArgs<ExtArgs>
    state?: boolean | JobPost$stateArgs<ExtArgs>
    city?: boolean | JobPost$cityArgs<ExtArgs>
    job_skills?: boolean | JobPost$job_skillsArgs<ExtArgs>
    applications?: boolean | JobPost$applicationsArgs<ExtArgs>
    _count?: boolean | JobPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JobPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recruiter?: boolean | JobPost$recruiterArgs<ExtArgs>
    currency_rel?: boolean | JobPost$currency_relArgs<ExtArgs>
    state?: boolean | JobPost$stateArgs<ExtArgs>
    city?: boolean | JobPost$cityArgs<ExtArgs>
  }
  export type JobPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recruiter?: boolean | JobPost$recruiterArgs<ExtArgs>
    currency_rel?: boolean | JobPost$currency_relArgs<ExtArgs>
    state?: boolean | JobPost$stateArgs<ExtArgs>
    city?: boolean | JobPost$cityArgs<ExtArgs>
  }

  export type $JobPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobPost"
    objects: {
      recruiter: Prisma.$UserPayload<ExtArgs> | null
      currency_rel: Prisma.$CurrencyPayload<ExtArgs> | null
      state: Prisma.$StatePayload<ExtArgs> | null
      city: Prisma.$CityPayload<ExtArgs> | null
      job_skills: Prisma.$JobSkillPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      recruiter_id: bigint | null
      job_title: string | null
      description: string | null
      employment_type: $Enums.EmploymentType | null
      job_type: $Enums.JobType | null
      salary_min: bigint | null
      salary_max: bigint | null
      currency_id: number | null
      min_exp: bigint | null
      max_exp: bigint | null
      currency: string | null
      state_id: number | null
      city_id: number | null
      benefits: string | null
      openings_count: number | null
      application_deadline: Date | null
      job_status: $Enums.JobStatus | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["jobPost"]>
    composites: {}
  }

  type JobPostGetPayload<S extends boolean | null | undefined | JobPostDefaultArgs> = $Result.GetResult<Prisma.$JobPostPayload, S>

  type JobPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobPostCountAggregateInputType | true
    }

  export interface JobPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobPost'], meta: { name: 'JobPost' } }
    /**
     * Find zero or one JobPost that matches the filter.
     * @param {JobPostFindUniqueArgs} args - Arguments to find a JobPost
     * @example
     * // Get one JobPost
     * const jobPost = await prisma.jobPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobPostFindUniqueArgs>(args: SelectSubset<T, JobPostFindUniqueArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobPostFindUniqueOrThrowArgs} args - Arguments to find a JobPost
     * @example
     * // Get one JobPost
     * const jobPost = await prisma.jobPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobPostFindUniqueOrThrowArgs>(args: SelectSubset<T, JobPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostFindFirstArgs} args - Arguments to find a JobPost
     * @example
     * // Get one JobPost
     * const jobPost = await prisma.jobPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobPostFindFirstArgs>(args?: SelectSubset<T, JobPostFindFirstArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostFindFirstOrThrowArgs} args - Arguments to find a JobPost
     * @example
     * // Get one JobPost
     * const jobPost = await prisma.jobPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobPostFindFirstOrThrowArgs>(args?: SelectSubset<T, JobPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobPosts
     * const jobPosts = await prisma.jobPost.findMany()
     * 
     * // Get first 10 JobPosts
     * const jobPosts = await prisma.jobPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobPostWithIdOnly = await prisma.jobPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobPostFindManyArgs>(args?: SelectSubset<T, JobPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobPost.
     * @param {JobPostCreateArgs} args - Arguments to create a JobPost.
     * @example
     * // Create one JobPost
     * const JobPost = await prisma.jobPost.create({
     *   data: {
     *     // ... data to create a JobPost
     *   }
     * })
     * 
     */
    create<T extends JobPostCreateArgs>(args: SelectSubset<T, JobPostCreateArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobPosts.
     * @param {JobPostCreateManyArgs} args - Arguments to create many JobPosts.
     * @example
     * // Create many JobPosts
     * const jobPost = await prisma.jobPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobPostCreateManyArgs>(args?: SelectSubset<T, JobPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobPosts and returns the data saved in the database.
     * @param {JobPostCreateManyAndReturnArgs} args - Arguments to create many JobPosts.
     * @example
     * // Create many JobPosts
     * const jobPost = await prisma.jobPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobPosts and only return the `id`
     * const jobPostWithIdOnly = await prisma.jobPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobPostCreateManyAndReturnArgs>(args?: SelectSubset<T, JobPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobPost.
     * @param {JobPostDeleteArgs} args - Arguments to delete one JobPost.
     * @example
     * // Delete one JobPost
     * const JobPost = await prisma.jobPost.delete({
     *   where: {
     *     // ... filter to delete one JobPost
     *   }
     * })
     * 
     */
    delete<T extends JobPostDeleteArgs>(args: SelectSubset<T, JobPostDeleteArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobPost.
     * @param {JobPostUpdateArgs} args - Arguments to update one JobPost.
     * @example
     * // Update one JobPost
     * const jobPost = await prisma.jobPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobPostUpdateArgs>(args: SelectSubset<T, JobPostUpdateArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobPosts.
     * @param {JobPostDeleteManyArgs} args - Arguments to filter JobPosts to delete.
     * @example
     * // Delete a few JobPosts
     * const { count } = await prisma.jobPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobPostDeleteManyArgs>(args?: SelectSubset<T, JobPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobPosts
     * const jobPost = await prisma.jobPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobPostUpdateManyArgs>(args: SelectSubset<T, JobPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPosts and returns the data updated in the database.
     * @param {JobPostUpdateManyAndReturnArgs} args - Arguments to update many JobPosts.
     * @example
     * // Update many JobPosts
     * const jobPost = await prisma.jobPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobPosts and only return the `id`
     * const jobPostWithIdOnly = await prisma.jobPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends JobPostUpdateManyAndReturnArgs>(args: SelectSubset<T, JobPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobPost.
     * @param {JobPostUpsertArgs} args - Arguments to update or create a JobPost.
     * @example
     * // Update or create a JobPost
     * const jobPost = await prisma.jobPost.upsert({
     *   create: {
     *     // ... data to create a JobPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobPost we want to update
     *   }
     * })
     */
    upsert<T extends JobPostUpsertArgs>(args: SelectSubset<T, JobPostUpsertArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostCountArgs} args - Arguments to filter JobPosts to count.
     * @example
     * // Count the number of JobPosts
     * const count = await prisma.jobPost.count({
     *   where: {
     *     // ... the filter for the JobPosts we want to count
     *   }
     * })
    **/
    count<T extends JobPostCountArgs>(
      args?: Subset<T, JobPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobPostAggregateArgs>(args: Subset<T, JobPostAggregateArgs>): Prisma.PrismaPromise<GetJobPostAggregateType<T>>

    /**
     * Group by JobPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostGroupByArgs} args - Group by arguments.
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
      T extends JobPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobPostGroupByArgs['orderBy'] }
        : { orderBy?: JobPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobPost model
   */
  readonly fields: JobPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recruiter<T extends JobPost$recruiterArgs<ExtArgs> = {}>(args?: Subset<T, JobPost$recruiterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    currency_rel<T extends JobPost$currency_relArgs<ExtArgs> = {}>(args?: Subset<T, JobPost$currency_relArgs<ExtArgs>>): Prisma__CurrencyClient<$Result.GetResult<Prisma.$CurrencyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    state<T extends JobPost$stateArgs<ExtArgs> = {}>(args?: Subset<T, JobPost$stateArgs<ExtArgs>>): Prisma__StateClient<$Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    city<T extends JobPost$cityArgs<ExtArgs> = {}>(args?: Subset<T, JobPost$cityArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    job_skills<T extends JobPost$job_skillsArgs<ExtArgs> = {}>(args?: Subset<T, JobPost$job_skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends JobPost$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, JobPost$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the JobPost model
   */
  interface JobPostFieldRefs {
    readonly id: FieldRef<"JobPost", 'BigInt'>
    readonly recruiter_id: FieldRef<"JobPost", 'BigInt'>
    readonly job_title: FieldRef<"JobPost", 'String'>
    readonly description: FieldRef<"JobPost", 'String'>
    readonly employment_type: FieldRef<"JobPost", 'EmploymentType'>
    readonly job_type: FieldRef<"JobPost", 'JobType'>
    readonly salary_min: FieldRef<"JobPost", 'BigInt'>
    readonly salary_max: FieldRef<"JobPost", 'BigInt'>
    readonly currency_id: FieldRef<"JobPost", 'Int'>
    readonly min_exp: FieldRef<"JobPost", 'BigInt'>
    readonly max_exp: FieldRef<"JobPost", 'BigInt'>
    readonly currency: FieldRef<"JobPost", 'String'>
    readonly state_id: FieldRef<"JobPost", 'Int'>
    readonly city_id: FieldRef<"JobPost", 'Int'>
    readonly benefits: FieldRef<"JobPost", 'String'>
    readonly openings_count: FieldRef<"JobPost", 'Int'>
    readonly application_deadline: FieldRef<"JobPost", 'DateTime'>
    readonly job_status: FieldRef<"JobPost", 'JobStatus'>
    readonly created_at: FieldRef<"JobPost", 'DateTime'>
    readonly updated_at: FieldRef<"JobPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobPost findUnique
   */
  export type JobPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * Filter, which JobPost to fetch.
     */
    where: JobPostWhereUniqueInput
  }

  /**
   * JobPost findUniqueOrThrow
   */
  export type JobPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * Filter, which JobPost to fetch.
     */
    where: JobPostWhereUniqueInput
  }

  /**
   * JobPost findFirst
   */
  export type JobPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * Filter, which JobPost to fetch.
     */
    where?: JobPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPosts to fetch.
     */
    orderBy?: JobPostOrderByWithRelationInput | JobPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPosts.
     */
    cursor?: JobPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPosts.
     */
    distinct?: JobPostScalarFieldEnum | JobPostScalarFieldEnum[]
  }

  /**
   * JobPost findFirstOrThrow
   */
  export type JobPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * Filter, which JobPost to fetch.
     */
    where?: JobPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPosts to fetch.
     */
    orderBy?: JobPostOrderByWithRelationInput | JobPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPosts.
     */
    cursor?: JobPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPosts.
     */
    distinct?: JobPostScalarFieldEnum | JobPostScalarFieldEnum[]
  }

  /**
   * JobPost findMany
   */
  export type JobPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * Filter, which JobPosts to fetch.
     */
    where?: JobPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPosts to fetch.
     */
    orderBy?: JobPostOrderByWithRelationInput | JobPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobPosts.
     */
    cursor?: JobPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPosts.
     */
    skip?: number
    distinct?: JobPostScalarFieldEnum | JobPostScalarFieldEnum[]
  }

  /**
   * JobPost create
   */
  export type JobPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * The data needed to create a JobPost.
     */
    data: XOR<JobPostCreateInput, JobPostUncheckedCreateInput>
  }

  /**
   * JobPost createMany
   */
  export type JobPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobPosts.
     */
    data: JobPostCreateManyInput | JobPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobPost createManyAndReturn
   */
  export type JobPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * The data used to create many JobPosts.
     */
    data: JobPostCreateManyInput | JobPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobPost update
   */
  export type JobPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * The data needed to update a JobPost.
     */
    data: XOR<JobPostUpdateInput, JobPostUncheckedUpdateInput>
    /**
     * Choose, which JobPost to update.
     */
    where: JobPostWhereUniqueInput
  }

  /**
   * JobPost updateMany
   */
  export type JobPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobPosts.
     */
    data: XOR<JobPostUpdateManyMutationInput, JobPostUncheckedUpdateManyInput>
    /**
     * Filter which JobPosts to update
     */
    where?: JobPostWhereInput
    /**
     * Limit how many JobPosts to update.
     */
    limit?: number
  }

  /**
   * JobPost updateManyAndReturn
   */
  export type JobPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * The data used to update JobPosts.
     */
    data: XOR<JobPostUpdateManyMutationInput, JobPostUncheckedUpdateManyInput>
    /**
     * Filter which JobPosts to update
     */
    where?: JobPostWhereInput
    /**
     * Limit how many JobPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobPost upsert
   */
  export type JobPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * The filter to search for the JobPost to update in case it exists.
     */
    where: JobPostWhereUniqueInput
    /**
     * In case the JobPost found by the `where` argument doesn't exist, create a new JobPost with this data.
     */
    create: XOR<JobPostCreateInput, JobPostUncheckedCreateInput>
    /**
     * In case the JobPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobPostUpdateInput, JobPostUncheckedUpdateInput>
  }

  /**
   * JobPost delete
   */
  export type JobPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * Filter which JobPost to delete.
     */
    where: JobPostWhereUniqueInput
  }

  /**
   * JobPost deleteMany
   */
  export type JobPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPosts to delete
     */
    where?: JobPostWhereInput
    /**
     * Limit how many JobPosts to delete.
     */
    limit?: number
  }

  /**
   * JobPost.recruiter
   */
  export type JobPost$recruiterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * JobPost.currency_rel
   */
  export type JobPost$currency_relArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currency
     */
    select?: CurrencySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currency
     */
    omit?: CurrencyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrencyInclude<ExtArgs> | null
    where?: CurrencyWhereInput
  }

  /**
   * JobPost.state
   */
  export type JobPost$stateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the State
     */
    select?: StateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the State
     */
    omit?: StateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StateInclude<ExtArgs> | null
    where?: StateWhereInput
  }

  /**
   * JobPost.city
   */
  export type JobPost$cityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
  }

  /**
   * JobPost.job_skills
   */
  export type JobPost$job_skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null
    where?: JobSkillWhereInput
    orderBy?: JobSkillOrderByWithRelationInput | JobSkillOrderByWithRelationInput[]
    cursor?: JobSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobSkillScalarFieldEnum | JobSkillScalarFieldEnum[]
  }

  /**
   * JobPost.applications
   */
  export type JobPost$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * JobPost without action
   */
  export type JobPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
  }


  /**
   * Model JobSkill
   */

  export type AggregateJobSkill = {
    _count: JobSkillCountAggregateOutputType | null
    _avg: JobSkillAvgAggregateOutputType | null
    _sum: JobSkillSumAggregateOutputType | null
    _min: JobSkillMinAggregateOutputType | null
    _max: JobSkillMaxAggregateOutputType | null
  }

  export type JobSkillAvgAggregateOutputType = {
    job_id: number | null
    skill_id: number | null
  }

  export type JobSkillSumAggregateOutputType = {
    job_id: bigint | null
    skill_id: number | null
  }

  export type JobSkillMinAggregateOutputType = {
    job_id: bigint | null
    skill_id: number | null
  }

  export type JobSkillMaxAggregateOutputType = {
    job_id: bigint | null
    skill_id: number | null
  }

  export type JobSkillCountAggregateOutputType = {
    job_id: number
    skill_id: number
    _all: number
  }


  export type JobSkillAvgAggregateInputType = {
    job_id?: true
    skill_id?: true
  }

  export type JobSkillSumAggregateInputType = {
    job_id?: true
    skill_id?: true
  }

  export type JobSkillMinAggregateInputType = {
    job_id?: true
    skill_id?: true
  }

  export type JobSkillMaxAggregateInputType = {
    job_id?: true
    skill_id?: true
  }

  export type JobSkillCountAggregateInputType = {
    job_id?: true
    skill_id?: true
    _all?: true
  }

  export type JobSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSkill to aggregate.
     */
    where?: JobSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSkills to fetch.
     */
    orderBy?: JobSkillOrderByWithRelationInput | JobSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobSkills
    **/
    _count?: true | JobSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobSkillMaxAggregateInputType
  }

  export type GetJobSkillAggregateType<T extends JobSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateJobSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobSkill[P]>
      : GetScalarType<T[P], AggregateJobSkill[P]>
  }




  export type JobSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobSkillWhereInput
    orderBy?: JobSkillOrderByWithAggregationInput | JobSkillOrderByWithAggregationInput[]
    by: JobSkillScalarFieldEnum[] | JobSkillScalarFieldEnum
    having?: JobSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobSkillCountAggregateInputType | true
    _avg?: JobSkillAvgAggregateInputType
    _sum?: JobSkillSumAggregateInputType
    _min?: JobSkillMinAggregateInputType
    _max?: JobSkillMaxAggregateInputType
  }

  export type JobSkillGroupByOutputType = {
    job_id: bigint
    skill_id: number
    _count: JobSkillCountAggregateOutputType | null
    _avg: JobSkillAvgAggregateOutputType | null
    _sum: JobSkillSumAggregateOutputType | null
    _min: JobSkillMinAggregateOutputType | null
    _max: JobSkillMaxAggregateOutputType | null
  }

  type GetJobSkillGroupByPayload<T extends JobSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobSkillGroupByOutputType[P]>
            : GetScalarType<T[P], JobSkillGroupByOutputType[P]>
        }
      >
    >


  export type JobSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_id?: boolean
    skill_id?: boolean
    job?: boolean | JobPostDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSkill"]>

  export type JobSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_id?: boolean
    skill_id?: boolean
    job?: boolean | JobPostDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSkill"]>

  export type JobSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_id?: boolean
    skill_id?: boolean
    job?: boolean | JobPostDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobSkill"]>

  export type JobSkillSelectScalar = {
    job_id?: boolean
    skill_id?: boolean
  }

  export type JobSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"job_id" | "skill_id", ExtArgs["result"]["jobSkill"]>
  export type JobSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobPostDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type JobSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobPostDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type JobSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | JobPostDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $JobSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobSkill"
    objects: {
      job: Prisma.$JobPostPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      job_id: bigint
      skill_id: number
    }, ExtArgs["result"]["jobSkill"]>
    composites: {}
  }

  type JobSkillGetPayload<S extends boolean | null | undefined | JobSkillDefaultArgs> = $Result.GetResult<Prisma.$JobSkillPayload, S>

  type JobSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobSkillCountAggregateInputType | true
    }

  export interface JobSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobSkill'], meta: { name: 'JobSkill' } }
    /**
     * Find zero or one JobSkill that matches the filter.
     * @param {JobSkillFindUniqueArgs} args - Arguments to find a JobSkill
     * @example
     * // Get one JobSkill
     * const jobSkill = await prisma.jobSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobSkillFindUniqueArgs>(args: SelectSubset<T, JobSkillFindUniqueArgs<ExtArgs>>): Prisma__JobSkillClient<$Result.GetResult<Prisma.$JobSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobSkillFindUniqueOrThrowArgs} args - Arguments to find a JobSkill
     * @example
     * // Get one JobSkill
     * const jobSkill = await prisma.jobSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, JobSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobSkillClient<$Result.GetResult<Prisma.$JobSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSkillFindFirstArgs} args - Arguments to find a JobSkill
     * @example
     * // Get one JobSkill
     * const jobSkill = await prisma.jobSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobSkillFindFirstArgs>(args?: SelectSubset<T, JobSkillFindFirstArgs<ExtArgs>>): Prisma__JobSkillClient<$Result.GetResult<Prisma.$JobSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSkillFindFirstOrThrowArgs} args - Arguments to find a JobSkill
     * @example
     * // Get one JobSkill
     * const jobSkill = await prisma.jobSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, JobSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobSkillClient<$Result.GetResult<Prisma.$JobSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobSkills
     * const jobSkills = await prisma.jobSkill.findMany()
     * 
     * // Get first 10 JobSkills
     * const jobSkills = await prisma.jobSkill.findMany({ take: 10 })
     * 
     * // Only select the `job_id`
     * const jobSkillWithJob_idOnly = await prisma.jobSkill.findMany({ select: { job_id: true } })
     * 
     */
    findMany<T extends JobSkillFindManyArgs>(args?: SelectSubset<T, JobSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobSkill.
     * @param {JobSkillCreateArgs} args - Arguments to create a JobSkill.
     * @example
     * // Create one JobSkill
     * const JobSkill = await prisma.jobSkill.create({
     *   data: {
     *     // ... data to create a JobSkill
     *   }
     * })
     * 
     */
    create<T extends JobSkillCreateArgs>(args: SelectSubset<T, JobSkillCreateArgs<ExtArgs>>): Prisma__JobSkillClient<$Result.GetResult<Prisma.$JobSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobSkills.
     * @param {JobSkillCreateManyArgs} args - Arguments to create many JobSkills.
     * @example
     * // Create many JobSkills
     * const jobSkill = await prisma.jobSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobSkillCreateManyArgs>(args?: SelectSubset<T, JobSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobSkills and returns the data saved in the database.
     * @param {JobSkillCreateManyAndReturnArgs} args - Arguments to create many JobSkills.
     * @example
     * // Create many JobSkills
     * const jobSkill = await prisma.jobSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobSkills and only return the `job_id`
     * const jobSkillWithJob_idOnly = await prisma.jobSkill.createManyAndReturn({
     *   select: { job_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, JobSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobSkill.
     * @param {JobSkillDeleteArgs} args - Arguments to delete one JobSkill.
     * @example
     * // Delete one JobSkill
     * const JobSkill = await prisma.jobSkill.delete({
     *   where: {
     *     // ... filter to delete one JobSkill
     *   }
     * })
     * 
     */
    delete<T extends JobSkillDeleteArgs>(args: SelectSubset<T, JobSkillDeleteArgs<ExtArgs>>): Prisma__JobSkillClient<$Result.GetResult<Prisma.$JobSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobSkill.
     * @param {JobSkillUpdateArgs} args - Arguments to update one JobSkill.
     * @example
     * // Update one JobSkill
     * const jobSkill = await prisma.jobSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobSkillUpdateArgs>(args: SelectSubset<T, JobSkillUpdateArgs<ExtArgs>>): Prisma__JobSkillClient<$Result.GetResult<Prisma.$JobSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobSkills.
     * @param {JobSkillDeleteManyArgs} args - Arguments to filter JobSkills to delete.
     * @example
     * // Delete a few JobSkills
     * const { count } = await prisma.jobSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobSkillDeleteManyArgs>(args?: SelectSubset<T, JobSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobSkills
     * const jobSkill = await prisma.jobSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobSkillUpdateManyArgs>(args: SelectSubset<T, JobSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobSkills and returns the data updated in the database.
     * @param {JobSkillUpdateManyAndReturnArgs} args - Arguments to update many JobSkills.
     * @example
     * // Update many JobSkills
     * const jobSkill = await prisma.jobSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobSkills and only return the `job_id`
     * const jobSkillWithJob_idOnly = await prisma.jobSkill.updateManyAndReturn({
     *   select: { job_id: true },
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
    updateManyAndReturn<T extends JobSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, JobSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobSkill.
     * @param {JobSkillUpsertArgs} args - Arguments to update or create a JobSkill.
     * @example
     * // Update or create a JobSkill
     * const jobSkill = await prisma.jobSkill.upsert({
     *   create: {
     *     // ... data to create a JobSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobSkill we want to update
     *   }
     * })
     */
    upsert<T extends JobSkillUpsertArgs>(args: SelectSubset<T, JobSkillUpsertArgs<ExtArgs>>): Prisma__JobSkillClient<$Result.GetResult<Prisma.$JobSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSkillCountArgs} args - Arguments to filter JobSkills to count.
     * @example
     * // Count the number of JobSkills
     * const count = await prisma.jobSkill.count({
     *   where: {
     *     // ... the filter for the JobSkills we want to count
     *   }
     * })
    **/
    count<T extends JobSkillCountArgs>(
      args?: Subset<T, JobSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobSkillAggregateArgs>(args: Subset<T, JobSkillAggregateArgs>): Prisma.PrismaPromise<GetJobSkillAggregateType<T>>

    /**
     * Group by JobSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobSkillGroupByArgs} args - Group by arguments.
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
      T extends JobSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobSkillGroupByArgs['orderBy'] }
        : { orderBy?: JobSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobSkill model
   */
  readonly fields: JobSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends JobPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobPostDefaultArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JobSkill model
   */
  interface JobSkillFieldRefs {
    readonly job_id: FieldRef<"JobSkill", 'BigInt'>
    readonly skill_id: FieldRef<"JobSkill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * JobSkill findUnique
   */
  export type JobSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null
    /**
     * Filter, which JobSkill to fetch.
     */
    where: JobSkillWhereUniqueInput
  }

  /**
   * JobSkill findUniqueOrThrow
   */
  export type JobSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null
    /**
     * Filter, which JobSkill to fetch.
     */
    where: JobSkillWhereUniqueInput
  }

  /**
   * JobSkill findFirst
   */
  export type JobSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null
    /**
     * Filter, which JobSkill to fetch.
     */
    where?: JobSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSkills to fetch.
     */
    orderBy?: JobSkillOrderByWithRelationInput | JobSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSkills.
     */
    cursor?: JobSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSkills.
     */
    distinct?: JobSkillScalarFieldEnum | JobSkillScalarFieldEnum[]
  }

  /**
   * JobSkill findFirstOrThrow
   */
  export type JobSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null
    /**
     * Filter, which JobSkill to fetch.
     */
    where?: JobSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSkills to fetch.
     */
    orderBy?: JobSkillOrderByWithRelationInput | JobSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobSkills.
     */
    cursor?: JobSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobSkills.
     */
    distinct?: JobSkillScalarFieldEnum | JobSkillScalarFieldEnum[]
  }

  /**
   * JobSkill findMany
   */
  export type JobSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null
    /**
     * Filter, which JobSkills to fetch.
     */
    where?: JobSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobSkills to fetch.
     */
    orderBy?: JobSkillOrderByWithRelationInput | JobSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobSkills.
     */
    cursor?: JobSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobSkills.
     */
    skip?: number
    distinct?: JobSkillScalarFieldEnum | JobSkillScalarFieldEnum[]
  }

  /**
   * JobSkill create
   */
  export type JobSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a JobSkill.
     */
    data: XOR<JobSkillCreateInput, JobSkillUncheckedCreateInput>
  }

  /**
   * JobSkill createMany
   */
  export type JobSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobSkills.
     */
    data: JobSkillCreateManyInput | JobSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobSkill createManyAndReturn
   */
  export type JobSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null
    /**
     * The data used to create many JobSkills.
     */
    data: JobSkillCreateManyInput | JobSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobSkill update
   */
  export type JobSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a JobSkill.
     */
    data: XOR<JobSkillUpdateInput, JobSkillUncheckedUpdateInput>
    /**
     * Choose, which JobSkill to update.
     */
    where: JobSkillWhereUniqueInput
  }

  /**
   * JobSkill updateMany
   */
  export type JobSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobSkills.
     */
    data: XOR<JobSkillUpdateManyMutationInput, JobSkillUncheckedUpdateManyInput>
    /**
     * Filter which JobSkills to update
     */
    where?: JobSkillWhereInput
    /**
     * Limit how many JobSkills to update.
     */
    limit?: number
  }

  /**
   * JobSkill updateManyAndReturn
   */
  export type JobSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null
    /**
     * The data used to update JobSkills.
     */
    data: XOR<JobSkillUpdateManyMutationInput, JobSkillUncheckedUpdateManyInput>
    /**
     * Filter which JobSkills to update
     */
    where?: JobSkillWhereInput
    /**
     * Limit how many JobSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JobSkill upsert
   */
  export type JobSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the JobSkill to update in case it exists.
     */
    where: JobSkillWhereUniqueInput
    /**
     * In case the JobSkill found by the `where` argument doesn't exist, create a new JobSkill with this data.
     */
    create: XOR<JobSkillCreateInput, JobSkillUncheckedCreateInput>
    /**
     * In case the JobSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobSkillUpdateInput, JobSkillUncheckedUpdateInput>
  }

  /**
   * JobSkill delete
   */
  export type JobSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null
    /**
     * Filter which JobSkill to delete.
     */
    where: JobSkillWhereUniqueInput
  }

  /**
   * JobSkill deleteMany
   */
  export type JobSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobSkills to delete
     */
    where?: JobSkillWhereInput
    /**
     * Limit how many JobSkills to delete.
     */
    limit?: number
  }

  /**
   * JobSkill without action
   */
  export type JobSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobSkill
     */
    select?: JobSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobSkill
     */
    omit?: JobSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobSkillInclude<ExtArgs> | null
  }


  /**
   * Model CandidateSkill
   */

  export type AggregateCandidateSkill = {
    _count: CandidateSkillCountAggregateOutputType | null
    _avg: CandidateSkillAvgAggregateOutputType | null
    _sum: CandidateSkillSumAggregateOutputType | null
    _min: CandidateSkillMinAggregateOutputType | null
    _max: CandidateSkillMaxAggregateOutputType | null
  }

  export type CandidateSkillAvgAggregateOutputType = {
    candidate_id: number | null
    skill_id: number | null
  }

  export type CandidateSkillSumAggregateOutputType = {
    candidate_id: bigint | null
    skill_id: number | null
  }

  export type CandidateSkillMinAggregateOutputType = {
    candidate_id: bigint | null
    skill_id: number | null
  }

  export type CandidateSkillMaxAggregateOutputType = {
    candidate_id: bigint | null
    skill_id: number | null
  }

  export type CandidateSkillCountAggregateOutputType = {
    candidate_id: number
    skill_id: number
    _all: number
  }


  export type CandidateSkillAvgAggregateInputType = {
    candidate_id?: true
    skill_id?: true
  }

  export type CandidateSkillSumAggregateInputType = {
    candidate_id?: true
    skill_id?: true
  }

  export type CandidateSkillMinAggregateInputType = {
    candidate_id?: true
    skill_id?: true
  }

  export type CandidateSkillMaxAggregateInputType = {
    candidate_id?: true
    skill_id?: true
  }

  export type CandidateSkillCountAggregateInputType = {
    candidate_id?: true
    skill_id?: true
    _all?: true
  }

  export type CandidateSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateSkill to aggregate.
     */
    where?: CandidateSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateSkills to fetch.
     */
    orderBy?: CandidateSkillOrderByWithRelationInput | CandidateSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidateSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CandidateSkills
    **/
    _count?: true | CandidateSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidateSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidateSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidateSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidateSkillMaxAggregateInputType
  }

  export type GetCandidateSkillAggregateType<T extends CandidateSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidateSkill[P]>
      : GetScalarType<T[P], AggregateCandidateSkill[P]>
  }




  export type CandidateSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidateSkillWhereInput
    orderBy?: CandidateSkillOrderByWithAggregationInput | CandidateSkillOrderByWithAggregationInput[]
    by: CandidateSkillScalarFieldEnum[] | CandidateSkillScalarFieldEnum
    having?: CandidateSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidateSkillCountAggregateInputType | true
    _avg?: CandidateSkillAvgAggregateInputType
    _sum?: CandidateSkillSumAggregateInputType
    _min?: CandidateSkillMinAggregateInputType
    _max?: CandidateSkillMaxAggregateInputType
  }

  export type CandidateSkillGroupByOutputType = {
    candidate_id: bigint
    skill_id: number
    _count: CandidateSkillCountAggregateOutputType | null
    _avg: CandidateSkillAvgAggregateOutputType | null
    _sum: CandidateSkillSumAggregateOutputType | null
    _min: CandidateSkillMinAggregateOutputType | null
    _max: CandidateSkillMaxAggregateOutputType | null
  }

  type GetCandidateSkillGroupByPayload<T extends CandidateSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidateSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidateSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidateSkillGroupByOutputType[P]>
            : GetScalarType<T[P], CandidateSkillGroupByOutputType[P]>
        }
      >
    >


  export type CandidateSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidate_id?: boolean
    skill_id?: boolean
    candidate?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateSkill"]>

  export type CandidateSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidate_id?: boolean
    skill_id?: boolean
    candidate?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateSkill"]>

  export type CandidateSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    candidate_id?: boolean
    skill_id?: boolean
    candidate?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidateSkill"]>

  export type CandidateSkillSelectScalar = {
    candidate_id?: boolean
    skill_id?: boolean
  }

  export type CandidateSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"candidate_id" | "skill_id", ExtArgs["result"]["candidateSkill"]>
  export type CandidateSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type CandidateSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }
  export type CandidateSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidate?: boolean | UserDefaultArgs<ExtArgs>
    skill?: boolean | SkillDefaultArgs<ExtArgs>
  }

  export type $CandidateSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CandidateSkill"
    objects: {
      candidate: Prisma.$UserPayload<ExtArgs>
      skill: Prisma.$SkillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      candidate_id: bigint
      skill_id: number
    }, ExtArgs["result"]["candidateSkill"]>
    composites: {}
  }

  type CandidateSkillGetPayload<S extends boolean | null | undefined | CandidateSkillDefaultArgs> = $Result.GetResult<Prisma.$CandidateSkillPayload, S>

  type CandidateSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidateSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidateSkillCountAggregateInputType | true
    }

  export interface CandidateSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CandidateSkill'], meta: { name: 'CandidateSkill' } }
    /**
     * Find zero or one CandidateSkill that matches the filter.
     * @param {CandidateSkillFindUniqueArgs} args - Arguments to find a CandidateSkill
     * @example
     * // Get one CandidateSkill
     * const candidateSkill = await prisma.candidateSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidateSkillFindUniqueArgs>(args: SelectSubset<T, CandidateSkillFindUniqueArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CandidateSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidateSkillFindUniqueOrThrowArgs} args - Arguments to find a CandidateSkill
     * @example
     * // Get one CandidateSkill
     * const candidateSkill = await prisma.candidateSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidateSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidateSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateSkillFindFirstArgs} args - Arguments to find a CandidateSkill
     * @example
     * // Get one CandidateSkill
     * const candidateSkill = await prisma.candidateSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidateSkillFindFirstArgs>(args?: SelectSubset<T, CandidateSkillFindFirstArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CandidateSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateSkillFindFirstOrThrowArgs} args - Arguments to find a CandidateSkill
     * @example
     * // Get one CandidateSkill
     * const candidateSkill = await prisma.candidateSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidateSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidateSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CandidateSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CandidateSkills
     * const candidateSkills = await prisma.candidateSkill.findMany()
     * 
     * // Get first 10 CandidateSkills
     * const candidateSkills = await prisma.candidateSkill.findMany({ take: 10 })
     * 
     * // Only select the `candidate_id`
     * const candidateSkillWithCandidate_idOnly = await prisma.candidateSkill.findMany({ select: { candidate_id: true } })
     * 
     */
    findMany<T extends CandidateSkillFindManyArgs>(args?: SelectSubset<T, CandidateSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CandidateSkill.
     * @param {CandidateSkillCreateArgs} args - Arguments to create a CandidateSkill.
     * @example
     * // Create one CandidateSkill
     * const CandidateSkill = await prisma.candidateSkill.create({
     *   data: {
     *     // ... data to create a CandidateSkill
     *   }
     * })
     * 
     */
    create<T extends CandidateSkillCreateArgs>(args: SelectSubset<T, CandidateSkillCreateArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CandidateSkills.
     * @param {CandidateSkillCreateManyArgs} args - Arguments to create many CandidateSkills.
     * @example
     * // Create many CandidateSkills
     * const candidateSkill = await prisma.candidateSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidateSkillCreateManyArgs>(args?: SelectSubset<T, CandidateSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CandidateSkills and returns the data saved in the database.
     * @param {CandidateSkillCreateManyAndReturnArgs} args - Arguments to create many CandidateSkills.
     * @example
     * // Create many CandidateSkills
     * const candidateSkill = await prisma.candidateSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CandidateSkills and only return the `candidate_id`
     * const candidateSkillWithCandidate_idOnly = await prisma.candidateSkill.createManyAndReturn({
     *   select: { candidate_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CandidateSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, CandidateSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CandidateSkill.
     * @param {CandidateSkillDeleteArgs} args - Arguments to delete one CandidateSkill.
     * @example
     * // Delete one CandidateSkill
     * const CandidateSkill = await prisma.candidateSkill.delete({
     *   where: {
     *     // ... filter to delete one CandidateSkill
     *   }
     * })
     * 
     */
    delete<T extends CandidateSkillDeleteArgs>(args: SelectSubset<T, CandidateSkillDeleteArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CandidateSkill.
     * @param {CandidateSkillUpdateArgs} args - Arguments to update one CandidateSkill.
     * @example
     * // Update one CandidateSkill
     * const candidateSkill = await prisma.candidateSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidateSkillUpdateArgs>(args: SelectSubset<T, CandidateSkillUpdateArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CandidateSkills.
     * @param {CandidateSkillDeleteManyArgs} args - Arguments to filter CandidateSkills to delete.
     * @example
     * // Delete a few CandidateSkills
     * const { count } = await prisma.candidateSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidateSkillDeleteManyArgs>(args?: SelectSubset<T, CandidateSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CandidateSkills
     * const candidateSkill = await prisma.candidateSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidateSkillUpdateManyArgs>(args: SelectSubset<T, CandidateSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CandidateSkills and returns the data updated in the database.
     * @param {CandidateSkillUpdateManyAndReturnArgs} args - Arguments to update many CandidateSkills.
     * @example
     * // Update many CandidateSkills
     * const candidateSkill = await prisma.candidateSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CandidateSkills and only return the `candidate_id`
     * const candidateSkillWithCandidate_idOnly = await prisma.candidateSkill.updateManyAndReturn({
     *   select: { candidate_id: true },
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
    updateManyAndReturn<T extends CandidateSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, CandidateSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CandidateSkill.
     * @param {CandidateSkillUpsertArgs} args - Arguments to update or create a CandidateSkill.
     * @example
     * // Update or create a CandidateSkill
     * const candidateSkill = await prisma.candidateSkill.upsert({
     *   create: {
     *     // ... data to create a CandidateSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CandidateSkill we want to update
     *   }
     * })
     */
    upsert<T extends CandidateSkillUpsertArgs>(args: SelectSubset<T, CandidateSkillUpsertArgs<ExtArgs>>): Prisma__CandidateSkillClient<$Result.GetResult<Prisma.$CandidateSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CandidateSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateSkillCountArgs} args - Arguments to filter CandidateSkills to count.
     * @example
     * // Count the number of CandidateSkills
     * const count = await prisma.candidateSkill.count({
     *   where: {
     *     // ... the filter for the CandidateSkills we want to count
     *   }
     * })
    **/
    count<T extends CandidateSkillCountArgs>(
      args?: Subset<T, CandidateSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidateSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CandidateSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidateSkillAggregateArgs>(args: Subset<T, CandidateSkillAggregateArgs>): Prisma.PrismaPromise<GetCandidateSkillAggregateType<T>>

    /**
     * Group by CandidateSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidateSkillGroupByArgs} args - Group by arguments.
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
      T extends CandidateSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidateSkillGroupByArgs['orderBy'] }
        : { orderBy?: CandidateSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CandidateSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidateSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CandidateSkill model
   */
  readonly fields: CandidateSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CandidateSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidateSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidate<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends SkillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SkillDefaultArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CandidateSkill model
   */
  interface CandidateSkillFieldRefs {
    readonly candidate_id: FieldRef<"CandidateSkill", 'BigInt'>
    readonly skill_id: FieldRef<"CandidateSkill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CandidateSkill findUnique
   */
  export type CandidateSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * Filter, which CandidateSkill to fetch.
     */
    where: CandidateSkillWhereUniqueInput
  }

  /**
   * CandidateSkill findUniqueOrThrow
   */
  export type CandidateSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * Filter, which CandidateSkill to fetch.
     */
    where: CandidateSkillWhereUniqueInput
  }

  /**
   * CandidateSkill findFirst
   */
  export type CandidateSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * Filter, which CandidateSkill to fetch.
     */
    where?: CandidateSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateSkills to fetch.
     */
    orderBy?: CandidateSkillOrderByWithRelationInput | CandidateSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateSkills.
     */
    cursor?: CandidateSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateSkills.
     */
    distinct?: CandidateSkillScalarFieldEnum | CandidateSkillScalarFieldEnum[]
  }

  /**
   * CandidateSkill findFirstOrThrow
   */
  export type CandidateSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * Filter, which CandidateSkill to fetch.
     */
    where?: CandidateSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateSkills to fetch.
     */
    orderBy?: CandidateSkillOrderByWithRelationInput | CandidateSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CandidateSkills.
     */
    cursor?: CandidateSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CandidateSkills.
     */
    distinct?: CandidateSkillScalarFieldEnum | CandidateSkillScalarFieldEnum[]
  }

  /**
   * CandidateSkill findMany
   */
  export type CandidateSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * Filter, which CandidateSkills to fetch.
     */
    where?: CandidateSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CandidateSkills to fetch.
     */
    orderBy?: CandidateSkillOrderByWithRelationInput | CandidateSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CandidateSkills.
     */
    cursor?: CandidateSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CandidateSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CandidateSkills.
     */
    skip?: number
    distinct?: CandidateSkillScalarFieldEnum | CandidateSkillScalarFieldEnum[]
  }

  /**
   * CandidateSkill create
   */
  export type CandidateSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a CandidateSkill.
     */
    data: XOR<CandidateSkillCreateInput, CandidateSkillUncheckedCreateInput>
  }

  /**
   * CandidateSkill createMany
   */
  export type CandidateSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CandidateSkills.
     */
    data: CandidateSkillCreateManyInput | CandidateSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CandidateSkill createManyAndReturn
   */
  export type CandidateSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * The data used to create many CandidateSkills.
     */
    data: CandidateSkillCreateManyInput | CandidateSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateSkill update
   */
  export type CandidateSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a CandidateSkill.
     */
    data: XOR<CandidateSkillUpdateInput, CandidateSkillUncheckedUpdateInput>
    /**
     * Choose, which CandidateSkill to update.
     */
    where: CandidateSkillWhereUniqueInput
  }

  /**
   * CandidateSkill updateMany
   */
  export type CandidateSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CandidateSkills.
     */
    data: XOR<CandidateSkillUpdateManyMutationInput, CandidateSkillUncheckedUpdateManyInput>
    /**
     * Filter which CandidateSkills to update
     */
    where?: CandidateSkillWhereInput
    /**
     * Limit how many CandidateSkills to update.
     */
    limit?: number
  }

  /**
   * CandidateSkill updateManyAndReturn
   */
  export type CandidateSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * The data used to update CandidateSkills.
     */
    data: XOR<CandidateSkillUpdateManyMutationInput, CandidateSkillUncheckedUpdateManyInput>
    /**
     * Filter which CandidateSkills to update
     */
    where?: CandidateSkillWhereInput
    /**
     * Limit how many CandidateSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CandidateSkill upsert
   */
  export type CandidateSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the CandidateSkill to update in case it exists.
     */
    where: CandidateSkillWhereUniqueInput
    /**
     * In case the CandidateSkill found by the `where` argument doesn't exist, create a new CandidateSkill with this data.
     */
    create: XOR<CandidateSkillCreateInput, CandidateSkillUncheckedCreateInput>
    /**
     * In case the CandidateSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidateSkillUpdateInput, CandidateSkillUncheckedUpdateInput>
  }

  /**
   * CandidateSkill delete
   */
  export type CandidateSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
    /**
     * Filter which CandidateSkill to delete.
     */
    where: CandidateSkillWhereUniqueInput
  }

  /**
   * CandidateSkill deleteMany
   */
  export type CandidateSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CandidateSkills to delete
     */
    where?: CandidateSkillWhereInput
    /**
     * Limit how many CandidateSkills to delete.
     */
    limit?: number
  }

  /**
   * CandidateSkill without action
   */
  export type CandidateSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidateSkill
     */
    select?: CandidateSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CandidateSkill
     */
    omit?: CandidateSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidateSkillInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    id: number | null
    job_id: number | null
    candidate_id: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    id: bigint | null
    job_id: bigint | null
    candidate_id: bigint | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: bigint | null
    job_id: bigint | null
    candidate_id: bigint | null
    applied_at: Date | null
    status: $Enums.ApplicationStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: bigint | null
    job_id: bigint | null
    candidate_id: bigint | null
    applied_at: Date | null
    status: $Enums.ApplicationStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    job_id: number
    candidate_id: number
    applied_at: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    id?: true
    job_id?: true
    candidate_id?: true
  }

  export type ApplicationSumAggregateInputType = {
    id?: true
    job_id?: true
    candidate_id?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    job_id?: true
    candidate_id?: true
    applied_at?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    job_id?: true
    candidate_id?: true
    applied_at?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    job_id?: true
    candidate_id?: true
    applied_at?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: bigint
    job_id: bigint | null
    candidate_id: bigint | null
    applied_at: Date | null
    status: $Enums.ApplicationStatus | null
    created_at: Date
    updated_at: Date
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_id?: boolean
    candidate_id?: boolean
    applied_at?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    job?: boolean | Application$jobArgs<ExtArgs>
    candidate?: boolean | Application$candidateArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_id?: boolean
    candidate_id?: boolean
    applied_at?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    job?: boolean | Application$jobArgs<ExtArgs>
    candidate?: boolean | Application$candidateArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    job_id?: boolean
    candidate_id?: boolean
    applied_at?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    job?: boolean | Application$jobArgs<ExtArgs>
    candidate?: boolean | Application$candidateArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    job_id?: boolean
    candidate_id?: boolean
    applied_at?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "job_id" | "candidate_id" | "applied_at" | "status" | "created_at" | "updated_at", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | Application$jobArgs<ExtArgs>
    candidate?: boolean | Application$candidateArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | Application$jobArgs<ExtArgs>
    candidate?: boolean | Application$candidateArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job?: boolean | Application$jobArgs<ExtArgs>
    candidate?: boolean | Application$candidateArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      job: Prisma.$JobPostPayload<ExtArgs> | null
      candidate: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      job_id: bigint | null
      candidate_id: bigint | null
      applied_at: Date | null
      status: $Enums.ApplicationStatus | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    job<T extends Application$jobArgs<ExtArgs> = {}>(args?: Subset<T, Application$jobArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    candidate<T extends Application$candidateArgs<ExtArgs> = {}>(args?: Subset<T, Application$candidateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'BigInt'>
    readonly job_id: FieldRef<"Application", 'BigInt'>
    readonly candidate_id: FieldRef<"Application", 'BigInt'>
    readonly applied_at: FieldRef<"Application", 'DateTime'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly created_at: FieldRef<"Application", 'DateTime'>
    readonly updated_at: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application.job
   */
  export type Application$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    where?: JobPostWhereInput
  }

  /**
   * Application.candidate
   */
  export type Application$candidateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    role_name: 'role_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const CurrencyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    symbol: 'symbol',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CurrencyScalarFieldEnum = (typeof CurrencyScalarFieldEnum)[keyof typeof CurrencyScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    iso_code: 'iso_code',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const StateScalarFieldEnum: {
    id: 'id',
    country_id: 'country_id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    state_id: 'state_id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone_number: 'phone_number',
    country_id: 'country_id',
    role_id: 'role_id',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CandidateProfileScalarFieldEnum: {
    user_id: 'user_id',
    state_id: 'state_id',
    city_id: 'city_id',
    qualification: 'qualification',
    experience_years: 'experience_years',
    resume_url: 'resume_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CandidateProfileScalarFieldEnum = (typeof CandidateProfileScalarFieldEnum)[keyof typeof CandidateProfileScalarFieldEnum]


  export const RecruiterProfileScalarFieldEnum: {
    user_id: 'user_id',
    designation: 'designation',
    state_id: 'state_id',
    city_id: 'city_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RecruiterProfileScalarFieldEnum = (typeof RecruiterProfileScalarFieldEnum)[keyof typeof RecruiterProfileScalarFieldEnum]


  export const JobPostScalarFieldEnum: {
    id: 'id',
    recruiter_id: 'recruiter_id',
    job_title: 'job_title',
    description: 'description',
    employment_type: 'employment_type',
    job_type: 'job_type',
    salary_min: 'salary_min',
    salary_max: 'salary_max',
    currency_id: 'currency_id',
    min_exp: 'min_exp',
    max_exp: 'max_exp',
    currency: 'currency',
    state_id: 'state_id',
    city_id: 'city_id',
    benefits: 'benefits',
    openings_count: 'openings_count',
    application_deadline: 'application_deadline',
    job_status: 'job_status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type JobPostScalarFieldEnum = (typeof JobPostScalarFieldEnum)[keyof typeof JobPostScalarFieldEnum]


  export const JobSkillScalarFieldEnum: {
    job_id: 'job_id',
    skill_id: 'skill_id'
  };

  export type JobSkillScalarFieldEnum = (typeof JobSkillScalarFieldEnum)[keyof typeof JobSkillScalarFieldEnum]


  export const CandidateSkillScalarFieldEnum: {
    candidate_id: 'candidate_id',
    skill_id: 'skill_id'
  };

  export type CandidateSkillScalarFieldEnum = (typeof CandidateSkillScalarFieldEnum)[keyof typeof CandidateSkillScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    job_id: 'job_id',
    candidate_id: 'candidate_id',
    applied_at: 'applied_at',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CurrencyName'
   */
  export type EnumCurrencyNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyName'>
    


  /**
   * Reference to a field of type 'CurrencyName[]'
   */
  export type ListEnumCurrencyNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyName[]'>
    


  /**
   * Reference to a field of type 'CurrencyCode'
   */
  export type EnumCurrencyCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyCode'>
    


  /**
   * Reference to a field of type 'CurrencyCode[]'
   */
  export type ListEnumCurrencyCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyCode[]'>
    


  /**
   * Reference to a field of type 'CurrencySymbol'
   */
  export type EnumCurrencySymbolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencySymbol'>
    


  /**
   * Reference to a field of type 'CurrencySymbol[]'
   */
  export type ListEnumCurrencySymbolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencySymbol[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EmploymentType'
   */
  export type EnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType'>
    


  /**
   * Reference to a field of type 'EmploymentType[]'
   */
  export type ListEnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType[]'>
    


  /**
   * Reference to a field of type 'JobType'
   */
  export type EnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType'>
    


  /**
   * Reference to a field of type 'JobType[]'
   */
  export type ListEnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    role_name?: StringFilter<"Role"> | string
    created_at?: DateTimeFilter<"Role"> | Date | string
    updated_at?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    role_name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    created_at?: DateTimeFilter<"Role"> | Date | string
    updated_at?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "role_name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    role_name?: StringWithAggregatesFilter<"Role"> | string
    created_at?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: IntFilter<"Skill"> | number
    name?: StringFilter<"Skill"> | string
    created_at?: DateTimeFilter<"Skill"> | Date | string
    updated_at?: DateTimeFilter<"Skill"> | Date | string
    job_skills?: JobSkillListRelationFilter
    candidate_skills?: CandidateSkillListRelationFilter
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    job_skills?: JobSkillOrderByRelationAggregateInput
    candidate_skills?: CandidateSkillOrderByRelationAggregateInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    created_at?: DateTimeFilter<"Skill"> | Date | string
    updated_at?: DateTimeFilter<"Skill"> | Date | string
    job_skills?: JobSkillListRelationFilter
    candidate_skills?: CandidateSkillListRelationFilter
  }, "id" | "name">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Skill"> | number
    name?: StringWithAggregatesFilter<"Skill"> | string
    created_at?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type CurrencyWhereInput = {
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    id?: IntFilter<"Currency"> | number
    name?: EnumCurrencyNameFilter<"Currency"> | $Enums.CurrencyName
    code?: EnumCurrencyCodeFilter<"Currency"> | $Enums.CurrencyCode
    symbol?: EnumCurrencySymbolFilter<"Currency"> | $Enums.CurrencySymbol
    created_at?: DateTimeFilter<"Currency"> | Date | string
    updated_at?: DateTimeFilter<"Currency"> | Date | string
    job_posts?: JobPostListRelationFilter
  }

  export type CurrencyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    job_posts?: JobPostOrderByRelationAggregateInput
  }

  export type CurrencyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CurrencyWhereInput | CurrencyWhereInput[]
    OR?: CurrencyWhereInput[]
    NOT?: CurrencyWhereInput | CurrencyWhereInput[]
    name?: EnumCurrencyNameFilter<"Currency"> | $Enums.CurrencyName
    code?: EnumCurrencyCodeFilter<"Currency"> | $Enums.CurrencyCode
    symbol?: EnumCurrencySymbolFilter<"Currency"> | $Enums.CurrencySymbol
    created_at?: DateTimeFilter<"Currency"> | Date | string
    updated_at?: DateTimeFilter<"Currency"> | Date | string
    job_posts?: JobPostListRelationFilter
  }, "id">

  export type CurrencyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CurrencyCountOrderByAggregateInput
    _avg?: CurrencyAvgOrderByAggregateInput
    _max?: CurrencyMaxOrderByAggregateInput
    _min?: CurrencyMinOrderByAggregateInput
    _sum?: CurrencySumOrderByAggregateInput
  }

  export type CurrencyScalarWhereWithAggregatesInput = {
    AND?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    OR?: CurrencyScalarWhereWithAggregatesInput[]
    NOT?: CurrencyScalarWhereWithAggregatesInput | CurrencyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Currency"> | number
    name?: EnumCurrencyNameWithAggregatesFilter<"Currency"> | $Enums.CurrencyName
    code?: EnumCurrencyCodeWithAggregatesFilter<"Currency"> | $Enums.CurrencyCode
    symbol?: EnumCurrencySymbolWithAggregatesFilter<"Currency"> | $Enums.CurrencySymbol
    created_at?: DateTimeWithAggregatesFilter<"Currency"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Currency"> | Date | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
    iso_code?: StringNullableFilter<"Country"> | string | null
    created_at?: DateTimeFilter<"Country"> | Date | string
    updated_at?: DateTimeFilter<"Country"> | Date | string
    states?: StateListRelationFilter
    users?: UserListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    iso_code?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    states?: StateOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    iso_code?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    created_at?: DateTimeFilter<"Country"> | Date | string
    updated_at?: DateTimeFilter<"Country"> | Date | string
    states?: StateListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name" | "iso_code">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    iso_code?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Country"> | number
    name?: StringWithAggregatesFilter<"Country"> | string
    iso_code?: StringNullableWithAggregatesFilter<"Country"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Country"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Country"> | Date | string
  }

  export type StateWhereInput = {
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    id?: IntFilter<"State"> | number
    country_id?: IntFilter<"State"> | number
    name?: StringFilter<"State"> | string
    created_at?: DateTimeFilter<"State"> | Date | string
    updated_at?: DateTimeFilter<"State"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    cities?: CityListRelationFilter
    candidate_profiles?: CandidateProfileListRelationFilter
    recruiter_profiles?: RecruiterProfileListRelationFilter
    job_posts?: JobPostListRelationFilter
  }

  export type StateOrderByWithRelationInput = {
    id?: SortOrder
    country_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    country?: CountryOrderByWithRelationInput
    cities?: CityOrderByRelationAggregateInput
    candidate_profiles?: CandidateProfileOrderByRelationAggregateInput
    recruiter_profiles?: RecruiterProfileOrderByRelationAggregateInput
    job_posts?: JobPostOrderByRelationAggregateInput
  }

  export type StateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StateWhereInput | StateWhereInput[]
    OR?: StateWhereInput[]
    NOT?: StateWhereInput | StateWhereInput[]
    country_id?: IntFilter<"State"> | number
    name?: StringFilter<"State"> | string
    created_at?: DateTimeFilter<"State"> | Date | string
    updated_at?: DateTimeFilter<"State"> | Date | string
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    cities?: CityListRelationFilter
    candidate_profiles?: CandidateProfileListRelationFilter
    recruiter_profiles?: RecruiterProfileListRelationFilter
    job_posts?: JobPostListRelationFilter
  }, "id">

  export type StateOrderByWithAggregationInput = {
    id?: SortOrder
    country_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: StateCountOrderByAggregateInput
    _avg?: StateAvgOrderByAggregateInput
    _max?: StateMaxOrderByAggregateInput
    _min?: StateMinOrderByAggregateInput
    _sum?: StateSumOrderByAggregateInput
  }

  export type StateScalarWhereWithAggregatesInput = {
    AND?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    OR?: StateScalarWhereWithAggregatesInput[]
    NOT?: StateScalarWhereWithAggregatesInput | StateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"State"> | number
    country_id?: IntWithAggregatesFilter<"State"> | number
    name?: StringWithAggregatesFilter<"State"> | string
    created_at?: DateTimeWithAggregatesFilter<"State"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"State"> | Date | string
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: IntFilter<"City"> | number
    state_id?: IntFilter<"City"> | number
    name?: StringFilter<"City"> | string
    created_at?: DateTimeFilter<"City"> | Date | string
    updated_at?: DateTimeFilter<"City"> | Date | string
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    candidate_profiles?: CandidateProfileListRelationFilter
    recruiter_profiles?: RecruiterProfileListRelationFilter
    job_posts?: JobPostListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    state_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    state?: StateOrderByWithRelationInput
    candidate_profiles?: CandidateProfileOrderByRelationAggregateInput
    recruiter_profiles?: RecruiterProfileOrderByRelationAggregateInput
    job_posts?: JobPostOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    state_id?: IntFilter<"City"> | number
    name?: StringFilter<"City"> | string
    created_at?: DateTimeFilter<"City"> | Date | string
    updated_at?: DateTimeFilter<"City"> | Date | string
    state?: XOR<StateScalarRelationFilter, StateWhereInput>
    candidate_profiles?: CandidateProfileListRelationFilter
    recruiter_profiles?: RecruiterProfileListRelationFilter
    job_posts?: JobPostListRelationFilter
  }, "id">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    state_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _avg?: CityAvgOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
    _sum?: CitySumOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"City"> | number
    state_id?: IntWithAggregatesFilter<"City"> | number
    name?: StringWithAggregatesFilter<"City"> | string
    created_at?: DateTimeWithAggregatesFilter<"City"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"City"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    phone_number?: StringNullableFilter<"User"> | string | null
    country_id?: IntNullableFilter<"User"> | number | null
    role_id?: IntFilter<"User"> | number
    is_active?: BoolNullableFilter<"User"> | boolean | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    country?: XOR<CountryNullableScalarRelationFilter, CountryWhereInput> | null
    candidate_profile?: XOR<CandidateProfileNullableScalarRelationFilter, CandidateProfileWhereInput> | null
    recruiter_profile?: XOR<RecruiterProfileNullableScalarRelationFilter, RecruiterProfileWhereInput> | null
    job_posts?: JobPostListRelationFilter
    applications?: ApplicationListRelationFilter
    candidate_skills?: CandidateSkillListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    country_id?: SortOrderInput | SortOrder
    role_id?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: RoleOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
    candidate_profile?: CandidateProfileOrderByWithRelationInput
    recruiter_profile?: RecruiterProfileOrderByWithRelationInput
    job_posts?: JobPostOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    candidate_skills?: CandidateSkillOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    phone_number?: StringNullableFilter<"User"> | string | null
    country_id?: IntNullableFilter<"User"> | number | null
    role_id?: IntFilter<"User"> | number
    is_active?: BoolNullableFilter<"User"> | boolean | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    country?: XOR<CountryNullableScalarRelationFilter, CountryWhereInput> | null
    candidate_profile?: XOR<CandidateProfileNullableScalarRelationFilter, CandidateProfileWhereInput> | null
    recruiter_profile?: XOR<RecruiterProfileNullableScalarRelationFilter, RecruiterProfileWhereInput> | null
    job_posts?: JobPostListRelationFilter
    applications?: ApplicationListRelationFilter
    candidate_skills?: CandidateSkillListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    country_id?: SortOrderInput | SortOrder
    role_id?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"User"> | string | null
    country_id?: IntNullableWithAggregatesFilter<"User"> | number | null
    role_id?: IntWithAggregatesFilter<"User"> | number
    is_active?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CandidateProfileWhereInput = {
    AND?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    OR?: CandidateProfileWhereInput[]
    NOT?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    user_id?: BigIntFilter<"CandidateProfile"> | bigint | number
    state_id?: IntNullableFilter<"CandidateProfile"> | number | null
    city_id?: IntNullableFilter<"CandidateProfile"> | number | null
    qualification?: StringNullableFilter<"CandidateProfile"> | string | null
    experience_years?: IntNullableFilter<"CandidateProfile"> | number | null
    resume_url?: StringNullableFilter<"CandidateProfile"> | string | null
    created_at?: DateTimeFilter<"CandidateProfile"> | Date | string
    updated_at?: DateTimeFilter<"CandidateProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    state?: XOR<StateNullableScalarRelationFilter, StateWhereInput> | null
    city?: XOR<CityNullableScalarRelationFilter, CityWhereInput> | null
  }

  export type CandidateProfileOrderByWithRelationInput = {
    user_id?: SortOrder
    state_id?: SortOrderInput | SortOrder
    city_id?: SortOrderInput | SortOrder
    qualification?: SortOrderInput | SortOrder
    experience_years?: SortOrderInput | SortOrder
    resume_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    state?: StateOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
  }

  export type CandidateProfileWhereUniqueInput = Prisma.AtLeast<{
    user_id?: bigint | number
    AND?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    OR?: CandidateProfileWhereInput[]
    NOT?: CandidateProfileWhereInput | CandidateProfileWhereInput[]
    state_id?: IntNullableFilter<"CandidateProfile"> | number | null
    city_id?: IntNullableFilter<"CandidateProfile"> | number | null
    qualification?: StringNullableFilter<"CandidateProfile"> | string | null
    experience_years?: IntNullableFilter<"CandidateProfile"> | number | null
    resume_url?: StringNullableFilter<"CandidateProfile"> | string | null
    created_at?: DateTimeFilter<"CandidateProfile"> | Date | string
    updated_at?: DateTimeFilter<"CandidateProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    state?: XOR<StateNullableScalarRelationFilter, StateWhereInput> | null
    city?: XOR<CityNullableScalarRelationFilter, CityWhereInput> | null
  }, "user_id">

  export type CandidateProfileOrderByWithAggregationInput = {
    user_id?: SortOrder
    state_id?: SortOrderInput | SortOrder
    city_id?: SortOrderInput | SortOrder
    qualification?: SortOrderInput | SortOrder
    experience_years?: SortOrderInput | SortOrder
    resume_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CandidateProfileCountOrderByAggregateInput
    _avg?: CandidateProfileAvgOrderByAggregateInput
    _max?: CandidateProfileMaxOrderByAggregateInput
    _min?: CandidateProfileMinOrderByAggregateInput
    _sum?: CandidateProfileSumOrderByAggregateInput
  }

  export type CandidateProfileScalarWhereWithAggregatesInput = {
    AND?: CandidateProfileScalarWhereWithAggregatesInput | CandidateProfileScalarWhereWithAggregatesInput[]
    OR?: CandidateProfileScalarWhereWithAggregatesInput[]
    NOT?: CandidateProfileScalarWhereWithAggregatesInput | CandidateProfileScalarWhereWithAggregatesInput[]
    user_id?: BigIntWithAggregatesFilter<"CandidateProfile"> | bigint | number
    state_id?: IntNullableWithAggregatesFilter<"CandidateProfile"> | number | null
    city_id?: IntNullableWithAggregatesFilter<"CandidateProfile"> | number | null
    qualification?: StringNullableWithAggregatesFilter<"CandidateProfile"> | string | null
    experience_years?: IntNullableWithAggregatesFilter<"CandidateProfile"> | number | null
    resume_url?: StringNullableWithAggregatesFilter<"CandidateProfile"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"CandidateProfile"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CandidateProfile"> | Date | string
  }

  export type RecruiterProfileWhereInput = {
    AND?: RecruiterProfileWhereInput | RecruiterProfileWhereInput[]
    OR?: RecruiterProfileWhereInput[]
    NOT?: RecruiterProfileWhereInput | RecruiterProfileWhereInput[]
    user_id?: BigIntFilter<"RecruiterProfile"> | bigint | number
    designation?: StringNullableFilter<"RecruiterProfile"> | string | null
    state_id?: IntNullableFilter<"RecruiterProfile"> | number | null
    city_id?: IntNullableFilter<"RecruiterProfile"> | number | null
    created_at?: DateTimeFilter<"RecruiterProfile"> | Date | string
    updated_at?: DateTimeFilter<"RecruiterProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    state?: XOR<StateNullableScalarRelationFilter, StateWhereInput> | null
    city?: XOR<CityNullableScalarRelationFilter, CityWhereInput> | null
  }

  export type RecruiterProfileOrderByWithRelationInput = {
    user_id?: SortOrder
    designation?: SortOrderInput | SortOrder
    state_id?: SortOrderInput | SortOrder
    city_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    state?: StateOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
  }

  export type RecruiterProfileWhereUniqueInput = Prisma.AtLeast<{
    user_id?: bigint | number
    AND?: RecruiterProfileWhereInput | RecruiterProfileWhereInput[]
    OR?: RecruiterProfileWhereInput[]
    NOT?: RecruiterProfileWhereInput | RecruiterProfileWhereInput[]
    designation?: StringNullableFilter<"RecruiterProfile"> | string | null
    state_id?: IntNullableFilter<"RecruiterProfile"> | number | null
    city_id?: IntNullableFilter<"RecruiterProfile"> | number | null
    created_at?: DateTimeFilter<"RecruiterProfile"> | Date | string
    updated_at?: DateTimeFilter<"RecruiterProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    state?: XOR<StateNullableScalarRelationFilter, StateWhereInput> | null
    city?: XOR<CityNullableScalarRelationFilter, CityWhereInput> | null
  }, "user_id">

  export type RecruiterProfileOrderByWithAggregationInput = {
    user_id?: SortOrder
    designation?: SortOrderInput | SortOrder
    state_id?: SortOrderInput | SortOrder
    city_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: RecruiterProfileCountOrderByAggregateInput
    _avg?: RecruiterProfileAvgOrderByAggregateInput
    _max?: RecruiterProfileMaxOrderByAggregateInput
    _min?: RecruiterProfileMinOrderByAggregateInput
    _sum?: RecruiterProfileSumOrderByAggregateInput
  }

  export type RecruiterProfileScalarWhereWithAggregatesInput = {
    AND?: RecruiterProfileScalarWhereWithAggregatesInput | RecruiterProfileScalarWhereWithAggregatesInput[]
    OR?: RecruiterProfileScalarWhereWithAggregatesInput[]
    NOT?: RecruiterProfileScalarWhereWithAggregatesInput | RecruiterProfileScalarWhereWithAggregatesInput[]
    user_id?: BigIntWithAggregatesFilter<"RecruiterProfile"> | bigint | number
    designation?: StringNullableWithAggregatesFilter<"RecruiterProfile"> | string | null
    state_id?: IntNullableWithAggregatesFilter<"RecruiterProfile"> | number | null
    city_id?: IntNullableWithAggregatesFilter<"RecruiterProfile"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"RecruiterProfile"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"RecruiterProfile"> | Date | string
  }

  export type JobPostWhereInput = {
    AND?: JobPostWhereInput | JobPostWhereInput[]
    OR?: JobPostWhereInput[]
    NOT?: JobPostWhereInput | JobPostWhereInput[]
    id?: BigIntFilter<"JobPost"> | bigint | number
    recruiter_id?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    job_title?: StringNullableFilter<"JobPost"> | string | null
    description?: StringNullableFilter<"JobPost"> | string | null
    employment_type?: EnumEmploymentTypeNullableFilter<"JobPost"> | $Enums.EmploymentType | null
    job_type?: EnumJobTypeNullableFilter<"JobPost"> | $Enums.JobType | null
    salary_min?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    salary_max?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    currency_id?: IntNullableFilter<"JobPost"> | number | null
    min_exp?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    max_exp?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    currency?: StringNullableFilter<"JobPost"> | string | null
    state_id?: IntNullableFilter<"JobPost"> | number | null
    city_id?: IntNullableFilter<"JobPost"> | number | null
    benefits?: StringNullableFilter<"JobPost"> | string | null
    openings_count?: IntNullableFilter<"JobPost"> | number | null
    application_deadline?: DateTimeNullableFilter<"JobPost"> | Date | string | null
    job_status?: EnumJobStatusNullableFilter<"JobPost"> | $Enums.JobStatus | null
    created_at?: DateTimeFilter<"JobPost"> | Date | string
    updated_at?: DateTimeFilter<"JobPost"> | Date | string
    recruiter?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    currency_rel?: XOR<CurrencyNullableScalarRelationFilter, CurrencyWhereInput> | null
    state?: XOR<StateNullableScalarRelationFilter, StateWhereInput> | null
    city?: XOR<CityNullableScalarRelationFilter, CityWhereInput> | null
    job_skills?: JobSkillListRelationFilter
    applications?: ApplicationListRelationFilter
  }

  export type JobPostOrderByWithRelationInput = {
    id?: SortOrder
    recruiter_id?: SortOrderInput | SortOrder
    job_title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    employment_type?: SortOrderInput | SortOrder
    job_type?: SortOrderInput | SortOrder
    salary_min?: SortOrderInput | SortOrder
    salary_max?: SortOrderInput | SortOrder
    currency_id?: SortOrderInput | SortOrder
    min_exp?: SortOrderInput | SortOrder
    max_exp?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    state_id?: SortOrderInput | SortOrder
    city_id?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    openings_count?: SortOrderInput | SortOrder
    application_deadline?: SortOrderInput | SortOrder
    job_status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    recruiter?: UserOrderByWithRelationInput
    currency_rel?: CurrencyOrderByWithRelationInput
    state?: StateOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
    job_skills?: JobSkillOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type JobPostWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: JobPostWhereInput | JobPostWhereInput[]
    OR?: JobPostWhereInput[]
    NOT?: JobPostWhereInput | JobPostWhereInput[]
    recruiter_id?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    job_title?: StringNullableFilter<"JobPost"> | string | null
    description?: StringNullableFilter<"JobPost"> | string | null
    employment_type?: EnumEmploymentTypeNullableFilter<"JobPost"> | $Enums.EmploymentType | null
    job_type?: EnumJobTypeNullableFilter<"JobPost"> | $Enums.JobType | null
    salary_min?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    salary_max?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    currency_id?: IntNullableFilter<"JobPost"> | number | null
    min_exp?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    max_exp?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    currency?: StringNullableFilter<"JobPost"> | string | null
    state_id?: IntNullableFilter<"JobPost"> | number | null
    city_id?: IntNullableFilter<"JobPost"> | number | null
    benefits?: StringNullableFilter<"JobPost"> | string | null
    openings_count?: IntNullableFilter<"JobPost"> | number | null
    application_deadline?: DateTimeNullableFilter<"JobPost"> | Date | string | null
    job_status?: EnumJobStatusNullableFilter<"JobPost"> | $Enums.JobStatus | null
    created_at?: DateTimeFilter<"JobPost"> | Date | string
    updated_at?: DateTimeFilter<"JobPost"> | Date | string
    recruiter?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    currency_rel?: XOR<CurrencyNullableScalarRelationFilter, CurrencyWhereInput> | null
    state?: XOR<StateNullableScalarRelationFilter, StateWhereInput> | null
    city?: XOR<CityNullableScalarRelationFilter, CityWhereInput> | null
    job_skills?: JobSkillListRelationFilter
    applications?: ApplicationListRelationFilter
  }, "id">

  export type JobPostOrderByWithAggregationInput = {
    id?: SortOrder
    recruiter_id?: SortOrderInput | SortOrder
    job_title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    employment_type?: SortOrderInput | SortOrder
    job_type?: SortOrderInput | SortOrder
    salary_min?: SortOrderInput | SortOrder
    salary_max?: SortOrderInput | SortOrder
    currency_id?: SortOrderInput | SortOrder
    min_exp?: SortOrderInput | SortOrder
    max_exp?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    state_id?: SortOrderInput | SortOrder
    city_id?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    openings_count?: SortOrderInput | SortOrder
    application_deadline?: SortOrderInput | SortOrder
    job_status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: JobPostCountOrderByAggregateInput
    _avg?: JobPostAvgOrderByAggregateInput
    _max?: JobPostMaxOrderByAggregateInput
    _min?: JobPostMinOrderByAggregateInput
    _sum?: JobPostSumOrderByAggregateInput
  }

  export type JobPostScalarWhereWithAggregatesInput = {
    AND?: JobPostScalarWhereWithAggregatesInput | JobPostScalarWhereWithAggregatesInput[]
    OR?: JobPostScalarWhereWithAggregatesInput[]
    NOT?: JobPostScalarWhereWithAggregatesInput | JobPostScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"JobPost"> | bigint | number
    recruiter_id?: BigIntNullableWithAggregatesFilter<"JobPost"> | bigint | number | null
    job_title?: StringNullableWithAggregatesFilter<"JobPost"> | string | null
    description?: StringNullableWithAggregatesFilter<"JobPost"> | string | null
    employment_type?: EnumEmploymentTypeNullableWithAggregatesFilter<"JobPost"> | $Enums.EmploymentType | null
    job_type?: EnumJobTypeNullableWithAggregatesFilter<"JobPost"> | $Enums.JobType | null
    salary_min?: BigIntNullableWithAggregatesFilter<"JobPost"> | bigint | number | null
    salary_max?: BigIntNullableWithAggregatesFilter<"JobPost"> | bigint | number | null
    currency_id?: IntNullableWithAggregatesFilter<"JobPost"> | number | null
    min_exp?: BigIntNullableWithAggregatesFilter<"JobPost"> | bigint | number | null
    max_exp?: BigIntNullableWithAggregatesFilter<"JobPost"> | bigint | number | null
    currency?: StringNullableWithAggregatesFilter<"JobPost"> | string | null
    state_id?: IntNullableWithAggregatesFilter<"JobPost"> | number | null
    city_id?: IntNullableWithAggregatesFilter<"JobPost"> | number | null
    benefits?: StringNullableWithAggregatesFilter<"JobPost"> | string | null
    openings_count?: IntNullableWithAggregatesFilter<"JobPost"> | number | null
    application_deadline?: DateTimeNullableWithAggregatesFilter<"JobPost"> | Date | string | null
    job_status?: EnumJobStatusNullableWithAggregatesFilter<"JobPost"> | $Enums.JobStatus | null
    created_at?: DateTimeWithAggregatesFilter<"JobPost"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"JobPost"> | Date | string
  }

  export type JobSkillWhereInput = {
    AND?: JobSkillWhereInput | JobSkillWhereInput[]
    OR?: JobSkillWhereInput[]
    NOT?: JobSkillWhereInput | JobSkillWhereInput[]
    job_id?: BigIntFilter<"JobSkill"> | bigint | number
    skill_id?: IntFilter<"JobSkill"> | number
    job?: XOR<JobPostScalarRelationFilter, JobPostWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type JobSkillOrderByWithRelationInput = {
    job_id?: SortOrder
    skill_id?: SortOrder
    job?: JobPostOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type JobSkillWhereUniqueInput = Prisma.AtLeast<{
    job_id_skill_id?: JobSkillJob_idSkill_idCompoundUniqueInput
    AND?: JobSkillWhereInput | JobSkillWhereInput[]
    OR?: JobSkillWhereInput[]
    NOT?: JobSkillWhereInput | JobSkillWhereInput[]
    job_id?: BigIntFilter<"JobSkill"> | bigint | number
    skill_id?: IntFilter<"JobSkill"> | number
    job?: XOR<JobPostScalarRelationFilter, JobPostWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "job_id_skill_id">

  export type JobSkillOrderByWithAggregationInput = {
    job_id?: SortOrder
    skill_id?: SortOrder
    _count?: JobSkillCountOrderByAggregateInput
    _avg?: JobSkillAvgOrderByAggregateInput
    _max?: JobSkillMaxOrderByAggregateInput
    _min?: JobSkillMinOrderByAggregateInput
    _sum?: JobSkillSumOrderByAggregateInput
  }

  export type JobSkillScalarWhereWithAggregatesInput = {
    AND?: JobSkillScalarWhereWithAggregatesInput | JobSkillScalarWhereWithAggregatesInput[]
    OR?: JobSkillScalarWhereWithAggregatesInput[]
    NOT?: JobSkillScalarWhereWithAggregatesInput | JobSkillScalarWhereWithAggregatesInput[]
    job_id?: BigIntWithAggregatesFilter<"JobSkill"> | bigint | number
    skill_id?: IntWithAggregatesFilter<"JobSkill"> | number
  }

  export type CandidateSkillWhereInput = {
    AND?: CandidateSkillWhereInput | CandidateSkillWhereInput[]
    OR?: CandidateSkillWhereInput[]
    NOT?: CandidateSkillWhereInput | CandidateSkillWhereInput[]
    candidate_id?: BigIntFilter<"CandidateSkill"> | bigint | number
    skill_id?: IntFilter<"CandidateSkill"> | number
    candidate?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }

  export type CandidateSkillOrderByWithRelationInput = {
    candidate_id?: SortOrder
    skill_id?: SortOrder
    candidate?: UserOrderByWithRelationInput
    skill?: SkillOrderByWithRelationInput
  }

  export type CandidateSkillWhereUniqueInput = Prisma.AtLeast<{
    candidate_id_skill_id?: CandidateSkillCandidate_idSkill_idCompoundUniqueInput
    AND?: CandidateSkillWhereInput | CandidateSkillWhereInput[]
    OR?: CandidateSkillWhereInput[]
    NOT?: CandidateSkillWhereInput | CandidateSkillWhereInput[]
    candidate_id?: BigIntFilter<"CandidateSkill"> | bigint | number
    skill_id?: IntFilter<"CandidateSkill"> | number
    candidate?: XOR<UserScalarRelationFilter, UserWhereInput>
    skill?: XOR<SkillScalarRelationFilter, SkillWhereInput>
  }, "candidate_id_skill_id">

  export type CandidateSkillOrderByWithAggregationInput = {
    candidate_id?: SortOrder
    skill_id?: SortOrder
    _count?: CandidateSkillCountOrderByAggregateInput
    _avg?: CandidateSkillAvgOrderByAggregateInput
    _max?: CandidateSkillMaxOrderByAggregateInput
    _min?: CandidateSkillMinOrderByAggregateInput
    _sum?: CandidateSkillSumOrderByAggregateInput
  }

  export type CandidateSkillScalarWhereWithAggregatesInput = {
    AND?: CandidateSkillScalarWhereWithAggregatesInput | CandidateSkillScalarWhereWithAggregatesInput[]
    OR?: CandidateSkillScalarWhereWithAggregatesInput[]
    NOT?: CandidateSkillScalarWhereWithAggregatesInput | CandidateSkillScalarWhereWithAggregatesInput[]
    candidate_id?: BigIntWithAggregatesFilter<"CandidateSkill"> | bigint | number
    skill_id?: IntWithAggregatesFilter<"CandidateSkill"> | number
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: BigIntFilter<"Application"> | bigint | number
    job_id?: BigIntNullableFilter<"Application"> | bigint | number | null
    candidate_id?: BigIntNullableFilter<"Application"> | bigint | number | null
    applied_at?: DateTimeNullableFilter<"Application"> | Date | string | null
    status?: EnumApplicationStatusNullableFilter<"Application"> | $Enums.ApplicationStatus | null
    created_at?: DateTimeFilter<"Application"> | Date | string
    updated_at?: DateTimeFilter<"Application"> | Date | string
    job?: XOR<JobPostNullableScalarRelationFilter, JobPostWhereInput> | null
    candidate?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    job_id?: SortOrderInput | SortOrder
    candidate_id?: SortOrderInput | SortOrder
    applied_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    job?: JobPostOrderByWithRelationInput
    candidate?: UserOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    job_id?: BigIntNullableFilter<"Application"> | bigint | number | null
    candidate_id?: BigIntNullableFilter<"Application"> | bigint | number | null
    applied_at?: DateTimeNullableFilter<"Application"> | Date | string | null
    status?: EnumApplicationStatusNullableFilter<"Application"> | $Enums.ApplicationStatus | null
    created_at?: DateTimeFilter<"Application"> | Date | string
    updated_at?: DateTimeFilter<"Application"> | Date | string
    job?: XOR<JobPostNullableScalarRelationFilter, JobPostWhereInput> | null
    candidate?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    job_id?: SortOrderInput | SortOrder
    candidate_id?: SortOrderInput | SortOrder
    applied_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Application"> | bigint | number
    job_id?: BigIntNullableWithAggregatesFilter<"Application"> | bigint | number | null
    candidate_id?: BigIntNullableWithAggregatesFilter<"Application"> | bigint | number | null
    applied_at?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
    status?: EnumApplicationStatusNullableWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus | null
    created_at?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Application"> | Date | string
  }

  export type RoleCreateInput = {
    role_name: string
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    role_name: string
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    role_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    job_skills?: JobSkillCreateNestedManyWithoutSkillInput
    candidate_skills?: CandidateSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    job_skills?: JobSkillUncheckedCreateNestedManyWithoutSkillInput
    candidate_skills?: CandidateSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job_skills?: JobSkillUpdateManyWithoutSkillNestedInput
    candidate_skills?: CandidateSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job_skills?: JobSkillUncheckedUpdateManyWithoutSkillNestedInput
    candidate_skills?: CandidateSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type SkillCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrencyCreateInput = {
    name: $Enums.CurrencyName
    code: $Enums.CurrencyCode
    symbol: $Enums.CurrencySymbol
    created_at?: Date | string
    updated_at?: Date | string
    job_posts?: JobPostCreateNestedManyWithoutCurrency_relInput
  }

  export type CurrencyUncheckedCreateInput = {
    id?: number
    name: $Enums.CurrencyName
    code: $Enums.CurrencyCode
    symbol: $Enums.CurrencySymbol
    created_at?: Date | string
    updated_at?: Date | string
    job_posts?: JobPostUncheckedCreateNestedManyWithoutCurrency_relInput
  }

  export type CurrencyUpdateInput = {
    name?: EnumCurrencyNameFieldUpdateOperationsInput | $Enums.CurrencyName
    code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    symbol?: EnumCurrencySymbolFieldUpdateOperationsInput | $Enums.CurrencySymbol
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job_posts?: JobPostUpdateManyWithoutCurrency_relNestedInput
  }

  export type CurrencyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumCurrencyNameFieldUpdateOperationsInput | $Enums.CurrencyName
    code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    symbol?: EnumCurrencySymbolFieldUpdateOperationsInput | $Enums.CurrencySymbol
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job_posts?: JobPostUncheckedUpdateManyWithoutCurrency_relNestedInput
  }

  export type CurrencyCreateManyInput = {
    id?: number
    name: $Enums.CurrencyName
    code: $Enums.CurrencyCode
    symbol: $Enums.CurrencySymbol
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CurrencyUpdateManyMutationInput = {
    name?: EnumCurrencyNameFieldUpdateOperationsInput | $Enums.CurrencyName
    code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    symbol?: EnumCurrencySymbolFieldUpdateOperationsInput | $Enums.CurrencySymbol
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrencyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumCurrencyNameFieldUpdateOperationsInput | $Enums.CurrencyName
    code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    symbol?: EnumCurrencySymbolFieldUpdateOperationsInput | $Enums.CurrencySymbol
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryCreateInput = {
    name: string
    iso_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    states?: StateCreateNestedManyWithoutCountryInput
    users?: UserCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    name: string
    iso_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    states?: StateUncheckedCreateNestedManyWithoutCountryInput
    users?: UserUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    iso_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: StateUpdateManyWithoutCountryNestedInput
    users?: UserUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iso_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: StateUncheckedUpdateManyWithoutCountryNestedInput
    users?: UserUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    name: string
    iso_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CountryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    iso_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iso_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StateCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    country: CountryCreateNestedOneWithoutStatesInput
    cities?: CityCreateNestedManyWithoutStateInput
    candidate_profiles?: CandidateProfileCreateNestedManyWithoutStateInput
    recruiter_profiles?: RecruiterProfileCreateNestedManyWithoutStateInput
    job_posts?: JobPostCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateInput = {
    id?: number
    country_id: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    cities?: CityUncheckedCreateNestedManyWithoutStateInput
    candidate_profiles?: CandidateProfileUncheckedCreateNestedManyWithoutStateInput
    recruiter_profiles?: RecruiterProfileUncheckedCreateNestedManyWithoutStateInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutStatesNestedInput
    cities?: CityUpdateManyWithoutStateNestedInput
    candidate_profiles?: CandidateProfileUpdateManyWithoutStateNestedInput
    recruiter_profiles?: RecruiterProfileUpdateManyWithoutStateNestedInput
    job_posts?: JobPostUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cities?: CityUncheckedUpdateManyWithoutStateNestedInput
    candidate_profiles?: CandidateProfileUncheckedUpdateManyWithoutStateNestedInput
    recruiter_profiles?: RecruiterProfileUncheckedUpdateManyWithoutStateNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StateCreateManyInput = {
    id?: number
    country_id: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    state: StateCreateNestedOneWithoutCitiesInput
    candidate_profiles?: CandidateProfileCreateNestedManyWithoutCityInput
    recruiter_profiles?: RecruiterProfileCreateNestedManyWithoutCityInput
    job_posts?: JobPostCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: number
    state_id: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    candidate_profiles?: CandidateProfileUncheckedCreateNestedManyWithoutCityInput
    recruiter_profiles?: RecruiterProfileUncheckedCreateNestedManyWithoutCityInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StateUpdateOneRequiredWithoutCitiesNestedInput
    candidate_profiles?: CandidateProfileUpdateManyWithoutCityNestedInput
    recruiter_profiles?: RecruiterProfileUpdateManyWithoutCityNestedInput
    job_posts?: JobPostUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    state_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_profiles?: CandidateProfileUncheckedUpdateManyWithoutCityNestedInput
    recruiter_profiles?: RecruiterProfileUncheckedUpdateManyWithoutCityNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: number
    state_id: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    state_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    country?: CountryCreateNestedOneWithoutUsersInput
    candidate_profile?: CandidateProfileCreateNestedOneWithoutUserInput
    recruiter_profile?: RecruiterProfileCreateNestedOneWithoutUserInput
    job_posts?: JobPostCreateNestedManyWithoutRecruiterInput
    applications?: ApplicationCreateNestedManyWithoutCandidateInput
    candidate_skills?: CandidateSkillCreateNestedManyWithoutCandidateInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    country_id?: number | null
    role_id: number
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    candidate_profile?: CandidateProfileUncheckedCreateNestedOneWithoutUserInput
    recruiter_profile?: RecruiterProfileUncheckedCreateNestedOneWithoutUserInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutRecruiterInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCandidateInput
    candidate_skills?: CandidateSkillUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    country?: CountryUpdateOneWithoutUsersNestedInput
    candidate_profile?: CandidateProfileUpdateOneWithoutUserNestedInput
    recruiter_profile?: RecruiterProfileUpdateOneWithoutUserNestedInput
    job_posts?: JobPostUpdateManyWithoutRecruiterNestedInput
    applications?: ApplicationUpdateManyWithoutCandidateNestedInput
    candidate_skills?: CandidateSkillUpdateManyWithoutCandidateNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_profile?: CandidateProfileUncheckedUpdateOneWithoutUserNestedInput
    recruiter_profile?: RecruiterProfileUncheckedUpdateOneWithoutUserNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutRecruiterNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCandidateNestedInput
    candidate_skills?: CandidateSkillUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    country_id?: number | null
    role_id: number
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateProfileCreateInput = {
    qualification?: string | null
    experience_years?: number | null
    resume_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCandidate_profileInput
    state?: StateCreateNestedOneWithoutCandidate_profilesInput
    city?: CityCreateNestedOneWithoutCandidate_profilesInput
  }

  export type CandidateProfileUncheckedCreateInput = {
    user_id: bigint | number
    state_id?: number | null
    city_id?: number | null
    qualification?: string | null
    experience_years?: number | null
    resume_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CandidateProfileUpdateInput = {
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCandidate_profileNestedInput
    state?: StateUpdateOneWithoutCandidate_profilesNestedInput
    city?: CityUpdateOneWithoutCandidate_profilesNestedInput
  }

  export type CandidateProfileUncheckedUpdateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateProfileCreateManyInput = {
    user_id: bigint | number
    state_id?: number | null
    city_id?: number | null
    qualification?: string | null
    experience_years?: number | null
    resume_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CandidateProfileUpdateManyMutationInput = {
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateProfileUncheckedUpdateManyInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruiterProfileCreateInput = {
    designation?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRecruiter_profileInput
    state?: StateCreateNestedOneWithoutRecruiter_profilesInput
    city?: CityCreateNestedOneWithoutRecruiter_profilesInput
  }

  export type RecruiterProfileUncheckedCreateInput = {
    user_id: bigint | number
    designation?: string | null
    state_id?: number | null
    city_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RecruiterProfileUpdateInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecruiter_profileNestedInput
    state?: StateUpdateOneWithoutRecruiter_profilesNestedInput
    city?: CityUpdateOneWithoutRecruiter_profilesNestedInput
  }

  export type RecruiterProfileUncheckedUpdateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruiterProfileCreateManyInput = {
    user_id: bigint | number
    designation?: string | null
    state_id?: number | null
    city_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RecruiterProfileUpdateManyMutationInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruiterProfileUncheckedUpdateManyInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostCreateInput = {
    id?: bigint | number
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    recruiter?: UserCreateNestedOneWithoutJob_postsInput
    currency_rel?: CurrencyCreateNestedOneWithoutJob_postsInput
    state?: StateCreateNestedOneWithoutJob_postsInput
    city?: CityCreateNestedOneWithoutJob_postsInput
    job_skills?: JobSkillCreateNestedManyWithoutJobInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
  }

  export type JobPostUncheckedCreateInput = {
    id?: bigint | number
    recruiter_id?: bigint | number | null
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    currency_id?: number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    state_id?: number | null
    city_id?: number | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    job_skills?: JobSkillUncheckedCreateNestedManyWithoutJobInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobPostUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiter?: UserUpdateOneWithoutJob_postsNestedInput
    currency_rel?: CurrencyUpdateOneWithoutJob_postsNestedInput
    state?: StateUpdateOneWithoutJob_postsNestedInput
    city?: CityUpdateOneWithoutJob_postsNestedInput
    job_skills?: JobSkillUpdateManyWithoutJobNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobPostUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recruiter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job_skills?: JobSkillUncheckedUpdateManyWithoutJobNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobPostCreateManyInput = {
    id?: bigint | number
    recruiter_id?: bigint | number | null
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    currency_id?: number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    state_id?: number | null
    city_id?: number | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type JobPostUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recruiter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobSkillCreateInput = {
    job: JobPostCreateNestedOneWithoutJob_skillsInput
    skill: SkillCreateNestedOneWithoutJob_skillsInput
  }

  export type JobSkillUncheckedCreateInput = {
    job_id: bigint | number
    skill_id: number
  }

  export type JobSkillUpdateInput = {
    job?: JobPostUpdateOneRequiredWithoutJob_skillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutJob_skillsNestedInput
  }

  export type JobSkillUncheckedUpdateInput = {
    job_id?: BigIntFieldUpdateOperationsInput | bigint | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type JobSkillCreateManyInput = {
    job_id: bigint | number
    skill_id: number
  }

  export type JobSkillUpdateManyMutationInput = {

  }

  export type JobSkillUncheckedUpdateManyInput = {
    job_id?: BigIntFieldUpdateOperationsInput | bigint | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateSkillCreateInput = {
    candidate: UserCreateNestedOneWithoutCandidate_skillsInput
    skill: SkillCreateNestedOneWithoutCandidate_skillsInput
  }

  export type CandidateSkillUncheckedCreateInput = {
    candidate_id: bigint | number
    skill_id: number
  }

  export type CandidateSkillUpdateInput = {
    candidate?: UserUpdateOneRequiredWithoutCandidate_skillsNestedInput
    skill?: SkillUpdateOneRequiredWithoutCandidate_skillsNestedInput
  }

  export type CandidateSkillUncheckedUpdateInput = {
    candidate_id?: BigIntFieldUpdateOperationsInput | bigint | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateSkillCreateManyInput = {
    candidate_id: bigint | number
    skill_id: number
  }

  export type CandidateSkillUpdateManyMutationInput = {

  }

  export type CandidateSkillUncheckedUpdateManyInput = {
    candidate_id?: BigIntFieldUpdateOperationsInput | bigint | number
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationCreateInput = {
    id?: bigint | number
    applied_at?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    job?: JobPostCreateNestedOneWithoutApplicationsInput
    candidate?: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: bigint | number
    job_id?: bigint | number | null
    candidate_id?: bigint | number | null
    applied_at?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    applied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobPostUpdateOneWithoutApplicationsNestedInput
    candidate?: UserUpdateOneWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    candidate_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    applied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyInput = {
    id?: bigint | number
    job_id?: bigint | number | null
    candidate_id?: bigint | number | null
    applied_at?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    applied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    candidate_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    applied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    role_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type JobSkillListRelationFilter = {
    every?: JobSkillWhereInput
    some?: JobSkillWhereInput
    none?: JobSkillWhereInput
  }

  export type CandidateSkillListRelationFilter = {
    every?: CandidateSkillWhereInput
    some?: CandidateSkillWhereInput
    none?: CandidateSkillWhereInput
  }

  export type JobSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCurrencyNameFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyName | EnumCurrencyNameFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyName[] | ListEnumCurrencyNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyName[] | ListEnumCurrencyNameFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyNameFilter<$PrismaModel> | $Enums.CurrencyName
  }

  export type EnumCurrencyCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Enums.CurrencyCode
  }

  export type EnumCurrencySymbolFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencySymbol | EnumCurrencySymbolFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencySymbol[] | ListEnumCurrencySymbolFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencySymbol[] | ListEnumCurrencySymbolFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencySymbolFilter<$PrismaModel> | $Enums.CurrencySymbol
  }

  export type JobPostListRelationFilter = {
    every?: JobPostWhereInput
    some?: JobPostWhereInput
    none?: JobPostWhereInput
  }

  export type JobPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurrencyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CurrencyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CurrencyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CurrencyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CurrencySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCurrencyNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyName | EnumCurrencyNameFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyName[] | ListEnumCurrencyNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyName[] | ListEnumCurrencyNameFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyNameWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyNameFilter<$PrismaModel>
    _max?: NestedEnumCurrencyNameFilter<$PrismaModel>
  }

  export type EnumCurrencyCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyCodeFilter<$PrismaModel>
    _max?: NestedEnumCurrencyCodeFilter<$PrismaModel>
  }

  export type EnumCurrencySymbolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencySymbol | EnumCurrencySymbolFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencySymbol[] | ListEnumCurrencySymbolFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencySymbol[] | ListEnumCurrencySymbolFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencySymbolWithAggregatesFilter<$PrismaModel> | $Enums.CurrencySymbol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencySymbolFilter<$PrismaModel>
    _max?: NestedEnumCurrencySymbolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StateListRelationFilter = {
    every?: StateWhereInput
    some?: StateWhereInput
    none?: StateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iso_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iso_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iso_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type CityListRelationFilter = {
    every?: CityWhereInput
    some?: CityWhereInput
    none?: CityWhereInput
  }

  export type CandidateProfileListRelationFilter = {
    every?: CandidateProfileWhereInput
    some?: CandidateProfileWhereInput
    none?: CandidateProfileWhereInput
  }

  export type RecruiterProfileListRelationFilter = {
    every?: RecruiterProfileWhereInput
    some?: RecruiterProfileWhereInput
    none?: RecruiterProfileWhereInput
  }

  export type CityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidateProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecruiterProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StateCountOrderByAggregateInput = {
    id?: SortOrder
    country_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StateAvgOrderByAggregateInput = {
    id?: SortOrder
    country_id?: SortOrder
  }

  export type StateMaxOrderByAggregateInput = {
    id?: SortOrder
    country_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StateMinOrderByAggregateInput = {
    id?: SortOrder
    country_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StateSumOrderByAggregateInput = {
    id?: SortOrder
    country_id?: SortOrder
  }

  export type StateScalarRelationFilter = {
    is?: StateWhereInput
    isNot?: StateWhereInput
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    state_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CityAvgOrderByAggregateInput = {
    id?: SortOrder
    state_id?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    state_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    state_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CitySumOrderByAggregateInput = {
    id?: SortOrder
    state_id?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type CountryNullableScalarRelationFilter = {
    is?: CountryWhereInput | null
    isNot?: CountryWhereInput | null
  }

  export type CandidateProfileNullableScalarRelationFilter = {
    is?: CandidateProfileWhereInput | null
    isNot?: CandidateProfileWhereInput | null
  }

  export type RecruiterProfileNullableScalarRelationFilter = {
    is?: RecruiterProfileWhereInput | null
    isNot?: RecruiterProfileWhereInput | null
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    country_id?: SortOrder
    role_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    country_id?: SortOrder
    role_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    country_id?: SortOrder
    role_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    country_id?: SortOrder
    role_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    country_id?: SortOrder
    role_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StateNullableScalarRelationFilter = {
    is?: StateWhereInput | null
    isNot?: StateWhereInput | null
  }

  export type CityNullableScalarRelationFilter = {
    is?: CityWhereInput | null
    isNot?: CityWhereInput | null
  }

  export type CandidateProfileCountOrderByAggregateInput = {
    user_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    qualification?: SortOrder
    experience_years?: SortOrder
    resume_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CandidateProfileAvgOrderByAggregateInput = {
    user_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    experience_years?: SortOrder
  }

  export type CandidateProfileMaxOrderByAggregateInput = {
    user_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    qualification?: SortOrder
    experience_years?: SortOrder
    resume_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CandidateProfileMinOrderByAggregateInput = {
    user_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    qualification?: SortOrder
    experience_years?: SortOrder
    resume_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CandidateProfileSumOrderByAggregateInput = {
    user_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    experience_years?: SortOrder
  }

  export type RecruiterProfileCountOrderByAggregateInput = {
    user_id?: SortOrder
    designation?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RecruiterProfileAvgOrderByAggregateInput = {
    user_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
  }

  export type RecruiterProfileMaxOrderByAggregateInput = {
    user_id?: SortOrder
    designation?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RecruiterProfileMinOrderByAggregateInput = {
    user_id?: SortOrder
    designation?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RecruiterProfileSumOrderByAggregateInput = {
    user_id?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type EnumEmploymentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmploymentTypeNullableFilter<$PrismaModel> | $Enums.EmploymentType | null
  }

  export type EnumJobTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobTypeNullableFilter<$PrismaModel> | $Enums.JobType | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumJobStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobStatusNullableFilter<$PrismaModel> | $Enums.JobStatus | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CurrencyNullableScalarRelationFilter = {
    is?: CurrencyWhereInput | null
    isNot?: CurrencyWhereInput | null
  }

  export type JobPostCountOrderByAggregateInput = {
    id?: SortOrder
    recruiter_id?: SortOrder
    job_title?: SortOrder
    description?: SortOrder
    employment_type?: SortOrder
    job_type?: SortOrder
    salary_min?: SortOrder
    salary_max?: SortOrder
    currency_id?: SortOrder
    min_exp?: SortOrder
    max_exp?: SortOrder
    currency?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    benefits?: SortOrder
    openings_count?: SortOrder
    application_deadline?: SortOrder
    job_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type JobPostAvgOrderByAggregateInput = {
    id?: SortOrder
    recruiter_id?: SortOrder
    salary_min?: SortOrder
    salary_max?: SortOrder
    currency_id?: SortOrder
    min_exp?: SortOrder
    max_exp?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    openings_count?: SortOrder
  }

  export type JobPostMaxOrderByAggregateInput = {
    id?: SortOrder
    recruiter_id?: SortOrder
    job_title?: SortOrder
    description?: SortOrder
    employment_type?: SortOrder
    job_type?: SortOrder
    salary_min?: SortOrder
    salary_max?: SortOrder
    currency_id?: SortOrder
    min_exp?: SortOrder
    max_exp?: SortOrder
    currency?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    benefits?: SortOrder
    openings_count?: SortOrder
    application_deadline?: SortOrder
    job_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type JobPostMinOrderByAggregateInput = {
    id?: SortOrder
    recruiter_id?: SortOrder
    job_title?: SortOrder
    description?: SortOrder
    employment_type?: SortOrder
    job_type?: SortOrder
    salary_min?: SortOrder
    salary_max?: SortOrder
    currency_id?: SortOrder
    min_exp?: SortOrder
    max_exp?: SortOrder
    currency?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    benefits?: SortOrder
    openings_count?: SortOrder
    application_deadline?: SortOrder
    job_status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type JobPostSumOrderByAggregateInput = {
    id?: SortOrder
    recruiter_id?: SortOrder
    salary_min?: SortOrder
    salary_max?: SortOrder
    currency_id?: SortOrder
    min_exp?: SortOrder
    max_exp?: SortOrder
    state_id?: SortOrder
    city_id?: SortOrder
    openings_count?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type EnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEmploymentTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumEmploymentTypeNullableFilter<$PrismaModel>
  }

  export type EnumJobTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.JobType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumJobTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumJobTypeNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumJobStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumJobStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumJobStatusNullableFilter<$PrismaModel>
  }

  export type JobPostScalarRelationFilter = {
    is?: JobPostWhereInput
    isNot?: JobPostWhereInput
  }

  export type SkillScalarRelationFilter = {
    is?: SkillWhereInput
    isNot?: SkillWhereInput
  }

  export type JobSkillJob_idSkill_idCompoundUniqueInput = {
    job_id: bigint | number
    skill_id: number
  }

  export type JobSkillCountOrderByAggregateInput = {
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type JobSkillAvgOrderByAggregateInput = {
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type JobSkillMaxOrderByAggregateInput = {
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type JobSkillMinOrderByAggregateInput = {
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type JobSkillSumOrderByAggregateInput = {
    job_id?: SortOrder
    skill_id?: SortOrder
  }

  export type CandidateSkillCandidate_idSkill_idCompoundUniqueInput = {
    candidate_id: bigint | number
    skill_id: number
  }

  export type CandidateSkillCountOrderByAggregateInput = {
    candidate_id?: SortOrder
    skill_id?: SortOrder
  }

  export type CandidateSkillAvgOrderByAggregateInput = {
    candidate_id?: SortOrder
    skill_id?: SortOrder
  }

  export type CandidateSkillMaxOrderByAggregateInput = {
    candidate_id?: SortOrder
    skill_id?: SortOrder
  }

  export type CandidateSkillMinOrderByAggregateInput = {
    candidate_id?: SortOrder
    skill_id?: SortOrder
  }

  export type CandidateSkillSumOrderByAggregateInput = {
    candidate_id?: SortOrder
    skill_id?: SortOrder
  }

  export type EnumApplicationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationStatusNullableFilter<$PrismaModel> | $Enums.ApplicationStatus | null
  }

  export type JobPostNullableScalarRelationFilter = {
    is?: JobPostWhereInput | null
    isNot?: JobPostWhereInput | null
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    candidate_id?: SortOrder
    applied_at?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    candidate_id?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    candidate_id?: SortOrder
    applied_at?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    candidate_id?: SortOrder
    applied_at?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    job_id?: SortOrder
    candidate_id?: SortOrder
  }

  export type EnumApplicationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type JobSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<JobSkillCreateWithoutSkillInput, JobSkillUncheckedCreateWithoutSkillInput> | JobSkillCreateWithoutSkillInput[] | JobSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: JobSkillCreateOrConnectWithoutSkillInput | JobSkillCreateOrConnectWithoutSkillInput[]
    createMany?: JobSkillCreateManySkillInputEnvelope
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
  }

  export type CandidateSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<CandidateSkillCreateWithoutSkillInput, CandidateSkillUncheckedCreateWithoutSkillInput> | CandidateSkillCreateWithoutSkillInput[] | CandidateSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutSkillInput | CandidateSkillCreateOrConnectWithoutSkillInput[]
    createMany?: CandidateSkillCreateManySkillInputEnvelope
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
  }

  export type JobSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<JobSkillCreateWithoutSkillInput, JobSkillUncheckedCreateWithoutSkillInput> | JobSkillCreateWithoutSkillInput[] | JobSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: JobSkillCreateOrConnectWithoutSkillInput | JobSkillCreateOrConnectWithoutSkillInput[]
    createMany?: JobSkillCreateManySkillInputEnvelope
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
  }

  export type CandidateSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<CandidateSkillCreateWithoutSkillInput, CandidateSkillUncheckedCreateWithoutSkillInput> | CandidateSkillCreateWithoutSkillInput[] | CandidateSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutSkillInput | CandidateSkillCreateOrConnectWithoutSkillInput[]
    createMany?: CandidateSkillCreateManySkillInputEnvelope
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
  }

  export type JobSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<JobSkillCreateWithoutSkillInput, JobSkillUncheckedCreateWithoutSkillInput> | JobSkillCreateWithoutSkillInput[] | JobSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: JobSkillCreateOrConnectWithoutSkillInput | JobSkillCreateOrConnectWithoutSkillInput[]
    upsert?: JobSkillUpsertWithWhereUniqueWithoutSkillInput | JobSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: JobSkillCreateManySkillInputEnvelope
    set?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    disconnect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    delete?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    update?: JobSkillUpdateWithWhereUniqueWithoutSkillInput | JobSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: JobSkillUpdateManyWithWhereWithoutSkillInput | JobSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: JobSkillScalarWhereInput | JobSkillScalarWhereInput[]
  }

  export type CandidateSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<CandidateSkillCreateWithoutSkillInput, CandidateSkillUncheckedCreateWithoutSkillInput> | CandidateSkillCreateWithoutSkillInput[] | CandidateSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutSkillInput | CandidateSkillCreateOrConnectWithoutSkillInput[]
    upsert?: CandidateSkillUpsertWithWhereUniqueWithoutSkillInput | CandidateSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: CandidateSkillCreateManySkillInputEnvelope
    set?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    disconnect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    delete?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    update?: CandidateSkillUpdateWithWhereUniqueWithoutSkillInput | CandidateSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: CandidateSkillUpdateManyWithWhereWithoutSkillInput | CandidateSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: CandidateSkillScalarWhereInput | CandidateSkillScalarWhereInput[]
  }

  export type JobSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<JobSkillCreateWithoutSkillInput, JobSkillUncheckedCreateWithoutSkillInput> | JobSkillCreateWithoutSkillInput[] | JobSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: JobSkillCreateOrConnectWithoutSkillInput | JobSkillCreateOrConnectWithoutSkillInput[]
    upsert?: JobSkillUpsertWithWhereUniqueWithoutSkillInput | JobSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: JobSkillCreateManySkillInputEnvelope
    set?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    disconnect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    delete?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    update?: JobSkillUpdateWithWhereUniqueWithoutSkillInput | JobSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: JobSkillUpdateManyWithWhereWithoutSkillInput | JobSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: JobSkillScalarWhereInput | JobSkillScalarWhereInput[]
  }

  export type CandidateSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<CandidateSkillCreateWithoutSkillInput, CandidateSkillUncheckedCreateWithoutSkillInput> | CandidateSkillCreateWithoutSkillInput[] | CandidateSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutSkillInput | CandidateSkillCreateOrConnectWithoutSkillInput[]
    upsert?: CandidateSkillUpsertWithWhereUniqueWithoutSkillInput | CandidateSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: CandidateSkillCreateManySkillInputEnvelope
    set?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    disconnect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    delete?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    update?: CandidateSkillUpdateWithWhereUniqueWithoutSkillInput | CandidateSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: CandidateSkillUpdateManyWithWhereWithoutSkillInput | CandidateSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: CandidateSkillScalarWhereInput | CandidateSkillScalarWhereInput[]
  }

  export type JobPostCreateNestedManyWithoutCurrency_relInput = {
    create?: XOR<JobPostCreateWithoutCurrency_relInput, JobPostUncheckedCreateWithoutCurrency_relInput> | JobPostCreateWithoutCurrency_relInput[] | JobPostUncheckedCreateWithoutCurrency_relInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutCurrency_relInput | JobPostCreateOrConnectWithoutCurrency_relInput[]
    createMany?: JobPostCreateManyCurrency_relInputEnvelope
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
  }

  export type JobPostUncheckedCreateNestedManyWithoutCurrency_relInput = {
    create?: XOR<JobPostCreateWithoutCurrency_relInput, JobPostUncheckedCreateWithoutCurrency_relInput> | JobPostCreateWithoutCurrency_relInput[] | JobPostUncheckedCreateWithoutCurrency_relInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutCurrency_relInput | JobPostCreateOrConnectWithoutCurrency_relInput[]
    createMany?: JobPostCreateManyCurrency_relInputEnvelope
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
  }

  export type EnumCurrencyNameFieldUpdateOperationsInput = {
    set?: $Enums.CurrencyName
  }

  export type EnumCurrencyCodeFieldUpdateOperationsInput = {
    set?: $Enums.CurrencyCode
  }

  export type EnumCurrencySymbolFieldUpdateOperationsInput = {
    set?: $Enums.CurrencySymbol
  }

  export type JobPostUpdateManyWithoutCurrency_relNestedInput = {
    create?: XOR<JobPostCreateWithoutCurrency_relInput, JobPostUncheckedCreateWithoutCurrency_relInput> | JobPostCreateWithoutCurrency_relInput[] | JobPostUncheckedCreateWithoutCurrency_relInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutCurrency_relInput | JobPostCreateOrConnectWithoutCurrency_relInput[]
    upsert?: JobPostUpsertWithWhereUniqueWithoutCurrency_relInput | JobPostUpsertWithWhereUniqueWithoutCurrency_relInput[]
    createMany?: JobPostCreateManyCurrency_relInputEnvelope
    set?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    disconnect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    delete?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    update?: JobPostUpdateWithWhereUniqueWithoutCurrency_relInput | JobPostUpdateWithWhereUniqueWithoutCurrency_relInput[]
    updateMany?: JobPostUpdateManyWithWhereWithoutCurrency_relInput | JobPostUpdateManyWithWhereWithoutCurrency_relInput[]
    deleteMany?: JobPostScalarWhereInput | JobPostScalarWhereInput[]
  }

  export type JobPostUncheckedUpdateManyWithoutCurrency_relNestedInput = {
    create?: XOR<JobPostCreateWithoutCurrency_relInput, JobPostUncheckedCreateWithoutCurrency_relInput> | JobPostCreateWithoutCurrency_relInput[] | JobPostUncheckedCreateWithoutCurrency_relInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutCurrency_relInput | JobPostCreateOrConnectWithoutCurrency_relInput[]
    upsert?: JobPostUpsertWithWhereUniqueWithoutCurrency_relInput | JobPostUpsertWithWhereUniqueWithoutCurrency_relInput[]
    createMany?: JobPostCreateManyCurrency_relInputEnvelope
    set?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    disconnect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    delete?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    update?: JobPostUpdateWithWhereUniqueWithoutCurrency_relInput | JobPostUpdateWithWhereUniqueWithoutCurrency_relInput[]
    updateMany?: JobPostUpdateManyWithWhereWithoutCurrency_relInput | JobPostUpdateManyWithWhereWithoutCurrency_relInput[]
    deleteMany?: JobPostScalarWhereInput | JobPostScalarWhereInput[]
  }

  export type StateCreateNestedManyWithoutCountryInput = {
    create?: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput> | StateCreateWithoutCountryInput[] | StateUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateCreateOrConnectWithoutCountryInput | StateCreateOrConnectWithoutCountryInput[]
    createMany?: StateCreateManyCountryInputEnvelope
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCountryInput = {
    create?: XOR<UserCreateWithoutCountryInput, UserUncheckedCreateWithoutCountryInput> | UserCreateWithoutCountryInput[] | UserUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCountryInput | UserCreateOrConnectWithoutCountryInput[]
    createMany?: UserCreateManyCountryInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StateUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput> | StateCreateWithoutCountryInput[] | StateUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateCreateOrConnectWithoutCountryInput | StateCreateOrConnectWithoutCountryInput[]
    createMany?: StateCreateManyCountryInputEnvelope
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<UserCreateWithoutCountryInput, UserUncheckedCreateWithoutCountryInput> | UserCreateWithoutCountryInput[] | UserUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCountryInput | UserCreateOrConnectWithoutCountryInput[]
    createMany?: UserCreateManyCountryInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StateUpdateManyWithoutCountryNestedInput = {
    create?: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput> | StateCreateWithoutCountryInput[] | StateUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateCreateOrConnectWithoutCountryInput | StateCreateOrConnectWithoutCountryInput[]
    upsert?: StateUpsertWithWhereUniqueWithoutCountryInput | StateUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: StateCreateManyCountryInputEnvelope
    set?: StateWhereUniqueInput | StateWhereUniqueInput[]
    disconnect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    delete?: StateWhereUniqueInput | StateWhereUniqueInput[]
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    update?: StateUpdateWithWhereUniqueWithoutCountryInput | StateUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: StateUpdateManyWithWhereWithoutCountryInput | StateUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: StateScalarWhereInput | StateScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCountryNestedInput = {
    create?: XOR<UserCreateWithoutCountryInput, UserUncheckedCreateWithoutCountryInput> | UserCreateWithoutCountryInput[] | UserUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCountryInput | UserCreateOrConnectWithoutCountryInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCountryInput | UserUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: UserCreateManyCountryInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCountryInput | UserUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCountryInput | UserUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StateUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput> | StateCreateWithoutCountryInput[] | StateUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: StateCreateOrConnectWithoutCountryInput | StateCreateOrConnectWithoutCountryInput[]
    upsert?: StateUpsertWithWhereUniqueWithoutCountryInput | StateUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: StateCreateManyCountryInputEnvelope
    set?: StateWhereUniqueInput | StateWhereUniqueInput[]
    disconnect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    delete?: StateWhereUniqueInput | StateWhereUniqueInput[]
    connect?: StateWhereUniqueInput | StateWhereUniqueInput[]
    update?: StateUpdateWithWhereUniqueWithoutCountryInput | StateUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: StateUpdateManyWithWhereWithoutCountryInput | StateUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: StateScalarWhereInput | StateScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<UserCreateWithoutCountryInput, UserUncheckedCreateWithoutCountryInput> | UserCreateWithoutCountryInput[] | UserUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCountryInput | UserCreateOrConnectWithoutCountryInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCountryInput | UserUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: UserCreateManyCountryInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCountryInput | UserUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCountryInput | UserUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutStatesInput = {
    create?: XOR<CountryCreateWithoutStatesInput, CountryUncheckedCreateWithoutStatesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutStatesInput
    connect?: CountryWhereUniqueInput
  }

  export type CityCreateNestedManyWithoutStateInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type CandidateProfileCreateNestedManyWithoutStateInput = {
    create?: XOR<CandidateProfileCreateWithoutStateInput, CandidateProfileUncheckedCreateWithoutStateInput> | CandidateProfileCreateWithoutStateInput[] | CandidateProfileUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutStateInput | CandidateProfileCreateOrConnectWithoutStateInput[]
    createMany?: CandidateProfileCreateManyStateInputEnvelope
    connect?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
  }

  export type RecruiterProfileCreateNestedManyWithoutStateInput = {
    create?: XOR<RecruiterProfileCreateWithoutStateInput, RecruiterProfileUncheckedCreateWithoutStateInput> | RecruiterProfileCreateWithoutStateInput[] | RecruiterProfileUncheckedCreateWithoutStateInput[]
    connectOrCreate?: RecruiterProfileCreateOrConnectWithoutStateInput | RecruiterProfileCreateOrConnectWithoutStateInput[]
    createMany?: RecruiterProfileCreateManyStateInputEnvelope
    connect?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
  }

  export type JobPostCreateNestedManyWithoutStateInput = {
    create?: XOR<JobPostCreateWithoutStateInput, JobPostUncheckedCreateWithoutStateInput> | JobPostCreateWithoutStateInput[] | JobPostUncheckedCreateWithoutStateInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutStateInput | JobPostCreateOrConnectWithoutStateInput[]
    createMany?: JobPostCreateManyStateInputEnvelope
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
  }

  export type CityUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type CandidateProfileUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<CandidateProfileCreateWithoutStateInput, CandidateProfileUncheckedCreateWithoutStateInput> | CandidateProfileCreateWithoutStateInput[] | CandidateProfileUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutStateInput | CandidateProfileCreateOrConnectWithoutStateInput[]
    createMany?: CandidateProfileCreateManyStateInputEnvelope
    connect?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
  }

  export type RecruiterProfileUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<RecruiterProfileCreateWithoutStateInput, RecruiterProfileUncheckedCreateWithoutStateInput> | RecruiterProfileCreateWithoutStateInput[] | RecruiterProfileUncheckedCreateWithoutStateInput[]
    connectOrCreate?: RecruiterProfileCreateOrConnectWithoutStateInput | RecruiterProfileCreateOrConnectWithoutStateInput[]
    createMany?: RecruiterProfileCreateManyStateInputEnvelope
    connect?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
  }

  export type JobPostUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<JobPostCreateWithoutStateInput, JobPostUncheckedCreateWithoutStateInput> | JobPostCreateWithoutStateInput[] | JobPostUncheckedCreateWithoutStateInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutStateInput | JobPostCreateOrConnectWithoutStateInput[]
    createMany?: JobPostCreateManyStateInputEnvelope
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
  }

  export type CountryUpdateOneRequiredWithoutStatesNestedInput = {
    create?: XOR<CountryCreateWithoutStatesInput, CountryUncheckedCreateWithoutStatesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutStatesInput
    upsert?: CountryUpsertWithoutStatesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutStatesInput, CountryUpdateWithoutStatesInput>, CountryUncheckedUpdateWithoutStatesInput>
  }

  export type CityUpdateManyWithoutStateNestedInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutStateInput | CityUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutStateInput | CityUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: CityUpdateManyWithWhereWithoutStateInput | CityUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type CandidateProfileUpdateManyWithoutStateNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutStateInput, CandidateProfileUncheckedCreateWithoutStateInput> | CandidateProfileCreateWithoutStateInput[] | CandidateProfileUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutStateInput | CandidateProfileCreateOrConnectWithoutStateInput[]
    upsert?: CandidateProfileUpsertWithWhereUniqueWithoutStateInput | CandidateProfileUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: CandidateProfileCreateManyStateInputEnvelope
    set?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    disconnect?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    delete?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    connect?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    update?: CandidateProfileUpdateWithWhereUniqueWithoutStateInput | CandidateProfileUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: CandidateProfileUpdateManyWithWhereWithoutStateInput | CandidateProfileUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: CandidateProfileScalarWhereInput | CandidateProfileScalarWhereInput[]
  }

  export type RecruiterProfileUpdateManyWithoutStateNestedInput = {
    create?: XOR<RecruiterProfileCreateWithoutStateInput, RecruiterProfileUncheckedCreateWithoutStateInput> | RecruiterProfileCreateWithoutStateInput[] | RecruiterProfileUncheckedCreateWithoutStateInput[]
    connectOrCreate?: RecruiterProfileCreateOrConnectWithoutStateInput | RecruiterProfileCreateOrConnectWithoutStateInput[]
    upsert?: RecruiterProfileUpsertWithWhereUniqueWithoutStateInput | RecruiterProfileUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: RecruiterProfileCreateManyStateInputEnvelope
    set?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    disconnect?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    delete?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    connect?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    update?: RecruiterProfileUpdateWithWhereUniqueWithoutStateInput | RecruiterProfileUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: RecruiterProfileUpdateManyWithWhereWithoutStateInput | RecruiterProfileUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: RecruiterProfileScalarWhereInput | RecruiterProfileScalarWhereInput[]
  }

  export type JobPostUpdateManyWithoutStateNestedInput = {
    create?: XOR<JobPostCreateWithoutStateInput, JobPostUncheckedCreateWithoutStateInput> | JobPostCreateWithoutStateInput[] | JobPostUncheckedCreateWithoutStateInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutStateInput | JobPostCreateOrConnectWithoutStateInput[]
    upsert?: JobPostUpsertWithWhereUniqueWithoutStateInput | JobPostUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: JobPostCreateManyStateInputEnvelope
    set?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    disconnect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    delete?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    update?: JobPostUpdateWithWhereUniqueWithoutStateInput | JobPostUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: JobPostUpdateManyWithWhereWithoutStateInput | JobPostUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: JobPostScalarWhereInput | JobPostScalarWhereInput[]
  }

  export type CityUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput> | CityCreateWithoutStateInput[] | CityUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CityCreateOrConnectWithoutStateInput | CityCreateOrConnectWithoutStateInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutStateInput | CityUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: CityCreateManyStateInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutStateInput | CityUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: CityUpdateManyWithWhereWithoutStateInput | CityUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type CandidateProfileUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutStateInput, CandidateProfileUncheckedCreateWithoutStateInput> | CandidateProfileCreateWithoutStateInput[] | CandidateProfileUncheckedCreateWithoutStateInput[]
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutStateInput | CandidateProfileCreateOrConnectWithoutStateInput[]
    upsert?: CandidateProfileUpsertWithWhereUniqueWithoutStateInput | CandidateProfileUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: CandidateProfileCreateManyStateInputEnvelope
    set?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    disconnect?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    delete?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    connect?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    update?: CandidateProfileUpdateWithWhereUniqueWithoutStateInput | CandidateProfileUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: CandidateProfileUpdateManyWithWhereWithoutStateInput | CandidateProfileUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: CandidateProfileScalarWhereInput | CandidateProfileScalarWhereInput[]
  }

  export type RecruiterProfileUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<RecruiterProfileCreateWithoutStateInput, RecruiterProfileUncheckedCreateWithoutStateInput> | RecruiterProfileCreateWithoutStateInput[] | RecruiterProfileUncheckedCreateWithoutStateInput[]
    connectOrCreate?: RecruiterProfileCreateOrConnectWithoutStateInput | RecruiterProfileCreateOrConnectWithoutStateInput[]
    upsert?: RecruiterProfileUpsertWithWhereUniqueWithoutStateInput | RecruiterProfileUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: RecruiterProfileCreateManyStateInputEnvelope
    set?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    disconnect?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    delete?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    connect?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    update?: RecruiterProfileUpdateWithWhereUniqueWithoutStateInput | RecruiterProfileUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: RecruiterProfileUpdateManyWithWhereWithoutStateInput | RecruiterProfileUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: RecruiterProfileScalarWhereInput | RecruiterProfileScalarWhereInput[]
  }

  export type JobPostUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<JobPostCreateWithoutStateInput, JobPostUncheckedCreateWithoutStateInput> | JobPostCreateWithoutStateInput[] | JobPostUncheckedCreateWithoutStateInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutStateInput | JobPostCreateOrConnectWithoutStateInput[]
    upsert?: JobPostUpsertWithWhereUniqueWithoutStateInput | JobPostUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: JobPostCreateManyStateInputEnvelope
    set?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    disconnect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    delete?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    update?: JobPostUpdateWithWhereUniqueWithoutStateInput | JobPostUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: JobPostUpdateManyWithWhereWithoutStateInput | JobPostUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: JobPostScalarWhereInput | JobPostScalarWhereInput[]
  }

  export type StateCreateNestedOneWithoutCitiesInput = {
    create?: XOR<StateCreateWithoutCitiesInput, StateUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: StateCreateOrConnectWithoutCitiesInput
    connect?: StateWhereUniqueInput
  }

  export type CandidateProfileCreateNestedManyWithoutCityInput = {
    create?: XOR<CandidateProfileCreateWithoutCityInput, CandidateProfileUncheckedCreateWithoutCityInput> | CandidateProfileCreateWithoutCityInput[] | CandidateProfileUncheckedCreateWithoutCityInput[]
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCityInput | CandidateProfileCreateOrConnectWithoutCityInput[]
    createMany?: CandidateProfileCreateManyCityInputEnvelope
    connect?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
  }

  export type RecruiterProfileCreateNestedManyWithoutCityInput = {
    create?: XOR<RecruiterProfileCreateWithoutCityInput, RecruiterProfileUncheckedCreateWithoutCityInput> | RecruiterProfileCreateWithoutCityInput[] | RecruiterProfileUncheckedCreateWithoutCityInput[]
    connectOrCreate?: RecruiterProfileCreateOrConnectWithoutCityInput | RecruiterProfileCreateOrConnectWithoutCityInput[]
    createMany?: RecruiterProfileCreateManyCityInputEnvelope
    connect?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
  }

  export type JobPostCreateNestedManyWithoutCityInput = {
    create?: XOR<JobPostCreateWithoutCityInput, JobPostUncheckedCreateWithoutCityInput> | JobPostCreateWithoutCityInput[] | JobPostUncheckedCreateWithoutCityInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutCityInput | JobPostCreateOrConnectWithoutCityInput[]
    createMany?: JobPostCreateManyCityInputEnvelope
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
  }

  export type CandidateProfileUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<CandidateProfileCreateWithoutCityInput, CandidateProfileUncheckedCreateWithoutCityInput> | CandidateProfileCreateWithoutCityInput[] | CandidateProfileUncheckedCreateWithoutCityInput[]
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCityInput | CandidateProfileCreateOrConnectWithoutCityInput[]
    createMany?: CandidateProfileCreateManyCityInputEnvelope
    connect?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
  }

  export type RecruiterProfileUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<RecruiterProfileCreateWithoutCityInput, RecruiterProfileUncheckedCreateWithoutCityInput> | RecruiterProfileCreateWithoutCityInput[] | RecruiterProfileUncheckedCreateWithoutCityInput[]
    connectOrCreate?: RecruiterProfileCreateOrConnectWithoutCityInput | RecruiterProfileCreateOrConnectWithoutCityInput[]
    createMany?: RecruiterProfileCreateManyCityInputEnvelope
    connect?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
  }

  export type JobPostUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<JobPostCreateWithoutCityInput, JobPostUncheckedCreateWithoutCityInput> | JobPostCreateWithoutCityInput[] | JobPostUncheckedCreateWithoutCityInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutCityInput | JobPostCreateOrConnectWithoutCityInput[]
    createMany?: JobPostCreateManyCityInputEnvelope
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
  }

  export type StateUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: XOR<StateCreateWithoutCitiesInput, StateUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: StateCreateOrConnectWithoutCitiesInput
    upsert?: StateUpsertWithoutCitiesInput
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutCitiesInput, StateUpdateWithoutCitiesInput>, StateUncheckedUpdateWithoutCitiesInput>
  }

  export type CandidateProfileUpdateManyWithoutCityNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutCityInput, CandidateProfileUncheckedCreateWithoutCityInput> | CandidateProfileCreateWithoutCityInput[] | CandidateProfileUncheckedCreateWithoutCityInput[]
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCityInput | CandidateProfileCreateOrConnectWithoutCityInput[]
    upsert?: CandidateProfileUpsertWithWhereUniqueWithoutCityInput | CandidateProfileUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: CandidateProfileCreateManyCityInputEnvelope
    set?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    disconnect?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    delete?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    connect?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    update?: CandidateProfileUpdateWithWhereUniqueWithoutCityInput | CandidateProfileUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: CandidateProfileUpdateManyWithWhereWithoutCityInput | CandidateProfileUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: CandidateProfileScalarWhereInput | CandidateProfileScalarWhereInput[]
  }

  export type RecruiterProfileUpdateManyWithoutCityNestedInput = {
    create?: XOR<RecruiterProfileCreateWithoutCityInput, RecruiterProfileUncheckedCreateWithoutCityInput> | RecruiterProfileCreateWithoutCityInput[] | RecruiterProfileUncheckedCreateWithoutCityInput[]
    connectOrCreate?: RecruiterProfileCreateOrConnectWithoutCityInput | RecruiterProfileCreateOrConnectWithoutCityInput[]
    upsert?: RecruiterProfileUpsertWithWhereUniqueWithoutCityInput | RecruiterProfileUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: RecruiterProfileCreateManyCityInputEnvelope
    set?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    disconnect?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    delete?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    connect?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    update?: RecruiterProfileUpdateWithWhereUniqueWithoutCityInput | RecruiterProfileUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: RecruiterProfileUpdateManyWithWhereWithoutCityInput | RecruiterProfileUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: RecruiterProfileScalarWhereInput | RecruiterProfileScalarWhereInput[]
  }

  export type JobPostUpdateManyWithoutCityNestedInput = {
    create?: XOR<JobPostCreateWithoutCityInput, JobPostUncheckedCreateWithoutCityInput> | JobPostCreateWithoutCityInput[] | JobPostUncheckedCreateWithoutCityInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutCityInput | JobPostCreateOrConnectWithoutCityInput[]
    upsert?: JobPostUpsertWithWhereUniqueWithoutCityInput | JobPostUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: JobPostCreateManyCityInputEnvelope
    set?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    disconnect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    delete?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    update?: JobPostUpdateWithWhereUniqueWithoutCityInput | JobPostUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: JobPostUpdateManyWithWhereWithoutCityInput | JobPostUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: JobPostScalarWhereInput | JobPostScalarWhereInput[]
  }

  export type CandidateProfileUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutCityInput, CandidateProfileUncheckedCreateWithoutCityInput> | CandidateProfileCreateWithoutCityInput[] | CandidateProfileUncheckedCreateWithoutCityInput[]
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutCityInput | CandidateProfileCreateOrConnectWithoutCityInput[]
    upsert?: CandidateProfileUpsertWithWhereUniqueWithoutCityInput | CandidateProfileUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: CandidateProfileCreateManyCityInputEnvelope
    set?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    disconnect?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    delete?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    connect?: CandidateProfileWhereUniqueInput | CandidateProfileWhereUniqueInput[]
    update?: CandidateProfileUpdateWithWhereUniqueWithoutCityInput | CandidateProfileUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: CandidateProfileUpdateManyWithWhereWithoutCityInput | CandidateProfileUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: CandidateProfileScalarWhereInput | CandidateProfileScalarWhereInput[]
  }

  export type RecruiterProfileUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<RecruiterProfileCreateWithoutCityInput, RecruiterProfileUncheckedCreateWithoutCityInput> | RecruiterProfileCreateWithoutCityInput[] | RecruiterProfileUncheckedCreateWithoutCityInput[]
    connectOrCreate?: RecruiterProfileCreateOrConnectWithoutCityInput | RecruiterProfileCreateOrConnectWithoutCityInput[]
    upsert?: RecruiterProfileUpsertWithWhereUniqueWithoutCityInput | RecruiterProfileUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: RecruiterProfileCreateManyCityInputEnvelope
    set?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    disconnect?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    delete?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    connect?: RecruiterProfileWhereUniqueInput | RecruiterProfileWhereUniqueInput[]
    update?: RecruiterProfileUpdateWithWhereUniqueWithoutCityInput | RecruiterProfileUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: RecruiterProfileUpdateManyWithWhereWithoutCityInput | RecruiterProfileUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: RecruiterProfileScalarWhereInput | RecruiterProfileScalarWhereInput[]
  }

  export type JobPostUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<JobPostCreateWithoutCityInput, JobPostUncheckedCreateWithoutCityInput> | JobPostCreateWithoutCityInput[] | JobPostUncheckedCreateWithoutCityInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutCityInput | JobPostCreateOrConnectWithoutCityInput[]
    upsert?: JobPostUpsertWithWhereUniqueWithoutCityInput | JobPostUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: JobPostCreateManyCityInputEnvelope
    set?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    disconnect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    delete?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    update?: JobPostUpdateWithWhereUniqueWithoutCityInput | JobPostUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: JobPostUpdateManyWithWhereWithoutCityInput | JobPostUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: JobPostScalarWhereInput | JobPostScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutUsersInput = {
    create?: XOR<CountryCreateWithoutUsersInput, CountryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CountryCreateOrConnectWithoutUsersInput
    connect?: CountryWhereUniqueInput
  }

  export type CandidateProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    connect?: CandidateProfileWhereUniqueInput
  }

  export type RecruiterProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<RecruiterProfileCreateWithoutUserInput, RecruiterProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: RecruiterProfileCreateOrConnectWithoutUserInput
    connect?: RecruiterProfileWhereUniqueInput
  }

  export type JobPostCreateNestedManyWithoutRecruiterInput = {
    create?: XOR<JobPostCreateWithoutRecruiterInput, JobPostUncheckedCreateWithoutRecruiterInput> | JobPostCreateWithoutRecruiterInput[] | JobPostUncheckedCreateWithoutRecruiterInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutRecruiterInput | JobPostCreateOrConnectWithoutRecruiterInput[]
    createMany?: JobPostCreateManyRecruiterInputEnvelope
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutCandidateInput = {
    create?: XOR<ApplicationCreateWithoutCandidateInput, ApplicationUncheckedCreateWithoutCandidateInput> | ApplicationCreateWithoutCandidateInput[] | ApplicationUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCandidateInput | ApplicationCreateOrConnectWithoutCandidateInput[]
    createMany?: ApplicationCreateManyCandidateInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type CandidateSkillCreateNestedManyWithoutCandidateInput = {
    create?: XOR<CandidateSkillCreateWithoutCandidateInput, CandidateSkillUncheckedCreateWithoutCandidateInput> | CandidateSkillCreateWithoutCandidateInput[] | CandidateSkillUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutCandidateInput | CandidateSkillCreateOrConnectWithoutCandidateInput[]
    createMany?: CandidateSkillCreateManyCandidateInputEnvelope
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
  }

  export type CandidateProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    connect?: CandidateProfileWhereUniqueInput
  }

  export type RecruiterProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<RecruiterProfileCreateWithoutUserInput, RecruiterProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: RecruiterProfileCreateOrConnectWithoutUserInput
    connect?: RecruiterProfileWhereUniqueInput
  }

  export type JobPostUncheckedCreateNestedManyWithoutRecruiterInput = {
    create?: XOR<JobPostCreateWithoutRecruiterInput, JobPostUncheckedCreateWithoutRecruiterInput> | JobPostCreateWithoutRecruiterInput[] | JobPostUncheckedCreateWithoutRecruiterInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutRecruiterInput | JobPostCreateOrConnectWithoutRecruiterInput[]
    createMany?: JobPostCreateManyRecruiterInputEnvelope
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<ApplicationCreateWithoutCandidateInput, ApplicationUncheckedCreateWithoutCandidateInput> | ApplicationCreateWithoutCandidateInput[] | ApplicationUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCandidateInput | ApplicationCreateOrConnectWithoutCandidateInput[]
    createMany?: ApplicationCreateManyCandidateInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type CandidateSkillUncheckedCreateNestedManyWithoutCandidateInput = {
    create?: XOR<CandidateSkillCreateWithoutCandidateInput, CandidateSkillUncheckedCreateWithoutCandidateInput> | CandidateSkillCreateWithoutCandidateInput[] | CandidateSkillUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutCandidateInput | CandidateSkillCreateOrConnectWithoutCandidateInput[]
    createMany?: CandidateSkillCreateManyCandidateInputEnvelope
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type CountryUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CountryCreateWithoutUsersInput, CountryUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CountryCreateOrConnectWithoutUsersInput
    upsert?: CountryUpsertWithoutUsersInput
    disconnect?: CountryWhereInput | boolean
    delete?: CountryWhereInput | boolean
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutUsersInput, CountryUpdateWithoutUsersInput>, CountryUncheckedUpdateWithoutUsersInput>
  }

  export type CandidateProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    upsert?: CandidateProfileUpsertWithoutUserInput
    disconnect?: CandidateProfileWhereInput | boolean
    delete?: CandidateProfileWhereInput | boolean
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutUserInput, CandidateProfileUpdateWithoutUserInput>, CandidateProfileUncheckedUpdateWithoutUserInput>
  }

  export type RecruiterProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<RecruiterProfileCreateWithoutUserInput, RecruiterProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: RecruiterProfileCreateOrConnectWithoutUserInput
    upsert?: RecruiterProfileUpsertWithoutUserInput
    disconnect?: RecruiterProfileWhereInput | boolean
    delete?: RecruiterProfileWhereInput | boolean
    connect?: RecruiterProfileWhereUniqueInput
    update?: XOR<XOR<RecruiterProfileUpdateToOneWithWhereWithoutUserInput, RecruiterProfileUpdateWithoutUserInput>, RecruiterProfileUncheckedUpdateWithoutUserInput>
  }

  export type JobPostUpdateManyWithoutRecruiterNestedInput = {
    create?: XOR<JobPostCreateWithoutRecruiterInput, JobPostUncheckedCreateWithoutRecruiterInput> | JobPostCreateWithoutRecruiterInput[] | JobPostUncheckedCreateWithoutRecruiterInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutRecruiterInput | JobPostCreateOrConnectWithoutRecruiterInput[]
    upsert?: JobPostUpsertWithWhereUniqueWithoutRecruiterInput | JobPostUpsertWithWhereUniqueWithoutRecruiterInput[]
    createMany?: JobPostCreateManyRecruiterInputEnvelope
    set?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    disconnect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    delete?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    update?: JobPostUpdateWithWhereUniqueWithoutRecruiterInput | JobPostUpdateWithWhereUniqueWithoutRecruiterInput[]
    updateMany?: JobPostUpdateManyWithWhereWithoutRecruiterInput | JobPostUpdateManyWithWhereWithoutRecruiterInput[]
    deleteMany?: JobPostScalarWhereInput | JobPostScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<ApplicationCreateWithoutCandidateInput, ApplicationUncheckedCreateWithoutCandidateInput> | ApplicationCreateWithoutCandidateInput[] | ApplicationUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCandidateInput | ApplicationCreateOrConnectWithoutCandidateInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutCandidateInput | ApplicationUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: ApplicationCreateManyCandidateInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutCandidateInput | ApplicationUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutCandidateInput | ApplicationUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type CandidateSkillUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<CandidateSkillCreateWithoutCandidateInput, CandidateSkillUncheckedCreateWithoutCandidateInput> | CandidateSkillCreateWithoutCandidateInput[] | CandidateSkillUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutCandidateInput | CandidateSkillCreateOrConnectWithoutCandidateInput[]
    upsert?: CandidateSkillUpsertWithWhereUniqueWithoutCandidateInput | CandidateSkillUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: CandidateSkillCreateManyCandidateInputEnvelope
    set?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    disconnect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    delete?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    update?: CandidateSkillUpdateWithWhereUniqueWithoutCandidateInput | CandidateSkillUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: CandidateSkillUpdateManyWithWhereWithoutCandidateInput | CandidateSkillUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: CandidateSkillScalarWhereInput | CandidateSkillScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CandidateProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CandidateProfileCreateOrConnectWithoutUserInput
    upsert?: CandidateProfileUpsertWithoutUserInput
    disconnect?: CandidateProfileWhereInput | boolean
    delete?: CandidateProfileWhereInput | boolean
    connect?: CandidateProfileWhereUniqueInput
    update?: XOR<XOR<CandidateProfileUpdateToOneWithWhereWithoutUserInput, CandidateProfileUpdateWithoutUserInput>, CandidateProfileUncheckedUpdateWithoutUserInput>
  }

  export type RecruiterProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<RecruiterProfileCreateWithoutUserInput, RecruiterProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: RecruiterProfileCreateOrConnectWithoutUserInput
    upsert?: RecruiterProfileUpsertWithoutUserInput
    disconnect?: RecruiterProfileWhereInput | boolean
    delete?: RecruiterProfileWhereInput | boolean
    connect?: RecruiterProfileWhereUniqueInput
    update?: XOR<XOR<RecruiterProfileUpdateToOneWithWhereWithoutUserInput, RecruiterProfileUpdateWithoutUserInput>, RecruiterProfileUncheckedUpdateWithoutUserInput>
  }

  export type JobPostUncheckedUpdateManyWithoutRecruiterNestedInput = {
    create?: XOR<JobPostCreateWithoutRecruiterInput, JobPostUncheckedCreateWithoutRecruiterInput> | JobPostCreateWithoutRecruiterInput[] | JobPostUncheckedCreateWithoutRecruiterInput[]
    connectOrCreate?: JobPostCreateOrConnectWithoutRecruiterInput | JobPostCreateOrConnectWithoutRecruiterInput[]
    upsert?: JobPostUpsertWithWhereUniqueWithoutRecruiterInput | JobPostUpsertWithWhereUniqueWithoutRecruiterInput[]
    createMany?: JobPostCreateManyRecruiterInputEnvelope
    set?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    disconnect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    delete?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    connect?: JobPostWhereUniqueInput | JobPostWhereUniqueInput[]
    update?: JobPostUpdateWithWhereUniqueWithoutRecruiterInput | JobPostUpdateWithWhereUniqueWithoutRecruiterInput[]
    updateMany?: JobPostUpdateManyWithWhereWithoutRecruiterInput | JobPostUpdateManyWithWhereWithoutRecruiterInput[]
    deleteMany?: JobPostScalarWhereInput | JobPostScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<ApplicationCreateWithoutCandidateInput, ApplicationUncheckedCreateWithoutCandidateInput> | ApplicationCreateWithoutCandidateInput[] | ApplicationUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCandidateInput | ApplicationCreateOrConnectWithoutCandidateInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutCandidateInput | ApplicationUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: ApplicationCreateManyCandidateInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutCandidateInput | ApplicationUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutCandidateInput | ApplicationUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type CandidateSkillUncheckedUpdateManyWithoutCandidateNestedInput = {
    create?: XOR<CandidateSkillCreateWithoutCandidateInput, CandidateSkillUncheckedCreateWithoutCandidateInput> | CandidateSkillCreateWithoutCandidateInput[] | CandidateSkillUncheckedCreateWithoutCandidateInput[]
    connectOrCreate?: CandidateSkillCreateOrConnectWithoutCandidateInput | CandidateSkillCreateOrConnectWithoutCandidateInput[]
    upsert?: CandidateSkillUpsertWithWhereUniqueWithoutCandidateInput | CandidateSkillUpsertWithWhereUniqueWithoutCandidateInput[]
    createMany?: CandidateSkillCreateManyCandidateInputEnvelope
    set?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    disconnect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    delete?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    connect?: CandidateSkillWhereUniqueInput | CandidateSkillWhereUniqueInput[]
    update?: CandidateSkillUpdateWithWhereUniqueWithoutCandidateInput | CandidateSkillUpdateWithWhereUniqueWithoutCandidateInput[]
    updateMany?: CandidateSkillUpdateManyWithWhereWithoutCandidateInput | CandidateSkillUpdateManyWithWhereWithoutCandidateInput[]
    deleteMany?: CandidateSkillScalarWhereInput | CandidateSkillScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCandidate_profileInput = {
    create?: XOR<UserCreateWithoutCandidate_profileInput, UserUncheckedCreateWithoutCandidate_profileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidate_profileInput
    connect?: UserWhereUniqueInput
  }

  export type StateCreateNestedOneWithoutCandidate_profilesInput = {
    create?: XOR<StateCreateWithoutCandidate_profilesInput, StateUncheckedCreateWithoutCandidate_profilesInput>
    connectOrCreate?: StateCreateOrConnectWithoutCandidate_profilesInput
    connect?: StateWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutCandidate_profilesInput = {
    create?: XOR<CityCreateWithoutCandidate_profilesInput, CityUncheckedCreateWithoutCandidate_profilesInput>
    connectOrCreate?: CityCreateOrConnectWithoutCandidate_profilesInput
    connect?: CityWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCandidate_profileNestedInput = {
    create?: XOR<UserCreateWithoutCandidate_profileInput, UserUncheckedCreateWithoutCandidate_profileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidate_profileInput
    upsert?: UserUpsertWithoutCandidate_profileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCandidate_profileInput, UserUpdateWithoutCandidate_profileInput>, UserUncheckedUpdateWithoutCandidate_profileInput>
  }

  export type StateUpdateOneWithoutCandidate_profilesNestedInput = {
    create?: XOR<StateCreateWithoutCandidate_profilesInput, StateUncheckedCreateWithoutCandidate_profilesInput>
    connectOrCreate?: StateCreateOrConnectWithoutCandidate_profilesInput
    upsert?: StateUpsertWithoutCandidate_profilesInput
    disconnect?: StateWhereInput | boolean
    delete?: StateWhereInput | boolean
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutCandidate_profilesInput, StateUpdateWithoutCandidate_profilesInput>, StateUncheckedUpdateWithoutCandidate_profilesInput>
  }

  export type CityUpdateOneWithoutCandidate_profilesNestedInput = {
    create?: XOR<CityCreateWithoutCandidate_profilesInput, CityUncheckedCreateWithoutCandidate_profilesInput>
    connectOrCreate?: CityCreateOrConnectWithoutCandidate_profilesInput
    upsert?: CityUpsertWithoutCandidate_profilesInput
    disconnect?: CityWhereInput | boolean
    delete?: CityWhereInput | boolean
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutCandidate_profilesInput, CityUpdateWithoutCandidate_profilesInput>, CityUncheckedUpdateWithoutCandidate_profilesInput>
  }

  export type UserCreateNestedOneWithoutRecruiter_profileInput = {
    create?: XOR<UserCreateWithoutRecruiter_profileInput, UserUncheckedCreateWithoutRecruiter_profileInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecruiter_profileInput
    connect?: UserWhereUniqueInput
  }

  export type StateCreateNestedOneWithoutRecruiter_profilesInput = {
    create?: XOR<StateCreateWithoutRecruiter_profilesInput, StateUncheckedCreateWithoutRecruiter_profilesInput>
    connectOrCreate?: StateCreateOrConnectWithoutRecruiter_profilesInput
    connect?: StateWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutRecruiter_profilesInput = {
    create?: XOR<CityCreateWithoutRecruiter_profilesInput, CityUncheckedCreateWithoutRecruiter_profilesInput>
    connectOrCreate?: CityCreateOrConnectWithoutRecruiter_profilesInput
    connect?: CityWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecruiter_profileNestedInput = {
    create?: XOR<UserCreateWithoutRecruiter_profileInput, UserUncheckedCreateWithoutRecruiter_profileInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecruiter_profileInput
    upsert?: UserUpsertWithoutRecruiter_profileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecruiter_profileInput, UserUpdateWithoutRecruiter_profileInput>, UserUncheckedUpdateWithoutRecruiter_profileInput>
  }

  export type StateUpdateOneWithoutRecruiter_profilesNestedInput = {
    create?: XOR<StateCreateWithoutRecruiter_profilesInput, StateUncheckedCreateWithoutRecruiter_profilesInput>
    connectOrCreate?: StateCreateOrConnectWithoutRecruiter_profilesInput
    upsert?: StateUpsertWithoutRecruiter_profilesInput
    disconnect?: StateWhereInput | boolean
    delete?: StateWhereInput | boolean
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutRecruiter_profilesInput, StateUpdateWithoutRecruiter_profilesInput>, StateUncheckedUpdateWithoutRecruiter_profilesInput>
  }

  export type CityUpdateOneWithoutRecruiter_profilesNestedInput = {
    create?: XOR<CityCreateWithoutRecruiter_profilesInput, CityUncheckedCreateWithoutRecruiter_profilesInput>
    connectOrCreate?: CityCreateOrConnectWithoutRecruiter_profilesInput
    upsert?: CityUpsertWithoutRecruiter_profilesInput
    disconnect?: CityWhereInput | boolean
    delete?: CityWhereInput | boolean
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutRecruiter_profilesInput, CityUpdateWithoutRecruiter_profilesInput>, CityUncheckedUpdateWithoutRecruiter_profilesInput>
  }

  export type UserCreateNestedOneWithoutJob_postsInput = {
    create?: XOR<UserCreateWithoutJob_postsInput, UserUncheckedCreateWithoutJob_postsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJob_postsInput
    connect?: UserWhereUniqueInput
  }

  export type CurrencyCreateNestedOneWithoutJob_postsInput = {
    create?: XOR<CurrencyCreateWithoutJob_postsInput, CurrencyUncheckedCreateWithoutJob_postsInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutJob_postsInput
    connect?: CurrencyWhereUniqueInput
  }

  export type StateCreateNestedOneWithoutJob_postsInput = {
    create?: XOR<StateCreateWithoutJob_postsInput, StateUncheckedCreateWithoutJob_postsInput>
    connectOrCreate?: StateCreateOrConnectWithoutJob_postsInput
    connect?: StateWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutJob_postsInput = {
    create?: XOR<CityCreateWithoutJob_postsInput, CityUncheckedCreateWithoutJob_postsInput>
    connectOrCreate?: CityCreateOrConnectWithoutJob_postsInput
    connect?: CityWhereUniqueInput
  }

  export type JobSkillCreateNestedManyWithoutJobInput = {
    create?: XOR<JobSkillCreateWithoutJobInput, JobSkillUncheckedCreateWithoutJobInput> | JobSkillCreateWithoutJobInput[] | JobSkillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobSkillCreateOrConnectWithoutJobInput | JobSkillCreateOrConnectWithoutJobInput[]
    createMany?: JobSkillCreateManyJobInputEnvelope
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutJobInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type JobSkillUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<JobSkillCreateWithoutJobInput, JobSkillUncheckedCreateWithoutJobInput> | JobSkillCreateWithoutJobInput[] | JobSkillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobSkillCreateOrConnectWithoutJobInput | JobSkillCreateOrConnectWithoutJobInput[]
    createMany?: JobSkillCreateManyJobInputEnvelope
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type NullableEnumEmploymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmploymentType | null
  }

  export type NullableEnumJobTypeFieldUpdateOperationsInput = {
    set?: $Enums.JobType | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus | null
  }

  export type UserUpdateOneWithoutJob_postsNestedInput = {
    create?: XOR<UserCreateWithoutJob_postsInput, UserUncheckedCreateWithoutJob_postsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJob_postsInput
    upsert?: UserUpsertWithoutJob_postsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJob_postsInput, UserUpdateWithoutJob_postsInput>, UserUncheckedUpdateWithoutJob_postsInput>
  }

  export type CurrencyUpdateOneWithoutJob_postsNestedInput = {
    create?: XOR<CurrencyCreateWithoutJob_postsInput, CurrencyUncheckedCreateWithoutJob_postsInput>
    connectOrCreate?: CurrencyCreateOrConnectWithoutJob_postsInput
    upsert?: CurrencyUpsertWithoutJob_postsInput
    disconnect?: CurrencyWhereInput | boolean
    delete?: CurrencyWhereInput | boolean
    connect?: CurrencyWhereUniqueInput
    update?: XOR<XOR<CurrencyUpdateToOneWithWhereWithoutJob_postsInput, CurrencyUpdateWithoutJob_postsInput>, CurrencyUncheckedUpdateWithoutJob_postsInput>
  }

  export type StateUpdateOneWithoutJob_postsNestedInput = {
    create?: XOR<StateCreateWithoutJob_postsInput, StateUncheckedCreateWithoutJob_postsInput>
    connectOrCreate?: StateCreateOrConnectWithoutJob_postsInput
    upsert?: StateUpsertWithoutJob_postsInput
    disconnect?: StateWhereInput | boolean
    delete?: StateWhereInput | boolean
    connect?: StateWhereUniqueInput
    update?: XOR<XOR<StateUpdateToOneWithWhereWithoutJob_postsInput, StateUpdateWithoutJob_postsInput>, StateUncheckedUpdateWithoutJob_postsInput>
  }

  export type CityUpdateOneWithoutJob_postsNestedInput = {
    create?: XOR<CityCreateWithoutJob_postsInput, CityUncheckedCreateWithoutJob_postsInput>
    connectOrCreate?: CityCreateOrConnectWithoutJob_postsInput
    upsert?: CityUpsertWithoutJob_postsInput
    disconnect?: CityWhereInput | boolean
    delete?: CityWhereInput | boolean
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutJob_postsInput, CityUpdateWithoutJob_postsInput>, CityUncheckedUpdateWithoutJob_postsInput>
  }

  export type JobSkillUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobSkillCreateWithoutJobInput, JobSkillUncheckedCreateWithoutJobInput> | JobSkillCreateWithoutJobInput[] | JobSkillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobSkillCreateOrConnectWithoutJobInput | JobSkillCreateOrConnectWithoutJobInput[]
    upsert?: JobSkillUpsertWithWhereUniqueWithoutJobInput | JobSkillUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobSkillCreateManyJobInputEnvelope
    set?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    disconnect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    delete?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    update?: JobSkillUpdateWithWhereUniqueWithoutJobInput | JobSkillUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobSkillUpdateManyWithWhereWithoutJobInput | JobSkillUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobSkillScalarWhereInput | JobSkillScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutJobNestedInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput | ApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutJobInput | ApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutJobInput | ApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type JobSkillUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<JobSkillCreateWithoutJobInput, JobSkillUncheckedCreateWithoutJobInput> | JobSkillCreateWithoutJobInput[] | JobSkillUncheckedCreateWithoutJobInput[]
    connectOrCreate?: JobSkillCreateOrConnectWithoutJobInput | JobSkillCreateOrConnectWithoutJobInput[]
    upsert?: JobSkillUpsertWithWhereUniqueWithoutJobInput | JobSkillUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: JobSkillCreateManyJobInputEnvelope
    set?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    disconnect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    delete?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    connect?: JobSkillWhereUniqueInput | JobSkillWhereUniqueInput[]
    update?: JobSkillUpdateWithWhereUniqueWithoutJobInput | JobSkillUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: JobSkillUpdateManyWithWhereWithoutJobInput | JobSkillUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: JobSkillScalarWhereInput | JobSkillScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput> | ApplicationCreateWithoutJobInput[] | ApplicationUncheckedCreateWithoutJobInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutJobInput | ApplicationCreateOrConnectWithoutJobInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutJobInput | ApplicationUpsertWithWhereUniqueWithoutJobInput[]
    createMany?: ApplicationCreateManyJobInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutJobInput | ApplicationUpdateWithWhereUniqueWithoutJobInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutJobInput | ApplicationUpdateManyWithWhereWithoutJobInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type JobPostCreateNestedOneWithoutJob_skillsInput = {
    create?: XOR<JobPostCreateWithoutJob_skillsInput, JobPostUncheckedCreateWithoutJob_skillsInput>
    connectOrCreate?: JobPostCreateOrConnectWithoutJob_skillsInput
    connect?: JobPostWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutJob_skillsInput = {
    create?: XOR<SkillCreateWithoutJob_skillsInput, SkillUncheckedCreateWithoutJob_skillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutJob_skillsInput
    connect?: SkillWhereUniqueInput
  }

  export type JobPostUpdateOneRequiredWithoutJob_skillsNestedInput = {
    create?: XOR<JobPostCreateWithoutJob_skillsInput, JobPostUncheckedCreateWithoutJob_skillsInput>
    connectOrCreate?: JobPostCreateOrConnectWithoutJob_skillsInput
    upsert?: JobPostUpsertWithoutJob_skillsInput
    connect?: JobPostWhereUniqueInput
    update?: XOR<XOR<JobPostUpdateToOneWithWhereWithoutJob_skillsInput, JobPostUpdateWithoutJob_skillsInput>, JobPostUncheckedUpdateWithoutJob_skillsInput>
  }

  export type SkillUpdateOneRequiredWithoutJob_skillsNestedInput = {
    create?: XOR<SkillCreateWithoutJob_skillsInput, SkillUncheckedCreateWithoutJob_skillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutJob_skillsInput
    upsert?: SkillUpsertWithoutJob_skillsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutJob_skillsInput, SkillUpdateWithoutJob_skillsInput>, SkillUncheckedUpdateWithoutJob_skillsInput>
  }

  export type UserCreateNestedOneWithoutCandidate_skillsInput = {
    create?: XOR<UserCreateWithoutCandidate_skillsInput, UserUncheckedCreateWithoutCandidate_skillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidate_skillsInput
    connect?: UserWhereUniqueInput
  }

  export type SkillCreateNestedOneWithoutCandidate_skillsInput = {
    create?: XOR<SkillCreateWithoutCandidate_skillsInput, SkillUncheckedCreateWithoutCandidate_skillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutCandidate_skillsInput
    connect?: SkillWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCandidate_skillsNestedInput = {
    create?: XOR<UserCreateWithoutCandidate_skillsInput, UserUncheckedCreateWithoutCandidate_skillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCandidate_skillsInput
    upsert?: UserUpsertWithoutCandidate_skillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCandidate_skillsInput, UserUpdateWithoutCandidate_skillsInput>, UserUncheckedUpdateWithoutCandidate_skillsInput>
  }

  export type SkillUpdateOneRequiredWithoutCandidate_skillsNestedInput = {
    create?: XOR<SkillCreateWithoutCandidate_skillsInput, SkillUncheckedCreateWithoutCandidate_skillsInput>
    connectOrCreate?: SkillCreateOrConnectWithoutCandidate_skillsInput
    upsert?: SkillUpsertWithoutCandidate_skillsInput
    connect?: SkillWhereUniqueInput
    update?: XOR<XOR<SkillUpdateToOneWithWhereWithoutCandidate_skillsInput, SkillUpdateWithoutCandidate_skillsInput>, SkillUncheckedUpdateWithoutCandidate_skillsInput>
  }

  export type JobPostCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobPostCreateWithoutApplicationsInput, JobPostUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobPostCreateOrConnectWithoutApplicationsInput
    connect?: JobPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus | null
  }

  export type JobPostUpdateOneWithoutApplicationsNestedInput = {
    create?: XOR<JobPostCreateWithoutApplicationsInput, JobPostUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobPostCreateOrConnectWithoutApplicationsInput
    upsert?: JobPostUpsertWithoutApplicationsInput
    disconnect?: JobPostWhereInput | boolean
    delete?: JobPostWhereInput | boolean
    connect?: JobPostWhereUniqueInput
    update?: XOR<XOR<JobPostUpdateToOneWithWhereWithoutApplicationsInput, JobPostUpdateWithoutApplicationsInput>, JobPostUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateOneWithoutApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput
    upsert?: UserUpsertWithoutApplicationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApplicationsInput, UserUpdateWithoutApplicationsInput>, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyNameFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyName | EnumCurrencyNameFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyName[] | ListEnumCurrencyNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyName[] | ListEnumCurrencyNameFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyNameFilter<$PrismaModel> | $Enums.CurrencyName
  }

  export type NestedEnumCurrencyCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Enums.CurrencyCode
  }

  export type NestedEnumCurrencySymbolFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencySymbol | EnumCurrencySymbolFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencySymbol[] | ListEnumCurrencySymbolFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencySymbol[] | ListEnumCurrencySymbolFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencySymbolFilter<$PrismaModel> | $Enums.CurrencySymbol
  }

  export type NestedEnumCurrencyNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyName | EnumCurrencyNameFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyName[] | ListEnumCurrencyNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyName[] | ListEnumCurrencyNameFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyNameWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyNameFilter<$PrismaModel>
    _max?: NestedEnumCurrencyNameFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyCodeFilter<$PrismaModel>
    _max?: NestedEnumCurrencyCodeFilter<$PrismaModel>
  }

  export type NestedEnumCurrencySymbolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencySymbol | EnumCurrencySymbolFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencySymbol[] | ListEnumCurrencySymbolFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencySymbol[] | ListEnumCurrencySymbolFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencySymbolWithAggregatesFilter<$PrismaModel> | $Enums.CurrencySymbol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencySymbolFilter<$PrismaModel>
    _max?: NestedEnumCurrencySymbolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumEmploymentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmploymentTypeNullableFilter<$PrismaModel> | $Enums.EmploymentType | null
  }

  export type NestedEnumJobTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobTypeNullableFilter<$PrismaModel> | $Enums.JobType | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumJobStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobStatusNullableFilter<$PrismaModel> | $Enums.JobStatus | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEmploymentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEmploymentTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumEmploymentTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumJobTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.JobType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumJobTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumJobTypeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumJobStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumJobStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationStatusNullableFilter<$PrismaModel> | $Enums.ApplicationStatus | null
  }

  export type NestedEnumApplicationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumApplicationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    country?: CountryCreateNestedOneWithoutUsersInput
    candidate_profile?: CandidateProfileCreateNestedOneWithoutUserInput
    recruiter_profile?: RecruiterProfileCreateNestedOneWithoutUserInput
    job_posts?: JobPostCreateNestedManyWithoutRecruiterInput
    applications?: ApplicationCreateNestedManyWithoutCandidateInput
    candidate_skills?: CandidateSkillCreateNestedManyWithoutCandidateInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    country_id?: number | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    candidate_profile?: CandidateProfileUncheckedCreateNestedOneWithoutUserInput
    recruiter_profile?: RecruiterProfileUncheckedCreateNestedOneWithoutUserInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutRecruiterInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCandidateInput
    candidate_skills?: CandidateSkillUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    phone_number?: StringNullableFilter<"User"> | string | null
    country_id?: IntNullableFilter<"User"> | number | null
    role_id?: IntFilter<"User"> | number
    is_active?: BoolNullableFilter<"User"> | boolean | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type JobSkillCreateWithoutSkillInput = {
    job: JobPostCreateNestedOneWithoutJob_skillsInput
  }

  export type JobSkillUncheckedCreateWithoutSkillInput = {
    job_id: bigint | number
  }

  export type JobSkillCreateOrConnectWithoutSkillInput = {
    where: JobSkillWhereUniqueInput
    create: XOR<JobSkillCreateWithoutSkillInput, JobSkillUncheckedCreateWithoutSkillInput>
  }

  export type JobSkillCreateManySkillInputEnvelope = {
    data: JobSkillCreateManySkillInput | JobSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type CandidateSkillCreateWithoutSkillInput = {
    candidate: UserCreateNestedOneWithoutCandidate_skillsInput
  }

  export type CandidateSkillUncheckedCreateWithoutSkillInput = {
    candidate_id: bigint | number
  }

  export type CandidateSkillCreateOrConnectWithoutSkillInput = {
    where: CandidateSkillWhereUniqueInput
    create: XOR<CandidateSkillCreateWithoutSkillInput, CandidateSkillUncheckedCreateWithoutSkillInput>
  }

  export type CandidateSkillCreateManySkillInputEnvelope = {
    data: CandidateSkillCreateManySkillInput | CandidateSkillCreateManySkillInput[]
    skipDuplicates?: boolean
  }

  export type JobSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: JobSkillWhereUniqueInput
    update: XOR<JobSkillUpdateWithoutSkillInput, JobSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<JobSkillCreateWithoutSkillInput, JobSkillUncheckedCreateWithoutSkillInput>
  }

  export type JobSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: JobSkillWhereUniqueInput
    data: XOR<JobSkillUpdateWithoutSkillInput, JobSkillUncheckedUpdateWithoutSkillInput>
  }

  export type JobSkillUpdateManyWithWhereWithoutSkillInput = {
    where: JobSkillScalarWhereInput
    data: XOR<JobSkillUpdateManyMutationInput, JobSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type JobSkillScalarWhereInput = {
    AND?: JobSkillScalarWhereInput | JobSkillScalarWhereInput[]
    OR?: JobSkillScalarWhereInput[]
    NOT?: JobSkillScalarWhereInput | JobSkillScalarWhereInput[]
    job_id?: BigIntFilter<"JobSkill"> | bigint | number
    skill_id?: IntFilter<"JobSkill"> | number
  }

  export type CandidateSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: CandidateSkillWhereUniqueInput
    update: XOR<CandidateSkillUpdateWithoutSkillInput, CandidateSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<CandidateSkillCreateWithoutSkillInput, CandidateSkillUncheckedCreateWithoutSkillInput>
  }

  export type CandidateSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: CandidateSkillWhereUniqueInput
    data: XOR<CandidateSkillUpdateWithoutSkillInput, CandidateSkillUncheckedUpdateWithoutSkillInput>
  }

  export type CandidateSkillUpdateManyWithWhereWithoutSkillInput = {
    where: CandidateSkillScalarWhereInput
    data: XOR<CandidateSkillUpdateManyMutationInput, CandidateSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type CandidateSkillScalarWhereInput = {
    AND?: CandidateSkillScalarWhereInput | CandidateSkillScalarWhereInput[]
    OR?: CandidateSkillScalarWhereInput[]
    NOT?: CandidateSkillScalarWhereInput | CandidateSkillScalarWhereInput[]
    candidate_id?: BigIntFilter<"CandidateSkill"> | bigint | number
    skill_id?: IntFilter<"CandidateSkill"> | number
  }

  export type JobPostCreateWithoutCurrency_relInput = {
    id?: bigint | number
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    recruiter?: UserCreateNestedOneWithoutJob_postsInput
    state?: StateCreateNestedOneWithoutJob_postsInput
    city?: CityCreateNestedOneWithoutJob_postsInput
    job_skills?: JobSkillCreateNestedManyWithoutJobInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
  }

  export type JobPostUncheckedCreateWithoutCurrency_relInput = {
    id?: bigint | number
    recruiter_id?: bigint | number | null
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    state_id?: number | null
    city_id?: number | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    job_skills?: JobSkillUncheckedCreateNestedManyWithoutJobInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobPostCreateOrConnectWithoutCurrency_relInput = {
    where: JobPostWhereUniqueInput
    create: XOR<JobPostCreateWithoutCurrency_relInput, JobPostUncheckedCreateWithoutCurrency_relInput>
  }

  export type JobPostCreateManyCurrency_relInputEnvelope = {
    data: JobPostCreateManyCurrency_relInput | JobPostCreateManyCurrency_relInput[]
    skipDuplicates?: boolean
  }

  export type JobPostUpsertWithWhereUniqueWithoutCurrency_relInput = {
    where: JobPostWhereUniqueInput
    update: XOR<JobPostUpdateWithoutCurrency_relInput, JobPostUncheckedUpdateWithoutCurrency_relInput>
    create: XOR<JobPostCreateWithoutCurrency_relInput, JobPostUncheckedCreateWithoutCurrency_relInput>
  }

  export type JobPostUpdateWithWhereUniqueWithoutCurrency_relInput = {
    where: JobPostWhereUniqueInput
    data: XOR<JobPostUpdateWithoutCurrency_relInput, JobPostUncheckedUpdateWithoutCurrency_relInput>
  }

  export type JobPostUpdateManyWithWhereWithoutCurrency_relInput = {
    where: JobPostScalarWhereInput
    data: XOR<JobPostUpdateManyMutationInput, JobPostUncheckedUpdateManyWithoutCurrency_relInput>
  }

  export type JobPostScalarWhereInput = {
    AND?: JobPostScalarWhereInput | JobPostScalarWhereInput[]
    OR?: JobPostScalarWhereInput[]
    NOT?: JobPostScalarWhereInput | JobPostScalarWhereInput[]
    id?: BigIntFilter<"JobPost"> | bigint | number
    recruiter_id?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    job_title?: StringNullableFilter<"JobPost"> | string | null
    description?: StringNullableFilter<"JobPost"> | string | null
    employment_type?: EnumEmploymentTypeNullableFilter<"JobPost"> | $Enums.EmploymentType | null
    job_type?: EnumJobTypeNullableFilter<"JobPost"> | $Enums.JobType | null
    salary_min?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    salary_max?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    currency_id?: IntNullableFilter<"JobPost"> | number | null
    min_exp?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    max_exp?: BigIntNullableFilter<"JobPost"> | bigint | number | null
    currency?: StringNullableFilter<"JobPost"> | string | null
    state_id?: IntNullableFilter<"JobPost"> | number | null
    city_id?: IntNullableFilter<"JobPost"> | number | null
    benefits?: StringNullableFilter<"JobPost"> | string | null
    openings_count?: IntNullableFilter<"JobPost"> | number | null
    application_deadline?: DateTimeNullableFilter<"JobPost"> | Date | string | null
    job_status?: EnumJobStatusNullableFilter<"JobPost"> | $Enums.JobStatus | null
    created_at?: DateTimeFilter<"JobPost"> | Date | string
    updated_at?: DateTimeFilter<"JobPost"> | Date | string
  }

  export type StateCreateWithoutCountryInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    cities?: CityCreateNestedManyWithoutStateInput
    candidate_profiles?: CandidateProfileCreateNestedManyWithoutStateInput
    recruiter_profiles?: RecruiterProfileCreateNestedManyWithoutStateInput
    job_posts?: JobPostCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutCountryInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    cities?: CityUncheckedCreateNestedManyWithoutStateInput
    candidate_profiles?: CandidateProfileUncheckedCreateNestedManyWithoutStateInput
    recruiter_profiles?: RecruiterProfileUncheckedCreateNestedManyWithoutStateInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutCountryInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput>
  }

  export type StateCreateManyCountryInputEnvelope = {
    data: StateCreateManyCountryInput | StateCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCountryInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    candidate_profile?: CandidateProfileCreateNestedOneWithoutUserInput
    recruiter_profile?: RecruiterProfileCreateNestedOneWithoutUserInput
    job_posts?: JobPostCreateNestedManyWithoutRecruiterInput
    applications?: ApplicationCreateNestedManyWithoutCandidateInput
    candidate_skills?: CandidateSkillCreateNestedManyWithoutCandidateInput
  }

  export type UserUncheckedCreateWithoutCountryInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    role_id: number
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    candidate_profile?: CandidateProfileUncheckedCreateNestedOneWithoutUserInput
    recruiter_profile?: RecruiterProfileUncheckedCreateNestedOneWithoutUserInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutRecruiterInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCandidateInput
    candidate_skills?: CandidateSkillUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type UserCreateOrConnectWithoutCountryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCountryInput, UserUncheckedCreateWithoutCountryInput>
  }

  export type UserCreateManyCountryInputEnvelope = {
    data: UserCreateManyCountryInput | UserCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type StateUpsertWithWhereUniqueWithoutCountryInput = {
    where: StateWhereUniqueInput
    update: XOR<StateUpdateWithoutCountryInput, StateUncheckedUpdateWithoutCountryInput>
    create: XOR<StateCreateWithoutCountryInput, StateUncheckedCreateWithoutCountryInput>
  }

  export type StateUpdateWithWhereUniqueWithoutCountryInput = {
    where: StateWhereUniqueInput
    data: XOR<StateUpdateWithoutCountryInput, StateUncheckedUpdateWithoutCountryInput>
  }

  export type StateUpdateManyWithWhereWithoutCountryInput = {
    where: StateScalarWhereInput
    data: XOR<StateUpdateManyMutationInput, StateUncheckedUpdateManyWithoutCountryInput>
  }

  export type StateScalarWhereInput = {
    AND?: StateScalarWhereInput | StateScalarWhereInput[]
    OR?: StateScalarWhereInput[]
    NOT?: StateScalarWhereInput | StateScalarWhereInput[]
    id?: IntFilter<"State"> | number
    country_id?: IntFilter<"State"> | number
    name?: StringFilter<"State"> | string
    created_at?: DateTimeFilter<"State"> | Date | string
    updated_at?: DateTimeFilter<"State"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutCountryInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCountryInput, UserUncheckedUpdateWithoutCountryInput>
    create: XOR<UserCreateWithoutCountryInput, UserUncheckedCreateWithoutCountryInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCountryInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCountryInput, UserUncheckedUpdateWithoutCountryInput>
  }

  export type UserUpdateManyWithWhereWithoutCountryInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCountryInput>
  }

  export type CountryCreateWithoutStatesInput = {
    name: string
    iso_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutStatesInput = {
    id?: number
    name: string
    iso_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutStatesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutStatesInput, CountryUncheckedCreateWithoutStatesInput>
  }

  export type CityCreateWithoutStateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    candidate_profiles?: CandidateProfileCreateNestedManyWithoutCityInput
    recruiter_profiles?: RecruiterProfileCreateNestedManyWithoutCityInput
    job_posts?: JobPostCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutStateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    candidate_profiles?: CandidateProfileUncheckedCreateNestedManyWithoutCityInput
    recruiter_profiles?: RecruiterProfileUncheckedCreateNestedManyWithoutCityInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutStateInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput>
  }

  export type CityCreateManyStateInputEnvelope = {
    data: CityCreateManyStateInput | CityCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type CandidateProfileCreateWithoutStateInput = {
    qualification?: string | null
    experience_years?: number | null
    resume_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCandidate_profileInput
    city?: CityCreateNestedOneWithoutCandidate_profilesInput
  }

  export type CandidateProfileUncheckedCreateWithoutStateInput = {
    user_id: bigint | number
    city_id?: number | null
    qualification?: string | null
    experience_years?: number | null
    resume_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CandidateProfileCreateOrConnectWithoutStateInput = {
    where: CandidateProfileWhereUniqueInput
    create: XOR<CandidateProfileCreateWithoutStateInput, CandidateProfileUncheckedCreateWithoutStateInput>
  }

  export type CandidateProfileCreateManyStateInputEnvelope = {
    data: CandidateProfileCreateManyStateInput | CandidateProfileCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type RecruiterProfileCreateWithoutStateInput = {
    designation?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRecruiter_profileInput
    city?: CityCreateNestedOneWithoutRecruiter_profilesInput
  }

  export type RecruiterProfileUncheckedCreateWithoutStateInput = {
    user_id: bigint | number
    designation?: string | null
    city_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RecruiterProfileCreateOrConnectWithoutStateInput = {
    where: RecruiterProfileWhereUniqueInput
    create: XOR<RecruiterProfileCreateWithoutStateInput, RecruiterProfileUncheckedCreateWithoutStateInput>
  }

  export type RecruiterProfileCreateManyStateInputEnvelope = {
    data: RecruiterProfileCreateManyStateInput | RecruiterProfileCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type JobPostCreateWithoutStateInput = {
    id?: bigint | number
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    recruiter?: UserCreateNestedOneWithoutJob_postsInput
    currency_rel?: CurrencyCreateNestedOneWithoutJob_postsInput
    city?: CityCreateNestedOneWithoutJob_postsInput
    job_skills?: JobSkillCreateNestedManyWithoutJobInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
  }

  export type JobPostUncheckedCreateWithoutStateInput = {
    id?: bigint | number
    recruiter_id?: bigint | number | null
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    currency_id?: number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    city_id?: number | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    job_skills?: JobSkillUncheckedCreateNestedManyWithoutJobInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobPostCreateOrConnectWithoutStateInput = {
    where: JobPostWhereUniqueInput
    create: XOR<JobPostCreateWithoutStateInput, JobPostUncheckedCreateWithoutStateInput>
  }

  export type JobPostCreateManyStateInputEnvelope = {
    data: JobPostCreateManyStateInput | JobPostCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutStatesInput = {
    update: XOR<CountryUpdateWithoutStatesInput, CountryUncheckedUpdateWithoutStatesInput>
    create: XOR<CountryCreateWithoutStatesInput, CountryUncheckedCreateWithoutStatesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutStatesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutStatesInput, CountryUncheckedUpdateWithoutStatesInput>
  }

  export type CountryUpdateWithoutStatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    iso_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutStatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iso_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CityUpsertWithWhereUniqueWithoutStateInput = {
    where: CityWhereUniqueInput
    update: XOR<CityUpdateWithoutStateInput, CityUncheckedUpdateWithoutStateInput>
    create: XOR<CityCreateWithoutStateInput, CityUncheckedCreateWithoutStateInput>
  }

  export type CityUpdateWithWhereUniqueWithoutStateInput = {
    where: CityWhereUniqueInput
    data: XOR<CityUpdateWithoutStateInput, CityUncheckedUpdateWithoutStateInput>
  }

  export type CityUpdateManyWithWhereWithoutStateInput = {
    where: CityScalarWhereInput
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyWithoutStateInput>
  }

  export type CityScalarWhereInput = {
    AND?: CityScalarWhereInput | CityScalarWhereInput[]
    OR?: CityScalarWhereInput[]
    NOT?: CityScalarWhereInput | CityScalarWhereInput[]
    id?: IntFilter<"City"> | number
    state_id?: IntFilter<"City"> | number
    name?: StringFilter<"City"> | string
    created_at?: DateTimeFilter<"City"> | Date | string
    updated_at?: DateTimeFilter<"City"> | Date | string
  }

  export type CandidateProfileUpsertWithWhereUniqueWithoutStateInput = {
    where: CandidateProfileWhereUniqueInput
    update: XOR<CandidateProfileUpdateWithoutStateInput, CandidateProfileUncheckedUpdateWithoutStateInput>
    create: XOR<CandidateProfileCreateWithoutStateInput, CandidateProfileUncheckedCreateWithoutStateInput>
  }

  export type CandidateProfileUpdateWithWhereUniqueWithoutStateInput = {
    where: CandidateProfileWhereUniqueInput
    data: XOR<CandidateProfileUpdateWithoutStateInput, CandidateProfileUncheckedUpdateWithoutStateInput>
  }

  export type CandidateProfileUpdateManyWithWhereWithoutStateInput = {
    where: CandidateProfileScalarWhereInput
    data: XOR<CandidateProfileUpdateManyMutationInput, CandidateProfileUncheckedUpdateManyWithoutStateInput>
  }

  export type CandidateProfileScalarWhereInput = {
    AND?: CandidateProfileScalarWhereInput | CandidateProfileScalarWhereInput[]
    OR?: CandidateProfileScalarWhereInput[]
    NOT?: CandidateProfileScalarWhereInput | CandidateProfileScalarWhereInput[]
    user_id?: BigIntFilter<"CandidateProfile"> | bigint | number
    state_id?: IntNullableFilter<"CandidateProfile"> | number | null
    city_id?: IntNullableFilter<"CandidateProfile"> | number | null
    qualification?: StringNullableFilter<"CandidateProfile"> | string | null
    experience_years?: IntNullableFilter<"CandidateProfile"> | number | null
    resume_url?: StringNullableFilter<"CandidateProfile"> | string | null
    created_at?: DateTimeFilter<"CandidateProfile"> | Date | string
    updated_at?: DateTimeFilter<"CandidateProfile"> | Date | string
  }

  export type RecruiterProfileUpsertWithWhereUniqueWithoutStateInput = {
    where: RecruiterProfileWhereUniqueInput
    update: XOR<RecruiterProfileUpdateWithoutStateInput, RecruiterProfileUncheckedUpdateWithoutStateInput>
    create: XOR<RecruiterProfileCreateWithoutStateInput, RecruiterProfileUncheckedCreateWithoutStateInput>
  }

  export type RecruiterProfileUpdateWithWhereUniqueWithoutStateInput = {
    where: RecruiterProfileWhereUniqueInput
    data: XOR<RecruiterProfileUpdateWithoutStateInput, RecruiterProfileUncheckedUpdateWithoutStateInput>
  }

  export type RecruiterProfileUpdateManyWithWhereWithoutStateInput = {
    where: RecruiterProfileScalarWhereInput
    data: XOR<RecruiterProfileUpdateManyMutationInput, RecruiterProfileUncheckedUpdateManyWithoutStateInput>
  }

  export type RecruiterProfileScalarWhereInput = {
    AND?: RecruiterProfileScalarWhereInput | RecruiterProfileScalarWhereInput[]
    OR?: RecruiterProfileScalarWhereInput[]
    NOT?: RecruiterProfileScalarWhereInput | RecruiterProfileScalarWhereInput[]
    user_id?: BigIntFilter<"RecruiterProfile"> | bigint | number
    designation?: StringNullableFilter<"RecruiterProfile"> | string | null
    state_id?: IntNullableFilter<"RecruiterProfile"> | number | null
    city_id?: IntNullableFilter<"RecruiterProfile"> | number | null
    created_at?: DateTimeFilter<"RecruiterProfile"> | Date | string
    updated_at?: DateTimeFilter<"RecruiterProfile"> | Date | string
  }

  export type JobPostUpsertWithWhereUniqueWithoutStateInput = {
    where: JobPostWhereUniqueInput
    update: XOR<JobPostUpdateWithoutStateInput, JobPostUncheckedUpdateWithoutStateInput>
    create: XOR<JobPostCreateWithoutStateInput, JobPostUncheckedCreateWithoutStateInput>
  }

  export type JobPostUpdateWithWhereUniqueWithoutStateInput = {
    where: JobPostWhereUniqueInput
    data: XOR<JobPostUpdateWithoutStateInput, JobPostUncheckedUpdateWithoutStateInput>
  }

  export type JobPostUpdateManyWithWhereWithoutStateInput = {
    where: JobPostScalarWhereInput
    data: XOR<JobPostUpdateManyMutationInput, JobPostUncheckedUpdateManyWithoutStateInput>
  }

  export type StateCreateWithoutCitiesInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    country: CountryCreateNestedOneWithoutStatesInput
    candidate_profiles?: CandidateProfileCreateNestedManyWithoutStateInput
    recruiter_profiles?: RecruiterProfileCreateNestedManyWithoutStateInput
    job_posts?: JobPostCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutCitiesInput = {
    id?: number
    country_id: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    candidate_profiles?: CandidateProfileUncheckedCreateNestedManyWithoutStateInput
    recruiter_profiles?: RecruiterProfileUncheckedCreateNestedManyWithoutStateInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutCitiesInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutCitiesInput, StateUncheckedCreateWithoutCitiesInput>
  }

  export type CandidateProfileCreateWithoutCityInput = {
    qualification?: string | null
    experience_years?: number | null
    resume_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutCandidate_profileInput
    state?: StateCreateNestedOneWithoutCandidate_profilesInput
  }

  export type CandidateProfileUncheckedCreateWithoutCityInput = {
    user_id: bigint | number
    state_id?: number | null
    qualification?: string | null
    experience_years?: number | null
    resume_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CandidateProfileCreateOrConnectWithoutCityInput = {
    where: CandidateProfileWhereUniqueInput
    create: XOR<CandidateProfileCreateWithoutCityInput, CandidateProfileUncheckedCreateWithoutCityInput>
  }

  export type CandidateProfileCreateManyCityInputEnvelope = {
    data: CandidateProfileCreateManyCityInput | CandidateProfileCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type RecruiterProfileCreateWithoutCityInput = {
    designation?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutRecruiter_profileInput
    state?: StateCreateNestedOneWithoutRecruiter_profilesInput
  }

  export type RecruiterProfileUncheckedCreateWithoutCityInput = {
    user_id: bigint | number
    designation?: string | null
    state_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RecruiterProfileCreateOrConnectWithoutCityInput = {
    where: RecruiterProfileWhereUniqueInput
    create: XOR<RecruiterProfileCreateWithoutCityInput, RecruiterProfileUncheckedCreateWithoutCityInput>
  }

  export type RecruiterProfileCreateManyCityInputEnvelope = {
    data: RecruiterProfileCreateManyCityInput | RecruiterProfileCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type JobPostCreateWithoutCityInput = {
    id?: bigint | number
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    recruiter?: UserCreateNestedOneWithoutJob_postsInput
    currency_rel?: CurrencyCreateNestedOneWithoutJob_postsInput
    state?: StateCreateNestedOneWithoutJob_postsInput
    job_skills?: JobSkillCreateNestedManyWithoutJobInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
  }

  export type JobPostUncheckedCreateWithoutCityInput = {
    id?: bigint | number
    recruiter_id?: bigint | number | null
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    currency_id?: number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    state_id?: number | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    job_skills?: JobSkillUncheckedCreateNestedManyWithoutJobInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobPostCreateOrConnectWithoutCityInput = {
    where: JobPostWhereUniqueInput
    create: XOR<JobPostCreateWithoutCityInput, JobPostUncheckedCreateWithoutCityInput>
  }

  export type JobPostCreateManyCityInputEnvelope = {
    data: JobPostCreateManyCityInput | JobPostCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type StateUpsertWithoutCitiesInput = {
    update: XOR<StateUpdateWithoutCitiesInput, StateUncheckedUpdateWithoutCitiesInput>
    create: XOR<StateCreateWithoutCitiesInput, StateUncheckedCreateWithoutCitiesInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutCitiesInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutCitiesInput, StateUncheckedUpdateWithoutCitiesInput>
  }

  export type StateUpdateWithoutCitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutStatesNestedInput
    candidate_profiles?: CandidateProfileUpdateManyWithoutStateNestedInput
    recruiter_profiles?: RecruiterProfileUpdateManyWithoutStateNestedInput
    job_posts?: JobPostUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutCitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_profiles?: CandidateProfileUncheckedUpdateManyWithoutStateNestedInput
    recruiter_profiles?: RecruiterProfileUncheckedUpdateManyWithoutStateNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutStateNestedInput
  }

  export type CandidateProfileUpsertWithWhereUniqueWithoutCityInput = {
    where: CandidateProfileWhereUniqueInput
    update: XOR<CandidateProfileUpdateWithoutCityInput, CandidateProfileUncheckedUpdateWithoutCityInput>
    create: XOR<CandidateProfileCreateWithoutCityInput, CandidateProfileUncheckedCreateWithoutCityInput>
  }

  export type CandidateProfileUpdateWithWhereUniqueWithoutCityInput = {
    where: CandidateProfileWhereUniqueInput
    data: XOR<CandidateProfileUpdateWithoutCityInput, CandidateProfileUncheckedUpdateWithoutCityInput>
  }

  export type CandidateProfileUpdateManyWithWhereWithoutCityInput = {
    where: CandidateProfileScalarWhereInput
    data: XOR<CandidateProfileUpdateManyMutationInput, CandidateProfileUncheckedUpdateManyWithoutCityInput>
  }

  export type RecruiterProfileUpsertWithWhereUniqueWithoutCityInput = {
    where: RecruiterProfileWhereUniqueInput
    update: XOR<RecruiterProfileUpdateWithoutCityInput, RecruiterProfileUncheckedUpdateWithoutCityInput>
    create: XOR<RecruiterProfileCreateWithoutCityInput, RecruiterProfileUncheckedCreateWithoutCityInput>
  }

  export type RecruiterProfileUpdateWithWhereUniqueWithoutCityInput = {
    where: RecruiterProfileWhereUniqueInput
    data: XOR<RecruiterProfileUpdateWithoutCityInput, RecruiterProfileUncheckedUpdateWithoutCityInput>
  }

  export type RecruiterProfileUpdateManyWithWhereWithoutCityInput = {
    where: RecruiterProfileScalarWhereInput
    data: XOR<RecruiterProfileUpdateManyMutationInput, RecruiterProfileUncheckedUpdateManyWithoutCityInput>
  }

  export type JobPostUpsertWithWhereUniqueWithoutCityInput = {
    where: JobPostWhereUniqueInput
    update: XOR<JobPostUpdateWithoutCityInput, JobPostUncheckedUpdateWithoutCityInput>
    create: XOR<JobPostCreateWithoutCityInput, JobPostUncheckedCreateWithoutCityInput>
  }

  export type JobPostUpdateWithWhereUniqueWithoutCityInput = {
    where: JobPostWhereUniqueInput
    data: XOR<JobPostUpdateWithoutCityInput, JobPostUncheckedUpdateWithoutCityInput>
  }

  export type JobPostUpdateManyWithWhereWithoutCityInput = {
    where: JobPostScalarWhereInput
    data: XOR<JobPostUpdateManyMutationInput, JobPostUncheckedUpdateManyWithoutCityInput>
  }

  export type RoleCreateWithoutUsersInput = {
    role_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    role_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type CountryCreateWithoutUsersInput = {
    name: string
    iso_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    states?: StateCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    iso_code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    states?: StateUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutUsersInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutUsersInput, CountryUncheckedCreateWithoutUsersInput>
  }

  export type CandidateProfileCreateWithoutUserInput = {
    qualification?: string | null
    experience_years?: number | null
    resume_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    state?: StateCreateNestedOneWithoutCandidate_profilesInput
    city?: CityCreateNestedOneWithoutCandidate_profilesInput
  }

  export type CandidateProfileUncheckedCreateWithoutUserInput = {
    state_id?: number | null
    city_id?: number | null
    qualification?: string | null
    experience_years?: number | null
    resume_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CandidateProfileCreateOrConnectWithoutUserInput = {
    where: CandidateProfileWhereUniqueInput
    create: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
  }

  export type RecruiterProfileCreateWithoutUserInput = {
    designation?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    state?: StateCreateNestedOneWithoutRecruiter_profilesInput
    city?: CityCreateNestedOneWithoutRecruiter_profilesInput
  }

  export type RecruiterProfileUncheckedCreateWithoutUserInput = {
    designation?: string | null
    state_id?: number | null
    city_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RecruiterProfileCreateOrConnectWithoutUserInput = {
    where: RecruiterProfileWhereUniqueInput
    create: XOR<RecruiterProfileCreateWithoutUserInput, RecruiterProfileUncheckedCreateWithoutUserInput>
  }

  export type JobPostCreateWithoutRecruiterInput = {
    id?: bigint | number
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    currency_rel?: CurrencyCreateNestedOneWithoutJob_postsInput
    state?: StateCreateNestedOneWithoutJob_postsInput
    city?: CityCreateNestedOneWithoutJob_postsInput
    job_skills?: JobSkillCreateNestedManyWithoutJobInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
  }

  export type JobPostUncheckedCreateWithoutRecruiterInput = {
    id?: bigint | number
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    currency_id?: number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    state_id?: number | null
    city_id?: number | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    job_skills?: JobSkillUncheckedCreateNestedManyWithoutJobInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobPostCreateOrConnectWithoutRecruiterInput = {
    where: JobPostWhereUniqueInput
    create: XOR<JobPostCreateWithoutRecruiterInput, JobPostUncheckedCreateWithoutRecruiterInput>
  }

  export type JobPostCreateManyRecruiterInputEnvelope = {
    data: JobPostCreateManyRecruiterInput | JobPostCreateManyRecruiterInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutCandidateInput = {
    id?: bigint | number
    applied_at?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    job?: JobPostCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutCandidateInput = {
    id?: bigint | number
    job_id?: bigint | number | null
    applied_at?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutCandidateInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutCandidateInput, ApplicationUncheckedCreateWithoutCandidateInput>
  }

  export type ApplicationCreateManyCandidateInputEnvelope = {
    data: ApplicationCreateManyCandidateInput | ApplicationCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type CandidateSkillCreateWithoutCandidateInput = {
    skill: SkillCreateNestedOneWithoutCandidate_skillsInput
  }

  export type CandidateSkillUncheckedCreateWithoutCandidateInput = {
    skill_id: number
  }

  export type CandidateSkillCreateOrConnectWithoutCandidateInput = {
    where: CandidateSkillWhereUniqueInput
    create: XOR<CandidateSkillCreateWithoutCandidateInput, CandidateSkillUncheckedCreateWithoutCandidateInput>
  }

  export type CandidateSkillCreateManyCandidateInputEnvelope = {
    data: CandidateSkillCreateManyCandidateInput | CandidateSkillCreateManyCandidateInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUpsertWithoutUsersInput = {
    update: XOR<CountryUpdateWithoutUsersInput, CountryUncheckedUpdateWithoutUsersInput>
    create: XOR<CountryCreateWithoutUsersInput, CountryUncheckedCreateWithoutUsersInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutUsersInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutUsersInput, CountryUncheckedUpdateWithoutUsersInput>
  }

  export type CountryUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    iso_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: StateUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iso_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: StateUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CandidateProfileUpsertWithoutUserInput = {
    update: XOR<CandidateProfileUpdateWithoutUserInput, CandidateProfileUncheckedUpdateWithoutUserInput>
    create: XOR<CandidateProfileCreateWithoutUserInput, CandidateProfileUncheckedCreateWithoutUserInput>
    where?: CandidateProfileWhereInput
  }

  export type CandidateProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: CandidateProfileWhereInput
    data: XOR<CandidateProfileUpdateWithoutUserInput, CandidateProfileUncheckedUpdateWithoutUserInput>
  }

  export type CandidateProfileUpdateWithoutUserInput = {
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StateUpdateOneWithoutCandidate_profilesNestedInput
    city?: CityUpdateOneWithoutCandidate_profilesNestedInput
  }

  export type CandidateProfileUncheckedUpdateWithoutUserInput = {
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruiterProfileUpsertWithoutUserInput = {
    update: XOR<RecruiterProfileUpdateWithoutUserInput, RecruiterProfileUncheckedUpdateWithoutUserInput>
    create: XOR<RecruiterProfileCreateWithoutUserInput, RecruiterProfileUncheckedCreateWithoutUserInput>
    where?: RecruiterProfileWhereInput
  }

  export type RecruiterProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: RecruiterProfileWhereInput
    data: XOR<RecruiterProfileUpdateWithoutUserInput, RecruiterProfileUncheckedUpdateWithoutUserInput>
  }

  export type RecruiterProfileUpdateWithoutUserInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StateUpdateOneWithoutRecruiter_profilesNestedInput
    city?: CityUpdateOneWithoutRecruiter_profilesNestedInput
  }

  export type RecruiterProfileUncheckedUpdateWithoutUserInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostUpsertWithWhereUniqueWithoutRecruiterInput = {
    where: JobPostWhereUniqueInput
    update: XOR<JobPostUpdateWithoutRecruiterInput, JobPostUncheckedUpdateWithoutRecruiterInput>
    create: XOR<JobPostCreateWithoutRecruiterInput, JobPostUncheckedCreateWithoutRecruiterInput>
  }

  export type JobPostUpdateWithWhereUniqueWithoutRecruiterInput = {
    where: JobPostWhereUniqueInput
    data: XOR<JobPostUpdateWithoutRecruiterInput, JobPostUncheckedUpdateWithoutRecruiterInput>
  }

  export type JobPostUpdateManyWithWhereWithoutRecruiterInput = {
    where: JobPostScalarWhereInput
    data: XOR<JobPostUpdateManyMutationInput, JobPostUncheckedUpdateManyWithoutRecruiterInput>
  }

  export type ApplicationUpsertWithWhereUniqueWithoutCandidateInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutCandidateInput, ApplicationUncheckedUpdateWithoutCandidateInput>
    create: XOR<ApplicationCreateWithoutCandidateInput, ApplicationUncheckedCreateWithoutCandidateInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutCandidateInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutCandidateInput, ApplicationUncheckedUpdateWithoutCandidateInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutCandidateInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutCandidateInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: BigIntFilter<"Application"> | bigint | number
    job_id?: BigIntNullableFilter<"Application"> | bigint | number | null
    candidate_id?: BigIntNullableFilter<"Application"> | bigint | number | null
    applied_at?: DateTimeNullableFilter<"Application"> | Date | string | null
    status?: EnumApplicationStatusNullableFilter<"Application"> | $Enums.ApplicationStatus | null
    created_at?: DateTimeFilter<"Application"> | Date | string
    updated_at?: DateTimeFilter<"Application"> | Date | string
  }

  export type CandidateSkillUpsertWithWhereUniqueWithoutCandidateInput = {
    where: CandidateSkillWhereUniqueInput
    update: XOR<CandidateSkillUpdateWithoutCandidateInput, CandidateSkillUncheckedUpdateWithoutCandidateInput>
    create: XOR<CandidateSkillCreateWithoutCandidateInput, CandidateSkillUncheckedCreateWithoutCandidateInput>
  }

  export type CandidateSkillUpdateWithWhereUniqueWithoutCandidateInput = {
    where: CandidateSkillWhereUniqueInput
    data: XOR<CandidateSkillUpdateWithoutCandidateInput, CandidateSkillUncheckedUpdateWithoutCandidateInput>
  }

  export type CandidateSkillUpdateManyWithWhereWithoutCandidateInput = {
    where: CandidateSkillScalarWhereInput
    data: XOR<CandidateSkillUpdateManyMutationInput, CandidateSkillUncheckedUpdateManyWithoutCandidateInput>
  }

  export type UserCreateWithoutCandidate_profileInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    country?: CountryCreateNestedOneWithoutUsersInput
    recruiter_profile?: RecruiterProfileCreateNestedOneWithoutUserInput
    job_posts?: JobPostCreateNestedManyWithoutRecruiterInput
    applications?: ApplicationCreateNestedManyWithoutCandidateInput
    candidate_skills?: CandidateSkillCreateNestedManyWithoutCandidateInput
  }

  export type UserUncheckedCreateWithoutCandidate_profileInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    country_id?: number | null
    role_id: number
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    recruiter_profile?: RecruiterProfileUncheckedCreateNestedOneWithoutUserInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutRecruiterInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCandidateInput
    candidate_skills?: CandidateSkillUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type UserCreateOrConnectWithoutCandidate_profileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCandidate_profileInput, UserUncheckedCreateWithoutCandidate_profileInput>
  }

  export type StateCreateWithoutCandidate_profilesInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    country: CountryCreateNestedOneWithoutStatesInput
    cities?: CityCreateNestedManyWithoutStateInput
    recruiter_profiles?: RecruiterProfileCreateNestedManyWithoutStateInput
    job_posts?: JobPostCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutCandidate_profilesInput = {
    id?: number
    country_id: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    cities?: CityUncheckedCreateNestedManyWithoutStateInput
    recruiter_profiles?: RecruiterProfileUncheckedCreateNestedManyWithoutStateInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutCandidate_profilesInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutCandidate_profilesInput, StateUncheckedCreateWithoutCandidate_profilesInput>
  }

  export type CityCreateWithoutCandidate_profilesInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    state: StateCreateNestedOneWithoutCitiesInput
    recruiter_profiles?: RecruiterProfileCreateNestedManyWithoutCityInput
    job_posts?: JobPostCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutCandidate_profilesInput = {
    id?: number
    state_id: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    recruiter_profiles?: RecruiterProfileUncheckedCreateNestedManyWithoutCityInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutCandidate_profilesInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutCandidate_profilesInput, CityUncheckedCreateWithoutCandidate_profilesInput>
  }

  export type UserUpsertWithoutCandidate_profileInput = {
    update: XOR<UserUpdateWithoutCandidate_profileInput, UserUncheckedUpdateWithoutCandidate_profileInput>
    create: XOR<UserCreateWithoutCandidate_profileInput, UserUncheckedCreateWithoutCandidate_profileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCandidate_profileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCandidate_profileInput, UserUncheckedUpdateWithoutCandidate_profileInput>
  }

  export type UserUpdateWithoutCandidate_profileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    country?: CountryUpdateOneWithoutUsersNestedInput
    recruiter_profile?: RecruiterProfileUpdateOneWithoutUserNestedInput
    job_posts?: JobPostUpdateManyWithoutRecruiterNestedInput
    applications?: ApplicationUpdateManyWithoutCandidateNestedInput
    candidate_skills?: CandidateSkillUpdateManyWithoutCandidateNestedInput
  }

  export type UserUncheckedUpdateWithoutCandidate_profileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiter_profile?: RecruiterProfileUncheckedUpdateOneWithoutUserNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutRecruiterNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCandidateNestedInput
    candidate_skills?: CandidateSkillUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type StateUpsertWithoutCandidate_profilesInput = {
    update: XOR<StateUpdateWithoutCandidate_profilesInput, StateUncheckedUpdateWithoutCandidate_profilesInput>
    create: XOR<StateCreateWithoutCandidate_profilesInput, StateUncheckedCreateWithoutCandidate_profilesInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutCandidate_profilesInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutCandidate_profilesInput, StateUncheckedUpdateWithoutCandidate_profilesInput>
  }

  export type StateUpdateWithoutCandidate_profilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutStatesNestedInput
    cities?: CityUpdateManyWithoutStateNestedInput
    recruiter_profiles?: RecruiterProfileUpdateManyWithoutStateNestedInput
    job_posts?: JobPostUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutCandidate_profilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cities?: CityUncheckedUpdateManyWithoutStateNestedInput
    recruiter_profiles?: RecruiterProfileUncheckedUpdateManyWithoutStateNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutStateNestedInput
  }

  export type CityUpsertWithoutCandidate_profilesInput = {
    update: XOR<CityUpdateWithoutCandidate_profilesInput, CityUncheckedUpdateWithoutCandidate_profilesInput>
    create: XOR<CityCreateWithoutCandidate_profilesInput, CityUncheckedCreateWithoutCandidate_profilesInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutCandidate_profilesInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutCandidate_profilesInput, CityUncheckedUpdateWithoutCandidate_profilesInput>
  }

  export type CityUpdateWithoutCandidate_profilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StateUpdateOneRequiredWithoutCitiesNestedInput
    recruiter_profiles?: RecruiterProfileUpdateManyWithoutCityNestedInput
    job_posts?: JobPostUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutCandidate_profilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    state_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiter_profiles?: RecruiterProfileUncheckedUpdateManyWithoutCityNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutCityNestedInput
  }

  export type UserCreateWithoutRecruiter_profileInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    country?: CountryCreateNestedOneWithoutUsersInput
    candidate_profile?: CandidateProfileCreateNestedOneWithoutUserInput
    job_posts?: JobPostCreateNestedManyWithoutRecruiterInput
    applications?: ApplicationCreateNestedManyWithoutCandidateInput
    candidate_skills?: CandidateSkillCreateNestedManyWithoutCandidateInput
  }

  export type UserUncheckedCreateWithoutRecruiter_profileInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    country_id?: number | null
    role_id: number
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    candidate_profile?: CandidateProfileUncheckedCreateNestedOneWithoutUserInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutRecruiterInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCandidateInput
    candidate_skills?: CandidateSkillUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type UserCreateOrConnectWithoutRecruiter_profileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecruiter_profileInput, UserUncheckedCreateWithoutRecruiter_profileInput>
  }

  export type StateCreateWithoutRecruiter_profilesInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    country: CountryCreateNestedOneWithoutStatesInput
    cities?: CityCreateNestedManyWithoutStateInput
    candidate_profiles?: CandidateProfileCreateNestedManyWithoutStateInput
    job_posts?: JobPostCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutRecruiter_profilesInput = {
    id?: number
    country_id: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    cities?: CityUncheckedCreateNestedManyWithoutStateInput
    candidate_profiles?: CandidateProfileUncheckedCreateNestedManyWithoutStateInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutRecruiter_profilesInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutRecruiter_profilesInput, StateUncheckedCreateWithoutRecruiter_profilesInput>
  }

  export type CityCreateWithoutRecruiter_profilesInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    state: StateCreateNestedOneWithoutCitiesInput
    candidate_profiles?: CandidateProfileCreateNestedManyWithoutCityInput
    job_posts?: JobPostCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutRecruiter_profilesInput = {
    id?: number
    state_id: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    candidate_profiles?: CandidateProfileUncheckedCreateNestedManyWithoutCityInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutRecruiter_profilesInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutRecruiter_profilesInput, CityUncheckedCreateWithoutRecruiter_profilesInput>
  }

  export type UserUpsertWithoutRecruiter_profileInput = {
    update: XOR<UserUpdateWithoutRecruiter_profileInput, UserUncheckedUpdateWithoutRecruiter_profileInput>
    create: XOR<UserCreateWithoutRecruiter_profileInput, UserUncheckedCreateWithoutRecruiter_profileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecruiter_profileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecruiter_profileInput, UserUncheckedUpdateWithoutRecruiter_profileInput>
  }

  export type UserUpdateWithoutRecruiter_profileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    country?: CountryUpdateOneWithoutUsersNestedInput
    candidate_profile?: CandidateProfileUpdateOneWithoutUserNestedInput
    job_posts?: JobPostUpdateManyWithoutRecruiterNestedInput
    applications?: ApplicationUpdateManyWithoutCandidateNestedInput
    candidate_skills?: CandidateSkillUpdateManyWithoutCandidateNestedInput
  }

  export type UserUncheckedUpdateWithoutRecruiter_profileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_profile?: CandidateProfileUncheckedUpdateOneWithoutUserNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutRecruiterNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCandidateNestedInput
    candidate_skills?: CandidateSkillUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type StateUpsertWithoutRecruiter_profilesInput = {
    update: XOR<StateUpdateWithoutRecruiter_profilesInput, StateUncheckedUpdateWithoutRecruiter_profilesInput>
    create: XOR<StateCreateWithoutRecruiter_profilesInput, StateUncheckedCreateWithoutRecruiter_profilesInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutRecruiter_profilesInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutRecruiter_profilesInput, StateUncheckedUpdateWithoutRecruiter_profilesInput>
  }

  export type StateUpdateWithoutRecruiter_profilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutStatesNestedInput
    cities?: CityUpdateManyWithoutStateNestedInput
    candidate_profiles?: CandidateProfileUpdateManyWithoutStateNestedInput
    job_posts?: JobPostUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutRecruiter_profilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cities?: CityUncheckedUpdateManyWithoutStateNestedInput
    candidate_profiles?: CandidateProfileUncheckedUpdateManyWithoutStateNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutStateNestedInput
  }

  export type CityUpsertWithoutRecruiter_profilesInput = {
    update: XOR<CityUpdateWithoutRecruiter_profilesInput, CityUncheckedUpdateWithoutRecruiter_profilesInput>
    create: XOR<CityCreateWithoutRecruiter_profilesInput, CityUncheckedCreateWithoutRecruiter_profilesInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutRecruiter_profilesInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutRecruiter_profilesInput, CityUncheckedUpdateWithoutRecruiter_profilesInput>
  }

  export type CityUpdateWithoutRecruiter_profilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StateUpdateOneRequiredWithoutCitiesNestedInput
    candidate_profiles?: CandidateProfileUpdateManyWithoutCityNestedInput
    job_posts?: JobPostUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutRecruiter_profilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    state_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_profiles?: CandidateProfileUncheckedUpdateManyWithoutCityNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutCityNestedInput
  }

  export type UserCreateWithoutJob_postsInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    country?: CountryCreateNestedOneWithoutUsersInput
    candidate_profile?: CandidateProfileCreateNestedOneWithoutUserInput
    recruiter_profile?: RecruiterProfileCreateNestedOneWithoutUserInput
    applications?: ApplicationCreateNestedManyWithoutCandidateInput
    candidate_skills?: CandidateSkillCreateNestedManyWithoutCandidateInput
  }

  export type UserUncheckedCreateWithoutJob_postsInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    country_id?: number | null
    role_id: number
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    candidate_profile?: CandidateProfileUncheckedCreateNestedOneWithoutUserInput
    recruiter_profile?: RecruiterProfileUncheckedCreateNestedOneWithoutUserInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCandidateInput
    candidate_skills?: CandidateSkillUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type UserCreateOrConnectWithoutJob_postsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJob_postsInput, UserUncheckedCreateWithoutJob_postsInput>
  }

  export type CurrencyCreateWithoutJob_postsInput = {
    name: $Enums.CurrencyName
    code: $Enums.CurrencyCode
    symbol: $Enums.CurrencySymbol
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CurrencyUncheckedCreateWithoutJob_postsInput = {
    id?: number
    name: $Enums.CurrencyName
    code: $Enums.CurrencyCode
    symbol: $Enums.CurrencySymbol
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CurrencyCreateOrConnectWithoutJob_postsInput = {
    where: CurrencyWhereUniqueInput
    create: XOR<CurrencyCreateWithoutJob_postsInput, CurrencyUncheckedCreateWithoutJob_postsInput>
  }

  export type StateCreateWithoutJob_postsInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    country: CountryCreateNestedOneWithoutStatesInput
    cities?: CityCreateNestedManyWithoutStateInput
    candidate_profiles?: CandidateProfileCreateNestedManyWithoutStateInput
    recruiter_profiles?: RecruiterProfileCreateNestedManyWithoutStateInput
  }

  export type StateUncheckedCreateWithoutJob_postsInput = {
    id?: number
    country_id: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    cities?: CityUncheckedCreateNestedManyWithoutStateInput
    candidate_profiles?: CandidateProfileUncheckedCreateNestedManyWithoutStateInput
    recruiter_profiles?: RecruiterProfileUncheckedCreateNestedManyWithoutStateInput
  }

  export type StateCreateOrConnectWithoutJob_postsInput = {
    where: StateWhereUniqueInput
    create: XOR<StateCreateWithoutJob_postsInput, StateUncheckedCreateWithoutJob_postsInput>
  }

  export type CityCreateWithoutJob_postsInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    state: StateCreateNestedOneWithoutCitiesInput
    candidate_profiles?: CandidateProfileCreateNestedManyWithoutCityInput
    recruiter_profiles?: RecruiterProfileCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutJob_postsInput = {
    id?: number
    state_id: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    candidate_profiles?: CandidateProfileUncheckedCreateNestedManyWithoutCityInput
    recruiter_profiles?: RecruiterProfileUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutJob_postsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutJob_postsInput, CityUncheckedCreateWithoutJob_postsInput>
  }

  export type JobSkillCreateWithoutJobInput = {
    skill: SkillCreateNestedOneWithoutJob_skillsInput
  }

  export type JobSkillUncheckedCreateWithoutJobInput = {
    skill_id: number
  }

  export type JobSkillCreateOrConnectWithoutJobInput = {
    where: JobSkillWhereUniqueInput
    create: XOR<JobSkillCreateWithoutJobInput, JobSkillUncheckedCreateWithoutJobInput>
  }

  export type JobSkillCreateManyJobInputEnvelope = {
    data: JobSkillCreateManyJobInput | JobSkillCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutJobInput = {
    id?: bigint | number
    applied_at?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    candidate?: UserCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutJobInput = {
    id?: bigint | number
    candidate_id?: bigint | number | null
    applied_at?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationCreateOrConnectWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput>
  }

  export type ApplicationCreateManyJobInputEnvelope = {
    data: ApplicationCreateManyJobInput | ApplicationCreateManyJobInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutJob_postsInput = {
    update: XOR<UserUpdateWithoutJob_postsInput, UserUncheckedUpdateWithoutJob_postsInput>
    create: XOR<UserCreateWithoutJob_postsInput, UserUncheckedCreateWithoutJob_postsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJob_postsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJob_postsInput, UserUncheckedUpdateWithoutJob_postsInput>
  }

  export type UserUpdateWithoutJob_postsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    country?: CountryUpdateOneWithoutUsersNestedInput
    candidate_profile?: CandidateProfileUpdateOneWithoutUserNestedInput
    recruiter_profile?: RecruiterProfileUpdateOneWithoutUserNestedInput
    applications?: ApplicationUpdateManyWithoutCandidateNestedInput
    candidate_skills?: CandidateSkillUpdateManyWithoutCandidateNestedInput
  }

  export type UserUncheckedUpdateWithoutJob_postsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_profile?: CandidateProfileUncheckedUpdateOneWithoutUserNestedInput
    recruiter_profile?: RecruiterProfileUncheckedUpdateOneWithoutUserNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCandidateNestedInput
    candidate_skills?: CandidateSkillUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type CurrencyUpsertWithoutJob_postsInput = {
    update: XOR<CurrencyUpdateWithoutJob_postsInput, CurrencyUncheckedUpdateWithoutJob_postsInput>
    create: XOR<CurrencyCreateWithoutJob_postsInput, CurrencyUncheckedCreateWithoutJob_postsInput>
    where?: CurrencyWhereInput
  }

  export type CurrencyUpdateToOneWithWhereWithoutJob_postsInput = {
    where?: CurrencyWhereInput
    data: XOR<CurrencyUpdateWithoutJob_postsInput, CurrencyUncheckedUpdateWithoutJob_postsInput>
  }

  export type CurrencyUpdateWithoutJob_postsInput = {
    name?: EnumCurrencyNameFieldUpdateOperationsInput | $Enums.CurrencyName
    code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    symbol?: EnumCurrencySymbolFieldUpdateOperationsInput | $Enums.CurrencySymbol
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrencyUncheckedUpdateWithoutJob_postsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumCurrencyNameFieldUpdateOperationsInput | $Enums.CurrencyName
    code?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    symbol?: EnumCurrencySymbolFieldUpdateOperationsInput | $Enums.CurrencySymbol
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StateUpsertWithoutJob_postsInput = {
    update: XOR<StateUpdateWithoutJob_postsInput, StateUncheckedUpdateWithoutJob_postsInput>
    create: XOR<StateCreateWithoutJob_postsInput, StateUncheckedCreateWithoutJob_postsInput>
    where?: StateWhereInput
  }

  export type StateUpdateToOneWithWhereWithoutJob_postsInput = {
    where?: StateWhereInput
    data: XOR<StateUpdateWithoutJob_postsInput, StateUncheckedUpdateWithoutJob_postsInput>
  }

  export type StateUpdateWithoutJob_postsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutStatesNestedInput
    cities?: CityUpdateManyWithoutStateNestedInput
    candidate_profiles?: CandidateProfileUpdateManyWithoutStateNestedInput
    recruiter_profiles?: RecruiterProfileUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutJob_postsInput = {
    id?: IntFieldUpdateOperationsInput | number
    country_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cities?: CityUncheckedUpdateManyWithoutStateNestedInput
    candidate_profiles?: CandidateProfileUncheckedUpdateManyWithoutStateNestedInput
    recruiter_profiles?: RecruiterProfileUncheckedUpdateManyWithoutStateNestedInput
  }

  export type CityUpsertWithoutJob_postsInput = {
    update: XOR<CityUpdateWithoutJob_postsInput, CityUncheckedUpdateWithoutJob_postsInput>
    create: XOR<CityCreateWithoutJob_postsInput, CityUncheckedCreateWithoutJob_postsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutJob_postsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutJob_postsInput, CityUncheckedUpdateWithoutJob_postsInput>
  }

  export type CityUpdateWithoutJob_postsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: StateUpdateOneRequiredWithoutCitiesNestedInput
    candidate_profiles?: CandidateProfileUpdateManyWithoutCityNestedInput
    recruiter_profiles?: RecruiterProfileUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutJob_postsInput = {
    id?: IntFieldUpdateOperationsInput | number
    state_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_profiles?: CandidateProfileUncheckedUpdateManyWithoutCityNestedInput
    recruiter_profiles?: RecruiterProfileUncheckedUpdateManyWithoutCityNestedInput
  }

  export type JobSkillUpsertWithWhereUniqueWithoutJobInput = {
    where: JobSkillWhereUniqueInput
    update: XOR<JobSkillUpdateWithoutJobInput, JobSkillUncheckedUpdateWithoutJobInput>
    create: XOR<JobSkillCreateWithoutJobInput, JobSkillUncheckedCreateWithoutJobInput>
  }

  export type JobSkillUpdateWithWhereUniqueWithoutJobInput = {
    where: JobSkillWhereUniqueInput
    data: XOR<JobSkillUpdateWithoutJobInput, JobSkillUncheckedUpdateWithoutJobInput>
  }

  export type JobSkillUpdateManyWithWhereWithoutJobInput = {
    where: JobSkillScalarWhereInput
    data: XOR<JobSkillUpdateManyMutationInput, JobSkillUncheckedUpdateManyWithoutJobInput>
  }

  export type ApplicationUpsertWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutJobInput, ApplicationUncheckedUpdateWithoutJobInput>
    create: XOR<ApplicationCreateWithoutJobInput, ApplicationUncheckedCreateWithoutJobInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutJobInput, ApplicationUncheckedUpdateWithoutJobInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutJobInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutJobInput>
  }

  export type JobPostCreateWithoutJob_skillsInput = {
    id?: bigint | number
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    recruiter?: UserCreateNestedOneWithoutJob_postsInput
    currency_rel?: CurrencyCreateNestedOneWithoutJob_postsInput
    state?: StateCreateNestedOneWithoutJob_postsInput
    city?: CityCreateNestedOneWithoutJob_postsInput
    applications?: ApplicationCreateNestedManyWithoutJobInput
  }

  export type JobPostUncheckedCreateWithoutJob_skillsInput = {
    id?: bigint | number
    recruiter_id?: bigint | number | null
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    currency_id?: number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    state_id?: number | null
    city_id?: number | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobPostCreateOrConnectWithoutJob_skillsInput = {
    where: JobPostWhereUniqueInput
    create: XOR<JobPostCreateWithoutJob_skillsInput, JobPostUncheckedCreateWithoutJob_skillsInput>
  }

  export type SkillCreateWithoutJob_skillsInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    candidate_skills?: CandidateSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutJob_skillsInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    candidate_skills?: CandidateSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutJob_skillsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutJob_skillsInput, SkillUncheckedCreateWithoutJob_skillsInput>
  }

  export type JobPostUpsertWithoutJob_skillsInput = {
    update: XOR<JobPostUpdateWithoutJob_skillsInput, JobPostUncheckedUpdateWithoutJob_skillsInput>
    create: XOR<JobPostCreateWithoutJob_skillsInput, JobPostUncheckedCreateWithoutJob_skillsInput>
    where?: JobPostWhereInput
  }

  export type JobPostUpdateToOneWithWhereWithoutJob_skillsInput = {
    where?: JobPostWhereInput
    data: XOR<JobPostUpdateWithoutJob_skillsInput, JobPostUncheckedUpdateWithoutJob_skillsInput>
  }

  export type JobPostUpdateWithoutJob_skillsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiter?: UserUpdateOneWithoutJob_postsNestedInput
    currency_rel?: CurrencyUpdateOneWithoutJob_postsNestedInput
    state?: StateUpdateOneWithoutJob_postsNestedInput
    city?: CityUpdateOneWithoutJob_postsNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobPostUncheckedUpdateWithoutJob_skillsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recruiter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type SkillUpsertWithoutJob_skillsInput = {
    update: XOR<SkillUpdateWithoutJob_skillsInput, SkillUncheckedUpdateWithoutJob_skillsInput>
    create: XOR<SkillCreateWithoutJob_skillsInput, SkillUncheckedCreateWithoutJob_skillsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutJob_skillsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutJob_skillsInput, SkillUncheckedUpdateWithoutJob_skillsInput>
  }

  export type SkillUpdateWithoutJob_skillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_skills?: CandidateSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutJob_skillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_skills?: CandidateSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type UserCreateWithoutCandidate_skillsInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    country?: CountryCreateNestedOneWithoutUsersInput
    candidate_profile?: CandidateProfileCreateNestedOneWithoutUserInput
    recruiter_profile?: RecruiterProfileCreateNestedOneWithoutUserInput
    job_posts?: JobPostCreateNestedManyWithoutRecruiterInput
    applications?: ApplicationCreateNestedManyWithoutCandidateInput
  }

  export type UserUncheckedCreateWithoutCandidate_skillsInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    country_id?: number | null
    role_id: number
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    candidate_profile?: CandidateProfileUncheckedCreateNestedOneWithoutUserInput
    recruiter_profile?: RecruiterProfileUncheckedCreateNestedOneWithoutUserInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutRecruiterInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type UserCreateOrConnectWithoutCandidate_skillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCandidate_skillsInput, UserUncheckedCreateWithoutCandidate_skillsInput>
  }

  export type SkillCreateWithoutCandidate_skillsInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    job_skills?: JobSkillCreateNestedManyWithoutSkillInput
  }

  export type SkillUncheckedCreateWithoutCandidate_skillsInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    job_skills?: JobSkillUncheckedCreateNestedManyWithoutSkillInput
  }

  export type SkillCreateOrConnectWithoutCandidate_skillsInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutCandidate_skillsInput, SkillUncheckedCreateWithoutCandidate_skillsInput>
  }

  export type UserUpsertWithoutCandidate_skillsInput = {
    update: XOR<UserUpdateWithoutCandidate_skillsInput, UserUncheckedUpdateWithoutCandidate_skillsInput>
    create: XOR<UserCreateWithoutCandidate_skillsInput, UserUncheckedCreateWithoutCandidate_skillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCandidate_skillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCandidate_skillsInput, UserUncheckedUpdateWithoutCandidate_skillsInput>
  }

  export type UserUpdateWithoutCandidate_skillsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    country?: CountryUpdateOneWithoutUsersNestedInput
    candidate_profile?: CandidateProfileUpdateOneWithoutUserNestedInput
    recruiter_profile?: RecruiterProfileUpdateOneWithoutUserNestedInput
    job_posts?: JobPostUpdateManyWithoutRecruiterNestedInput
    applications?: ApplicationUpdateManyWithoutCandidateNestedInput
  }

  export type UserUncheckedUpdateWithoutCandidate_skillsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_profile?: CandidateProfileUncheckedUpdateOneWithoutUserNestedInput
    recruiter_profile?: RecruiterProfileUncheckedUpdateOneWithoutUserNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutRecruiterNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type SkillUpsertWithoutCandidate_skillsInput = {
    update: XOR<SkillUpdateWithoutCandidate_skillsInput, SkillUncheckedUpdateWithoutCandidate_skillsInput>
    create: XOR<SkillCreateWithoutCandidate_skillsInput, SkillUncheckedCreateWithoutCandidate_skillsInput>
    where?: SkillWhereInput
  }

  export type SkillUpdateToOneWithWhereWithoutCandidate_skillsInput = {
    where?: SkillWhereInput
    data: XOR<SkillUpdateWithoutCandidate_skillsInput, SkillUncheckedUpdateWithoutCandidate_skillsInput>
  }

  export type SkillUpdateWithoutCandidate_skillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job_skills?: JobSkillUpdateManyWithoutSkillNestedInput
  }

  export type SkillUncheckedUpdateWithoutCandidate_skillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job_skills?: JobSkillUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type JobPostCreateWithoutApplicationsInput = {
    id?: bigint | number
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    recruiter?: UserCreateNestedOneWithoutJob_postsInput
    currency_rel?: CurrencyCreateNestedOneWithoutJob_postsInput
    state?: StateCreateNestedOneWithoutJob_postsInput
    city?: CityCreateNestedOneWithoutJob_postsInput
    job_skills?: JobSkillCreateNestedManyWithoutJobInput
  }

  export type JobPostUncheckedCreateWithoutApplicationsInput = {
    id?: bigint | number
    recruiter_id?: bigint | number | null
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    currency_id?: number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    state_id?: number | null
    city_id?: number | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
    job_skills?: JobSkillUncheckedCreateNestedManyWithoutJobInput
  }

  export type JobPostCreateOrConnectWithoutApplicationsInput = {
    where: JobPostWhereUniqueInput
    create: XOR<JobPostCreateWithoutApplicationsInput, JobPostUncheckedCreateWithoutApplicationsInput>
  }

  export type UserCreateWithoutApplicationsInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    country?: CountryCreateNestedOneWithoutUsersInput
    candidate_profile?: CandidateProfileCreateNestedOneWithoutUserInput
    recruiter_profile?: RecruiterProfileCreateNestedOneWithoutUserInput
    job_posts?: JobPostCreateNestedManyWithoutRecruiterInput
    candidate_skills?: CandidateSkillCreateNestedManyWithoutCandidateInput
  }

  export type UserUncheckedCreateWithoutApplicationsInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    country_id?: number | null
    role_id: number
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    candidate_profile?: CandidateProfileUncheckedCreateNestedOneWithoutUserInput
    recruiter_profile?: RecruiterProfileUncheckedCreateNestedOneWithoutUserInput
    job_posts?: JobPostUncheckedCreateNestedManyWithoutRecruiterInput
    candidate_skills?: CandidateSkillUncheckedCreateNestedManyWithoutCandidateInput
  }

  export type UserCreateOrConnectWithoutApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
  }

  export type JobPostUpsertWithoutApplicationsInput = {
    update: XOR<JobPostUpdateWithoutApplicationsInput, JobPostUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobPostCreateWithoutApplicationsInput, JobPostUncheckedCreateWithoutApplicationsInput>
    where?: JobPostWhereInput
  }

  export type JobPostUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobPostWhereInput
    data: XOR<JobPostUpdateWithoutApplicationsInput, JobPostUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobPostUpdateWithoutApplicationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiter?: UserUpdateOneWithoutJob_postsNestedInput
    currency_rel?: CurrencyUpdateOneWithoutJob_postsNestedInput
    state?: StateUpdateOneWithoutJob_postsNestedInput
    city?: CityUpdateOneWithoutJob_postsNestedInput
    job_skills?: JobSkillUpdateManyWithoutJobNestedInput
  }

  export type JobPostUncheckedUpdateWithoutApplicationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recruiter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job_skills?: JobSkillUncheckedUpdateManyWithoutJobNestedInput
  }

  export type UserUpsertWithoutApplicationsInput = {
    update: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UserCreateWithoutApplicationsInput, UserUncheckedCreateWithoutApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApplicationsInput, UserUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateWithoutApplicationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    country?: CountryUpdateOneWithoutUsersNestedInput
    candidate_profile?: CandidateProfileUpdateOneWithoutUserNestedInput
    recruiter_profile?: RecruiterProfileUpdateOneWithoutUserNestedInput
    job_posts?: JobPostUpdateManyWithoutRecruiterNestedInput
    candidate_skills?: CandidateSkillUpdateManyWithoutCandidateNestedInput
  }

  export type UserUncheckedUpdateWithoutApplicationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_profile?: CandidateProfileUncheckedUpdateOneWithoutUserNestedInput
    recruiter_profile?: RecruiterProfileUncheckedUpdateOneWithoutUserNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutRecruiterNestedInput
    candidate_skills?: CandidateSkillUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    country_id?: number | null
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneWithoutUsersNestedInput
    candidate_profile?: CandidateProfileUpdateOneWithoutUserNestedInput
    recruiter_profile?: RecruiterProfileUpdateOneWithoutUserNestedInput
    job_posts?: JobPostUpdateManyWithoutRecruiterNestedInput
    applications?: ApplicationUpdateManyWithoutCandidateNestedInput
    candidate_skills?: CandidateSkillUpdateManyWithoutCandidateNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_profile?: CandidateProfileUncheckedUpdateOneWithoutUserNestedInput
    recruiter_profile?: RecruiterProfileUncheckedUpdateOneWithoutUserNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutRecruiterNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCandidateNestedInput
    candidate_skills?: CandidateSkillUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    country_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobSkillCreateManySkillInput = {
    job_id: bigint | number
  }

  export type CandidateSkillCreateManySkillInput = {
    candidate_id: bigint | number
  }

  export type JobSkillUpdateWithoutSkillInput = {
    job?: JobPostUpdateOneRequiredWithoutJob_skillsNestedInput
  }

  export type JobSkillUncheckedUpdateWithoutSkillInput = {
    job_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type JobSkillUncheckedUpdateManyWithoutSkillInput = {
    job_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CandidateSkillUpdateWithoutSkillInput = {
    candidate?: UserUpdateOneRequiredWithoutCandidate_skillsNestedInput
  }

  export type CandidateSkillUncheckedUpdateWithoutSkillInput = {
    candidate_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CandidateSkillUncheckedUpdateManyWithoutSkillInput = {
    candidate_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type JobPostCreateManyCurrency_relInput = {
    id?: bigint | number
    recruiter_id?: bigint | number | null
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    state_id?: number | null
    city_id?: number | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type JobPostUpdateWithoutCurrency_relInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiter?: UserUpdateOneWithoutJob_postsNestedInput
    state?: StateUpdateOneWithoutJob_postsNestedInput
    city?: CityUpdateOneWithoutJob_postsNestedInput
    job_skills?: JobSkillUpdateManyWithoutJobNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobPostUncheckedUpdateWithoutCurrency_relInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recruiter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job_skills?: JobSkillUncheckedUpdateManyWithoutJobNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobPostUncheckedUpdateManyWithoutCurrency_relInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recruiter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StateCreateManyCountryInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateManyCountryInput = {
    id?: bigint | number
    name?: string | null
    email: string
    password?: string | null
    phone_number?: string | null
    role_id: number
    is_active?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StateUpdateWithoutCountryInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cities?: CityUpdateManyWithoutStateNestedInput
    candidate_profiles?: CandidateProfileUpdateManyWithoutStateNestedInput
    recruiter_profiles?: RecruiterProfileUpdateManyWithoutStateNestedInput
    job_posts?: JobPostUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cities?: CityUncheckedUpdateManyWithoutStateNestedInput
    candidate_profiles?: CandidateProfileUncheckedUpdateManyWithoutStateNestedInput
    recruiter_profiles?: RecruiterProfileUncheckedUpdateManyWithoutStateNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutStateNestedInput
  }

  export type StateUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutCountryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    candidate_profile?: CandidateProfileUpdateOneWithoutUserNestedInput
    recruiter_profile?: RecruiterProfileUpdateOneWithoutUserNestedInput
    job_posts?: JobPostUpdateManyWithoutRecruiterNestedInput
    applications?: ApplicationUpdateManyWithoutCandidateNestedInput
    candidate_skills?: CandidateSkillUpdateManyWithoutCandidateNestedInput
  }

  export type UserUncheckedUpdateWithoutCountryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_profile?: CandidateProfileUncheckedUpdateOneWithoutUserNestedInput
    recruiter_profile?: RecruiterProfileUncheckedUpdateOneWithoutUserNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutRecruiterNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCandidateNestedInput
    candidate_skills?: CandidateSkillUncheckedUpdateManyWithoutCandidateNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCountryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityCreateManyStateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CandidateProfileCreateManyStateInput = {
    user_id: bigint | number
    city_id?: number | null
    qualification?: string | null
    experience_years?: number | null
    resume_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RecruiterProfileCreateManyStateInput = {
    user_id: bigint | number
    designation?: string | null
    city_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type JobPostCreateManyStateInput = {
    id?: bigint | number
    recruiter_id?: bigint | number | null
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    currency_id?: number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    city_id?: number | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CityUpdateWithoutStateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_profiles?: CandidateProfileUpdateManyWithoutCityNestedInput
    recruiter_profiles?: RecruiterProfileUpdateManyWithoutCityNestedInput
    job_posts?: JobPostUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate_profiles?: CandidateProfileUncheckedUpdateManyWithoutCityNestedInput
    recruiter_profiles?: RecruiterProfileUncheckedUpdateManyWithoutCityNestedInput
    job_posts?: JobPostUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateManyWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateProfileUpdateWithoutStateInput = {
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCandidate_profileNestedInput
    city?: CityUpdateOneWithoutCandidate_profilesNestedInput
  }

  export type CandidateProfileUncheckedUpdateWithoutStateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateProfileUncheckedUpdateManyWithoutStateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruiterProfileUpdateWithoutStateInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecruiter_profileNestedInput
    city?: CityUpdateOneWithoutRecruiter_profilesNestedInput
  }

  export type RecruiterProfileUncheckedUpdateWithoutStateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruiterProfileUncheckedUpdateManyWithoutStateInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostUpdateWithoutStateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiter?: UserUpdateOneWithoutJob_postsNestedInput
    currency_rel?: CurrencyUpdateOneWithoutJob_postsNestedInput
    city?: CityUpdateOneWithoutJob_postsNestedInput
    job_skills?: JobSkillUpdateManyWithoutJobNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobPostUncheckedUpdateWithoutStateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recruiter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job_skills?: JobSkillUncheckedUpdateManyWithoutJobNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobPostUncheckedUpdateManyWithoutStateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recruiter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateProfileCreateManyCityInput = {
    user_id: bigint | number
    state_id?: number | null
    qualification?: string | null
    experience_years?: number | null
    resume_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RecruiterProfileCreateManyCityInput = {
    user_id: bigint | number
    designation?: string | null
    state_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type JobPostCreateManyCityInput = {
    id?: bigint | number
    recruiter_id?: bigint | number | null
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    currency_id?: number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    state_id?: number | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CandidateProfileUpdateWithoutCityInput = {
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCandidate_profileNestedInput
    state?: StateUpdateOneWithoutCandidate_profilesNestedInput
  }

  export type CandidateProfileUncheckedUpdateWithoutCityInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateProfileUncheckedUpdateManyWithoutCityInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience_years?: NullableIntFieldUpdateOperationsInput | number | null
    resume_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruiterProfileUpdateWithoutCityInput = {
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecruiter_profileNestedInput
    state?: StateUpdateOneWithoutRecruiter_profilesNestedInput
  }

  export type RecruiterProfileUncheckedUpdateWithoutCityInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecruiterProfileUncheckedUpdateManyWithoutCityInput = {
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostUpdateWithoutCityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    recruiter?: UserUpdateOneWithoutJob_postsNestedInput
    currency_rel?: CurrencyUpdateOneWithoutJob_postsNestedInput
    state?: StateUpdateOneWithoutJob_postsNestedInput
    job_skills?: JobSkillUpdateManyWithoutJobNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobPostUncheckedUpdateWithoutCityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recruiter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job_skills?: JobSkillUncheckedUpdateManyWithoutJobNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobPostUncheckedUpdateManyWithoutCityInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recruiter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostCreateManyRecruiterInput = {
    id?: bigint | number
    job_title?: string | null
    description?: string | null
    employment_type?: $Enums.EmploymentType | null
    job_type?: $Enums.JobType | null
    salary_min?: bigint | number | null
    salary_max?: bigint | number | null
    currency_id?: number | null
    min_exp?: bigint | number | null
    max_exp?: bigint | number | null
    currency?: string | null
    state_id?: number | null
    city_id?: number | null
    benefits?: string | null
    openings_count?: number | null
    application_deadline?: Date | string | null
    job_status?: $Enums.JobStatus | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ApplicationCreateManyCandidateInput = {
    id?: bigint | number
    job_id?: bigint | number | null
    applied_at?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CandidateSkillCreateManyCandidateInput = {
    skill_id: number
  }

  export type JobPostUpdateWithoutRecruiterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    currency_rel?: CurrencyUpdateOneWithoutJob_postsNestedInput
    state?: StateUpdateOneWithoutJob_postsNestedInput
    city?: CityUpdateOneWithoutJob_postsNestedInput
    job_skills?: JobSkillUpdateManyWithoutJobNestedInput
    applications?: ApplicationUpdateManyWithoutJobNestedInput
  }

  export type JobPostUncheckedUpdateWithoutRecruiterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job_skills?: JobSkillUncheckedUpdateManyWithoutJobNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutJobNestedInput
  }

  export type JobPostUncheckedUpdateManyWithoutRecruiterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    employment_type?: NullableEnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType | null
    job_type?: NullableEnumJobTypeFieldUpdateOperationsInput | $Enums.JobType | null
    salary_min?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    salary_max?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency_id?: NullableIntFieldUpdateOperationsInput | number | null
    min_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    max_exp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    state_id?: NullableIntFieldUpdateOperationsInput | number | null
    city_id?: NullableIntFieldUpdateOperationsInput | number | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    openings_count?: NullableIntFieldUpdateOperationsInput | number | null
    application_deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    job_status?: NullableEnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutCandidateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    applied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobPostUpdateOneWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutCandidateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    applied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutCandidateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    job_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    applied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidateSkillUpdateWithoutCandidateInput = {
    skill?: SkillUpdateOneRequiredWithoutCandidate_skillsNestedInput
  }

  export type CandidateSkillUncheckedUpdateWithoutCandidateInput = {
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type CandidateSkillUncheckedUpdateManyWithoutCandidateInput = {
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type JobSkillCreateManyJobInput = {
    skill_id: number
  }

  export type ApplicationCreateManyJobInput = {
    id?: bigint | number
    candidate_id?: bigint | number | null
    applied_at?: Date | string | null
    status?: $Enums.ApplicationStatus | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type JobSkillUpdateWithoutJobInput = {
    skill?: SkillUpdateOneRequiredWithoutJob_skillsNestedInput
  }

  export type JobSkillUncheckedUpdateWithoutJobInput = {
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type JobSkillUncheckedUpdateManyWithoutJobInput = {
    skill_id?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationUpdateWithoutJobInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    applied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    candidate?: UserUpdateOneWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutJobInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    candidate_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    applied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUncheckedUpdateManyWithoutJobInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    candidate_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    applied_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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