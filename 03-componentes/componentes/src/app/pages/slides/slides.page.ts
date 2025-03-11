import { Component } from '@angular/core';
import { IonicSlides, NavController } from '@ionic/angular'; // Importa IonicSlides

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
  standalone:false
})
export class SlidesPage {


  slides:{img:string,titulo:string,desc:string}[]=[
    {
      img: 'assets/slides/photos.svg',
      titulo: 'Comparte tus fotos',
      desc: 'Mira y comparte increibles fotos del mundo'
    },
    {
      img:'assets/slides/music-player-2.svg',
      titulo:'Escucha música',
      desc:'Toda tu música favorita en un solo lugar'
    },
    {
      img:'assets/slides/calendar.svg',
      titulo:'Nunca olvides nada',
      desc:'El mejor calendario del mundo'
    },
    {
      img: 'assets/slides/placeholder-1.svg',
      titulo:'Tu ubicacion',
      desc:'Siempre sabremos donde te encuentras'
    }
  ];

  // Configura las opciones de los slides
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true, // Opcional: Activar autoplay
  };

  // Asigna IonicSlides a una propiedad para usarla en el template
  swiperModules = [IonicSlides];

  constructor(private navCtrl: NavController) { }

  onClick(){
    this.navCtrl.navigateBack('/')
  }
}