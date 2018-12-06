import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IEXClient } from 'iex-api'
import * as _fetch from 'isomorphic-fetch'
import 'chartjs-plugin-streaming';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companyHigh = [];
  minute = [];
  date;
  symbol;
  iex = new IEXClient(_fetch);

  lineChart;
  companyChart;
  company = {
    companyname: '',
    description: '',
    exchange: '',
    industry: '',
    issueType: '',
    sector: '',
    symbol: '',
    website: '',
    ceo: '',
  }


  constructor() { }

  ngOnInit() {
    //initializing the stock function
    this.Stock();

  }

  labels: any[] = this.minute;

  datasets: any[] = [{
    label: "Position",
    data: this.companyHigh,
    fill: false,
    lineTension: 0.1
  }];

  options = {
    pan: {
      enabled: true,
      mode: 'y',
    },
    zoom: {
      sensitivity: 0.5,
      drag: false,
      enabled: true,
      mode: 'xy'
    }
  };


  //Stock function to get company name and chart
  Stock() {


    //get the chart
    this.iex.stockChart('OIL', `1m`)
      .then(companyChart => {

        this.companyChart = companyChart;

        for (let company of this.companyChart) {
          this.companyHigh.push(company.high);
          this.minute.push(company.label);
          this.date = company.date;
        }
      });

    //get the list of symbols
    this.iex.symbols()
      .then(symbols => {
        this.symbol=symbols;
        for(let symbol of symbols){
        }
      });

    //get a symbol
    this.iex.stockCompany('FB')
    .then(company => {
        this.company.companyname = company.companyName;
        this.company.description = company.description;
        this.company.exchange = company.exchange;
        this.company.industry = company.industry;
        this.company.issueType = company.issueType;
        this.company.sector = company.sector;
        this.company.symbol = company.symbol;
        this.company.website = company.website;
        this.company.ceo = company.CEO;
      });
  }
}