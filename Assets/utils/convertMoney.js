export const convertVND = (number) =>
  number === 0
    ? ''
    : new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'VND'
      }).format(number);
