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
                <el-image style="width: 40px; height: 40px" src="/logo.png" fit="fit"/>
                <el-text class="mx-1">嘉钛时代</el-text>
            </el-menu-item>
            <div class="flex-grow"/>
            <el-menu-item index="1">产品介绍</el-menu-item>
            <el-menu-item index="2">团队介绍</el-menu-item>
            <el-menu-item index="3">专利展示</el-menu-item>
            <el-menu-item index="4">关于我们</el-menu-item>
        </el-menu>

        <div class="banner-container">
            <img src="/img/banner.png" class="banner">
        </div>
        <div class="container">

        </div>
        <div class="product-intro-container" ref="productIntroRef">
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

        <div class="team-intro-container" ref="teamIntroRef">
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

        <div class="team-patent-container" ref="teamPatentRef">
            <h2 class="team-patent-title">专利展示</h2>
            <div class="patent-image-list">
                <el-image
                        v-for="(imgSrc, index) in patentImages"
                        :key="index"
                        style="width: 200px; height: 282px; margin: 5px;"
                        :src="imgSrc"
                        :zoom-rate="1.2"
                        :preview-src-list="patentImages"
                        fit="cover"
                />
            </div>
        </div>
        <div ref="contactRef">
            <footer-component></footer-component>
        </div>
<!--        回到顶部-->
        <el-backtop :right="100" :bottom="100" />

    </div>
</template>
<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const selectedSection = ref(1)

const productIntroRef = ref(null)
const teamIntroRef = ref(null)
const teamPatentRef = ref(null)
const contactRef = ref(null)
import FooterComponent from '../components/FooterComponent.vue';

const handleSelect = (index) => {
    console.log(index)
    selectedSection.value = parseInt(index)

    let targetRef
    switch (selectedSection.value) {
        case 1:
            targetRef = productIntroRef
            break
        case 2:
            targetRef = teamIntroRef
            break
        case 3:
            targetRef = teamPatentRef
            break
        case 4:
            targetRef = contactRef
            break
        default:
            break
    }

    if (targetRef && targetRef.value) {
        window.scrollTo({ top: targetRef.value.offsetTop, behavior: 'smooth' })
    }
}

const productItems = ref([
    [
        { image: '/img/introduce/img_1.png', text: '网格筋壁板电辅助渐进压弯平台' },
        { image: '/img/introduce/img_2.png', text: '板料电辅助拉深平台' },
        { image: '/img/introduce/img_3.png', text: '盘类件高能温热压扭成形系统' },
    ],
    [
        { image: '/img/introduce/img_4.png', text: '副车架内高压成形模具系统' },
        { image: '/img/introduce/img_5.png', text: 'DYH630超精密等温超塑成形液压机' },
        { image: '/img/introduce/img_6.png', text: '多源复合超声半固态制浆设备' },
    ]
])
const teamPhotos = ref([
    [
        { image: '/img/introduce/img_7.png', text: '建国69周年中心成员接受爱国主义教育' },
        { image: '/img/introduce/img_8.png', text: '中心成员于材料成形实验室合影' },
        { image: '/img/introduce/img_9.png', text: '省数字化精密铸造制造业创新中心启动仪式' },
    ]
])

const patentImages = ref([
    '/img/patent/img.png',
    '/img/patent/img_1.png',
    '/img/patent/img_2.png',
    '/img/patent/img_3.png',
    '/img/patent/img_4.png',
    '/img/patent/img_5.png',
    '/img/patent/img_6.png',
    '/img/patent/img_7.png',
    '/img/patent/img_8.png',
    '/img/patent/img_9.png'
]);


</script>

<style scoped lang="scss">
body, html {
  margin: 0;
  padding: 0;
}

.flex-grow {
  flex-grow: 1;
}

.mx-1 {
  margin-left: 20px;
  font-size: 37px; /* Increase the font size by 5px */
  font-weight: bold; /* Make the text bold */
  font-family: '楷体', 'KaiTi', cursive; /* Set the font-family to KaiTi */
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
  padding: 0 200px;
}

.el-menu-item {
  font-size: 17px; /* Increase the font size by 5px */
  font-weight: bold; /* Make the text bold */
}

.product-intro-container {
  padding: 20px 200px 0 200px;
  margin-top: 20px;
}

.product-intro-title {
  font-size: 20px;
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
  margin-bottom: 20px;
}

.product-image {
  width: 80%;
  padding-bottom: 49.4%; // 计算方式: (1 / 1.618) * 100
  display: block;
  object-fit: cover;
  margin-bottom: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,.4);
  position: relative; // 新增
}

.product-text {
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
}

.team-intro-container {
  padding: 0 200px 0 200px;
}

.team-intro-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 40px;
}

.team-intro-text {
  text-align: justify;
  margin-bottom: 40px;
  font-size: 17px;
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
  font-size: 15px;
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

.team-patent-container
{
  padding: 20px 200px;
  .team-patent-title
  {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 40px;
  }
}
.patent-image-list {
  display: flex;
  flex-wrap: wrap; /* 添加这一行 */
  justify-content: space-between;
  margin-bottom: 40px;
  gap: 20px; /* 添加这一行来调整图片间距 */
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
.product-image-inner,
.team-photo-image-inner,
.el-image {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.product-image-inner:hover,
.team-photo-image-inner:hover,
.el-image:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

</style>
