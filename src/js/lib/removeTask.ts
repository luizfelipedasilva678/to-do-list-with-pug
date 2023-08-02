export const removeTask = (target: HTMLElement): void => {
  const targetParent = target.parentNode as HTMLElement;

  if (targetParent != null) {
    targetParent.remove();
  }
};
