import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WorkersListComponent } from './components/workers-list/workers-list.component';
import { WorkerCardComponent } from './components/worker-card/worker-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'info', redirectTo: "/about" },
  { path: 'contact', redirectTo: '/about', pathMatch:'full' },
  { path: 'workers', component: WorkersListComponent },
  { path: 'worker/:id', component: WorkerCardComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
