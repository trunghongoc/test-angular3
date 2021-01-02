import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { en_US } from 'ng-zorro-antd/i18n'
import { registerLocaleData } from '@angular/common'
import en from '@angular/common/locales/en'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// ant design modules
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzPaginationModule } from 'ng-zorro-antd/pagination'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzUploadModule } from 'ng-zorro-antd/upload'
import { NzBadgeModule } from 'ng-zorro-antd/badge'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzMessageModule } from 'ng-zorro-antd/message'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { NzNotificationModule } from 'ng-zorro-antd/notification'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzTabsModule } from 'ng-zorro-antd/tabs'

import { HeroComponent } from './components/hero/hero.component'
import { HeroesComponent } from './components/heroes/heroes.component'
import { MessagesComponent } from './components/messages/messages.component'

// mock api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service'
import { HeroSearchComponent } from './components/hero-search/hero-search.component'

registerLocaleData(en)

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroComponent,
    HeroesComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    BrowserAnimationsModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzListModule,
    NzPaginationModule,
    NzLayoutModule,
    NzGridModule,
    NzCheckboxModule,
    NzRadioModule,
    NzSelectModule,
    NzUploadModule,
    NzBadgeModule,
    NzPopoverModule,
    NzTagModule,
    NzToolTipModule,
    NzAlertModule,
    NzMessageModule,
    NzModalModule,
    NzNotificationModule,
    NzPopconfirmModule,
    NzSkeletonModule,
    NzSpinModule,
    NzTabsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
