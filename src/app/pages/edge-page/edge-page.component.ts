import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-edge-page',
  templateUrl: './edge-page.component.html',
  styleUrls: ['./edge-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EdgePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
