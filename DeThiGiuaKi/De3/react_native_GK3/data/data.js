export const data = [
  {
    id: 1,
    type: "Vegetable",
    image: "require()",
    name: "Apple",
    price: 28,
    description: "Apple Italian Piada",
    rating: 5,
  },
  {
    id: 2,
    type: "Vegetable",
    image: "require()",
    name: "Pear",
    price: 15,
    description: "Pear American",
    rating: 5,
  },
  {
    id: 3,
    type: "Vegetable",
    image: "require()",
    name: "Coconut",
    price: 10,
    description: "Coconut VietNam",
    rating: 5,
  },
  {
    id: 4,
    type: "Vegetable",
    image: "require()",
    name: "Apricot",
    price: 9,
    description: "Apricot China",
    rating: 5,
  },
  {
    id: 5,
    type: "Vegetable",
    image: "require()",
    name: "Orange",
    price: 8,
    description: "Orange Thailand",
    rating: 5,
  },
  {
    id: 6,
    type: "Vegetable",
    image: "require()",
    name: "Avacado",
    price: 10,
    description: "Avacado VietNam",
    rating: 5,
  },
  {
    id: 7,
    type: "Seafood",
    image: "require()",
    name: "Chicken",
    price: 150,
    description: "Chicken VietNam",
    rating: 4.8,
  },
  {
    id: 8,
    type: "Seafood",
    image: "require()",
    name: "Fish",
    price: 200,
    description: "Fish VietNam",
    rating: 4.7,
  },
  {
    id: 9,
    type: "Seafood",
    image: "require()",
    name: "Crab",
    price: 300,
    description: "Crab VietNam",
    rating: 4.5,
  },
  {
    id: 10,
    type: "Drinks",
    image: "require()",
    name: "Coffee",
    price: 23,
    description: "Coffee VietNam",
    rating: 4.6,
  },
  {
    id: 11,
    type: "Drinks",
    image: "require()",
    name: "Milk",
    price: 10,
    description: "Milk VietNam",
    rating: 4.5,
  },
  {
    id: 12,
    type: "Drinks",
    image: "require()",
    name: "Beer",
    price: 15,
    description: "Beer VietNam",
    rating: 4.7,
  },
  {
    id: 13,
    type: "Drinks",
    image: "require()",
    name: "Wine",
    price: 100,
    description: "Wine VietNam",
    rating: 4.8,
  },
  {
    id: 14,
    type: "Drinks",
    image: "require()",
    name: "Soda",
    price: 5,
    description: "Soda VietNam",
    rating: 4.9,
  },
  {
    id: 15,
    type: "Drinks",
    image: "require()",
    name: "Tea",
    price: 8,
    description: "Tea VietNam",
    rating: 4.7,
  },
];

// Function to get all items
export const getAll = () => {
  return data;
};

// Function to get all Vegetables
export const getAllVegetables = () => {
  return data.filter((item) => item.type === "Vegetable");
};

// Function to get all Seafood
export const getAllSeafood = () => {
  return data.filter((item) => item.type === "Seafood");
};

// Function to get all Drinks
export const getAllDrinks = () => {
  return data.filter((item) => item.type === "Drinks");
};
