import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-translate-page',
  templateUrl: './translate-page.component.html',
  styleUrls: ['./translate-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TranslatePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
