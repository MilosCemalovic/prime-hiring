import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Developer } from './../../interface/developer'
import { DevelopersService } from './../developers.service'

@Component({
  selector: 'app-developers-list',
  templateUrl: './developers-list.component.html',
  styleUrls: ['./developers-list.component.scss']
})
export class DevelopersListComponent implements OnInit {

  developers: Developer[] = []

  headings = ['Name', 'Email', 'Phone number', 'Location', 'Profile picture', 'Price per hour', 'Technology', 'Description', 'Years of experience', 'Native language', 'Linkedin profile']

  constructor(
    private developersService: DevelopersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDevelopers()
  }

  getDevelopers() {
    this.developersService.getDevelopers().subscribe(
      (developers: Developer[]) => {
        this.developers = developers
      },
      (err) => {
        this.developers = []
        console.log(err)
      }
    )
  }

  editDeveloper(developer: Developer) {
    this.developersService.developer = developer
    this.router.navigate(['developers-form'])
  }

  deleteDeveloper(id: string) {
    this.developersService.deleteDeveloper(id).subscribe()
    this.getDevelopers()
  }

}
