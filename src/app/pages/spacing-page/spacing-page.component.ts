import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-spacing-page',
  templateUrl: './spacing-page.component.html',
  styleUrls: ['./spacing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpacingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
