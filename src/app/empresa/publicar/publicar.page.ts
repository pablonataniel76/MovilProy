import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.page.html',
  styleUrls: ['./publicar.page.scss'],
})
export class PublicarPage implements OnInit {
  registerForm: FormGroup
  validation_messages={
    nombre:[
      { type: "required", message:"Este campo es requerido para el registro" },
      { type: "minlength", message:"El apellido debe tener almenos 5 caracteres" }
    ],
    apellido:[
      { type: "required", message:"Este campo es requerido para el registro" },
      { type: "minlength", message:"El apellido debe tener almenos 5 caracteres" }
    ],
    email:[
      { type: "required", message:" El email es requerido" },
      { type: "pattern", message:"Ojo!, este email no es valido" }
    ],
    password:[
      { type: "required", message:" El password es requerido" },
      { type: "pattern", message:"Ojo!, minimo 5 letras para el password" }
    ],
    cargo:[
      { type: "required", message:"Este campo es requerido para el registro" }
    ],
    categoria:[
      { type: "required", message:"Este campo es requerido para el registro" }
    ],
    contrato:[
      { type: "required", message:" Este campo es requerido" }
    ],
    descripcion:[
      { type: "required", message:"La descripcion es requerida" },
      { type: "maxLength", message:"La descripcion no debe sobrepasar las 500 letras" }
    ],
    sueldo:[
      { type: "required", message:"Este campo es requerido para el registro" },
      { type: "maxLength", message:"El sueldo no debe ser mayor a 5 digitos" }
    ],
    tiposueldo:[
      { type: "required", message:"Este campo es requerido para el registro" }    
    ],
    ciudad:[
      { type: "required", message:"Este campo es requerido" }
    ]
  }

  errorMessage: string = "";
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.registerForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required,//campo requerido
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")//que tenga almenos alguno de estos caracteres
        ])
      ),
      password: new FormControl("", Validators.compose([
        Validators.required,//campo requerido
        Validators.minLength(5)//cantidad minima de caracterres
      ])
      ),
      nombre: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])
      ),
      apellido: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      cargo: new FormControl("", Validators.compose([
        Validators.required//campo requerido
        ])
      ),
      categoria: new FormControl("", Validators.compose([
        Validators.required
      ])
      ),
      contrato: new FormControl("", Validators.compose([
        Validators.required
      ])
      ),
      descripcion: new FormControl("", Validators.compose([
        Validators.required,
        Validators.maxLength(500)
      ])),
      sueldo: new FormControl("", Validators.compose([
        Validators.required,//campo requerido
        Validators.maxLength(5)
      ])
      ),
      tiposueldo: new FormControl("", Validators.compose([
        Validators.required
      ])
      ),
      ciudad: new FormControl("", Validators.compose([
        Validators.required
      ]))
    });
   }

  ngOnInit() {
  }

}
