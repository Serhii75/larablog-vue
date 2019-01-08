<template>
  <div class="content">
    <div class="wrapper">
      <nav class="cyan darken-4">
        <div class="nav-wrapper container">
          <router-link class="brand-logo" to="/">Larablog</router-link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <router-link to="/">Home</router-link>|
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li v-if="user.authenticated">
              <a href="#">Hi, {{ user.data.name }}</a>
            </li>
            <li v-if="user.authenticated">
              <a class="waves-effect grey darken-1 btn" href="#" @click.prevent="logout">Sign out</a>
            </li>
            <li v-if="!user.authenticated">
              <router-link class="waves-effect grey darken-1 btn" to="/login">Sign in</router-link>
            </li>
            <li v-if="!user.authenticated">
              <router-link class="waves-effect grey darken-1 btn" to="/register">Sign up</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <router-view/>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        Developed by SI-Dev
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'default',
  computed: mapGetters({
    user: 'auth/user'
  }),
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  }
}
</script>

<style lang="scss">
.brand-logo {
  font-family: 'Great Vibes', cursive;
}
#nav-mobile {
  a {
    font-weight: bold;
    color: #e0e0e0;
    &.router-link-exact-active {
      color: #fff;
    }
    &:hover {
      color: #fff;
    }
  }
}
.content {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.wrapper {
  height: 100%;
  flex: 1 0 auto;
}
.footer {
  width: 100%;
  height: 3.5rem;
  background-color: #00838f;
  line-height: 3.5rem;
  color: #e0e0e0;
}
</style>
