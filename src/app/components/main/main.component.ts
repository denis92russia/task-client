import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { HttpRequesterService } from '../../services/http-requester.service';
import { urlExistValidator } from '../../validators/url-exist.validator';
import { shortUrlValidator } from '../../validators/short-url.validator';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  urlShoterForm: FormGroup;
  generatedShorUrl: string = 'none'
  constructor(
    private build: FormBuilder,
    private request: HttpRequesterService
  ) { }

  ngOnInit() {
    this.urlShoterForm = this.build.group(
      {
        urlOrigin: new FormControl('', { 
          validators: [
            Validators.required, 
            Validators.pattern(/^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/gi)
          ],
          asyncValidators: [urlExistValidator(this.request)],
          updateOn: 'blur'
        }),
        urlShot: new FormControl('', { 
          validators: [
            Validators.required, 
            Validators.maxLength(8),
            Validators.pattern('[a-zA-Z0-9]*')
          ],
          asyncValidators: [shortUrlValidator(this.request)],
          updateOn: 'blur'
        }),
      }
    )
  }

  generateUrl() {
    this.request.generateUrl(this.urlShoterForm.value['urlOrigin']).subscribe((result:any)=>{
      this.generatedShorUrl = result.shortUrl;
    })
  }
  patchShortUrl() {
    console.log('44444')
    this.request.patchShortUrl(this.urlShoterForm.value['urlOrigin'], this.urlShoterForm.value['urlShot'])
    .subscribe((result:any)=>{
      this.generatedShorUrl = result.shortUrl;
    })
  }
}
