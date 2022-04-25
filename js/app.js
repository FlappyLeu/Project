const foods = [
  {
    category: "Хямдралтай",
    name: "Зайрмаг",
    price: 6800,
    img: "/images/food/04.png",
    isDiscount: 30,
  },
  {
    category: "Хямдралтай",
    name: "Панкейк",
    salePercent: "20%",
    price: 6800,
    img: "/images/food/02.png.png",
    isDiscount: 20,
  },
  {
    category: "Хямдралтай",
    name: "Өглөөний хоол",
    salePercent: "20%",
    price: 6800,
    img: "/images/food/03.png.png",
    isDiscount: 20,
  },
  {
    category: "Хямдралтай",
    name: "Банана сендвич",
    salePercent: "20%",
    price: 6800,
    img: "/images/food/01.png.png",
    isDiscount: 20,
  },
  {
    category: "Үндсэн хоол",
    name: "Салмон загас",
    price: 11800,
    img: "/images/food/1.png",
    isDiscount: 0,
  },
  {
    category: "Үндсэн хоол",
    name: "Бөөрөнхий мах",
    price: 14000,
    img: "/images/food/2.png",
    isDiscount: 0,
  },
  {
    category: "Үндсэн хоол",
    name: "Самрын нухаш",
    price: 9800,
    img: "/images/food/3.png.png",
    isDiscount: 0,
  },
  {
    category: "Үндсэн хоол",
    name: "Чикен",
    price: 14000,
    img: "/images/food/4.png",
    isDiscount: 0,
  },
  {
    category: "Салад ба зууш",
    name: "Детокс салад",
    price: 6800,
    img: "/images/food/5.png",
    isDiscount: 0,
  },
  {
    category: "Салад ба зууш",
    name: "Кобб салад",
    price: 6800,
    img: "/images/food/6.png",
    isDiscount: 0,
  },
  {
    category: "Салад ба зууш",
    name: "Авокадо салад",
    price: 6800,
    img: "/images/food/7.png",
    isDiscount: 0,
  },
  {
    category: "Салад ба зууш",
    name: "Сендвич",
    price: 4800,
    img: "/images/food/8.png",
    isDiscount: 0,
  },
  {
    category: "Амттан",
    name: "Донатс",
    price: 5800,
    img: "/images/food/9.png",
    isDiscount: 0,
  },
  {
    category: "Амттан",
    name: "Орео дессерт",
    price: 7800,
    img: "/images/food/10.png",
    isDiscount: 0,
  },
  {
    category: "Амттан",
    name: "Вафли",
    price: 5800,
    img: "/images/food/11.png",
    isDiscount: 0,
  },
  {
    category: "Амттан",
    name: "Макарон",
    price: 3800,
    img: "/images/food/12.png",
    isDiscount: 0,
  },
];

const sale = foods.filter((foods) => {
  foods.category == "Хямдралтай";
});
const mainDishes = foods.filter((category) => {
  foods.category == "Үндсэн хоол";
});
const salads = foods.filter((category) => {
  foods.category == "Салат ба зууш";
});
const sweets = foods.filter((category) => {
  foods.category == "Амттан";
});
const discount = foods.filter((food) => food.isDiscount > 1);
console.log(discount);
for (i = 0; i < discount.length; i++) {
  const disPrice = (discount.price[i] / 100) * isDiscount;
}
let food = `<div class="dishes"> 
<div class="test">
   <span class="sales"><p>30%</p></span>
</div>
<img src="${arr[i].img}" alt="icecream" />
<h3>${arr[i].name}</h3>
<span>${arr[i].price}₮</span>
<del>6,800₮</del>
</div>`;
