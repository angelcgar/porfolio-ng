import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Experience } from './interfaces/hero-experience.interface';

import experienceData from './json/hero-experience.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public experiences: Experience[] = experienceData;
}
