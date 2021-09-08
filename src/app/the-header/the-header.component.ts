import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.css']
})
export class TheHeaderComponent implements OnInit {

  @Input() mode: any;
  @Output() modeClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
