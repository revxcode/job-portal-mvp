const idrFormatter = new Intl.NumberFormat('id-ID', {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

const formatIDR = (value: number, isHidden: boolean = false): string => {
  if (isHidden) return 'Competitive'
  return idrFormatter.format(value);
}

export { formatIDR };