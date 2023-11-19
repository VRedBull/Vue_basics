<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const props=defineProps({
  id: String,
  salary: String,
  email: String
})

const model = ref({employee:{
    name:"",
    email:"",
    salary:0
}})

const employee = ref({})
function fetchEmployee(){
    axios.get(`http://localhost:8080/empdata/getEmp/${props.id}`).then(response=>{
        console.log(response.data);
            employee.value=response.data;
    }).catch(error=>{
        console.log(error)
    })
}


function updateEmp(){
    axios.put(`http://localhost:8080/empdata/updateEmp/${props.id}`,model.value.employee).then(
        function(response){
            fetchEmployee();
        }).catch(function (error){
            console.log(error)
        });
}

onMounted(()=>{
    fetchEmployee();
})


</script>

<template>
    <h2>Employee</h2>
    <p>The Employee id is:{{ employee.id }}</p>
    <p>The Employee name is: {{ employee.name }}</p>
    <p>The Employee salary is:{{  employee.salary }}</p>
    <p>The Employee email is:{{  employee.email }}</p>

    <h4>Update Employee</h4>
    <form>
        <p>
      Name:
      <input type="text" required placeholder="name" v-model="model.employee.name">
    </p>
    <p>
      email:
      <input type="text" required placeholder="email" v-model="model.employee.email">
    </p>
    <p>
      salary:
      <input type="text" required placeholder="salary" v-model="model.employee.salary">
    </p>
   
    <button type="submit" v-on:click="updateEmp()">Update</button><br><br>
  </form>
</template>