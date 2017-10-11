<template>
  <div >
    <p v-text="hello"></p>
    <p v-text="hello"></p>
    {{ status ? 'success' : 'fail' }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      hello: '<span><img>world</span>',
      num: 1,
      status: true
    }
  }
}
</script>

<style>
html{
  height: 100%;
}
</style>
