import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { PosterComponent } from './components/poster/poster.component';
import { BoldDirective } from './directives/bold.directive';
import { WorkersListComponent } from './components/workers-list/workers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WorkerCardComponent } from './components/worker-card/worker-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    PosterComponent,
    BoldDirective,
    WorkersListComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    WorkerCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
