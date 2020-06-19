<template>
  <el-page-header @back="goBack" content="HTTP请求观察">
  </el-page-header>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
