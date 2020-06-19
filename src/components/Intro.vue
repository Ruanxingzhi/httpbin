<template>
    <el-card class="box-card" style="margin:50px;padding:30px">
      <el-container>
        <el-header>
          <navmenu/>
        </el-header>
        <el-main>
          <p>这里是一个 HTTP Bin.</p>
          <br/>
          <p>HTTP Bin有什么用？</p>
          <p>无回显命令注入时，可以在靶机上调用curl等程序，把敏感信息包含进url参数，访问HTTP Bin并观察记录。</p>
          <br/>
          <el-button type="primary" @click="genBin">给我也整一个</el-button>
        </el-main>
      </el-container>
    </el-card>
</template>

<script>
import navmenu from '@/components/NavMenu'

export default {
  name: 'introduce',
  components: {
    navmenu
  },
  methods: {
    genBin: function () {
      var randID = Math.floor(Math.random() * 100000000)
      this.$router.push(`bin/${randID}`)
    }
  }
}
</script>
