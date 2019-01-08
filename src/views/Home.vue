<template>
  <div class="home">
    <posts-list :posts="posts"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PostsList from '@/views/posts/PostsList.vue'

export default {
  name: 'home',
  components: {
    'posts-list': PostsList
  },
  computed: mapGetters({
    posts: 'posts/posts'
  }),
  created() {
    this.setData()
  },
  watch: {
    $route: 'setData'
  },
  methods: {
    ...mapActions({
      fetchPosts: 'posts/fetchPosts'
    }),
    setData() {
      this.fetchPosts({ context: this })
    }
  }
}
</script>
