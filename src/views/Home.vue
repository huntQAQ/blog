<template>
    <div class="home">
        <div class="wrapp">
            <div class="main">
                <BlogList />
            </div>
        </div>
    </div>
</template>

<script>
import BlogList from '../components/BlogList.vue'
    export default {
        name: "home",
        components:{
            BlogList
        }
    }
</script>

<style lang="scss" scoped>
.main{
    text-align: center;
    margin: 0 20px;
    padding: 20px;
    background: #f8f8fd;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
}
.wrapp{
    max-width: 900px;
    margin: 0 auto;
}
</style>