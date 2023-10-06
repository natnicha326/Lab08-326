import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

const menu_sweet = ref([
  {
    name: 'Strawberry Hill X Macaron Kiss',
    img: 'https://www.onesiam.com/uploads/b_content_01553751377.JPG',
    price: 145
  },
  {
    name: 'Cheese Terrene X Snow Black',
    img: 'https://www.onesiam.com/uploads/b_content_01553751389.JPG',
    price: 140
  },
  {
    name: 'Black Pink X Strawberry Cloud',
    img: 'https://www.onesiam.com/uploads/b_content_01553751403.JPG',
    price: 120
  },
  {
    name: 'Cone Parfait',
    img: 'https://www.diyinspirenow.com/wp-content/uploads/2021/01/ice1.jpg',
    price: 50
  },
  {
    name: 'Dark Chocolate Lava',
    img: 'https://www.diyinspirenow.com/wp-content/uploads/2021/01/ice2.jpg',
    price: 80
  },
  {
    name: 'Naughty Honey',
    img: 'https://www.diyinspirenow.com/wp-content/uploads/2021/01/ice3.jpg',
    price: 90
  },
  {
    name: 'Pancake',
    img: 'https://lilluna.com/wp-content/uploads/2022/09/easy-pancakes3-resize-10.jpg',
    price: 75
  },
  {
    name: 'French Toasts',
    img: 'https://natashaskitchen.com/wp-content/uploads/2021/03/French-Toast-SQ.jpg',
    price: 55
  },
  {
    name: 'Waffle',
    img: 'https://www.jocooks.com/wp-content/uploads/2020/09/belgian-waffles-1-16.jpg',
    price: 60
  },
  {
    name: 'Virgin Mojito',
    img: 'https://www.thestreetratchada.com/upload/contents/1659066887mojito-cocktail-summer-party-drink.jpg',
    price: 80
  },
  {
    name: 'Strawberry Virgin',
    img: 'https://www.thestreetratchada.com/upload/contents/1659067060strawberry-mojito-with-lots-crushed-ice.jpg',
    price: 90
  },
  {
    name: 'Magic Blue Mocktail',
    img: 'https://www.thestreetratchada.com/upload/contents/1659067186butterfly-pea-flower-blue-ice-lemonade-with-lemon-coconut-syrup.jpg',
    price: 70
  }
])

return { menu_sweet }
})