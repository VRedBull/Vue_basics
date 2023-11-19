<script setup>
import {ref,onMounted} from 'vue';
import axios from 'axios';


// const employees = ref([
//     {id: 1, firstName: 'John', lastName: 'Peter'},
//     {id: 2, firstName: 'Vikas', lastName: 'Pradhan'},
//     {id: 3, firstName: 'BRos', lastName: 'Warner'},
//     {id: 4, firstName: 'Kumar', lastName: 'Rohit'},
//     {id: 5, firstName:'Castle',lastName:'Frank'}
// ])

const empid=0;

const model = ref({employee:{
    name:"",
    email:"",
    salary:0
}})



const employees = ref({})
function fetchEmployees(){
    axios.get(`http://localhost:8080/empdata/getAllEmp`).then(response=>{
        console.log(response.data);
            employees.value=response.data;
    }).catch(error=>{
        console.log(error)
    })
}

const submitData = async()=>{
  console.log("1")
  console.log("2")
  try{
    const response = await axios.post('http://localhost:8080/empdata/create',model.value.employee)
    fetchEmployees();
    console.log("fetched")
    }
  catch(error){
    console.log(error)
  }
  console.log("3")
  console.log("4")
}

function formSubmit(){

axios.post(`http://localhost:8080/empdata/create`,model.value.employee).then(
    function (response){
        fetchEmployees();
    }).catch(function (error){
        console.log(error)
    });

}

function deleteEmp(empid){
    axios.delete(`http://localhost:8080/empdata/deleteEmp/${empid}`,model.value.employee).then(
        function(response){
            fetchEmployees();
        }).catch(function (error){
            console.log(error)
        });
}

onMounted(()=>{
    fetchEmployees();
})
</script>

<template>
    <h2>Employees</h2>

    <p v-for="employee in employees" :key="employee.id">
        <router-link :to="{name:'Employee',params:{id:employee.id}}"> {{ employee.id }} {{ employee.name }}</router-link>
    </p>


    <h4>Add Employee</h4>
    <div id="form">
  <form >
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
   
    <button type="submit" v-on:click="formSubmit()">Submit</button><br><br>

    
    

  </form>

  <form>
    <p>
      Delete Employee by Id:
      <input type="text" required placeholder="id" v-model.lazy="model.employee.id">
      {{ empid=model.employee.id }}
    </p>
   
    <button type="submit" v-on:click="deleteEmp(empid)">Delete</button><br><br>
  </form>
  </div>

</template>