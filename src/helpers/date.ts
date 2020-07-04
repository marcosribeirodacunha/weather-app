export const addHours = (date: Date, hoursToAdd: number) => {
  return date.setHours(date.getHours() + hoursToAdd);
};

export const milisecondsToHours = (date: number) => {
  return date / 1000 / 60 / 60;
};

export const hoursToNow = (date: Date) => {
  const now = new Date();
  return milisecondsToHours(now.getTime() - date.getTime());
};
