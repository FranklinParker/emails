import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxHomeComponent } from './components/inbox-home/inbox-home.component';
import { EmailListComponent } from './components/inbox-home/email-list/email-list.component';
import { EmailShowComponent } from './components/inbox-home/email-show/email-show.component';
import { EmailCreateComponent } from './components/inbox-home/email-create/email-create.component';
import { EmailReplyComponent } from './components/inbox-home/email-reply/email-reply.component';
import { PlaceHolderComponent } from './components/inbox-home/place-holder/place-holder.component';
import { NotFoundComponent } from './components/inbox-home/not-found/not-found.component';
import {SharedModule} from '../shared/shared.module';
import { EmailFormComponent } from './components/inbox-home/email-form/email-form.component';


@NgModule({
  declarations: [
    InboxHomeComponent,
    EmailListComponent,
    EmailShowComponent,
    EmailCreateComponent,
    EmailReplyComponent,
    PlaceHolderComponent,
    NotFoundComponent,
    EmailFormComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    SharedModule
  ]
})
export class InboxModule { }
