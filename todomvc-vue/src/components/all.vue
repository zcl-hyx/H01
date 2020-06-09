<template>
<info :data="$store.state.todos"></info>
   
</template>

<style scoped>

</style>
import info from './info.vue'
<script>
export default {
    components:{
        info
    }
}
</script>