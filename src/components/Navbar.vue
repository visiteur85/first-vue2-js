<template>
  <div class="navbar">
<div>Vue 3</div>
    <div class="navbar__btns">
      <my-button style="margin-right: 5px" @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')">О сайте</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton}

}
</script>

<style  scoped>
.navbar {
  height: 50px;
  background-color: darkgray;
  box-shadow: 2px 2px 4px rgb(128, 128, 128);
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
}
</style>
