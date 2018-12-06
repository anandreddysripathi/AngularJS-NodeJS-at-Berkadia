import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector:'product5',
  template:`
  <div style="text:align:center" ><br>
     Goggles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button (click)="fireEvent()" >Buy this item</button>
   </div>  
     `,
  styles:[]
})

export class Product5 implements OnInit{
  @Input('parentData') public message;
  @Output() public childEvent=new EventEmitter();
  ngOnInit(){}

  fireEvent(){
    this.message++;
    this.childEvent.emit(this.message);
  }
}