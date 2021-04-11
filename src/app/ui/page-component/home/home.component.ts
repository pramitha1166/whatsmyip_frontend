import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }


  scrollToElement($element: any) :void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }




}
