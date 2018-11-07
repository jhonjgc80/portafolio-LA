import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

//constate array de tipo rutas
const app_routes: Routes = [
    {path:'home', component: PortafolioComponent },
    {path:'about', component: AboutComponent},
    {path:'item/:id', component: ItemComponent},
    {path:'search/:termino', component: SearchComponent},
    //si no navega a ninguna de la anteriores se redirecciona a la pag ppal
    //usando pathMatch cualquier otra ruta que no sea alguna de las anteriores
    //redirecciona al la pag ppal
    {path:'**', pathMatch: 'full', redirectTo:'home'}

]

@NgModule({
    
    imports: [
        RouterModule.forRoot(app_routes, {useHash: true})
    ],

    exports: [
        RouterModule
    ]
    
})

export class AppRoutingModule { }