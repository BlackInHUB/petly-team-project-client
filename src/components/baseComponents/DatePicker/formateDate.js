export const formateDate = dateUnformated => {
  let date, month, year;

  date = dateUnformated.getDate();
  month = dateUnformated.getMonth() + 1;
  year = dateUnformated.getFullYear();

  date = date.toString().padStart(2, '0');

  month = month.toString().padStart(2, '0');

  return `${date}.${month}.${year}`;
};
