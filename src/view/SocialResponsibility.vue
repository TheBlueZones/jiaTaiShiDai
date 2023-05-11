<template>
    <div class="page">
        <div class="page-title">
            <img src="/img/user-feedback.png" class="background-image" alt=""/>
            <div class="title-text">社会责任</div>
        </div>
    </div>
    <div class="container">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <div class="blame_inner">
                    <div class="icon tran_scale ratio-img" data-ratio="0.7379">
                        <img :src="item.imgSrc"/>
                    </div>
                    <div class="blame_box">
                        <h3 class="fnt_24">{{ item.title }}</h3>
                        <em></em>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <return-home/>
    <footer-component></footer-component>
</template>

<script lang="ts" setup>
import FooterComponent from "../components/FooterComponent.vue";
import ReturnHome from "../components/returnHome.vue";

const items = [
    {
        imgSrc: "/public/img/social_responsetility/img.png",
        title: "环境保护",
        description:
            "坚持可持续发展理念，通过持续创新提高能效、降低排放、节约资源，为保护环境贡献自己的力量。",
    },
    {
        imgSrc: "/public/img/social_responsetility/img_1.png",
        title: "商业准则",
        description:
            "全球市场布局，充分了解、识别和尊重公司经营所在国家的法律法规，并将公司发展建立在正确的道德准则和价值观基础之上。",
    },
    {
        imgSrc: "/public/img/social_responsetility/img_2.png",
        title: "员工关爱",
        description:
            "为员工营造尊重、和谐、理想的工作环境，提供全方位的职业发展规划和培训支持，为实现企业与员工的共同理想并肩奋斗。",
    },
    {
        imgSrc: "/public/img/social_responsetility/img_3.png",
        title: "社会贡献",
        description:
            "积极承担社会责任，通过贡献教育、支持环保以及志愿、公益活动，践行着我们对社会可持续发展的承诺。",
    },
    {
        imgSrc: "/public/img/social_responsetility/img_4.png",
        title: "无冲突矿产政策",
        description:
            "要求供货商遵守责任商业联盟行为准则(RBA)，只从对环境和社会负责的供货商采购材料，全体供应商不能采购和使用冲突矿产，符合无冲突矿产要求。",
    },
];

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

.title-text {
  margin-left: 200px;
  font-size: 40px;
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

.container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        justify-content: center;
    }

    li {
        width: calc(40% - 50px);
        margin-bottom: 100px;
        height: 400px;
        margin-right: 50px;
    }

    .blame_inner {
        text-align: center;
    }

    .icon {
        position: relative;
        width: 100%;
        img {
            width: 100%;
            height: auto;
        }
    }

    .blame_box {
        position: relative;
        top: -250px;
        width: 80%;
        color: white;
        padding: 20px;
        h3 {
            font-size: 24px;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            line-height: 1.5;
            text-align: justify;
        }
    }
}
</style>
