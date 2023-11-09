<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <!--    v-bind:value="post.title"-->
    <!--    @input="post.title = $event.target.value"-->
    <my-input
        v-focus
        v-model="post.title"
        placeholder="Название"/>
    <!--    v-bind:value="post.body"-->
    <!--    @input="post.body = $event.target.value"-->
    <my-input
        v-model="post.body"
        placeholder="Описание"/>
    <my-button style="align-self: flex-end" @click="createPost" class="btn">Создать</my-button>
  </form>
</template>

<script>


import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {MyInput, MyButton},
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ""
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}




</style>
