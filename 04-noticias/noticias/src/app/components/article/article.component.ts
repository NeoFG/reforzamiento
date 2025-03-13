import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from 'src/app/interfaces';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, IonicModule], // Agregar aquí IonicModule
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],

})
export class ArticleComponent  implements OnInit {

  @Input() article!: Article;
  @Input() index!: number;

  constructor() { }

  ngOnInit() {}

}
