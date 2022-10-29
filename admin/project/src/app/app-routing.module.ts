import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateModuleComponent } from './pages/create-module/create-module.component';
import { RenderContentComponent } from './pages/render-content/render-content.component';

const routes: Routes = [
  {
    path: 'create-module',
    component: CreateModuleComponent
  },
  {
    path: 'render-content',
    component: RenderContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
