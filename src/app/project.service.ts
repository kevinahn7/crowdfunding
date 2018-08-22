import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  getProjectById(projectId: number) {
    return this.database.object('projects/' + projectId);
  }

  updateProject(localUpdatedProject) {
    let projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({name: localUpdatedProject.name,
                                  description: localUpdatedProject.description,
                                  starters: localUpdatedProject.starters.split(", "),
                                  fundsNeeded: localUpdatedProject.fundsNeeded,
                                  rewards: localUpdatedProject.rewards});
  }

}
