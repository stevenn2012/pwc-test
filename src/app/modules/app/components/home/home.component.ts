import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './view/home.component.html',
    styleUrls: ['./style/home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    get date(){
        return new Date();
    }

}
