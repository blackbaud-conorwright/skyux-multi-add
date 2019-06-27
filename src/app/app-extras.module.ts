import {
  NgModule
} from '@angular/core';

import {
  AppSkyModule
} from './app-sky.module';

import {
  SkyMultiAddModule
} from '../modules/multi-add/multi-add.module';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SkyMultiAddModule
  ],
  exports: [
    AppSkyModule,
    SkyMultiAddModule
  ]
})
export class AppExtrasModule { }
