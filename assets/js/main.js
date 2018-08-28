//DATA
var data = {
  logo:['assets/images/internal/logo.png'],
  logoMovil:['assets/images/internal/mobile-logo.jpg'],

  titulosHome: [{ titulo:'Tecnología, Diseño',
                subtitulo:'Creatividad e Innovación'}],

  textosProyectos:[{titulo:'Proyectos'}],
  customer1:'assets/images/customers/bps.png',
  customer2:'assets/images/customers/tfk.png',

  textosServicios:[{titulo:'Servicios',
                    texto:'Evolucionamos la manera de desarrollar tecnología, ya que creamos soluciones con las tecnologías más nuevas que componen Internet.',
                    servicio1: 'S.P.A.',
                    servicio2: 'P.W.A.',
                    servicio3: 'Desktop Apps'}],
  spa:[{titulo:'Single Page Application',
        texto:'Es una aplicación web de una sola página y tiene como objetivo brindar una experiencia más fluida, rapida y lógica para el usuario, ya que no necesita recargase en ningun momento. Ideales para las STARTUPS y las PYMES.', 
        texto2:'¡Ahora mismo estás usando una!'}],
  pwa:[{titulo:'Progressive Web App',
        texto:'Es un manera de llevar una aplicación web a el uso de una aplicación móvil, con el objetivo de comportanse igual que una aplicación nativa, utilizando las tecnologías del navegador. Se pueden tener notificaiones, gps, cámara, micrófono entre otros además de ser muy rápida.'}],
  desktopApp:[{titulo:'Desktop Apps',
                texto:'Es el software que se encuentra instalado en tu computadora y que se puede ejecutar sin internet, esencialmente usado para redes internas de PYMES o STARTUPS con el objetivo de comunicarse a través de un sistema y desprender múltiples funcionalidades.'}],
  
  textosNosotros:[{titulo:'Nosotros'}],
  gonzoImages:[ 'assets/images/team/gonzo.jpg'],
  gonzoTextos:[{ nombre:'Gonzalo', puesto:'| Developer'}],
  joseImages:['assets/images/team/jose.jpg'],
  joseTextos:[{ nombre:'José', puesto:'| Developer'}],
  erikImages:['assets/images/team/erik.jpg' ],
  erikTextos:[{ nombre:'Erik', puesto:'| Designer'}],
  aleImages:['assets/images/team/ale.jpg'],
  aleTextos:[{ nombre:'Alejandra', puesto:'| Developer'}],

  slider:['./assets/images/slides/app1.png','./assets/images/slides/app2.png','./assets/images/slides/app3.png','./assets/images/slides/app4.png','./assets/images/slides/app5.png','./assets/images/slides/app6.png','./assets/images/slides/app9.png','./assets/images/slides/app10.png','./assets/images/slides/app12.PNG','./assets/images/slides/app14.PNG','./assets/images/slides/app15.PNG'],
  
  showModalspa:false,
  showModalpwa:false,
  showModaldesk:false,

  textosContacto:[{titulo:'¿Necesitas ayuda?',
                  subtitulo:'contacto@dside.com',
                  footer:'2018 © Dside-Devs | All rights reserved'}],
  
  home:true,
  proyectos:false,
  servicios: false,
  nosotros:false,
  contacto:false,
  rotationNumber:0,
}

//COMPONENTES
Vue.component('cabecera',{
  template:`
    <header>
      <div id="cabecera">
        <div id="logo">
          <img v-bind:src="logo">
        </div>
      </div>
    </header>`,
  data: function(){
    return data
  }
})

Vue.component('elementos',{
  template:`
    <div>
      <div id="boton1" class="boton-nav" @click="prev()">
        <i class="fas fa-angle-double-left"></i>
      </div>
      <div id="boton2" class="boton-nav" @click="next()">
        <i class="fas fa-angle-double-right"></i>
      </div>
    </div>`,
  data: function(){
    return data
  },
  methods:{
    
    next(){
      data.rotationNumber += 1
      if (data.rotationNumber > 5){
        data.rotationNumber = 1
      }
      this.transition();
    },
    prev(){
      data.rotationNumber -= 1
      if (data.rotationNumber < 1){
        data.rotationNumber = 5
      }
      this.transition();
    },
    transition(){
      switch (data.rotationNumber){
        case 1:
          this.home = true; this.proyectos = false; this.servicios = false; this.nosotros = false; this.contacto = false;
        break;
        case 2:
          this.home = false; this.proyectos = true; this.servicios = false; this.nosotros = false; this.contacto = false;
        break;
        case 3:
          this.home = false; this.proyectos = false; this.servicios = true; this.nosotros = false; this.contacto = false;
        break;
        case 4:
          this.home = false; this.proyectos = false; this.servicios = false; this.nosotros = true; this.contacto = false;
        break;
        case 5:
          this.home = false; this.proyectos = false; this.servicios = false; this.nosotros = false; this.contacto = true;
        break;
        default:
          this.home = true; this.proyectos = false; this.servicios = false; this.nosotros = false; this.contacto = false;
        break;
      }
    }
  }
})

Vue.component('section-home',{
  template:`
    <section class="ventana" id="home" v-if="home" >
			<div class="titulo">
				<h1 v-for="(tituloHome, indice) of titulosHome" class="subtitulo1">{{tituloHome.titulo}}</h1>
				<h2 v-for="(tituloHome, indice) of titulosHome"class="subtitulo2">{{tituloHome.subtitulo}}</h2>
			</div>
		</section>`,
  data: function(){
    return data
  }
})

Vue.component('section-proyectos',{
  template:`
  <section id="portafolio" v-if="proyectos">
		<div class="contenedor-proyectos">
			<div id="proyecto1" class="proyecto">
        <a href="http://biclaparkingspot.com/" target="_blank">
          <img v-bind:src="customer1">
        </a>
      </div>
      <div id="proyecto2" class="proyecto">
        <a href="https://thermofick.com/" target="_blank">
          <img v-bind:src="customer2">
        </a>
      </div>
    </div>
    <div class="titulos-container">
      <h1 class="titulo txt-rotate"
        data-period="2000"
        data-rotate='[ "Portafolio" ]' v-for="(textoProyectos, indice) of textosProyectos">{{textoProyectos.titulo}}
      </h1>
    </div>
		
  </section>`,
  data: function(){
    return data
  }
})

Vue.component('section-servicios',{
  template:`
  <div class="three alt" id="servicios" v-if="servicios">
    <div class="servicios-container">
      <p class="subtitulo-servicios" v-for="(textoServicios, indice) of textosServicios">{{textoServicios.texto}}</p>
      <transition name="bounce">
        <div class="modal" v-if="showModalspa">
          <i class="close  fas fa-times" @click="showModalspa = false"></i>
          <h3 v-for="(spa, indice) of spa">{{spa.titulo}}</h3>
          <p v-for="(spa, indice) of spa">{{spa.texto}}<br><b>{{spa.texto2}}</b></p>
        </div>
        <div class="modal" v-if="showModalpwa">
          <i class="close  fas fa-times" @click="showModalpwa = false"></i>
          <h3 v-for="(pwa, indice) of pwa">{{pwa.titulo}}</h3>
          <p v-for="(pwa, indice) of pwa">{{pwa.texto}}</p>
        </div>
        <div class="modal" v-if="showModaldesk">
          <i class="close  fas fa-times" @click="showModaldesk = false"></i>
          <h3 v-for="(desktopApp, indice) of desktopApp">{{desktopApp.titulo}}</h3>
          <p v-for="(desktopApp, indice) of desktopApp">{{desktopApp.texto}}</p>
        </div>
      </transition>
      <div class="lista-servicios">
        <ul>
          <li><button @click="showModalspa = true" v-for="(textoServicios, indice) of textosServicios"><i class="fas fa-laptop-code iconos"></i><br><br><b>{{textoServicios.servicio1}}</b></button></li>
          <li><button @click="showModaldesk = true" v-for="(textoServicios, indice) of textosServicios"><i class="fas fa-window-restore iconos"></i><br><br><b>{{textoServicios.servicio3}}</b></button></li>
          <li><button @click="showModalpwa = true" v-for="(textoServicios, indice) of textosServicios"><i class="fas fa-mobile-alt iconos"></i><br><br><b>{{textoServicios.servicio2}}</b></button></li>
        </ul>
        
       </div>  
    </div>
      
      <div class="titulos-container">
        <h1 v-for="(textoServicios, indice) of textosServicios" class="titulo">{{textoServicios.titulo}}</h1>
      </div>
    
	</div> `,
  data: function(){
    return data
  }
})

Vue.component('section-nosotros',{
  template:`
    <section  id="nosotros" v-if="nosotros">
      <div class="nosotros-container">
        <ul class="lista-nosotros">
          <li class="images-equipo" id="gonzalo" > 
          <div class="info">
            <p v-for="(gonzoTexto, indice) of gonzoTextos">{{gonzoTexto.nombre}}<br>{{gonzoTexto.puesto}}</p><br> 
          </div>
          </li>
          <li class="images-equipo" id="jose">
            <div class='info'>
              <p v-for="(joseTexto, indice) of joseTextos">{{joseTexto.nombre}}<br>{{joseTexto.puesto}}</p><br> 
            </div>
          </li>
          <li class="images-equipo" id="erik">
            <div class='info'>
              <p v-for="(erikTexto, indice) of erikTextos">{{erikTexto.nombre}}<br>{{erikTexto.puesto}}</p><br>   
            </div>
          </li>
          <li class="images-equipo" id="alejandra">
            <div class='info'>
              <p v-for="(aleTexto, indice) of aleTextos">{{aleTexto.nombre}}<br>{{aleTexto.puesto}}</p><br>   
            </div>
          </li>
        </ul>
      </div>
      <div class="titulos-container">
        <h1 class="titulo txt-rotate"
        data-period="2000"
        data-rotate='[ "Nosotros"]' v-for="(textoNosotros, indice) of textosNosotros">{{textoNosotros.titulo}}
        </h1>
      </div>
      
    </section>`,
  data: function(){
    return data
  },
  methods:{
   mounted: function(){
    jQuery(function($) {
  
      $('.js-hover-box').each(function(){
        
        var desc = $(this).data('info')  ;
      
        $(this).append('<p>Hover me</p><span>' + desc + '</span>');
      
      });
      
    });
   }
    
  }
})

Vue.component('section-contacto',{
  template:`
  <section class="ventana" id="contacto" v-if="contacto">
    <div class="contacto-container">
      <h1 class="titulo titulo-contacto txt-rotate"
       data-period="2000"
       data-rotate='[ "¿Necesitas ayuda?"]' v-for="(textoContacto, indice) of textosContacto">{{textoContacto.titulo}}</h1>
      <a class="subtitulo-contacto" href="mailto:contacto@dside.com?Subject=Informes" v-for="(textoContacto, indice) of textosContacto"><b>{{textoContacto.subtitulo}}</b></a>
      <h3 class="dside-footer" v-for="(textoContacto, indice) of textosContacto">{{textoContacto.footer}}</h3>
    </div>
  </section>`,
  
  data: function(){
    return data
  }
})

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