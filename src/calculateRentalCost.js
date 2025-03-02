/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRent = 40;
  const finalPrice = days * dailyRent;

  if (days < 3) {
    return finalPrice;
  } else if (days >= 3 && days < 7) {
    return finalPrice - 20;
  } else {
    return finalPrice - 50;
  }
}

module.exports = calculateRentalCost;
