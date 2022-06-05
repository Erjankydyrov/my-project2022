import PrimarisTitle from "../assets/Categories/Primaris-Title.svg"
import whlogo from "../assets/whLogo.svg"

const categories = [
  {
    image: PrimarisTitle,
    categoryId: "Space-Marines",
    title: "Space Marines",
    categoryLogo: whlogo,
    boxTitle: "For the Emperor!",
    boxChildren: "Defend the Imperium with the Primaris Space Marines",
    description: `Space Marines are the Emperor's angels of death. They do not know fear, pity and regret. They are the defenders of the Imperium and the last line of defense against the hordes of Chaos that press upon the Imperium.`,
  },
  {
    image: PrimarisTitle,
    categoryId: "orcs",
    title: "Orcs",
    categoryLogo: whlogo,
    boxTitle: "For the Emperor!",
    boxChildren: "Defend the Imperium with the Primaris Space Marines",
    description: `Space Marines are the Emperor's angels of death. They do not know fear, pity and regret. They are the defenders of the Imperium and the last line of defense against the hordes of Chaos that press upon the Imperium.`,
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