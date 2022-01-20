import { Component, ElementRef, OnInit, ViewChild, ViewChildren, QueryList, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewChecked, AfterViewInit {
  // flag: boolean = true;
  // uname: any
  // @ViewChildren('header') elem: QueryList<any>
  // @ViewChild('header',{static:true})elem:ElementRef
  toggle() 
  {
    this.flag = !this.flag
  }
  constructor()
  {
    console.log("this parent construtor");
  }
  ngOnInit(): void
  {
    console.log("this parent oninit");
  }
  ngDoCheck() 
  {
    console.log("docheck parent");
  }
  ngAfterViewInit() 
  {
    // console.log(this.elem);
  }
  ngAfterViewChecked() 
  {
    console.log(" view check parent");
    // this.elem.nativeElement.innerHTML="JUNGLEEEEEEE"  
  }
  // ngAfterContentInit() 
  // {
  //   console.log("init");
  // }
  // ngAfterContentChecked() 
  // {
  //   console.log(" content check");
  // }
  // salesProduct=[
  //   {name:"mobile",price:20000},
  //   {name:"tv",price:30000},
  //   {name:"telephone",price:20000},
  //   {name:"scooty",price:80000}
  // ]
  //   newProduct=[
  //   {name:"mobile",price:20000},
  //   {name:"tv",price:30000},
  //   {name:"telephone",price:20000},
  //   {name:"scooty",price:80000}

  //   ]
  // vari:string;
  // newvari:string;
  // flag:boolean=true;
  // fun(){
  //   if(this.flag===true)
  //   {
  //     this.vari=this.newvari;
  //   }
  //   else{
  //   this.newvari=this.vari;
  //   }

  // }
}
