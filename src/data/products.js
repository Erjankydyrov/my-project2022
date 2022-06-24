import smCodex from "../assets/products/spaceMarines/smCodex/smCodex.png"
import smDatacards from "../assets/products/spaceMarines/smDatacards/smDatacards.png";
import primarisIntercessors from "../assets/products/spaceMarines/primarisIntercessors/primarisIntercessors.png"
import heavyIntercessors from "../assets/products/spaceMarines/heavyIntercessors/heavyIntercessors.png"
import smCPTGravisArmour from "../assets/products/spaceMarines/smCPTGravisArmour/smCPTGravisArmour.png"
import smPrimarisAncient from "../assets/products/spaceMarines/smPrimarisAncient/smPrimarisAncient.png"
import smCaptainMasterCraftedBoltRifle from "../assets/products/spaceMarines/smCaptainMasterCraftedBoltRifle/smCaptainMasterCraftedBoltRifle.png"

import orksCodex from "../assets/products/orks/orksCodex/orksCodex.png"
import orksDatacards from "../assets/products/orks/orksDatacards/orksDatacards.png"
import warbossinMegaArmour from "../assets/products/orks/warbossinMegaArmour/warbossinMegaArmour.png"

const products = [
  {
    image: smCodex,
    productId: "smCodex",
    categoryId: "spaceMarines",
    title: "Datacards: Space Marines",
    description: `Unleash the fury of the Space Marines with these handy reference cards! Each set is great for quickly referring to your rules, making sure you'll pick the right Stratagem, Litanies of Battle or psychic powers for your battles with ease.`,
    price: 60,
  },
  {
    image: smDatacards,
    productId: "smDatacards",
    categoryId: "spaceMarines",
    title: "Codex: Space Marines",
    description: `The Space Marines are numbered amongst the most elite warriors in the Imperium. Created by the Emperor himself from the genetic material of the demigod Primarchs, they are the ultimate soldiers for a cruel and terrible age. Inside this 208-page hardback codex, you'll find everything you need to unleash the Space Marines in battle, plus thrilling lore and art to inspire your own collection.`,
    price: 60,
  },
  {
    image: primarisIntercessors,
    productId: "primarisIntercessors",
    categoryId: "spaceMarines",
    title: "Primaris Intercessors",
    description: `A strong core of reliable and adaptable warriors that can lay down fire while advancing or holding down terrain is an invaluable aid to any tactician. In the case of strike forces bolstered by Primaris battle-brothers, this role is fulfilled by the Intercessor Squads. Capable of levelling overlapping salvoes of firepower, these squads often form the flexible fighting core of newly-founded Primaris Chapters – though of course many established Chapters have eagerly leveraged their abilities, fielding them alongside Tactical Squads.`,
    price: 60,
  },
  {
    image: heavyIntercessors,
    productId: "heavyIntercessors",
    categoryId: "spaceMarines",
    title: "Heavy Intercessors",
    description: `Clad in thick Gravis armour, Heavy Intercessors secure ground and are immovable in defence. Always ready for any sign of enemy counter-attack, they stand firm, laying down volleys of heavy fire that keep all but the most determined or foolhardy enemies at bay.`,
    price: 55,
  },
  {
    image: smCPTGravisArmour,
    productId: "smCPTGravisArmour",
    categoryId: "spaceMarines",
    title: "Captain in Gravis Armour",
    description: `Captains are fearless leaders among the Space Marines, each one a masterful tactician and skilled warrior armed with a variety of weapons and equipment. Clad in a suit of heavy Gravis armour, a Captain can fearlessly stride into the very fiercest battlefield firestorms. To don Gravis armour is to demonstrate the greatest determination to crush the enemy, no matter how deeply they are entrenched.`,
    price: 45,
  },
  {
    image: smPrimarisAncient,
    productId: "smPrimarisAncient",
    categoryId: "spaceMarines",
    title: "Primaris Ancient",
    description: `Ancients bear a Space Marine Chapter's precious standards. These glorious relics have been present in some of the Chapter's most notable battles, their finely worked designs commemorating countless campaigns and heroic deeds. They are symbols of selfless commitment and the unbreakable loyalty of battle-brothers.`,
    price: 45,
  },
  {
    image: smCaptainMasterCraftedBoltRifle,
    productId: "smCaptainMasterCraftedBoltRifle",
    categoryId: "spaceMarines",
    title: "Captain with Master-crafted Heavy Bolt Rifle",
    description: `Space Marines on the defence fight with a tenacious fury. Captains will take up heavy bolt rifles to lay down punishing fire and wear Gravis armour to withstand the foe's best attempts to dislodge them. Fighting in such a way, they are a symbol of the Space Marines' indomitable will to never fail.`,
    price: 45,
  },
  
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
  {
    image: warbossinMegaArmour,
    productId: "warbossinMegaArmour",
    categoryId: "orks",
    title: "Warboss in Mega Armour",
    description: `Any good Ork Hunter knows the safest way to deal with a rampaging Warboss is to hit them with tank-busting artillery from as far away as possible. By donning a piston-driven suit of incredibly durable mega armour, this Warboss makes a mockery of such underhanded enemy tactics, much to the terror of his foes.`,
    price: 38,
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
