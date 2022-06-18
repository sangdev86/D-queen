export const convertVND = (number) =>
  new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND'
  }).format(number);
