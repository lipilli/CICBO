import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.less']
})
export class MenuButtonComponent implements OnInit {
  @Input() text: string;
  @Input() image_path: string;

  constructor() {

  }

  ngOnInit(): void {
  }

}