<template>
  <div class="hello">
    <img class="product-image" :src="imageTitle" >
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    imageTitle: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-image{
  width: 27vw;
  margin-left: 5vw;
  transition: all .2s ease-in-out;
  cursor: pointer;
  /*padding: 80px;*/
  /*padding-bottom: 150px;*/
  /*border: solid 10px #aa443d ;*/
  /*box-shadow: 52px 75px 43px 0px rgba(0, 0, 0, 0.51);*/
  /*background: #FFFFFF;*/
}

  .product-image:hover {
    transform: scale(1.1);
  }
</style>
