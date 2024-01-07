const TARGET_MAP = new Map<Element, () => any>();

const observer = new ResizeObserver((entries) => {
  for (const { target } of entries)
    TARGET_MAP.get(target)?.();
});

export const resizeTo = (can: HTMLCanvasElement, target: Element) => {
  const old = TARGET_MAP.get(target);

  TARGET_MAP.set(target, () => {
    old?.();
    const { width, height } = target.getBoundingClientRect();
    can.width = width;
    can.height = height;
    can.style.position = 'absolute';
    can.style.width = width + 'px';
    can.style.height = height + 'px';
  });

  observer.observe(target);
};