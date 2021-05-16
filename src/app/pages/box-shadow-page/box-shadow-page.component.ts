import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-box-shadow-page',
  templateUrl: './box-shadow-page.component.html',
  styleUrls: ['./box-shadow-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxShadowPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
