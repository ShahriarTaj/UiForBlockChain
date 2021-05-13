import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * @title M&S Dr. Registry
 */
@Component({
  selector: 'app-dr-setup',
  templateUrl: './dr-setup.component.html',
  styleUrls: ['./dr-setup.component.css']
})
export class DrSetupComponent implements OnInit {
  F1FormGroup: FormGroup;
  F2FormGroup: FormGroup;
  F3FormGroup: FormGroup;
  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.F1FormGroup = this._formBuilder.group({
                                    firstNameCtrl: ['',Validators.required ]
                     ,             lastNameCtrl: ['',Validators.required ]
                     ,             miCtrl: ['']
                     ,             suffixCtrl: ['']
                                 ,             akaCtrl: ['']
                     ,             ssnCtrl: ['',Validators.required ]
                     ,             genderCtrl: ['',Validators.required ]
                     ,             dobCtrl: ['',Validators.required ]
                });
    this.F2FormGroup = this._formBuilder.group({
                                    stateCtrl: ['',Validators.required ]
                     ,             numberCtrl: ['',Validators.required ]
                     ,             isActiveCtrl: ['',Validators.required ]
                                 ,             isSpecialistCtrl: ['',Validators.required ]
                     ,             specialtyCtrl: ['']
                     ,             subSpecialtyCtrl: ['']
                                 ,             yearsInPracticeCtrl: ['']
                });
    this.F3FormGroup = this._formBuilder.group({
                                    nameCtrl: ['',Validators.required ]
                     ,             stateCtrl: ['']
                     ,             countryCtrl: ['',Validators.required ]
                                 ,             degreeCtrl: ['',Validators.required ]
                });
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */