<template>
  <div class="col s12 m12 l6">
    <router-link :to="{ name: 'posts.show', params: {id: post.id} }"
      :title="post.title"
      class="card z-depth-3 item-preview"
    >
      <div class="">
        <div class="item-image">
          <img :src="post.image">
        </div>

        <div class="item-content">
          <h3 class="card-title">{{ post.title }}</h3>
          <div><time>{{ post.created_at }}</time> | {{ post.user.name }}</div>
          <p>{{ post.intro }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      hovered: false
    }
  }
}
</script>

<style lang="scss">
.item-preview {
  display: block;
  height: 100%;
  color: rgba(0,0,0,.87);
  transition: all 0.3s linear;

  .item-image {
    height: 60%;

    img {
      position: relative;
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 2px 2px 0 0;
    }
  }

  .card-title {
    margin-top: 0;
    margin-bottom: 0.25rem;
  }

  .item-content {
    padding: 1.5rem;

    & > div {
      font-size: 0.85rem;
      color: rgba(0,0,0,.66);
    }
  }

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
      0 9px 46px 8px rgba(0, 0, 0, 0.12),
      0 11px 15px -7px rgba(0, 0, 0, 0.2);
    transition: all 0.3s linear;

    .card-title {
      color: #006064;
      transition: all 0.3s linear;
    }
  }
}
</style>
