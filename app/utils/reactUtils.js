export const calculateTotalPrice = (cartGuitars) => {
  if (!cartGuitars) return 0;
  return cartGuitars.map(guitar => {
    return guitar.price;
  })
  .reduce((a,b) => Number(a) + Number(b));
}
