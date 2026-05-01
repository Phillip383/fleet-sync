import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeSelectorComp } from '../components/theme-selector-comp/theme-selector-comp';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeSelectorComp],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private titleService = inject(Title);

  protected readonly title = signal('FleetSync | Login');

  constructor() {
    this.titleService.setTitle(this.title());
  }


}
