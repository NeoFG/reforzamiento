import { Observable } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone:false
})
export class SegmentPage implements OnInit {

  superHeroes!: Observable<any>;
  publisher : string = '';

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event: any) {
    this.publisher = event.detail.value === 'todos' ? '' : event.detail.value;
  }


}
