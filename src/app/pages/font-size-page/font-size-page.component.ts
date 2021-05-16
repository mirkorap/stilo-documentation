import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-font-size-page',
  templateUrl: './font-size-page.component.html',
  styleUrls: ['./font-size-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FontSizePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
