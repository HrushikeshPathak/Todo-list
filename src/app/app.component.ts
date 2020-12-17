import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ToDo-List';
  
  items:string[]=[];
  

ngOnInit(){}
text:string='';
  onAdditem(){
    this.items.push(this.text); 
    return this.text='';   
  }
  onRemove(i:any){
    this.items.splice(i,1);
    return this.items;
  }
   
}

