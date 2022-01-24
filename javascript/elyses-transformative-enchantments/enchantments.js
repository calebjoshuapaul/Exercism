// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((card) => {
    return card * 2;
  });
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  let arr = [];
  deck.forEach((card) => {
    if (card === 3) arr.push(3, 3);
    arr.push(card);
  });
  return arr;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  let middle = Math.floor(deck.length / 2);
  return deck.splice(middle - 1, 2);
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  let arr1 = deck.slice(0, deck.length / 2);
  let arr2 = deck.slice(arr1.length);
  let mid1 = arr1.shift();
  let mid2 = arr2.pop();

  return arr1.concat(mid2, mid1, arr2);
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  let arr = [];
  deck.forEach((card) => {
    if (card === 2) arr.push(card);
  });
  return arr;
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort(function (a, b) {
    return a - b;
  });
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  deck.forEach((card, i) => {
    deck.splice(i, 0, deck.pop());
  });
  return deck;
}
