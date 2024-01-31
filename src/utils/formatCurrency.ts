export function formatCurrency(price: number) {
  const value = new Intl.NumberFormat('pt-br', {
    style: 'decimal',
    minimumFractionDigits: 2,
  }).format(price);

  return value;
}
