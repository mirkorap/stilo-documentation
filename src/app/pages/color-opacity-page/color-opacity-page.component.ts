import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-color-opacity-page',
  templateUrl: './color-opacity-page.component.html',
  styleUrls: ['./color-opacity-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorOpacityPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
