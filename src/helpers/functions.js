export const moneyFormat = (money) => {
  return money.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
