import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { HttpRequesterService } from '../../services/http-requester.service';
import { urlExistValidator } from '../../validators/url-exist.validator';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  urlShoterForm: FormGroup
  constructor(
    private build: FormBuilder,
    private request: HttpRequesterService
  ) { }

  ngOnInit() {
    this.urlShoterForm = this.build.group(
      {
        urlOrigin: new FormControl('', { 
          validators: [Validators.required],
          asyncValidators: [urlExistValidator(this.request)],
          updateOn: 'blur'
        }),
        urlShot: ['']
      }
    )
  }

}
