import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { PrimengModule } from './primeng.module'

import { AppComponent } from './app.component'
import { DevelopersComponent } from './developers/developers.component'
import { DevelopersListComponent } from './developers/developers-list/developers-list.component'
import { DeveloperFormComponent } from './developers/developer-form/developer-form.component'

@NgModule({
  declarations: [
    AppComponent,
    DevelopersComponent,
    DevelopersListComponent,
    DeveloperFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
