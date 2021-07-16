
export class InicioSesionComponent implements OnInit {

  miFormulario: FormGroup;
  constructor() { }

  ngOnInit() {
    this.miFormulario = new FormGroup({
      'correo' :new FormControl('correo electronico', Validators.required),
      'password' :new FormControl('', Validators.required),
    })
  }

enviarFormulario(){
  console.log(this.miFormulario);

}

}
