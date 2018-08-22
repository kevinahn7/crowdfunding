import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [ProjectService]
})
export class CreateProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitProject(name: string, description: string, starters: string, fundsNeeded: number, rewards: boolean) {
    let newProject = new Project(name, description, starters.split(","), fundsNeeded, rewards);
    this.projectService.addProject(newProject);
  }

}
