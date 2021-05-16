import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-divider-page',
  templateUrl: './divider-page.component.html',
  styleUrls: ['./divider-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DividerPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
