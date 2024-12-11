export const encodeContent = (markdown: string) => {
  return Buffer.from(markdown, "utf-8").toString("base64");
};

export const decodeContent = (base64: string) => {
  return Buffer.from(base64, "base64").toString("utf-8");
};
