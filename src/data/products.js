import PrimarisIntercessors from "../assets/products/warhammer40000/spaceMarines/PrimarisIntercessors/PrimarisIntercessors.svg";
import HeavyIntercessors from "../assets/products/warhammer40000/spaceMarines/HeavyIntercessors/HeavyIntercessors.svg"
import SMCPTGravisArmour from "../assets/products/warhammer40000/spaceMarines/SMCPTGravisArmour/SMCPTGravisArmour.svg"
import SMPrimarisAncient from "../assets/products/warhammer40000/spaceMarines/SMPrimarisAncient/SMPrimarisAncient.svg"
import SMCaptainMasterCraftedBoltRifle from "../assets/products/warhammer40000/spaceMarines/SMCaptainMasterCraftedBoltRifle/SMCaptainMasterCraftedBoltRifle.svg"
import SMCodex from "../assets/products/warhammer40000/spaceMarines/SMCodex/SMCodex.svg"
import SMDatacards from "../assets/products/warhammer40000/spaceMarines/SMDatacards/SMDatacards.svg"

const products = [
  {
    image: SMCodex,
    productId: "SMCodex",
    categoryId: "Space-Marines",
    title: "Datacards: Space Marines",
    description: `Unleash the fury of the Space Marines with these handy reference cards! Each set is great for quickly referring to your rules, making sure you'll pick the right Stratagem, Litanies of Battle or psychic powers for your battles with ease.`,
    price: 60,
  },
  {
    image: SMDatacards,
    productId: "SMDatacards",
    categoryId: "Space-Marines",
    title: "Codex: Space Marines",
    description: `The Space Marines are numbered amongst the most elite warriors in the Imperium. Created by the Emperor himself from the genetic material of the demigod Primarchs, they are the ultimate soldiers for a cruel and terrible age. Inside this 208-page hardback codex, you'll find everything you need to unleash the Space Marines in battle, plus thrilling lore and art to inspire your own collection.`,
    price: 60,
  },
  {
    image: PrimarisIntercessors,
    productId: "PrimarisIntercessors",
    categoryId: "Space-Marines",
    title: "Primaris Intercessors",
    description: `A strong core of reliable and adaptable warriors that can lay down fire while advancing or holding down terrain is an invaluable aid to any tactician. In the case of strike forces bolstered by Primaris battle-brothers, this role is fulfilled by the Intercessor Squads. Capable of levelling overlapping salvoes of firepower, these squads often form the flexible fighting core of newly-founded Primaris Chapters – though of course many established Chapters have eagerly leveraged their abilities, fielding them alongside Tactical Squads.`,
    price: 60,
  },
  {
    image: HeavyIntercessors,
    productId: "HeavyIntercessors",
    categoryId: "Space-Marines",
    title: "Heavy Intercessors",
    description: `Clad in thick Gravis armour, Heavy Intercessors secure ground and are immovable in defence. Always ready for any sign of enemy counter-attack, they stand firm, laying down volleys of heavy fire that keep all but the most determined or foolhardy enemies at bay.
   `,
    price: 55,
  },
  {
    image: SMCPTGravisArmour,
    productId: "SMCPTGravisArmour",
    categoryId: "Space-Marines",
    title: "Captain in Gravis Armour",
    description: `Captains are fearless leaders among the Space Marines, each one a masterful tactician and skilled warrior armed with a variety of weapons and equipment. Clad in a suit of heavy Gravis armour, a Captain can fearlessly stride into the very fiercest battlefield firestorms. To don Gravis armour is to demonstrate the greatest determination to crush the enemy, no matter how deeply they are entrenched.`,
    price: 45,
  },
  {
    image: SMPrimarisAncient,
    productId: "SMPrimarisAncient",
    categoryId: "Space-Marines",
    title: "Primaris Ancient",
    description: `Ancients bear a Space Marine Chapter's precious standards. These glorious relics have been present in some of the Chapter's most notable battles, their finely worked designs commemorating countless campaigns and heroic deeds. They are symbols of selfless commitment and the unbreakable loyalty of battle-brothers.`,
    price: 45,
  },
  {
    image: SMCaptainMasterCraftedBoltRifle,
    productId: "SMCaptainMasterCraftedBoltRifle",
    categoryId: "Space-Marines",
    title: "Captain with Master-crafted Heavy Bolt Rifle",
    description: `Space Marines on the defence fight with a tenacious fury. Captains will take up heavy bolt rifles to lay down punishing fire and wear Gravis armour to withstand the foe's best attempts to dislodge them. Fighting in such a way, they are a symbol of the Space Marines' indomitable will to never fail.`,
    price: 45,
  },
  {
    image: PrimarisIntercessors,
    productId: "light-roast",
    categoryId: "orcs",
    title: "Light roast",
    description: `The "dry processing" method, cheaper and simpler, was historically used for lower-quality beans in Brazil and much of Africa, but now brings a premium when done well. Twigs and other foreign objects are separated from the berries and the fruit is then spread out in the sun on concrete, bricks or raised beds for 2–3 weeks, turned regularly for even drying.`,
    price: 45,
  },
  {
    image: PrimarisIntercessors,
    productId: "medium-roast",
    categoryId: "orcs",
    title: "Medium roast",
    description: `Clinical research indicates that moderate coffee consumption is benign or mildly beneficial as a stimulant in healthy adults, with continuing research on whether long-term consumption reduces the risk of some diseases, although some of the long-term studies are of questionable credibility.`,
    price: 34,
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
