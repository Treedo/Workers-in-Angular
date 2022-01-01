import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { PosterComponent } from './poster/poster.component';
import { BoldDirective } from './directives/bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    PosterComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
