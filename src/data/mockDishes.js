const dishes = [
  // MAIN COURSE - NON-VEG
  {
    id: 1,
    name: "Tandoori Chicken",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description: "Chicken marinated in yogurt and spices, then roasted.",
    image: "https://d1eha6vqc5cqta.cloudfront.net/2014/06/tandoori-chicken-2.jpg",
    category: { id: 1, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Ginger-Garlic Paste", quantity: "2 tbsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Turmeric", quantity: "1/2 tsp" },
      { name: "Garam Masala", quantity: "1 tsp" },
      { name: "Lemon Juice", quantity: "1 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Oil", quantity: "2 tbsp" }
    ]
  },
  // MAIN COURSE - VEG
  {
    id: 2,
    name: "Dal Makhni",
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Creamy Indian lentil dish slow-cooked with butter and spices.",
    image: "https://www.greedygourmet.com/wp-content/uploads/2013/02/dal-makhani-feature.jpg",
    category: { id: 1, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    ingredients: [
      { name: "Black Lentils", quantity: "1 cup" },
      { name: "Red Kidney Beans", quantity: "1/4 cup" },
      { name: "Butter", quantity: "50g" },
      { name: "Cream", quantity: "2 tbsp" },
      { name: "Tomatoes", quantity: "2, pureed" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Garam Masala", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" }
    ]
  },
  {
    id: 6,
    name: "Paneer Butter Masala",
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Soft paneer cubes in a rich, creamy tomato-based curry.",
    image: "https://www.indianveggiedelight.com/wp-content/uploads/2017/09/instant-pot-paneer-butter-masala-featured.jpg",
    category: { id: 1, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Tomatoes", quantity: "3, pureed" },
      { name: "Cream", quantity: "50ml" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
      { name: "Cumin Seeds", quantity: "1 tsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Garam Masala", quantity: "1 tsp" },
      { name: "Kasuri Methi", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" }
    ]
  },
  {
    id: 7,
    name: "Butter Chicken",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description: "Classic North Indian chicken curry with butter and cream.",
    image: "https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg",
    category: { id: 1, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "CURRY",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Butter", quantity: "3 tbsp" },
      { name: "Tomatoes", quantity: "4, pureed" },
      { name: "Cream", quantity: "50ml" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
      { name: "Garam Masala", quantity: "1 tsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Kasuri Methi", quantity: "1 tsp" },
      { name: "Salt", quantity: "to taste" }
    ]
  },

  // STARTERS
  {
    id: 3,
    name: "Corn Chilli",
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy corn tossed in spicy sauce—perfect as a starter.",
    image: "https://vegetablerecipes.com/wp-content/uploads/2025/08/Corn-Chili-VR-7-1-of-1.jpg",
    category: { id: 2, name: "Street Food", image: "", isRecommendedForMealSuggestion: false },
    dishType: "FINGER FOOD",
    ingredients: [
      { name: "Corn", quantity: "150g" },
      { name: "Chilli Sauce", quantity: "2 tbsp" },
      { name: "Bell Pepper", quantity: "1/2 cup, diced" },
      { name: "Onion", quantity: "1/4 cup, diced" },
      { name: "Garlic", quantity: "1 clove, minced" },
      { name: "Soy Sauce", quantity: "1 tbsp" },
      { name: "Oil", quantity: "1 tbsp" }
    ]
  },
  {
    id: 8,
    name: "Paneer Tikka",
    mealType: "STARTER",
    type: "VEG",
    description: "Marinated paneer cubes grilled to perfection.",
    image: "https://1.bp.blogspot.com/-NPEhviy3oC4/VS53-SORhzI/AAAAAAAAQxg/laCSQffNAP8/s1600/paneer%2Btikka%2B2%2Bfinal.JPG",
    category: { id: 2, name: "Street Food", image: "", isRecommendedForMealSuggestion: false },
    dishType: "FINGER FOOD",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Yogurt", quantity: "1/4 cup" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Turmeric", quantity: "1/2 tsp" },
      { name: "Garam Masala", quantity: "1 tsp" },
      { name: "Lemon Juice", quantity: "1 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Oil", quantity: "1 tbsp" }
    ]
  },

  // DESSERTS
  {
    id: 4,
    name: "Gulab Jamun",
    mealType: "DESSERT",
    type: "VEG",
    description: "Classic syrupy sweet balls served warm.",
    image: "https://1.bp.blogspot.com/-YGBSprsgs1c/XdDVy-pGurI/AAAAAAAAX64/uN_6FF2b6BIYgI2tzz3DXlWNvdlY_jZ_QCLcBGAsYHQ/s1600/gulab%2Bjamun%2B9.JPG",
    category: { id: 3, name: "Sweets", image: "", isRecommendedForMealSuggestion: false },
    dishType: "SWEET",
    ingredients: [
      { name: "Milk Solids", quantity: "200g" },
      { name: "Sugar Syrup", quantity: "1 cup" },
      { name: "Cardamom Powder", quantity: "1/2 tsp" },
      { name: "Rose Water", quantity: "1 tsp" },
      { name: "Ghee", quantity: "2 tbsp" }
    ]
  },
  {
    id: 9,
    name: "Rasmalai",
    mealType: "DESSERT",
    type: "VEG",
    description: "Soft paneer balls in sweetened milk, flavored with cardamom.",
    image: "https://www.myspicetrail.com/wp-content/uploads/2021/03/rasmalai1.jpg",
    category: { id: 3, name: "Sweets", image: "", isRecommendedForMealSuggestion: false },
    dishType: "SWEET",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Milk", quantity: "1 liter" },
      { name: "Sugar", quantity: "100g" },
      { name: "Cardamom Powder", quantity: "1 tsp" },
      { name: "Saffron", quantity: "a few strands" }
    ]
  },

  // SIDES
  {
    id: 5,
    name: "Garlic Naan",
    mealType: "SIDES",
    type: "VEG",
    description: "Soft naan topped with garlic and butter.",
    image: "https://cafedelites.com/wp-content/uploads/2020/06/Garlic-Naan-Recipe-IMAGE-76.jpg",
    category: { id: 4, name: "Breads", image: "", isRecommendedForMealSuggestion: false },
    dishType: "BREAD",
    ingredients: [
      { name: "Flour", quantity: "300g" },
      { name: "Garlic", quantity: "3 cloves" },
      { name: "Yeast", quantity: "1 tsp" },
      { name: "Milk", quantity: "100ml" },
      { name: "Salt", quantity: "1/2 tsp" },
      { name: "Butter", quantity: "2 tbsp" }
    ]
  },
  {
    id: 10,
    name: "Butter Naan",
    mealType: "SIDES",
    type: "VEG",
    description: "Soft naan brushed with butter.",
    image: "https://www.lekhafoods.com/media/1050731/butter-naan.jpg",
    category: { id: 4, name: "Breads", image: "", isRecommendedForMealSuggestion: false },
    dishType: "BREAD",
    ingredients: [
      { name: "Flour", quantity: "300g" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Yeast", quantity: "1 tsp" },
      { name: "Milk", quantity: "100ml" },
      { name: "Salt", quantity: "1/2 tsp" }
    ]
  },

  // Additional Main Course
  {
    id: 11,
    name: "Veg Biryani",
    mealType: "MAIN COURSE",
    type: "VEG",
    description: "Aromatic basmati rice cooked with vegetables and spices.",
    image: "https://yummyindiankitchen.com/wp-content/uploads/2018/01/quick-vegetable-biryani-veg-biryani-in-cooker-pressure-cooker-biryani-easy-biryani.jpg",
    category: { id: 1, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "RICE",
    ingredients: [
      { name: "Basmati Rice", quantity: "1 cup" },
      { name: "Mixed Vegetables", quantity: "1 cup" },
      { name: "Onion", quantity: "1, sliced" },
      { name: "Ginger-Garlic Paste", quantity: "1 tsp" },
      { name: "Garam Masala", quantity: "1 tsp" },
      { name: "Turmeric", quantity: "1/2 tsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Coriander Leaves", quantity: "2 tbsp" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ]
  },

  {
    id: 12,
    name: "Chicken Biryani",
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    description: "Basmati rice layered with marinated chicken and cooked with spices.",
    image: "https://wallpaperaccess.com/full/1972917.jpg",
    category: { id: 1, name: "North Indian", image: "", isRecommendedForMealSuggestion: true },
    dishType: "RICE",
    ingredients: [
      { name: "Basmati Rice", quantity: "1 cup" },
      { name: "Chicken", quantity: "500g" },
      { name: "Yogurt", quantity: "1/4 cup" },
      { name: "Onion", quantity: "1, sliced" },
      { name: "Ginger-Garlic Paste", quantity: "1 tbsp" },
      { name: "Garam Masala", quantity: "1 tsp" },
      { name: "Turmeric", quantity: "1/2 tsp" },
      { name: "Red Chili Powder", quantity: "1 tsp" },
      { name: "Coriander Leaves", quantity: "2 tbsp" },
      { name: "Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" }
    ]
  },

  // Additional Starter
  {
    id: 13,
    name: "Spring Rolls",
    mealType: "STARTER",
    type: "VEG",
    description: "Crispy rolls stuffed with vegetables.",
    image: "https://www.thespruceeats.com/thmb/LehwAeBFFpEIR1JArEk7hAkWZ9Y=/4494x3000/filters:fill(auto,1)/thai-fresh-rolls-with-vegetarian-option-3217706_form-rolls-step-07-f2d1c96942b04dd0830026702e697f17.jpg",
    category: { id: 2, name: "Street Food", image: "", isRecommendedForMealSuggestion: false },
    dishType: "FINGER FOOD",
    ingredients: [
      { name: "Spring Roll Wrapper", quantity: "6 sheets" },
      { name: "Cabbage", quantity: "1 cup, shredded" },
      { name: "Carrot", quantity: "1/2 cup, julienne" },
      { name: "Capsicum", quantity: "1/4 cup, sliced" },
      { name: "Soy Sauce", quantity: "1 tbsp" },
      { name: "Oil", quantity: "for frying" },
      { name: "Salt", quantity: "to taste" }
    ]
  },

  {
    id: 14,
    name: "Veg Manchurian",
    mealType: "STARTER",
    type: "VEG",
    description: "Deep-fried vegetable balls tossed in spicy Indo-Chinese sauce.",
    image: "https://atanurrannagharrecipe.com/wp-content/uploads/2023/01/Veg-Manchurian-for-website.jpg",
    category: { id: 2, name: "Street Food", image: "", isRecommendedForMealSuggestion: false },
    dishType: "FINGER FOOD",
    ingredients: [
      { name: "Cabbage", quantity: "1 cup, shredded" },
      { name: "Carrot", quantity: "1/2 cup, grated" },
      { name: "Cornflour", quantity: "2 tbsp" },
      { name: "Ginger-Garlic Paste", quantity: "1 tsp" },
      { name: "Soy Sauce", quantity: "1 tbsp" },
      { name: "Chili Sauce", quantity: "1 tbsp" },
      { name: "Oil", quantity: "for frying" },
      { name: "Salt", quantity: "to taste" }
    ]
  },

  // Additional Dessert
  {
    id: 15,
    name: "Kheer",
    mealType: "DESSERT",
    type: "VEG",
    description: "Traditional Indian rice pudding flavored with cardamom and saffron.",
    image: "https://masalasecret.com/wp-content/uploads/2023/02/IMG_6142-scaled.jpg",
    category: { id: 3, name: "Sweets", image: "", isRecommendedForMealSuggestion: false },
    dishType: "SWEET",
    ingredients: [
      { name: "Basmati Rice", quantity: "1/4 cup" },
      { name: "Milk", quantity: "1 liter" },
      { name: "Sugar", quantity: "1/2 cup" },
      { name: "Cardamom Powder", quantity: "1/2 tsp" },
      { name: "Saffron", quantity: "a few strands" },
      { name: "Cashews", quantity: "10-12" },
      { name: "Raisins", quantity: "10-12" }
    ]
  }
];

export default dishes;
