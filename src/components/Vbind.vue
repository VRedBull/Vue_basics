<script setup>
import { ref } from 'vue';

    const empId = ref("bro")
    const textColor = ref("textStyle")
    const content = ref("<p>textStyle</p>")
    const status = ref(true)
    const attr1 = ref('id')
    const attr2 = ref('class')
    const users = ref(0)
    const cart = ref(['keychain','shirt','bottle'])

    const details=ref([{id:1,name:"Vikas",salary:20000},{id:2,name:"Pradhan",salary:15000}])

    const countries=ref([])
    const item=ref('')

    function addItem(item){
        cart.value.push(item)
    }
    function removeItem(){
        cart.value.pop()
    }

</script>

<template>
    <div v-bind:id="empId"></div>
    <div  v-bind:class="textColor">LTI</div>
    <div v-html="content" :class="content"></div>
    <input type="checkbox" v-on:click="status==true?status=false:status=true">
    <div v-if="status">
        <p>If content</p>
    </div>
    <div v-show="status">
        <p>show content</p>
    </div>

    <button v-on:click="users++">Add users</button>
    <h4 v-if="users==0">No users</h4>
    <h4 v-else-if="users>0 && users<=10">{{users}} users</h4>
    <h4 v-else-if="users>10">{{users+10}} users</h4>
    

    <div :[attr1]="divId" :[attr2]="textColor"></div>

    <ul>
        <li v-for="(items,cart) in cart">{{cart}}) {{items }}</li>
    </ul>
    <input type="text" v-model.lazy="item"/>{{ item }}<br>
    <button v-on:click="addItem(item)">Add Items</button>
    <button v-on:click="removeItem()">Remove Items</button>

    <ol>
        <li v-for="(count,key) in details">{{ key +1}}) {{count.name}}, {{  count.salary }} </li>
    </ol>

    <label for="countries">Choose a country:</label>
    <select name="countries" id="countries" v-model="countries" multiple>
        <option value="IN">INDIA</option>
        <option value="BN">BANGLADESH</option>
        <option value="NP">NEPAL</option>
        <option value="DK">DENMARK</option>
        <option value="AU">AUSTRALIA</option>
    </select>

    

</template>

<style>
    #bro{
        color:chartreuse;
    }
    .textStyle{
        color: blue;
    }
    .content{
        color: chartreuse;
    }
</style>