<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
export default {
    name:'net_lan',
    data(){
       return{
           timer:null,
            msg:new Date()
       }
    },
    created(){
        var _this = this;
        _this.timer = setInterval(function(){
            _this.getApi();
        },3000)
    },
   
  methods: {
    getApi(){
        this.axios.get('http://localhost:3000/123')
        .then(req =>{
            console.log(req);
            
        })
        .catch(error =>{
            console.log(error);
        })
        this.axios.get('http://localhost:3000/456')
        .then(req =>{
            console.log(req);
            
        })
        .catch(error =>{
            console.log(error);
        })
    }
    
  },
  destroyed(){
      clearInterval(this.timer)
  }
}
</script>

