import { NgModule, ModuleWithProviders } from '@angular/core';

import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as highstock from 'highcharts/modules/stock.src';
import * as Highcharts from 'highcharts';

import theme from 'highcharts/themes/dark-unica';


@NgModule({
	exports: [ChartModule],
})
export class HighstocksModule {
	constructor() {
		theme(Highcharts);
	}

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: HighstocksModule,
			providers: [
				{ provide: HIGHCHARTS_MODULES, useFactory: () => [more, exporting, highstock] }
			],
		};
	}
}
