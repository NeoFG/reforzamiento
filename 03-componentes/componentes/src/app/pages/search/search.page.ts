import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone:false
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  textoBuscar: string = '';


  constructor( private dataService: DataService) { }

  ngOnInit() {
this.dataService.getAlbumes().subscribe( albumes =>{

  this.albumes = albumes;
});

  }

  onSearch(event: CustomEvent) {
    const searchValue = event.detail.value;
    this.textoBuscar = event.detail.value;
  }


}
