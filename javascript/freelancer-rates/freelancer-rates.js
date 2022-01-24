/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (ratePerHour * 8));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  // billabledays(22) * discountedRate(89 - (89*0.42))
  const discountedRatePerHour = ratePerHour - ratePerHour * discount;
  //Works 8hrs a day; discountedRatePerHour * 8
  const discountedRatePerDay = discountedRatePerHour * 8;
  //billableDays i.e 22* discountedRatePerDay
  const discountedRatePerMonth = 22 * discountedRatePerDay;
  //total price excluding the discounted month
  const numberOfFullMonths = Math.floor(numDays / 22);

  const totalPrice = (numDays - 22 * numberOfFullMonths) * (ratePerHour * 8);
  //
  const total = totalPrice + discountedRatePerMonth * numberOfFullMonths;

  return Math.ceil(total);
}
