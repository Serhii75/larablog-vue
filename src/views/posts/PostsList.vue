<template>
  <div>
    <!-- <h1 text-align="center">Posts List</h1> -->
    <div class="row flex-row">
      <post v-for="post in posts.data" :key="post.id" :post="post"></post>
    </div>
  </div>
</template>

<script>
import Post from '../../components/Post.vue'

export default {
  props: {
    posts: {
      type: Object,
      default: null
    }
  },
  components: {
    post: Post
  }
}
</script>
