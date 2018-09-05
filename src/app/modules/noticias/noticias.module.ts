import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasUltimaSemanaComponent } from './noticias-ultima-semana/noticias-ultima-semana.component';
import { NoticiasDiaComponent } from './noticias-dia/noticias-dia.component';
import { NoticiasHoraComponent } from './noticias-hora/noticias-hora.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [NoticiasUltimaSemanaComponent, NoticiasDiaComponent, NoticiasHoraComponent],
    exports: [NoticiasUltimaSemanaComponent, NoticiasDiaComponent, NoticiasHoraComponent]
})
export class NoticiasModule { }
