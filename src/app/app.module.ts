import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { PosterComponent } from './components/poster/poster.component';
import { BoldDirective } from './directives/bold.directive';
import { WorkersListComponent } from './components/workers-list/workers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    PosterComponent,
    BoldDirective,
    WorkersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
