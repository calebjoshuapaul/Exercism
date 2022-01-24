/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remaining) {
  if (remaining === 0) {
    return `Lasagna is done.`;
  } else if (!remaining) {
    return `You forgot to set the timer.`;
  }
  return `Not done, please wait.`;
}

export function preparationTime(layers, time) {
  return !Number(time) ? layers.length * 2 : layers.length * time;
}

export function quantities(layers) {
  let noodleCount = 0;
  let sauceCount = 0;
  for (let layer of layers) {
    if (layer === "noodles") noodleCount++;
    else if (layer === "sauce") sauceCount++;
  }

  return { noodles: noodleCount * 50, sauce: sauceCount * 0.2 };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  let obj = {};
  for (let ingredient in recipe) {
    obj[ingredient] = (recipe[ingredient] / 2) * portions;
  }
  return obj;
}
