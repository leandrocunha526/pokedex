import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Routes
import { RoutingModule } from "./routing.module";

//Pages
import { HomeComponent } from "./home/home.component";

import { SharedModule } from "../shared/shared.module";
import { DetailsComponent } from "./details/details.component";

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})

export class PagesModule {}
