import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: false
})
export class DateTimePage implements OnInit {

  fechaNaci: Date =new Date();

  customYearValues = [2025, 2020, 2016, 2008, 2004, 2000, 1996];

  //COMO MOSTRAR EN CONSOLA, COMO CORREGIR ERROR DEL HTML
  customPickerOptions ={
    buttons:[
      {
        text: 'Hola',
        handler: (event : any) => {
          console.log(event);
      }
    },
    {
      text:'Mundo',
      handler:()=>{
        console.log('log!');
      }
    }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event : any ){
    console.log(event);
    console.log(new Date(event.detail.value));
  }

}
