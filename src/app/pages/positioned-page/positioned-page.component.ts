import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-positioned-page',
  templateUrl: './positioned-page.component.html',
  styleUrls: ['./positioned-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PositionedPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
