import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberListComponent } from './components/members/member-list/member-list.component';
import { MemberComponent } from './components/members/member/member.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ModalMemberInfoComponent } from './components/members/modal-member-info/modal-member-info.component';
import { DarkenOnHoverDirective } from './directives/darken-on-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberComponent,
    SearchBarComponent,
    ModalMemberInfoComponent,
    DarkenOnHoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
