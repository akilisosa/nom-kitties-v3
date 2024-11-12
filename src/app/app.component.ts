import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];



  title = 'Nom Kitties';

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const urlSegments = this.router.url.split('/');
      const lastSegment = urlSegments[urlSegments.length - 1];
      console.log('Current page:', lastSegment);
      // Update your title here
      this.updateTitle(lastSegment);
    });
  
    // Method 2: Using ActivatedRoute
    this.route.url.subscribe(segments => {
      const lastSegment = segments[segments.length - 1]?.path;
      console.log('Current route segment:', lastSegment);
      // Update your title here
      this.updateTitle(lastSegment);
    });
  }

  private updateTitle(segment: string) {
    // Convert URL segment to a nice title
    // e.g., 'my-page' becomes 'My Page'

    console.log('Segment:', segment);
    if(segment === 'local-game') {
      this.title = 'Local Game'
    } else if(segment === 'online-game') {
      this.title = 'Online Game'
    } else if(segment === 'learn-more') {
      this.title = 'Learn More'
    } else {
      this.title = 'Nom Kitties'
    }
  
    // Update your title here
    // For example, if using ion-title:
    // this.pageTitle = title;
  }
}
