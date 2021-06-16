import { NgModule } from '@angular/core';
import { SkyMultiAddComponent } from './multi-add.component';
import { CommonModule } from '@angular/common';
import { SkyIconModule } from '@skyux/indicators';
import { FormsModule } from '@angular/forms';
import { SkyRepeaterModule } from '@skyux/lists';

@NgModule({
  declarations: [
    SkyMultiAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SkyIconModule,
    SkyRepeaterModule
  ],
  exports: [
    SkyMultiAddComponent
  ]
})
export class SkyMultiAddModule { }
