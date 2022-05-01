import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {


  
  constructor(private http: HttpClient) { }
  columnDefs = [
    {headerName: 'Status', width: '79px', field: 'STATUS',sortable: true,  filter: 'agTextColumnFilter',  resizable: true },
    {headerName: 'Contract Address',  width: '330px', field: 'CONTRACTID', sortable: false,  filter: 'agTextColumnFilter', resizable: true },
    {headerName: 'Premium', width: '95px',  field: 'PREMIUM',sortable: true,  filter: 'agTextColumnFilter',  resizable: true },
    {headerName: 'Indemnity', width :'105px', field: 'INDEMNITY',sortable: true,  filter: 'agTextColumnFilter',  resizable: true },
    {headerName: 'Min. Indem.', width :'115px', field: 'MINIMUMINDEMNITY',sortable: true,  filter: 'agTextColumnFilter',  resizable: true },
    {headerName: 'Start',  field: 'STARTDATE',sortable: true,  filter: 'agTextColumnFilter',  resizable: true },
    {headerName: 'End',  field: 'ENDDATE',sortable: true,  filter: 'agTextColumnFilter',  resizable: true },
    {headerName: 'Region',  field: 'REGION',sortable: true,  filter: 'agTextColumnFilter',  resizable: true },
    {headerName: 'Hi Tmp',  field: 'UPPERTEMPERATURE',sortable: true,  filter: 'agTextColumnFilter',  resizable: true },
    {headerName: 'Avg. Tmp',  field: 'AVERAGETEMPERATURE',sortable: true,  filter: 'agTextColumnFilter',  resizable: true },
    {headerName: 'Low Temp',  field: 'LOWERTEMPERATURE',sortable: true,  filter: 'agTextColumnFilter',  resizable: true },
    {headerName: 'Insured Address',  width: '330px', field: 'INSUREDADDRESS', sortable: false,  filter: 'agTextColumnFilter', resizable: true },
  ];
  rawData : any;

  fillRawData () {
    this.http.get ("http://localhost:8080/api/insuranceListing")
    .subscribe( result => {
      this.rawData = result;

    });
  }
  ngOnInit(): void {
    this.fillRawData();
  }

  

}
