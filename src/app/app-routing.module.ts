import { importProvidersFrom, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './contactanos/contactanos.component';



const route: Routes =[

  {path: 'Home', component: HomeComponent},
  {path: 'Nosotros', component: NosotrosComponent},
  {path: 'Noticias', component: NoticiaComponent},
  {path: 'Contactanos', component: ContactanosComponent},
  {path: '**', redirectTo: 'Home' }

] 




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
