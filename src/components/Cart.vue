<script setup>
import { computed, ref } from 'vue';
import { useCartStore } from '../stores/cart';


// const flag=ref(1)

const cartStore = useCartStore()

// const oddOrEven = computed(()=>{
//     if (cartStore.count%2==0) return 'even'
//     return 'odd'
// })


</script>

<template>
    <div>
        {{ cartStore.count }}
    </div>
    <div>
        <p> 
        <button v-on:click="cartStore.increaseCount()">+</button>
                                               |                      
        <button v-on:click="cartStore.decreaseCount()">-</button>
    </p>
    </div>

    <div>
        This counter is:{{ cartStore.oddOrEven }}
        <!-- This counter is:{{ count%2==0?flag=1:flag=0 }}
        <span v-if="flag==1"> even</span>
        <span v-if="flag==0"> odd</span> -->
    </div>
</template>