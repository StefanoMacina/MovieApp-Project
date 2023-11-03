import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { RangeWrapperComponent } from "./range-wrapper.component";

@NgModule({
    imports: [IonicModule, CommonModule],
    declarations : [RangeWrapperComponent],
    exports : [RangeWrapperComponent]
})
export class RangeWrapperModule{}