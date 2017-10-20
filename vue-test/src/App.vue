<template>
  <div >
    <ul>
      <li v-for="(value, key) in objList" >{{ key + value }}</li>
    </ul>
  </div>
</template>

<script>
import componentA from './components/a'
export default {
  data () {
    return {
      hello: '<span><img>world</span>',
      list: [
        {
          name: 'apple',
          price: 34
        },
        {
          name: 'banana',
          price: 56
        }
      ],
      objList: {
        name: 'apple',
        price: 34,
        color: 'red',
        weight: 14
      }
    }
  }
}
</script>

<style>
html{
  height: 100%;
}
</style>
