import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-color-page',
  templateUrl: './color-page.component.html',
  styleUrls: ['./color-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
