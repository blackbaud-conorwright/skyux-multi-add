import {
  NgModule
} from '@angular/core';

import {
  SKY_LIB_RESOURCES_PROVIDERS
} from '@skyux/i18n';

import {
  MyLibrarySampleResourcesProvider
} from '../../plugin-resources/sample-resources-provider';

@NgModule({
  providers: [{
    provide: SKY_LIB_RESOURCES_PROVIDERS,
    useClass: MyLibrarySampleResourcesProvider,
    multi: true
  }]
})
export class MyLibrarySampleResourcesModule { }
