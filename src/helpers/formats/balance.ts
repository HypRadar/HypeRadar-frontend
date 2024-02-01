export const getFormattedBalance = (val: number) => {
  var formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 5,
    style: "currency",
    currency: "USD",
  });
  return formatter.format(val);
};
