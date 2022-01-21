import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CardModule } from 'primeng/card'
import { InputTextModule } from 'primeng/inputtext'
import { MenubarModule } from 'primeng/menubar'
import { DropdownModule } from 'primeng/dropdown'
import { ButtonModule } from 'primeng/button'

@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
    ButtonModule
  ]
})
export class PrimengModule { }
