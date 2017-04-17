import { Component } from '@angular/core';
import { Appservice } from './services/app.service';

const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options: Object;
  constructor(private appServ: Appservice) {

    $(document).ready(function () {
      console.log('Application started');
    });

    this.appServ.getdata().subscribe((data) =>
      this.options = {
        chart: {
          type: 'line',
          zoomType: 'x'
        },
        title: {
          text: 'simple highchart'
        },
        plotOptions: {
         series: {
            enableMouseTracking: false
        }
        },
        navigation: {
        buttonOptions: {
            height: 40,
            width: 48,
            symbolSize: 24,
            symbolX: 23,
            symbolY: 21,
            symbolStrokeWidth: 2
        }
    },
        series: data
      }
    );
  }
}
