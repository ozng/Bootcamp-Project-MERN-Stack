export const calculateDays = (startDate, endDate) => {
  const difference = startDate.getTime() - endDate.getTime();
  const calculatedDays = Math.ceil(difference / (1000 * 3600 * 24));
  return calculatedDays;
};
