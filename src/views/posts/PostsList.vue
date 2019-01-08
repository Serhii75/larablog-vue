<template>
  <div>
    <!-- <h1 text-align="center">Posts List</h1> -->
    <div class="row flex-row">
      <post-preview v-for="post in posts.data" :key="post.id" :post="post"></post-preview>
    </div>
  </div>
</template>

<script>
import PostPreview from '../../components/PostPreview.vue'

export default {
  props: {
    posts: {
      type: Object,
      default: null
    }
  },
  components: {
    'post-preview': PostPreview
  }
}
</script>
