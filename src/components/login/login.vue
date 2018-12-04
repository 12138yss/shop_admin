<template>
    <el-row  type="flex" justify="center" align="middle" class="login-form">
        <el-col :xs="16" :sm="14" :md="12" :lg="10" :xl="8" class="login-content">
            <el-form :model=" loginForm" :rules="rules" ref="loginForm" label-width="70px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="username">
                <el-input v-model=" loginForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type='password' v-model=" loginForm.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm">确认</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
              </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
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
        console.log(valid)
        if (!valid) {
          console.log('我也不知道是个啥')
        }
        axios.post('http://localhost:8888/api/private/v1/login', this.loginForm)
          .then(res => {
            console.log(res)
            if (res.data.meta.status === 200) {
              localStorage.setItem('token', res.data.meta.token)
              this.$router.push('/home')
              this.$message({
                type: 'success',
                message: res.data.meta.msg,
                duration: 800
              })
            } else {
              this.$message({
                type: 'false',
                message: res.data.meta.msg,
                duration: 800
              })
            }
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
.login-form{
    height: 100%;
    background-color: #2D434C;
}
.login-content{
    padding: 20px;
    border-radius: 15px;
    background-color: #fff;
}
</style>
