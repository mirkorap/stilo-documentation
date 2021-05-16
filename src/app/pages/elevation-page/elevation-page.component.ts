import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-elevation-page',
  templateUrl: './elevation-page.component.html',
  styleUrls: ['./elevation-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElevationPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
