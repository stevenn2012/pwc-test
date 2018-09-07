import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../../../resources/services/util/util.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './view/nav-bar.component.html',
    styleUrls: ['./style/nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    constructor(private util: UtilService) {
    }

    ngOnInit() {
    }

    get hasCurrentUser(): boolean {
        return this.util.getCurrentUser() != undefined
    }

    public cerrarSession(){
        this.util.removeCurrentUser();
    }

    get nombre(){
        let nombre = localStorage.getItem("nombre");
        return (nombre != undefined)? nombre: '';
    }
}
