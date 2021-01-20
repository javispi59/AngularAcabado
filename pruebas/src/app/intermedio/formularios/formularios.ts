import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class FormularioRegister {

form: FormGroup;

constructor( fb: FormBuilder) {

    this.form = fb.group({
        email: ['', [Validators.required, Validators.email] ],
        pass : ['', Validators.required]
    });

}

}