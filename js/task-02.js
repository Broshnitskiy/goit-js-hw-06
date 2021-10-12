const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");

  ingredientsRef.append(item);
})

console.log(ingredientsRef);