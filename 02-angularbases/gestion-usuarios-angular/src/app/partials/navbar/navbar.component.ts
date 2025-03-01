import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ){}

  ngOnInit(): void { }

  public clickNavLink(link: string) {
    this.router.navigate([link]);
    setTimeout(() => {
      this.activarLink(link);
    }, 100);
  }

  public activarLink(link: string) {
    document.querySelectorAll('.nav-link').forEach(item => {
      item.classList.remove('active');
    });

    // Agrego la clase "active" solo al enlace seleccionado
    const activeElement = document.getElementById(link);
    if (activeElement) {
      activeElement.classList.add('active');
    }
  }
}
