import { Routes } from '@angular/router';
import { Home } from './layout/home/home';
import { Contact } from './layout/contact/contact';
import { Services } from './layout/services/services';
import { About } from './layout/about/about';
import { Portfolio } from './layout/portfolio/portfolio';
import { Clients } from './layout/clients/clients';
import { AdminLoginComponent } from './dashboard/auth/login.component';

export const routes: Routes = [
  // Public routes (with header and footer)
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'portfolio', component: Portfolio },
  { path: 'clients', component: Clients },
  { path: 'contact', component: Contact },

  // Admin routes (without header and footer)
  { path: 'admin/login', component: AdminLoginComponent },

  // Wildcard route
  { path: '**', redirectTo: 'home' },
];
