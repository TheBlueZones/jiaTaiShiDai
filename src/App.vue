<template>
    <div class="common-layout">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            background-color="#FFF"
            text-color="#000"
            active-text-color="#"
            @select="handleSelect"
        >
            <el-menu-item index="0">
                <el-image style="width: 40px; height: 40px" src="../public/logo.png" fit="fit"/>
                <el-text class="mx-1">嘉钛时代</el-text>
            </el-menu-item>
            <div class="flex-grow"/>
            <el-menu-item index="1">产品介绍</el-menu-item>
            <el-menu-item index="1">团队介绍</el-menu-item>
            <el-menu-item index="1">专利展示</el-menu-item>
            <el-menu-item index="1">联系我们</el-menu-item>
        </el-menu>

        <div class="banner-container">
            <img src="../static/img/banner.png" class="banner">
        </div>
        <div class="container">

        </div>
        <div class="product-intro-container">
            <h2 class="product-intro-title">产品介绍</h2>
            <div class="product-row" v-for="(row, rowIndex) in productItems" :key="'row-' + rowIndex">
                <div class="product-item" v-for="(item, itemIndex) in row" :key="'item-' + itemIndex">
                    <div class="product-image">
                        <img :src="item.image" class="product-image-inner">
                    </div>
                    <p class="product-text">{{ item.text }}</p>
                </div>
            </div>
        </div>

        <div class="team-intro-container">
            <h2 class="team-intro-title">研究团队</h2>
            <p class="team-intro-text">
                现有享受国务院特殊津贴专家1名，斛兵学者1名，“新世纪优秀人才支持计划”专家1名，二级教授3名，副教授3名，讲师7名，博士后2名，高级工程师2名，博士生12名，硕士生47名。中心中青年骨干教师均来自 “双一流”高校华中科技大学、哈工大、西工大以及国外知名高校，承担国家自然科学基金14项，主持或参与国家重点研发计划、装备预研项目、基础加强计划项目等国家级/省部级重要课题40余项，研究成果发表于成形制造领域顶级期刊IJP、JMPT、IJRM&HM、MSEA、JNM、JAC等国内外重要期刊。
            </p>
            <div class="team-photo-row" v-for="(row, rowIndex) in teamPhotos" :key="'row-' + rowIndex">
                <div class="team-photo-item" v-for="(photo, photoIndex) in row" :key="'photo-' + photoIndex">
                    <div class="team-photo-image">
                        <img :src="photo.image" class="team-photo-image-inner">
                    </div>
                    <p class="team-photo-text">{{ photo.text }}</p>
                </div>
            </div>
        </div>

        <div class="team-patent-container">
            <h2 class="team-patent-title">专利展示</h2>
            <div class="demo-image__preview">
                <el-image
                    style="width: 100px; height: 100px"
                    :src="url"
                    :zoom-rate="1.2"
                    :preview-src-list="srcList"
                    :initial-index="4"
                    fit="cover"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'

const activeIndex = ref('1')
const handleSelect = (string, keyPath) => {
    console.log(key, keyPath)
}


const productItems = [
    [
        { image: '../static/img/introduce/img_1.png', text: '网格筋壁板电辅助渐进压弯平台' },
        { image: '../static/img/introduce/img_2.png', text: '板料电辅助拉深平台' },
        { image: '../static/img/introduce/img_3.png', text: '盘类件高能温热压扭成形系统' },
    ],
    [
        { image: '../static/img/introduce/img_4.png', text: '副车架内高压成形模具系统' },
        { image: '../static/img/introduce/img_5.png', text: 'DYH630超精密等温超塑成形液压机' },
        { image: '../static/img/introduce/img_6.png', text: '多源复合超声半固态制浆设备' },
    ]
]

const teamPhotos = [
    [
        { image: '../static/img/introduce/img_7.png', text: '建国69周年中心成员接受爱国主义教育' },
        { image: '../static/img/introduce/img_8.png', text: '中心成员于材料成形实验室合影' },
        { image: '../static/img/introduce/img_9.png', text: '省数字化精密铸造制造业创新中心启动仪式' },
    ]
]

const url =
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
</script>

<style lang="scss" scoped>
body, html {
    margin: 0;
    padding: 0;
}

.flex-grow {
    flex-grow: 1;
}

.mx-1{
    margin-left: 20px;
    font-size: 20px; /* Increase the font size by 5px */
    font-weight: bold; /* Make the text bold */
}
.banner-container {
    width: 100%;
    overflow: hidden;
}
.banner{
    width: 100%;
    display: block;
}
.el-menu-demo {
    padding: 0 300px;
}

.el-menu-item {
    font-size: 20px; /* Increase the font size by 5px */
    font-weight: bold; /* Make the text bold */
}

.product-intro-container {
    padding: 20px 300px;
    margin-top: 100px;
}

.product-intro-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
}

.product-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.product-item {
    width: calc(100% / 3 - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
}

.product-image {
    width: 80%;
    height: 0;
    padding-bottom: 49.4%; // 计算方式: (1 / 1.618) * 100
    display: block;
    object-fit: cover;
    margin-bottom: 20px;
    box-shadow: 0 0 20px rgba(0,0,0,.4);
    position: relative; // 新增
}

.product-text {
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
}

.team-intro-container {
    padding: 20px 300px;
    margin-top: 100px;
}

.team-intro-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
}

.team-intro-text {
    text-align: center;
    margin-bottom: 40px;
    font-size: 29px;
}

.team-photo-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.team-photo-item {
    width: calc(100% / 3 - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.team-photo-image {
    width: 80%;
    height: 0;
    padding-bottom: 49.4%; // 计算方式: (1 / 1.618) * 100
    display: block;
    object-fit: cover;
    margin-bottom: 20px;
    box-shadow: 0 0 20px rgba(0,0,0,.4);
    position: relative; // 新增
}
.team-photo-text {
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    color: blue;
    font-weight: bold;
}
.product-image-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.team-photo-image-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.demo-image__error .image-slot {
    font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
    font-size: 30px;
}
.demo-image__error .el-image {
    width: 100%;
    height: 200px;
}
</style>
