import primaris from "../assets/categories/primaris.jpg"
import whlogo from "../assets/whLogo.svg"
import orcs from "../assets/categories/orks.jpg"
import necrons from "../assets/categories/necrons.jpg"

const categories = [
  {
    image: primaris,
    categoryId: "spaceMarines",
    title: "Space Marines",
    categoryLogo: whlogo,
    boxTitle: "For the Emperor!",
    boxChildren: "Defend the Imperium with the Primaris Space Marines",
    description: `Space Marines are the Emperor's angels of death. They do not know fear, pity and regret. They are the defenders of the Imperium and the last line of defense against the hordes of Chaos that press upon the Imperium.`,
  },
  {
    image: orcs,
    categoryId: "orks",
    title: "Orks",
    categoryLogo: whlogo,
    boxTitle: "Orks Is Best",
    boxChildren: "Browse the whole Orks range of brilliant units and bonkers war machines",
    description: `Waagh! We are Orcs! And we love shooters, ducks, fights and teeth! If there's any fun going on in the galaxy, we're always there!`,
  },
  {
    image: necrons,
    categoryId: "necrons",
    title: "Necrons",
    categoryLogo: whlogo,
    boxTitle: "Ancient Rulers of the Galaxy",
    boxChildren: "Arice and reclaim your long-lost empire with the Necrons.",
    description: `The Necrons are a deathless race of alien androids, rulers of the galaxy in a long-forgotten era. Now, having slumbered in stasis for millennia, they are rising up to conquer it again.`,
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