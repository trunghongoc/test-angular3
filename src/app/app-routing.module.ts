import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './auth/auth.guard'

import { HeroesComponent } from './components/heroes/heroes.component'
import { HeroComponent } from './components/hero/hero.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { HeroSearchComponent } from './components/hero-search/hero-search.component'

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent, pathMatch: 'full' },
  { path: 'heroes/:id', component: HeroComponent },
  {
    path: 'search',
    children: [
      {
        path: 'heroes',
        component: HeroSearchComponent
        // canActivate: [AuthGuard]
      }
    ]
  },

  { path: '**', component: DashboardComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
