import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UtilService } from '../../../resources/services/util/util.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    public load: boolean = false;

    public form: FormGroup;
    public vdl_nombre: FormControl;
    public nombre: string;

    constructor(private util: UtilService, private fb: FormBuilder, private router: ActivatedRoute) { }

    ngOnInit() {
        this.createFormsControls();
        this.createForm();
        this.router.params.subscribe(params => {
            this.nombre = localStorage.getItem("nombre");
        });
    }

    createFormsControls() {
        this.vdl_nombre = new FormControl("", [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(255),
        ]);
    }

    createForm() {
        this.form = this.fb.group({
            vdl_nombre: this.vdl_nombre,
        });
    }

    isValid() {
        return this.form.valid;
    }

    change() {
        if (this.isValid()) {
           localStorage.setItem("nombre", this.nombre)
        }
    }
}
