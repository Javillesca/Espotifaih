import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() newRelease: any;

  ngOnInit(): void {
  }

}
