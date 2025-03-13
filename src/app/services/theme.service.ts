import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkMode.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('darkMode');
      const isDark = savedTheme === 'true';
      this.darkMode.next(isDark);
      this.applyTheme(isDark);
    }
  }

  toggleDarkMode(): void {
    if (isPlatformBrowser(this.platformId)) {
      const newMode = !this.darkMode.value;
      this.darkMode.next(newMode);
      localStorage.setItem('darkMode', newMode.toString());
      this.applyTheme(newMode);
    }
  }

  private applyTheme(isDark: boolean) {
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(isDark ? 'dark-theme' : 'light-theme');
  }
}
