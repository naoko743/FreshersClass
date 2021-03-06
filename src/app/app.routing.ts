import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {FilecreationComponent} from './file/filecreation/filecreation.component';
import {FilesearchComponent} from './file/filesearch/filesearch.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: FilecreationComponent },
  { path: 'search', component: FilesearchComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
