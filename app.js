const breakfastList = ["pancakes","Paratha","Poha","Idli","Dosa","Uttapam","Chilla","Cheela","Aloo Puri","Bread Pakora","Bread Toast","Samosa","Kachori","Chole Bhature","Poori Bhaji","Besan Cheela","Methi Paratha","Paneer Paratha","Egg Paratha","Aloo Paratha","Cheese Paratha","Bhatura","Kachori with Aloo Sabzi","Matar Kachori","Aloo Tikki","Chana Dal Paratha","Moong Dal Chilla","Sabudana Khichdi","Maggi"];
const lunchList = ["Chana Masala","Rajma Masala","Aloo Gobi","Aloo Matar","Baingan Bharta","Bhindi Masala","Palak Paneer","Matar Paneer","Paneer Butter Masala","Kadai Paneer","Paneer Bhurji","Mushroom Masala","Malai Kofta","Vegetable Kofta Curry","Navratna Korma","Jeera Aloo","Dum Aloo","Masala Chaas","Punjabi Samosa","Chole Bhature","Pav Bhaji","Paneer Paratha","Aloo Paratha","Gobi Paratha","Methi Paratha","Missi Roti","Lachha Paratha","Dal Makhani","Tawa Pulao","Veg Pulao"];
const dinnerList = ["Dal Makhani","Rajma","Chole","Paneer Butter Masala","Kadai Paneer","Matar Paneer","Palak Paneer","Aloo Gobi","Baingan Bharta","Bhindi Masala","Malai Kofta","Shahi Paneer","Paneer Tikka Masala","Dum Aloo","Aloo Matar","Paneer Bhurji","Kadhi Pakora","Biryani","Pulao","Jeera Rice","Vegetable Fried Rice","Raita","Salad","Roti","Naan","Paratha","Bhature","Puri","Chapati","Papad"];

const breakfastButton = document.getElementById("breakfast-button");
const lunchButton = document.getElementById("lunch-button");
const dinnerButton = document.getElementById("dinner-button");
const foodName = document.getElementById("food-name");
const foodImage = document.getElementById("food-image");


function getRandomItem(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

breakfastButton.addEventListener("click", () => {
  const selectedFood = getRandomItem(breakfastList);
  foodName.textContent = selectedFood;
  foodImage.src = `images/${selectedFood.toLowerCase()}.jpg`;
});

lunchButton.addEventListener("click", () => {
  const selectedFood = getRandomItem(lunchList);
  foodName.textContent = selectedFood;
  foodImage.src = `images/${selectedFood.toLowerCase()}.jpg`;
});

dinnerButton.addEventListener("click", () => {
  const selectedFood = getRandomItem(dinnerList);
  foodName.textContent = selectedFood;
  foodImage.src = `images/${selectedFood.toLowerCase()}.jpg`;
});
