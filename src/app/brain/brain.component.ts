import { Component, OnInit } from '@angular/core';
import * as brain from 'brain.js/browser.js'
@Component({
  selector: 'app-brain',
  templateUrl: './brain.component.html',
  styleUrls: ['./brain.component.css']
})
export class BrainComponent implements OnInit {

  network= new brain.NeuralNetwork();
  output;
  constructor() { }

  ngOnInit() {
    this. test();
  }

  test(){
    this.network.train([
      { input:[0,0,0], output:[0] },
      { input:[0,0,1], output:[0] },
      { input:[0,1,1], output:[0] },
      { input:[1,0,1], output:[1] },
      { input:[1,1,1], output:[1] },
    ]);

    this.output= this.network.run([1,0,0]);

    console.log(this.output);

  }

}
