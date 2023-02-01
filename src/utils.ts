export const dateStringToDate = (dateString: string): Date => {
  const [year, month, day] = dateString
    .split("/") // 28/10/2018 => ['28', '10', '2018']
    .map((value: string) => parseInt(value));
  return new Date(year, month - 1, day);
};
