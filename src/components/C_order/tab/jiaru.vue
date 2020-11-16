<template>
    <div>
        <a @click='open2' class='tanchu'>加入回收站</a>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isclick: 0
        }
    },methods:{
         open2() {
      if (this.isclick == 0) {
        this.isclick = 1;
        this.$message({
          message: "加入回收站成功！",
          type: "success",
          offset: "100",
          customClass: "myClass"
        });
        window.setTimeout(() => {
          this.isclick = 0;
        }, 3000);
      }
    }
    }
}
</script>