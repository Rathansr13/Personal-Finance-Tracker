import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  sidebarOpen = false;

  toggle() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    const hamburger = document.querySelector('.hamburger') as HTMLElement;
    this.sidebarOpen = !this.sidebarOpen;

    if (this.sidebarOpen) {
      sidebar.classList.add('open');
      hamburger.style.color = 'white'; // <-- set hamburger color to white when open
    } else {
      sidebar.classList.remove('open');
      hamburger.style.color = '#6c63ff'; // <-- reset to purple when closed
    }
  }

  closeSidebar() {
    this.toggle()
  }
}
