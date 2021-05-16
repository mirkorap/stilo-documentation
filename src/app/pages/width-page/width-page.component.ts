import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-width-page',
  templateUrl: './width-page.component.html',
  styleUrls: ['./width-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidthPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
