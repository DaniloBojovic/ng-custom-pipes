import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';
import { PlayerHeightPipe } from './playerheight.pipe';
import { PlayersComponent } from './players/players/players.component';
import { PlayerWeightPipe } from './playerweight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerWeightPipe,
    PlayerHeightPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
