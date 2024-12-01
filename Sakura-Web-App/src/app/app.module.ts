import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShareModule, HomepageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
