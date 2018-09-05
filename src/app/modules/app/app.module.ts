import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app/app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactenosModule } from '../contactenos/contactenos.module';
import { DoctrinaModule } from '../doctrina/doctrina.module';
import { EstatutoTributarioModule } from '../estatuto-tributario/estatuto-tributario.module';
import { JurisprudenciaModule } from '../jurisprudencia/jurisprudencia.module';
import { NormatividadModule } from '../normatividad/normatividad.module';
import { PwcColombiaModule } from '../pwc-colombia/pwc-colombia.module';
import { TaxLegalTimesModule } from '../tax-legal-times/tax-legal-times.module';
import { NoticiasModule } from '../noticias/noticias.module';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        NavBarComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ContactenosModule,
        DoctrinaModule,
        EstatutoTributarioModule,
        JurisprudenciaModule,
        NormatividadModule,
        PwcColombiaModule,
        TaxLegalTimesModule,
        NoticiasModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
