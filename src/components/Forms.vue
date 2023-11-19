<script setup>
import { ref } from 'vue';




    // const details=ref([{name:"vikas",Password:"pass"}])
    const person = ref({name:'',Password:''})

    function addItem(){
        
        
    }


</script>

<template>
    <h1>Basic Form</h1>
    <div id="app">
  <form >
    <p>
      Name:
      <input type="text" required placeholder="name" v-model.lazy="person.value.name">
    </p>
    <p>
      Password:
      <input type="text" required placeholder="password" v-model.lazy="person.value.Password">
    </p>

    <label for="dept">Choose your Department:</label>
    <select name="dept" id="dept">
    <option value="CS">Computer Science</option>
    <option value="ENTC">Electronics</option>
    <option value="ME">Mechanical</option>
    <option value="IT">Infromation Tech</option>
  </select>
  <br><br>
  <p><input type="checkbox" required>Accept terms and conditions</p>
  
    <button type="submit" v-on:click="addItem()">Submit</button><br><br>
    <button type="theme">Theme</button>

  </form>
  </div>

  <div>
    <p>List of submissions:</p>
    <ul>
      <li v-for="item in details">{{ item.name }}, {{ item.Password}}</li>
    </ul>
  </div>

</template>