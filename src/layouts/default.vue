<template>
  <div>
    <nav class="teal accent-4">
      <div class="nav-wrapper container">
        <router-link class="brand-logo" to="/">Larablog</router-link>|
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>|
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <router-link to="/about">About</router-link>|
          </li>
          <li>
            <router-link class="waves-effect grey darken-1 btn" to="/login">Sign in</router-link>
          </li>
          <li>
            <a class="waves-effect grey darken-1 btn" href="#">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'default'
}
</script>

<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
