import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { TestComponent } from './test/test.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgForDirectiveComponent } from './ng-for-directive/ng-for-directive.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'twb', component: TwoWayBindingComponent },
  { path: 'ngfor', component: NgForDirectiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }