import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CadastroReadComponent } from './components/views/cadastro/cadastro-read/cadastro-read.component';



const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'cadastro',
    component: CadastroReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
