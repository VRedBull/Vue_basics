
<script setup>


import { onMounted, reactive, ref } from 'vue';



     const username= ref('vikas')
     function updateUsername(newUsername) {
       username.value = newUsername
      }
      onMounted(() => {
        updateUsername('Red Bull')
    })

    const isModalShown= ref(false)
    function showModal() {
      isModalShown.value = true
    }
    // function mounted(){
    //   this.updateUsername('Pradhan@LTI')
    //   this.showModal()
    // }

    onMounted(() => {
        showModal()
    })
    //lambda function will call it directly
    
    const sentence1="Good. I am Boy"
    // function rev(){
    //   sentence1.value = sentence1.split('').reverse().join('s')
    // }
    // onMounted(() => {
    //     rev()
    // })
      const count=ref(100)

      var refObj = ref(12)
      var reactObj = reactive({id:23,name:"Vikas",city:"Hinjili"})

      function change(){

      }



</script>
<template>
    <p>{{ username }}</p>
    <p>{{ isModalShown }}</p>
    <p>{{ sentence1.split(' ').reverse().join(' ') }}</p>
    <button type="button" v-on:click.left()="count--">count is {{count}}</button>
    <img src="../../img/Red.png" alt="redbull" style="width:500px;height:300px;">
</template>