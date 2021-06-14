import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'About', url: '/about', icon: 'person' },
    { title: 'Experience', url: '/experience', icon: 'briefcase' },
    { title: 'Skills', url: '/skills', icon: 'stats-chart' },
    { title: 'Education', url: '/education', icon: 'school' },
    { title: 'Portfolio', url: '/portfolio', icon: 'library' },
    { title: 'Blogs', url: '/blogs', icon: 'create' },
    { title: 'Contact', url: '/contact', icon: 'paper-plane' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
