export const rem = (v: number, a: number): number => {
  if (!isFinite(v)) v = 0;
  if (v < 0) return rem(v + a, a);
  return v % a;
};


export const {
  abs,
  acos,
  acosh,
  asin,
  asinh,
  atan,
  atan2,
  atanh,
  cbrt,
  ceil,
  clz32,
  cos,
  cosh,
  E,
  exp,
  expm1,
  floor,
  fround,
  hypot,
  imul,
  log,
  log10,
  log1p,
  log2,
  LN10,
  LN2,
  LOG10E,
  LOG2E,
  max,
  min,
  pow,
  PI,
  random,
  round,
  sign,
  sin,
  sinh,
  sqrt,
  SQRT1_2,
  SQRT2,
  tan,
  tanh,
  trunc
} = Math;


export const PI_2 = PI / 2;
export const PI_3 = PI / 3;
export const PI_6 = PI / 6;
export const PI2 = PI * 2;