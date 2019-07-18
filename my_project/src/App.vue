<template>
  <div id="app">
    <div class="header">   
      <ul class="header_ul">
         <li v-for="router in touters">
            <router-link :to="`${router.path}`">{{router.name}}</router-link>
          </li>  
      </ul>       
    </div>
    <div class="content">
      <div style="flex:1;" v-if="menuName">
        <ul>
          <li v-for="Submenu in Submenus">
            <router-link :to="`${Submenu.path}`">{{Submenu.name}}</router-link>
          </li>
        </ul>
      </div>
      <router-view style="flex:4;"/>
    </div>
  </div>
</template>

<script>
import routers from '@/js/MenuComponent'
export default {
  name: 'App',
  data(){
    return{
      menuName:true,
      touters:null,
      Submenus:null
    }
  },
  created () {
    this.touters = routers;
    this.fetchData()
  },
  watch:{
    '$route':'fetchData'
  },
  computed:{
    routesSubmenus(){
      var routes = {
        children: this.$router.options.routes
      };
      var route = this.$route.matched;
      for(var i=0; i<route.length-1; i++){
       routes = routes.children.find((e) => (e.name == route[i].name));    
      }
      
      return routes.children
    }

  },
  methods:{
    fetchData(){     
      const routerPath =  this.$route.path.substring(1,this.$route.path.length);
      if(routerPath == "home" || routerPath == "Wizard" || routerPath == "") {
        this.menuName = false;
      } else{       
        this.menuName = true;
        this.Submenus = this.routesSubmenus;
      }
    }
  }
}
</script>

<style>
@import url(css/style.css);
</style>
