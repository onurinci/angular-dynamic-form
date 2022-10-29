import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateModuleComponent } from './pages/create-module/create-module.component';
import { RenderContentComponent } from './pages/render-content/render-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateModuleComponent,
    RenderContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }