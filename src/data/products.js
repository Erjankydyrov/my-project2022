

import orksCodex from "../assets/products/orks/orksCodex/orksCodex.png"
import orksDatacards from "../assets/products/orks/orksDatacards/orksDatacards.png"

const products = [
  
  {
    image: orksCodex,
    productId: "orksCodex",
    categoryId: "orks",
    title: "Codex: Orks",
    description: `There are many horrific alien threats to be found among the stars, and the Orks are some of the very greatest among them. Born for battle and possessed of an all-encompassing love for war, the average Ork is a heavily muscled killing machine able to withstand tremendous punishment and heal from all but the most grievous injuries.`,
    price: 55,
  },
  {
    image: orksDatacards,
    productId: "orksDatacards",
    categoryId: "orks",
    title: "Orks Datacards",
    description: `Datacards make referencing your rules in battle easy. Containing quick-reference Stratagems and psychic powers, they're perfect for ensuring you don't forget crucial rules when you need them most.`,
    price: 29,
  },
];

export function getProducts(categoryId) {
  if (categoryId) {
    return products.filter(product => product.categoryId === categoryId)
  }
  return products;
}

// dark-roast
export function getProduct(productId) {
  return products[
    products.findIndex(
      product =>  product.productId === productId
    )
  ];
}
