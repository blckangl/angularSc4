import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HighlighterDirective} from '../Directives/highlighter.directive';
import { BetterHighlighterDirective } from './Directives/better-highlighter.directive';
import { ClickDirective } from './Directives/click.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlighterDirective,
    BetterHighlighterDirective,
    ClickDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
