import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from '../seguridad/login/login.component';
import { ContactenosComponent } from '../contactenos/contactenos/contactenos.component';
import { DoctrinaComponent } from '../doctrina/doctrina/doctrina.component';
import { EstatutoTributarioComponent } from '../estatuto-tributario/estatuto-tributario/estatuto-tributario.component';
import { JurisprudenciaComponent } from '../jurisprudencia/jurisprudencia/jurisprudencia.component';
import { NormatividadComponent } from '../normatividad/normatividad/normatividad.component';
import { PwcColombiaComponent } from '../pwc-colombia/pwc-colombia/pwc-colombia.component';
import { TaxLegalTimesComponent } from '../tax-legal-times/tax-legal-times/tax-legal-times.component';
import { LogoutGuard } from '../../security/guards/logout.guard';
import { LoginGuard } from '../../security/guards/login.guard';
import { AccountComponent } from '../usuario/account/account.component';

const routes: Routes = [
    { path: '', component: HomeComponent, children: [], canActivate: [] },
    { path: 'login', component: LoginComponent, children: [], canActivate: [LogoutGuard] },
    { path: 'contactenos', component: ContactenosComponent, children: [], canActivate: [] },
    { path: 'doctrina', component: DoctrinaComponent, children: [], canActivate: [LoginGuard] },
    { path: 'estatuto', component: EstatutoTributarioComponent, children: [], canActivate: [LoginGuard] },
    { path: 'jurisprudencia', component: JurisprudenciaComponent, children: [], canActivate: [LoginGuard] },
    { path: 'normatividad', component: NormatividadComponent, children: [], canActivate: [LoginGuard] },
    { path: 'pwcColombia', component: PwcColombiaComponent, children: [], canActivate: [] },
    { path: 'tax', component: TaxLegalTimesComponent, children: [], canActivate: [LoginGuard] },
    { path: 'account', component: AccountComponent, children: [], canActivate: [LoginGuard] },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [LoginGuard, LogoutGuard]
})
export class AppRoutingModule { }
