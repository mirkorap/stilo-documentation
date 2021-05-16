import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-opacity-page',
  templateUrl: './opacity-page.component.html',
  styleUrls: ['./opacity-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OpacityPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
