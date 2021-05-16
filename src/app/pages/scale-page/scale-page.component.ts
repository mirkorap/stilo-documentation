import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-scale-page',
  templateUrl: './scale-page.component.html',
  styleUrls: ['./scale-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScalePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
