import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.css']
})
export class CreateModuleComponent implements OnInit {

  name: string = "onur";
  constructor() { }

  ngOnInit() {
  }

}
