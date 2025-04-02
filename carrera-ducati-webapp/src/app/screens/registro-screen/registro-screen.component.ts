import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit{

  //Variables
  public user:any = {};
  public errors:any = {};

  //Para contraseña
  public hide_1: boolean = false;
  public inputType_1: string = 'password';

  //Para las edades
  public selectedValue: string = "";
  public edades: any[] = [];

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.user = this.usuariosService.esquemaUser();
    this.llenarArrayEdades();
  }

  public llenarArrayEdades(){
    for (let i = 18; i <= 80; i++) {
      this.edades.push({value: i});
    }
  }

  public terminosCondiciones(){

  }

  public registrar(){
    //Validar
    this.errors = [];

    this.errors = this.usuariosService.validarUsuario(this.user);
    if(!$.isEmptyObject(this.errors)){
      return false;
    }

  }

  public goLogin(){
    this.router.navigate(["/"]);
  }


  showPassword()
  {
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return true;
    }else{
      return false;
    }
  }

}
