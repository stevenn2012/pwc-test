import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../security/auth/auth.service';
import { Usuario } from '../../../resources/model/usuario';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UtilService } from '../../../resources/services/util/util.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [AuthService]
})
export class LoginComponent implements OnInit {

    public load: boolean = false;

    public form: FormGroup
    public vdl_usuario: FormControl;
    public vdl_password: FormControl;

    public usuario: Usuario;

    public errorMessage: string;

    constructor(private util: UtilService, private router: Router, private fb: FormBuilder, private authService: AuthService) { }

    ngOnInit() {
        this.usuario = new Usuario();
        this.createFormsControls();
        this.createForm();
    }

    createFormsControls() {
        this.vdl_usuario = new FormControl("", [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(255),
            //Validators.pattern(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/)
        ]);
        this.vdl_password = new FormControl("", [
            Validators.required
        ]);
    }

    createForm() {
        this.form = this.fb.group({
            vdl_usuario: this.vdl_usuario,
            vdl_password: this.vdl_password
        });
    }

    isValid() {
        return this.form.valid;
    }

    login() {
        if (this.isValid()) {
            this.load = true;
            this.errorMessage = undefined;

            this.authService.login(this.usuario.usuario, this.usuario.password).then(value => {
                console.log('Nice, it worked!', value);
                this.load = false;
                this.util.setCurrentUser(value);
                this.router.navigate(["/"]);
            })
                .catch(err => {
                    this.errorMessage = err.message;
                    this.load = false;
                });
        }
    }

}
