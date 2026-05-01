import { Injectable, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  currentTheme = signal<string>('light-blue');

  setTheme(theme: string) {
    const host = this.document.documentElement;
    host.setAttribute('data-theme', theme);
    this.currentTheme.set(theme);
  }

  getAvailableThemes() {
    return ['light-blue', 'light-orange', 'light-red', 'light-gray', 'dark-blue', 'dark-orange', 'dark-red', 'dark-gray'];
  }
}
