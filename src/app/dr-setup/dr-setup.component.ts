import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RestService } from '../services/rest.service';

/**
 * @title M&S Dr. Registry
 */
@Component({
  selector: 'app-dr-setup',
  templateUrl: './dr-setup.component.html',
  styleUrls: ['./dr-setup.component.css']
})
export class DrSetupComponent implements OnInit {
  DrRegistryForm: FormGroup;
  ProviderRegistryForm: FormGroup;
  InsuranceRegistryForm: FormGroup;
  isEditable = false;
  

  constructor(private _formBuilder: FormBuilder, private _restService : RestService) {}

  ngOnInit() {
    this.DrRegistryForm = this._formBuilder.group({
                                    firstNameCtrl: ['',Validators.required ]
                     ,             lastNameCtrl: ['',Validators.required ]
                     ,             miCtrl: ['']
                     ,             suffixCtrl: ['']
                                 ,             akaCtrl: ['']
                     ,             ssnCtrl: ['',Validators.required ]
                     ,             genderCtrl: ['',Validators.required ]
                     ,             dobCtrl: ['',Validators.required ]
                });
    this.ProviderRegistryForm = this._formBuilder.group({
                                    stateCtrl: ['',Validators.required ]
                     ,             numberCtrl: ['',Validators.required ]
                     ,             isActiveCtrl: ['',Validators.required ]
                                 ,             isSpecialistCtrl: ['',Validators.required ]
                     ,             specialtyCtrl: ['']
                     ,             subSpecialtyCtrl: ['']
                                 ,             yearsInPracticeCtrl: ['']
                });
    this.InsuranceRegistryForm = this._formBuilder.group({
                                    nameCtrl: ['',Validators.required ]
                     ,             stateCtrl: ['']
                     ,             countryCtrl: ['',Validators.required ]
                                 ,             degreeCtrl: ['',Validators.required ]
                });
    this._restService.sayHello().subscribe ( (r) => {
      console.log ( 'this is ' + r.msg)
    });            
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */