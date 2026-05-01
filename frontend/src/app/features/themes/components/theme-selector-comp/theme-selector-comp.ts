import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme-service';
import { inject } from '@angular/core';


@Component({
  selector: 'theme-selector-comp',
  imports: [],
  templateUrl: './theme-selector-comp.html',
  styleUrl: './theme-selector-comp.scss',
})
export class ThemeSelectorComp {

  protected themeService = inject(ThemeService);

    protected themes: string[] = this.themeService.getAvailableThemes();

  changeTheme(theme: string): void {
    this.themeService.setTheme(theme);
  }

}
