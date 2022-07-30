import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

//Components
import { PokeHeaderComponent } from "./poke-header/poke-header.component";
import { PokeListComponent } from "./poke-list/poke-list.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PokeHeaderComponent,
    PokeListComponent
  ],
  exports: [
    PokeHeaderComponent,
    PokeListComponent
  ],
})
export class SharedModule { }
