import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hint-box',
  templateUrl: './hint-box.component.html',
  styleUrls: ['./hint-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HintBoxComponent {}
