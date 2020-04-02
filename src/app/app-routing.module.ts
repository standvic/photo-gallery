import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { PhotoComponent} from './components/photo/photo.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'photo/:id', component: PhotoComponent },
  { path: '',   redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
