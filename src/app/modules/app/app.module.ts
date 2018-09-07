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
import { SeguridadModule } from '../seguridad/seguridad.module';
import { UtilService } from '../../resources/services/util/util.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';
import { UsuarioModule } from '../usuario/usuario.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//FIREBASE CONFIGURATION
export const firebaseConfig = environment.firebaseConfig;

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
        NoticiasModule,
        SeguridadModule,
        UsuarioModule,

        //FIREBASE MODULES
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, UtilService],
    bootstrap: [AppComponent]
})
export class AppModule { }
