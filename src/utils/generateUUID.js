export const genUUID = () => {
  const uuid = `KA-${Math.random().toString().substring(2, 6)}-C${Math.random()
    .toString()
    .substring(4, 6)}`;
  return uuid;
};
