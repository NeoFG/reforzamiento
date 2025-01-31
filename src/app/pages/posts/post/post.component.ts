import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  // Recibimos el mensaje desde el componente padre
  @Input() mensaje:any;
  @Output() clicPost = new EventEmitter<number>();
  
  constructor(

  ){}

  ngOnInit(): void {
    
  }

  // Lo que hago es emitir un evento al componente padre
  onClick(){
    this.clicPost.emit(this.mensaje.id);
  }
}
