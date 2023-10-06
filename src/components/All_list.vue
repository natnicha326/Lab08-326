<template>
  <div>
    <div class="n"><h1 style="text-align: center;">✮•° 𝙈𝙀𝙉𝙐 °•✮</h1></div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="(i,index) in shop_food" :key="index">
        <div class="card">
          <img :src="i.img" class="card-img-top" alt="..." width="150" height="300" />
          <div class="card-body">
            <h2 class="card-title" style="text-align: center;">{{ i.name }}</h2>
            <h5>ราคา {{i.price}} บาท</h5>
            <p class="card-text">
              <button class="btn-primary" type="submit" @click="handleAddToCart(i)" style="text-align: center;">🌸เลือกสินค้า💗</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { menuStore } from '../stores/All_menu';
import { addToCart } from '../stores/counter';

const allmenu = menuStore();
const shop_food = ref(allmenu.menu_sweet);

const handleAddToCart = (item) => {
  addToCart(item);
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Mali&family=Mooli&family=Nunito:wght@500&family=Roboto+Slab&display=swap');
.card-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: 'Itim', cursive;
}
.card-title{
  font-family: 'Nunito', sans-serif;
}
h5 {
  text-align: center;
  font-family: 'Itim', cursive;
}
.btn-primary{
  background-color: rgb(255, 151, 194);

}
h1{
  font-family: 'Itim', cursive;
}
.n{
  text-align: center;
    border: 2px solid #000; 
    padding: 10px; 
    background-color: aliceblue;
    border-radius: 50px;
    display: inline-block;
    margin-bottom: 20px;
}
.container{
  background-color: rgb(255, 226, 231);
}


</style>
