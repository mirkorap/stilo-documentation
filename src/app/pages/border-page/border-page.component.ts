import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-border-page',
  templateUrl: './border-page.component.html',
  styleUrls: ['./border-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BorderPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
