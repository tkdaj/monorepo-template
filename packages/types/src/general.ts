export type Primitive =
  | number
  | string
  | boolean
  | null
  | undefined
  | bigint
  | symbol;

export type POJO = Record<PropertyKey, unknown>;
export type EmptyPOJO = Record<PropertyKey, never>;

export type PartialPick<Obj, Key extends keyof Obj> = Omit<Obj, Key> &
  Partial<Pick<Obj, Key>>;
export type RequiredPick<Obj, Key extends keyof Obj> = Omit<Obj, Key> &
  Required<Pick<Obj, Key>>;
export type AllKeysRequired<Obj extends POJO> = RequiredPick<Obj, keyof Obj>;

// unknown and never do not work as expected when using it as the default value for
// the generic below. Instead use void, and we get the desired result.
/**
 * const maybeAString: Nullable<string>; // maybeAString: string | null | undefined
 * const nullishValue: Nullable; // nullishValue: null | undefined
 */
export type Nullable<Val = void> = Val extends void
  ? null | undefined
  : Val | null | undefined;

/** The union of keys which are not shared between two POJOs */
export type ExclusiveKeys<First extends POJO, Second extends POJO> =
  | Exclude<keyof First, keyof Second>
  | Exclude<keyof Second, keyof First>;
