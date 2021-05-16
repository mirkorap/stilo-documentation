import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-duration-page',
  templateUrl: './duration-page.component.html',
  styleUrls: ['./duration-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
