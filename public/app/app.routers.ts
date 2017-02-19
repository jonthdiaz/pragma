import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component'
import { LoginComponent } from './components/login.component'
import { HomeComponent } from './components/home.component'
import { RegisterComponent } from './components/register.component'
import { CommitsMainComponent } from './components/commitsMain.component'

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrar-empleados',
    component: RegisterComponent
  },
  {
    path: 'commits',
    component: CommitsMainComponent
  },

];
