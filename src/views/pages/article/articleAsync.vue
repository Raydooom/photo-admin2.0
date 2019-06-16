<template>
  <section>
    <div class="main-container">
      <el-form ref="form" :model="formData" :rules="rules" label-position="right" label-width="140px">
        <el-row>
          <el-col :span="20">
            <el-form-item label="公众号文章链接" prop="url">
              <el-input v-model="formData.url" placeholder="文章链接" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="封面图片">
              <upload @upLoadImg="getCoverUrl" :imgUrl="formData.coverUrl"></upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="选择分类" prop="kindId">
              <el-select v-model="formData.kindId" placeholder="请选择">
                <el-option v-for="item in kindList" :key="item.value" :label="item.name" :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="首页展示">
              <el-switch v-model="formData.homeShow"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" prop="description">
            <el-form-item label="文章描述">
              <el-input type="textarea" autosize :rows="3" v-model="formData.description" maxlength="100"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-button type="primary" round @click="publish">同步文章</el-button>
          <el-button round>取消</el-button>
        </el-row>
      </el-form>
    </div>
  </section>
</template>
<script>
import upload from "@/components/upload";
import { getKindList, asyncArticle } from "@/api//";
export default {
  data() {
    return {
      kindList: "",
      formData: {
        url: "",
        coverUrl: "",
        kindId: 1,
        homeShow: false,
        description: ""
      },
      rules: {
        url: [{ required: true, message: "公众号文章链接" }]
      }
    };
  },
  components: {
    upload
  },
  methods: {
    // 获取分类
    getKindList() {
      getKindList()
        .then(res => {
          this.kindList = res.data;
        })
        .catch(() => {});
    },
    // 获取封面图片路径
    getCoverUrl(data) {
      console.log(data)
      this.formData.coverUrl = data;
    },
    // 发布文章
    publish() {
      this.$refs["form"].validate(validate => {
        if (validate) {
          let params = {
            url: this.formData.url,
            coverUrl: this.formData.coverUrl,
            kind: this.formData.kindId,
            description: this.formData.description,
            homeShow: this.formData.homeShow ? "1" : "0"
          };
          console.log(params)
          asyncArticle(params).then(res => {
            if (res.errno == 0) {
              this.$message.success(res.errmsg);
              this.$router.go(-1);
            }
          });
        }
      });
    }
  },
  mounted() {
    this.getKindList();
  }
};
</script>
<style lang="scss" scoped>
.main-container {
  .el-row {
    margin: 20px 0;
  }
}
</style>
