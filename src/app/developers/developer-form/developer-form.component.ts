import { Component, OnDestroy } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { DevelopersService } from './../developers.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-developer-form',
  templateUrl: './developer-form.component.html',
  styleUrls: ['./developer-form.component.scss']
})
export class DeveloperFormComponent implements OnDestroy {

  technologies = ['Javascript', 'Java', '.NET', 'Flutter', 'Python', 'PHP']

  languages = ['English', 'Serbian', 'Bulgarian']

  developerForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),
    location: new FormControl(null, [Validators.required]),
    picture: new FormControl(null),
    price: new FormControl(null, [Validators.required]),
    technology: new FormControl(null, [Validators.required]),
    description: new FormControl(null),
    experience: new FormControl(null, [Validators.required]),
    native: new FormControl(null, [Validators.required]),
    linkedin: new FormControl(null)
  })

  constructor(
    public developersService: DevelopersService,
    private router: Router
  ) { }

  onSubmit() {
    if (this.developerForm.value.id === null) {
      this.createDeveloper()
      this.developersService.getDevelopers().subscribe()
    } else {
      this.editDeveloper()
      this.developersService.getDevelopers().subscribe()
    }
  }

  createDeveloper() {
    this.developersService.createDeveloper(this.developerForm.value).subscribe()
    this.router.navigate(['developers'])
  }

  editDeveloper() {
    this.developersService.editDeveloper(this.developerForm.value).subscribe()
    this.router.navigate(['developers'])
  }

  ngOnDestroy(): void {
    this.developersService.developer = {
      id: null,
      name: null,
      email: null,
      phone: null,
      location: null,
      picture: null,
      price: null,
      technology: null,
      description: null,
      experience: null,
      native: null,
      linkedin: null
    }
  }

}
