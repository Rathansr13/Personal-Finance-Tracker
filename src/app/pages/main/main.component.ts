import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent { 

  // hamburger: HTMLElement | null;
  // sidebar: HTMLElement | null;


  toggle() {
    const sidebar = (document.getElementById('sidebar') as HTMLDivElement);
    if (sidebar) {
      sidebar.classList.add('sidebar');
    }
  }

}
