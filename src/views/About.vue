<script setup>
import { computed, ref } from 'vue';
// import Cart from '../components/Cart.vue';
const title=ref("ABOUT is about ME")
const count=ref(0)
const oddOrEven=computed(()=>{
    if(count.value%2==0) return 'even'
    return 'odd'
})

function increaseCount(){
    count.value++;
}
function decreaseCount(){
    count.value--;
}
</script>


<template>
    <div class="about">
    <h2>{{title}}</h2>
</div>

<div id="countid">
    The count is {{ count }}
</div>
<div>
    <button v-on:click="increaseCount">+</button>
    <button v-on:click="decreaseCount">-</button>
</div>
<div>
    this counter is : {{ oddOrEven }}
</div>

    <!-- <Cart/> -->
</template>