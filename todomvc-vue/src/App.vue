<template>
 <section class="todoapp">
<header class="header">
				<h1>todos</h1>
        <form @submit.prevent="insert">
				<input class="new-todo"  v-model="info"  placeholder="What needs to be done?" v-focus>
        </form>
</header>

   <router-view></router-view> 


<footer class="footer">
				<!-- This should be `0 items left` by default -->
				<span class="todo-count"><strong></strong> item left</span>
				<!-- Remove this if you don't implement routing -->
				<ul class="filters">
					<li>
            <router-link :class="selected" to="/all">all</router-link>
						
					</li>
					<li>
					<router-link to="/active">Active</router-link>
					</li>
					<li>
					<router-link to="/completed">Completed</router-link>
					</li>
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed">Clear completed</button>
			</footer>
 </section>
</template>

<script>


export default {
      data:function(){
        return {selected:true,info:""}
      },
      methods:{
        insert(){
          // 给todos新增数据
          var data={
            id:Math.random(),
            todoName:this.info,
            completed:false
          }
          this.$store.commit('insert01',data)

          this.info=""
      }
     
   
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
