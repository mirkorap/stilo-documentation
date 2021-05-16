import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-letter-spacing-page',
  templateUrl: './letter-spacing-page.component.html',
  styleUrls: ['./letter-spacing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LetterSpacingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
