export const capitalizeString = (string: string) => {
  if (!string) return '';

  if (!string.includes(' '))
    return string[0].toUpperCase() + string.substring(1);

  const str = string.split(' ');
  if (!str[1]) return string[0].toUpperCase() + string.substring(1);

  return str
    .map((item) => item[0].toUpperCase() + item.substring(1))
    .toString()
    .replace(',', ' ');
};
