import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  urlShoterForm: FormGroup
  constructor(private build: FormBuilder) { }

  ngOnInit() {
    this.urlShoterForm = this.build.group(
      {
        urlOrigin: ['', Validators.required],
        urlShot: ['',[]]
      }
    )
  }

}
