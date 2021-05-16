import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-installation-page',
  templateUrl: './installation-page.component.html',
  styleUrls: ['./installation-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstallationPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
