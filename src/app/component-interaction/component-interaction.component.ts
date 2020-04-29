import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import {  } from 'protractor';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
  // @Input() public parentData;
  @Input('parentData') public name ;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('hey Rapidops');
  }
}
