import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { Project } from '../project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;



  constructor(private router: Router, private projectServe: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectServe.getProjects();
  }

  goToProjectDetail(project) {
    this.router.navigate(['projects', project.$key])
  }
}
