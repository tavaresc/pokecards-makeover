// HACK: to handle hmr
declare const module: any

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>