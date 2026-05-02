import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { NavBar } from "./features/nav-bar/nav-bar";
import { DashboardComp } from "./features/dashboard/components/dashboard-comp/dashboard-comp";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, DashboardComp],
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
