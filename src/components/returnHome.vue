<template>
    <div  @click="goToHome" >
        <el-affix position="bottom" :offset="20" class="container">
            <el-button type="primary" circle size="large">
                <div>
                    <el-icon color="#ffffff" :size="30"><HomeFilled/></el-icon>
                </div>
            </el-button>
        </el-affix>
    </div>
</template>


<script>
import { useRouter } from 'vue-router';
import { HomeFilled,Unlock} from "@element-plus/icons-vue";
export default {
    name: "returnHome",
    components: {Unlock, HomeFilled},
    setup() {
        const router = useRouter();

        const goToHome = () => {
            router.push('/');
        };

        return {
            goToHome
        };
    }
}
</script>

<style scoped lang="scss">
.container {
    position: fixed;
    right: 50px;
    bottom: 50px;
}

</style>

