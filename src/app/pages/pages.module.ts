import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Routes
import { RoutingModule } from "./routing.module";

//Pages
import { HomeComponent } from "./home/home.component";

import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})

export class PagesModule {}
