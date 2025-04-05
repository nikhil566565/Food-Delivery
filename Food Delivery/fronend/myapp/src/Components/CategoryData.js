import foodItems from "../Components/FoodData";

const categories = [
    { title: "Burgers & Fast Food", key: "burger" },
    { title: "Salads", key: "salad" },
    { title: "Pasta & Cuisines", key: "pasta" },
    { title: "Pizza", key: "pizza" },
    { title: "Breakfast", key: "breakfast" },
    { title: "Soups", key: "soups" }
];

const updatedCategories = categories.map(category => {
    const matchedItem = foodItems.find(item => item.category === category.key);
    return {
        ...category,
        image: matchedItem ? matchedItem.image : "https://placehold.co/150x150", 
        count: foodItems.filter(item => item.category === category.key).length  
    };
});

export default updatedCategories;