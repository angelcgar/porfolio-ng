import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Experience, ProjectsData } from './interfaces';

import experienceData from './json/hero-experience.json';
import projectsData from './json/projects-data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public experiences: Experience[] = experienceData;

  public projects: ProjectsData[] = projectsData;
}
