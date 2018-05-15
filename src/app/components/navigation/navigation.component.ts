import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public navigationArr: Array<string> = [
    'About',
    'Listening',
    'Resume',
    'Contact',
  ];

  constructor() { }

  ngOnInit() {
  }

  makeLowercase(value: string): string {
    return value.toLocaleLowerCase();
  }

}
