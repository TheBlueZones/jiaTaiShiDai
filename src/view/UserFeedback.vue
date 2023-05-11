<template>
    <div class="page">
        <div class="page-title">
            <img src="/img/user-feedback.png" class="background-image" alt="">
            <div class="title-text">售后反馈</div>
        </div>
        <div class="form-container">
            <el-form
                    ref="ruleFormRef"
                    :model="ruleForm"
                    :rules="rules"
                    label-width="120px"
                    class="demo-ruleForm"
                    :size="formSize"
                    status-icon
            >
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label=" " prop="name">
                            <el-input placeholder="请输入姓名" v-model="ruleForm.name" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label=" " prop="name">
                            <el-input placeholder="请输入公司" />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="性别" prop="resource" >
                    <el-radio-group v-model="ruleForm.resource">
                        <el-radio label="男"/>
                        <el-radio label="女"/>
                    </el-radio-group>
                </el-form-item>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label=" " prop="name">
                            <el-input placeholder="请输入电子邮箱" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label=" " prop="name">
                            <el-input placeholder="请输入联系电话" />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label=" " prop="region">
                            <el-select v-model="ruleForm.region" placeholder="产品类别" >
                                <el-option label="软件" value="shanghai"/>
                                <el-option label="器件" value="beijing"/>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label=" " prop="region">
                            <el-select v-model="ruleForm.region" placeholder="问题类别" >
                                <el-option label="外观" value="shanghai"/>
                                <el-option label="质量" value="beijing"/>
                                <el-option label="使用" value="shanghai"/>
                                <el-option label="设计" value="beijing"/>
                                <el-option label="其他" value="beijing"/>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label=" " required prop="date1">
                            <el-date-picker
                                    v-model="ruleForm.date1"
                                    type="date"
                                    placeholder="请选择购买日期"
                                    style="width: 100%"
                            />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label=" " prop="name">
                            <el-input placeholder="请输入产品序号"/>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="" prop="desc">
                    <el-input placeholder="请输入具体描述" v-model="ruleForm.desc" type="textarea" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                        提交
                    </el-button>
                    <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
    <return-home />
    <footer-component></footer-component>

</template>
<script lang="ts" setup>
import {reactive, ref} from 'vue'
import type {FormInstance, FormRules} from 'element-plus'
import FooterComponent from "../components/FooterComponent.vue";
import ReturnHome from "../components/returnHome.vue";

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    name: '',
    region: '',
    count: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const rules = reactive<FormRules>({
    name: [
        {required: true, message: '请输入姓名', trigger: 'blur'},
        {min: 3, max: 5, message: '长度应为3到5', trigger: 'blur'},
    ],
    region: [
        {
            required: true,
            message: '请选择活动地区',
            trigger: 'change',
        },
    ],
    count: [
        {
            required: true,
            message: '请选择活动次数',
            trigger: 'change',
        },
    ],
    date1: [
        {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change',
        },
    ],
    date2: [
        {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change',
        },
    ],
    type: [
        {
            type: 'array',
            required: true,
            message: '请至少选择一个活动类型',
            trigger: 'change',
        },
    ],
    resource: [
        {
            required: true,
            message: '请选择性别',
            trigger: 'change',
        },
    ],
    desc: [
        {required: true, message: '请输入活动形式', trigger: 'blur'},
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>
<style scoped lang="scss">
.page-title {
  font-size: 24px;
  font-weight: bold;
  color: white;
  position: relative;
  padding-bottom: 20px;
    height: 100%;
    margin-bottom: 250px;
}
.title-text{
    margin-left: 200px;
    font-size: 40px;
//    相对定位向下移动20px
    position: relative;
    top: 80px;
    color: white;
}
.title-text::after {
  content: '';
  display: block;
  position: absolute;
    bottom: -20px;
  left: -200px;
  width: 160px;
  height: 2px;
  background-color: white;
    margin-left: 200px;
}

.background-image {
  width: 100%;
  position: absolute;
  z-index: -1;
    margin-bottom: 100px;
}

.form-container {
  margin-left: 200px;
  margin-right: 200px;
  margin-bottom: 100px;
}

.el-input, .el-select {
  width: 500px;
}

.el-input__inner,
.el-select__input,
.el-select-dropdown__item {
    border-color: black !important;
}
</style>
