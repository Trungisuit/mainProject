import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterModule } from '../../projects/footer/src/lib/footer.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
