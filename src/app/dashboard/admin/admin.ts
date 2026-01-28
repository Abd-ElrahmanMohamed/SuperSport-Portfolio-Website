import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesEditorComponent } from './services-editor/services-editor.component';
import { HomeEditorComponent } from './home-editor/home-editor.component';
import { AboutEditorComponent } from './about-editor/about-editor.component';
import { PortfolioEditorComponent } from './portfolio-editor/portfolio-editor.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    ServicesEditorComponent,
    HomeEditorComponent,
    AboutEditorComponent,
    PortfolioEditorComponent,
    ContactEditorComponent,
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  activeSection = 'services';

  selectSection(section: string): void {
    this.activeSection = section;
  }
}
