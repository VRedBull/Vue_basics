import { defineStore } from "pinia";


export const useCartStore = defineStore({
    id:'cartStore',
    state:()=>({
        count:0
    }),
    actions:{
         increaseCount(){
            this.count++;
        },
        
         decreaseCount(){
            this.count--;
        }
    },
    getters:{
        oddOrEven:(state)=>{
            if(state.count%2==0)return 'even'
            return 'odd'
        }
    }
})

