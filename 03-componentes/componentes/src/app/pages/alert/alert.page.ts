import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: false // Aquí lo desactivas o simplemente eliminas esta línea
})
export class AlertPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
