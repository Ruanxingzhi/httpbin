<template>
  <div>
    <p>
      <i class="el-icon-stopwatch"/>
      您正在观察 <code style="color:#409EFF">{{binID}}</code> 号 HTTP Bin.
      请访问 <code>http://xxxxx</code> 以留下记录。
    </p>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="time"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="path"
        label="路径">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ['binID'],
  data () {
    return {
      tableData: [{
        time: '2016-05-02',
        path: '/www'
      }, {
        time: '2016-05-02',
        path: '/www'
      }, {
        time: '2016-05-02',
        path: '/www'
      }, {
        time: '2016-05-02',
        path: '/www'
      }]
    }
  }
}

</script>
