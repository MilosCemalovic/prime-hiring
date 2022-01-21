import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DeveloperFormComponent } from './developers/developer-form/developer-form.component'
import { DevelopersComponent } from './developers/developers.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'developers',
    pathMatch: 'full'
  },
  {
    path: 'developers',
    component: DevelopersComponent
  },
  {
    path: 'developers-form',
    component: DeveloperFormComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
