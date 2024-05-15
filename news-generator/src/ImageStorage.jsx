import catImage from "./assets/images/cat.jpg";
import nervousImage from "./assets/images/nervous.jpg";
import sadImage from "./assets/images/sad.jpg";
import HappyImage from "./assets/images/happy.jpg";
import conflictImage from "./assets/images/conflict.jpg";
import governmentImage from "./assets/images/government.jpg";
import protestImage from "./assets/images/protest.jpg";

const catItem = { key: 0, label: "Cat", value: catImage };

const nervousItem = { key: 1, label: "Nervous", value: nervousImage };

const sadItem = { key: 2, label: "Sad", value: sadImage };

const happyItem = { key: 3, label: "Happy", value: HappyImage };

const conflictItem = { key: 4, label: "Conflict", value: conflictImage };

const governmentItem = { key: 5, label: "Government", value: governmentImage };

const protestItem = { key: 6, label: "Protest", value: protestImage };

export const imageArray = [
  catItem,
  nervousItem,
  sadItem,
  happyItem,
  conflictItem,
  governmentItem,
  protestItem,
];

export default { imageArray };
