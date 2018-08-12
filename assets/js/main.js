
//COMPONENTE
const Inicio = {
    name:'Inicio',
      template:'#iniciotemp',
  
      data(){
        return{
          welcome:'Welcome',
        };
      },
  }

  //INSTANCIA DE COMPONENTES POR ROUTER
var router = new VueRouter({
    routes:[
      {path:'/',component:Inicio},
    ]
});

var vm = new Vue({
    router,
    templates:'#templates',
  
    data:{
    },
  
    methods:{
  
    }
  
  }).$mount('#app')