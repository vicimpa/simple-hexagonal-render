import { makePath } from "lib/makePath";
import { cos, PI_3, sin } from "lib/math";
import { resizeTo } from "lib/resizeTo";

const can = document.createElement('canvas');
const ctx = can.getContext('2d')!;

document.body.appendChild(can);

resizeTo(can, document.body);

const D = 30;

const colors = new Set<string>();

const mouse = {
  x: 0,
  y: 0,
  point: null as [x: number, y: number] | null
};

can.onmousemove = ({ offsetX, offsetY }) => {
  mouse.x = offsetX;
  mouse.y = offsetY;
};

can.onmousedown = () => {
  if (mouse.point) {
    const p = point(...mouse.point);
    colors.delete(p) || colors.add(p);
  }
  console.log(colors, mouse.point);
};

const point = (x: number, y: number) => (
  `${x}:${y}`
);

const hex = makePath(
  (ctx, x: number, y: number, d = D) => {
    const X = x;
    const Y = y;

    x *= sin(PI_3) * d;
    y *= cos(PI_3) * 3 * d;

    for (let i = 0; i < 7; i++) {
      const dx = sin(PI_3 * i) * d;
      const dy = cos(PI_3 * i) * d;
      ctx[i ? 'lineTo' : 'moveTo'](x + dx, y + dy);
    }

    if (colors.has(point(X, Y))) {
      ctx.fillStyle = '#f00';
      ctx.fill();
    }

    if (ctx.isPointInPath(mouse.x, mouse.y)) {
      ctx.fillStyle = '#999';
      ctx.fill();
      mouse.point = [X, Y];
    } else {
      ctx.stroke();
    }
  }
);

function render() {
  requestAnimationFrame(render);
  const { width, height } = can;
  ctx.resetTransform();
  ctx.clearRect(0, 0, width, height);
  ctx.setTransform(1, 0, 0, 1, width * .5, height * .5);

  const old = mouse.point;

  for (let x = -2; x < 2; x++) {
    for (let i = -5; i < 5; i++) {
      if (x == 0 && i > -2 && i < 3) continue;
      hex(ctx, x * 2 + (i & 1), i);
    }
  }

  if (old === mouse.point)
    mouse.point = null;
}

requestAnimationFrame(render);