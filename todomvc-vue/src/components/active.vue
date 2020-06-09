<template>
   <info :data="$store.state.todos.filter(data=>!data.completed)"></info>
</template>
<script>
import info from './info.vue'
export default {
    components:{
        info
    }
}
</script>

<style>
    
</style>