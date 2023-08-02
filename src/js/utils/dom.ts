export const createElement = <T>(tag: string): T => {
  const el = document.createElement(tag);
  return el as T;
};

export const createTextNode = (data: string): Text => {
  const txt = document.createTextNode(data);
  return txt;
};
