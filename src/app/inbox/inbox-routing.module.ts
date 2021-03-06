import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InboxHomeComponent} from './components/inbox-home/inbox-home.component';
import {PlaceHolderComponent} from './components/inbox-home/place-holder/place-holder.component';
import {EmailShowComponent} from './components/inbox-home/email-show/email-show.component';
import {EmailResolver} from './resolvers/email-resolver';
import {NotFoundComponent} from './components/inbox-home/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: InboxHomeComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: '',
        component: PlaceHolderComponent
      },
      {
        path: ':id',
        component: EmailShowComponent,
        resolve: {
          email: EmailResolver
        }
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
