<template>
    <div class="footer" ref="contactRef">
        <div class="footer-text">
            <h2 class="footer-title">关于我们</h2>

            <div class="footer-links">
                <router-link to="/social-responsibility" class="footer-link">社会责任</router-link>
                <router-link to="/market-positioning" class="footer-link">市场定位</router-link>
                <router-link to="/user-feedback" class="footer-link">售后反馈</router-link>
                <div class="contact-us">
                    <div>联系我们:</div>
                    yansiliang741@163.com，mengmiao.084@163.com;（锻压方向）
                    <br>
                    fangxg@hfut.edu.cn （铸造方向）
                </div>
            </div>
        </div>
        <div class="footer-image">
            <img src="/img/Contact_us.png" alt="Contact Us" />
        </div>
    </div>

</template>

<script>
import ReturnHome from "./returnHome.vue";

export default {
    name: 'FooterComponent',
    components: {ReturnHome},
}
</script>

<style scoped>
.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    padding: 30px 200px;
    font-size: 18px;
    color: #333;
    line-height: 1.5;
}

.footer-text {
    max-width: 60%;
}
.footer-title
{
    font-size: 20px;
    font-weight: bold;
}
.footer-links {
    margin-top: 20px;
}

.footer-link {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
    color: #333;
}

.footer-image {
    width: 30%;
    display: flex;
    justify-content: flex-end;
}

.footer-image img {
    max-width: 100%;
    height: auto;
}
</style>
