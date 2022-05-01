import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';


interface NewContractRequest{
  contractStartDate: string;
  contractEndDate: string;
  premium: BigInteger;
  indemnity : BigInteger;
  minimumProtection: BigInteger;
  region : string;
  upperTemperatureBoundary: number;
  lowerTemperatureBoundary : number;
  averageTemperature: number;
  walletPassword : string;
}

interface InsuranceInfo{
  ContractId : string;
  StartDate: Date;
  EndDate : Date;
  Region : string;
  Premium : BigInteger;
  Indemnity : BigInteger;
  MinimumIndemnity : BigInteger;
  UpperTemperature : number;
  LowerTemperature:number;
  AverageTemperature : number;
  RemainingIndemnity : BigInteger; 
  InsuredAddress : string;
  CurrentBalance: BigInteger;
  Status: number;
  InsuranceProvider: string;
  PremiumTokenAddress : string;
  IndemnityTokenAddress : string;
}


@Component({
  selector: 'app-dr-setup',
  templateUrl: './dr-setup.component.html',
  styleUrls: ['./dr-setup.component.css']
})
export class DrSetupComponent implements OnInit {
  formGroup1: FormGroup;
  insuranceInfo : any;
  constructor(private _formBuilder: FormBuilder
    , private http: HttpClient) { 

  }

  ngOnInit() {
    this.formGroup1 = this._formBuilder.group({
      insuredAddressCtrl: ['', Validators.required]
      , startDateCtrl: ['', Validators.required]
      , endDateCtrl: ['', Validators.required]
      , premiumCtrl: ['', Validators.required]
      , indemnityCtrl: ['', Validators.required]
      , minimuCtrl: ['', Validators.required]
      , regionCtrl: ['', Validators.required]
      , upperTempCtrl: ['', Validators.required]
      , avgTempCtrl: ['', Validators.required]
      , lowerTempCtrl: ['', Validators.required]
      , passwordCtrl: ['', Validators.required]
      , contractIdCtrl :['']
      , premiumTokenCtrl: ['']
      , indemnityTokenCtrl: ['']
    });
    this.formGroup1.controls["premiumTokenCtrl"].disable();
    this.formGroup1.controls["indemnityTokenCtrl"].disable();
    this.formGroup1.controls["contractIdCtrl"].disable();
 
  }
  requestParams : NewContractRequest;

  onSubmit(): void {
    // Process checkout data here
    this.formGroup1.controls["contractIdCtrl"].setValue('Please wait while we process your request');

    let body = {
      contractStartDate: this.formGroup1.controls["startDateCtrl"].value,
        contractEndDate: this.formGroup1.controls["endDateCtrl"].value,
      premium: this.formGroup1.controls["premiumCtrl"].value,
      indemnity : this.formGroup1.controls["indemnityCtrl"].value,
      minimumProtection: this.formGroup1.controls["minimuCtrl"].value,
      region :  this.formGroup1.controls["regionCtrl"].value,
      upperTemperatureBoundary:  this.formGroup1.controls["upperTempCtrl"].value,
      lowerTemperatureBoundary :  this.formGroup1.controls["lowerTempCtrl"].value,
      averageTemperature:  this.formGroup1.controls["avgTempCtrl"].value,
      walletPassword :  this.formGroup1.controls["passwordCtrl"].value
    }
    const params = new HttpParams()
    .append('contractStartDate', body.contractStartDate)
    .append('contractEndDate', body.contractEndDate)
    .append('premium', body.premium)
    .append('indemnity', body.indemnity)
    .append('minimumProtection', body.minimumProtection)
    .append('region', body.region)
    .append('upperTemperatureBoundary', body.upperTemperatureBoundary)
    .append('lowerTemperatureBoundary', body.lowerTemperatureBoundary)
    .append('averageTemperature', body.averageTemperature)
    .append('walletPassword', body.walletPassword)
    ;


    this.formGroup1.controls["premiumTokenCtrl"].setValue('');
    this.formGroup1.controls["indemnityTokenCtrl"].setValue ( '') ;

    let url = "http://localhost:8080/api/createNewInsurance/" + this.formGroup1.controls["insuredAddressCtrl"].value;

    this.http.post<InsuranceInfo>(url, params)
    .pipe( 
      
      
    )
    .subscribe( results  => 
      {
        this.formGroup1.controls["premiumTokenCtrl"].setValue(results.PremiumTokenAddress );
        this.formGroup1.controls["indemnityTokenCtrl"].setValue ( results.IndemnityTokenAddress) ;
        this.formGroup1.controls["contractIdCtrl"].setValue ( results.ContractId) ;
        
      })
      ;
    
  }

}

