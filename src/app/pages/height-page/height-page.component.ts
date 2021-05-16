import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-height-page',
  templateUrl: './height-page.component.html',
  styleUrls: ['./height-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeightPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
