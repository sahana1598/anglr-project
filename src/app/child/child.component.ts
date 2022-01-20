import { Component, Input, OnDestroy, OnInit, DoCheck, ContentChild, AfterContentChecked, AfterContentInit, SimpleChange, SimpleChanges,OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy,OnChanges, DoCheck ,AfterContentChecked,AfterContentInit{
  // @Input() products;
  interval: any
  counter: number = 0;
  @ContentChild('cheader',{static:true})elem:any
  @Input() uname
  constructor()
  {
    console.log("this child construtor");
  }
  ngOnInit(): void 
  {
    console.log("this child oninit");
    // this.interval=setInterval(()=>
    //   {
    //     this.counter++;
    //     console.log(this.counter);

    //   }) 
  }
  ngOnDestroy(): void 
  {
    console.log("destroyed");
    // clearInterval(this.counter);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("onchges child");
      console.log(changes);  
  }
  

  ngDoCheck() 
  {
    console.log("docheck");
  }
  ngAfterContentInit() 
  {
    console.log('hi',this.elem);
  }
  ngAfterContentChecked() {
      console.log("hello",this.elem);
      
  }
}
