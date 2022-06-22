import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'syncfusion-angular-app';
  @ViewChild('sidebar')
  sidebar!: SidebarComponent;

  public showBackdrop: boolean = true;
  public type: string = 'Push';
  public width: string = '280px';
  public closeOnDocumentClick: boolean = false;

  public onCreated(args: any) {
    this.sidebar.element.style.visibility = '';
  }

  closeClick(): void {
    this.sidebar.hide();
  }

  toggleClick(): void {
    this.sidebar.show();
  }
}
