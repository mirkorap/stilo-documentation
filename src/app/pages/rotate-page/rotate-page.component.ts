import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-rotate-page',
  templateUrl: './rotate-page.component.html',
  styleUrls: ['./rotate-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RotatePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
