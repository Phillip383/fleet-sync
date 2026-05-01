import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../services/theme-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected themeService = inject(ThemeService);
  protected readonly title = signal('frontend');

  protected themes: string[] = this.themeService.getAvailableThemes();


  changeTheme(theme: string): void {
    this.themeService.setTheme(theme);
  }
}
