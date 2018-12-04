<template>
    <el-form :model=" loginForm" :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="usename">
        <el-input v-model=" loginForm.usename"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model=" loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">确认</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      loginForm: {
        usename: '',
        password: ''
      },
      rules: {
        usename: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '用户名长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 12, message: '密码长度在6-12之间', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.loginForm.validate(valid => {
        if (!valid) {
          console.log('我也不知道是个啥')
        }
        axios.post('http://localhost:8888/api/private/v1/login', this.loginForm)
          .then(res => {
            console.log(res)
          })
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
</style>
