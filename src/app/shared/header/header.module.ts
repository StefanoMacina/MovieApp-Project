import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './header'

@NgModule({
    imports: [
      IonicModule,
      CommonModule,
    ],
    declarations: [HeaderComponent],
    exports : [HeaderComponent]
  })
  export class HeaderModule {}
  