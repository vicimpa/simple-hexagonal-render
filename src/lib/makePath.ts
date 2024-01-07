type TRunner<T extends any[]> = (ctx: CanvasRenderingContext2D, ...args: T) => any;

export const makePath = <T extends any[]>(runner: TRunner<T>): TRunner<T> => {
  return (ctx, ...args) => {
    ctx.beginPath();
    runner(ctx, ...args);
    ctx.closePath();
  };
};