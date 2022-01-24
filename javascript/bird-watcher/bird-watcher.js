import { brotliDecompress } from "zlib";

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let birds = 0;
  birdsPerDay.forEach(function (bird) {
    birds += bird;
  });
  return birds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let birds = [];
  birdsPerDay.forEach(function (bird, index) {
    if (index >= week * 7 - 7 && index < week * 7) birds.push(bird);
  });
  return totalBirdCount(birds);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  birdsPerDay.forEach(function (numOfBirds, day, allBirds) {
    if (day % 2 === 0) {
      allBirds.splice(day, 1, numOfBirds + 1);
    }
  });
  return birdsPerDay;
}
