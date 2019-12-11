import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { HighstocksModule } from './highcharts.module';

@NgModule({
  imports: [
    CommonModule,
    HighstocksModule.forRoot(),
  ],
  declarations: [],
  exports: [
    CommonModule,
    HighstocksModule
  ],
  entryComponents: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
