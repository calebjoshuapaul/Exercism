/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let result = 0;
  switch (name) {
    case "Pure Strawberry Joy":
      result = 0.5;
      break;
    case "Energizer":
      result = 1.5;
      break;
    case "Green Garden":
      result = 1.5;
      break;
    case "Tropical Island":
      result = 3;
      break;
    case "All or Nothing":
      result = 5;
      break;
    default:
      result = 2.5;
  }
  return result;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesCount = 0;
  let numOfLime = 0;
  if (limes.length !== 0) {
    while (wedgesCount <= wedgesNeeded) {
      if (numOfLime === limes.length - 1) {
        numOfLime++;
        break;
      } else if (wedgesNeeded === 0) {
        break;
      }
      wedgesCount +=
        limes[numOfLime] === "small"
          ? 6
          : limes[numOfLime] === "medium"
          ? 8
          : 10;
      numOfLime++;
    }
    return numOfLime;
  }
  return numOfLime;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let time = 0;
  let count = 0;
  while (time < timeLeft) {
    time += timeToMixJuice(orders[count]);
    count++;
  }
  return orders.splice(count);
}
