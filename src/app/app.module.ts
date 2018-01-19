import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DeathSquareComponent } from './death-square/death-square.component';
import { TurretComponent } from './turret/turret.component';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { TieFigtherComponent } from './tie-figther/tie-figther.component';


@NgModule({
  declarations: [
    AppComponent,
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent,
    TieFigtherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
