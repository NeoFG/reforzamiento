import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor(
    private dataService: DataService
  ) { }

  // EL ngOninit es un metodo que se ejecuta cuando el componente se inicia por primera vez
  ngOnInit(): void {
    // Cada vez que se inicie desperdiciamos memoria
    // this.dataService.getPosts().subscribe((posts: any []) => {
    //   console.log(posts);
    //   this.mensajes = posts;
    // });

    // Para no desperdiciar memoria voy a hacer un destroy

    this.mensajes = this.dataService.getPosts();
  }
  eschuchaClick(id: number){
    console.log('Click en:', id);
  }
}