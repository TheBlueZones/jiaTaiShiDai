<template>
    <div class="page-title">
        <img src="/img/user-feedback.png" class="background-image" alt="">
        <div class="title-text">市场定位</div>
    </div>
    <div class="container">
        <h2>目标市场定位</h2>
        <h3>航空航天高温钛合金构件</h3>
        <p>
            在现有需求及供应得条件下，其主要应用于航空航天、武器装备产业，特别是先进军机、大客、 大运、空天飞机、高超声速飞行器等，以航天器壁板、舱段、舵翼、发动机壳体等为代表的网格筋壁板件的空天运载装备中的关键承力构件。
            根据中国航空发动机集团有限公司披露材料数据，基于对不同军用机型未来交付量的预测，假设军机高温合金在发动机重量占比为 60%，部件成材率 30%，按照不同机型配备的发动机类型和数量，同时新交付飞机需备用同样台数的发动机，得出新增高温合金需求。钛合金主要应用在军机的机体结构和发动机等部件，为了减轻飞机结构重量、提高机体寿命、满足耐高温耐腐蚀等方面要求，新型军机用钛量不断抬升。目前全球各种先进战机钛合金用量基本都达到了20%以上，其中我国新型战斗机的代表歼-20和歼-31钛合金用量也分别达到20% 和25%，而美国F-22 战斗机用钛量更是高达41%。根据World Air Force统计，截至2018 年，我国军机结构中老旧型号的二代机仍占40%。我国载人飞船各舱段的结构材料的内部结构为耐热钛合金;我国航天飞机的轨道器的支承主发动机的推力结构用钛合金制造.此外,钛合金还用于制造火箭机盘、导弹基座构件、导弹动力叶片套等.我国研制的TB2合金(Ti-3Al-5Mo-5V-8Cr),于1984 年首次应用于卫星星箭连接带,目前已用于
            各种型号卫星20 多次;TB10 合金(Ti-3Al-5Mo-5V-2Cr)已用于航天结构件、飞机机身、机翼结构中的锻造零件;NINCT20钛合金不仅可用于火箭发动机管路系统,而且还可广泛用于宇航工业形状复杂的低温管路系统。
        </p>
        <p>
            未来钛合金行业竞争格局将会面临结构分化，高端领域例如航空航天等，类似上述高温合金板块提到的技术研发壁垒、 市场先入壁垒、行业准入壁垒等，将有助于供给端保持较好的竞争环境，利好如西部超导成熟的军品占比较高企业；中低端领域，如化工、电力、 冶金等。目前我国钛材市场正处于低端供给居多、高端供给不足的现状。在航空领域尤其是军工方向，直接参与企业较少导致市场环境相对单纯，所以具有良好性能的电脉冲辅助成形产品市场潜力相对较大并且竞争力突出。
        </p>
    </div>
    <return-home />
    <footer-component></footer-component>
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue";
import ReturnHome from "../components/returnHome.vue";

export default {
    name: "MarketPositioning",
    components: {ReturnHome, FooterComponent}
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
.container
{
    margin: 0 auto;
    width: 80%;
    padding: 20px;
    font-size: 18px;
    line-height: 1.5;
    text-align: justify;
}
</style>
