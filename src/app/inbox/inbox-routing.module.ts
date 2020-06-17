import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InboxHomeComponent} from './components/inbox-home/inbox-home.component';
import {PlaceHolderComponent} from './components/inbox-home/place-holder/place-holder.component';


const routes: Routes = [
  {
    path: '',
    component: InboxHomeComponent,
    children: [
      {
        path: '',
        component: PlaceHolderComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule {
}
