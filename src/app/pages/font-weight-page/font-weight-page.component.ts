import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-font-weight-page',
  templateUrl: './font-weight-page.component.html',
  styleUrls: ['./font-weight-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FontWeightPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
