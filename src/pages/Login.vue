<template>
<div id="login">
  <KHeader :showPageHeader="false"></KHeader>
  <KLoginForm></KLoginForm>
</div>
</template>

<script>
import KHeader from '../component/Header.vue'
import KLoginForm from '../component/LoginForm.vue'
export default {
  components: {
    KHeader,KLoginForm
  },
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App2'
    }
  }
}
</script>

<style scoped>

</style>
