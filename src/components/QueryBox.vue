<template>
  <el-card class="box-card" style="margin:50px;padding:30px">
      <el-container>
        <el-header>
          <navmenu/>
        </el-header>
        <el-main>
          <board :binID="$route.params.msg"/>
        </el-main>
      </el-container>
    </el-card>
</template>

<script>
import board from '@/components/BinBoard.vue'
import navmenu from '@/components/NavMenu.vue'

export default {
  components: {
    navmenu,
    board
  }
}
</script>
