<template>
  <div class="card auth-form">
    <div class="card-content">
      <div class="card-title">Sign up</div>
      <form action="#" @submit.prevent="submit">
        <div class="input-field">
          <i class="material-icons prefix">account_box</i>
          <input id="name" type="text" class="validate" v-model="name">
          <label for="name">Name</label>
          <span
            class="helper-text error-text"
            data-error="wrong"
            v-if="errors.name"
          >{{ errors.name[0] }}</span>
        </div>

        <div class="input-field">
          <i class="material-icons prefix">email</i>
          <input id="email" type="email" class="validate" v-model="email">
          <label for="email">Email</label>
          <span
            class="helper-text error-text"
            data-error="wrong"
            v-if="errors.email"
          >{{ errors.email[0] }}</span>
        </div>

        <div class="input-field">
          <i class="material-icons prefix">vpn_key</i>
          <input id="password" type="password" class="validate" v-model="password">
          <label for="password">Password</label>
          <span
            class="helper-text error-text"
            data-error="wrong"
            v-if="errors.password"
          >{{ errors.password[0] }}</span>
        </div>

        <div class="input-field">
          <i class="material-icons prefix">vpn_key</i>
          <input
            id="password_confirmation"
            type="password"
            class="validate"
            v-model="password_confirmation"
          >
          <label for="password">Confirm Password</label>
        </div>

        <div class="btn-group">
          <router-link class="btn waves-effect waves-light grey" to="/">
            Back
            <i class="material-icons left">keyboard_backspace</i>
          </router-link>
          <button class="btn waves-effect waves-light" type="submit">
            Submit
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      errors: []
    }
  },
  methods: {
    ...mapActions({
      register: 'auth/register'
    }),
    submit() {
      this.clearErrors()
      this.register({
        payload: {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        },
        context: this
      }).then(() => {
        this.errors.length || this.$router.replace({ name: 'home' })
      })
    },
    clearErrors() {
      this.errors = []
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-form {
  min-width: 400px;

  .input-field {
    margin-bottom: 2rem;
  }

  .card-title {
    margin-bottom: 2rem;
    text-align: center;
  }

  .btn-group {
    display: flex;
    justify-content: space-between;
  }

  .error-text {
    color: red;
  }
}
</style>
