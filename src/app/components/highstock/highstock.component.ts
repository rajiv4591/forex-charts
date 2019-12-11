import { Component, OnInit } from '@angular/core';
import { StockChart } from 'angular-highcharts';
import { HighstockService } from './highstock.service';
import { twoPaneConfig } from './../../../assets/chart-configs/two-pane';

@Component({
    selector: 'app-highstock',
    templateUrl: './highstock.component.html',
    styleUrls: ['./highstock.component.css']
})
export class HighstockComponent implements OnInit {

    constructor(
        private highstocksService: HighstockService
    ) { }

    private data: any;

    stockChart: StockChart;

    private formatData(): void {
        let ohlc = [],
            line = [],
            dataLength = this.data.length,
            groupingUnits = [[
                'week',
                [1]
            ], [
                'month',
                [1, 2, 3, 4, 6]
            ]],
            i = 0;

        for (i; i < dataLength; i += 1) {
            ohlc.push([
                this.data[i][0], // the date
                this.data[i][1], // open
                this.data[i][2], // high
                this.data[i][3], // low
                this.data[i][4] // close
            ]);

            line.push([
                this.data[i][0], // the date
                this.data[i][1] // the volume
            ]);
        }

        let chartConfig: any = { ...twoPaneConfig };
        chartConfig.series[0].data = ohlc;
        chartConfig.series[0].dataGrouping.units = groupingUnits;

        chartConfig.series[1].data = line;
        chartConfig.series[1].dataGrouping.units = groupingUnits;

        this.stockChart = new StockChart(chartConfig);
    }

    private init(): void {
        this.data = this.highstocksService.getPriceData();
        this.formatData();
    }

    ngOnInit() {
        this.init();
    }

}
