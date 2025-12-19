const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'Asia/Jakarta'
})

const formatDate = (value: string | number | Date): string => {
  const stringToDate = new Date(value);
  if (isNaN(stringToDate.getTime())) return '-';
  return dateFormatter.format(stringToDate);
}

export { formatDate };