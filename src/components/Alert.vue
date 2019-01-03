<template>
  <div class="card-panel alert white-text" :class="type">{{ message }}</div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'message'
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  margin-bottom: 2.5rem;
}
.message {
  background-color: #1e88e5;
}
.error {
  background-color: #e57373;
}
.warning {
  background-color: #fb8c00;
}
</style>
