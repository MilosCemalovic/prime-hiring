import { Component } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navigation: MenuItem[] = [
    { label: 'Developers', routerLink: ['developers'] },
    { label: 'Developer form', routerLink: ['developers-form'] }
  ]
}
