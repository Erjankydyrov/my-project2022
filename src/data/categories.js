import PrimarisIntercessors from "../assets/products/warhammer40000/spaceMarines/PrimarisIntercessors/PrimarisIntercessors.svg"

const categories = [
  {
    image: PrimarisIntercessors,
    categoryId: "space-marines",
    title: "Space Marines",
    description: `The "dry processing" method, cheaper and simpler, was historically used for lower-quality beans in Brazil and much of Africa, but now brings a premium when done well. Twigs and other foreign objects are separated from the berries and the fruit is then spread out in the sun on concrete, bricks or raised beds for 2–3 weeks, turned regularly for even drying.`,
  },
  {
    image: PrimarisIntercessors,
    categoryId: "orcs",
    title: "Orcs",
    description: `The "dry processing" method, cheaper and simpler, was historically used for lower-quality beans in Brazil and much of Africa, but now brings a premium when done well. Twigs and other foreign objects are separated from the berries and the fruit is then spread out in the sun on concrete, bricks or raised beds for 2–3 weeks, turned regularly for even drying.`,
  },
];

export function getCategories() {
  return categories;
}

// dark-roast 
export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category =>  category.categoryId === categoryId
    )
  ];
}