import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input() newReleases: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
