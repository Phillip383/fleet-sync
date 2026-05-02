import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme-service';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'theme-selector-comp',
  imports: [FormsModule],
  templateUrl: './theme-selector-comp.html',
  styleUrl: './theme-selector-comp.scss',
})
export class ThemeSelectorComp {

  protected themeService = inject(ThemeService);

  protected themes: string[] = this.themeService.getAvailableThemes();

  protected selectedTheme: string = "";

  protected selectedOption(value: any) : void {
    this.changeTheme(value);
  }

  changeTheme(theme: string): void {
    this.themeService.setTheme(theme);
  }

}
