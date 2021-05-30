import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hint-box',
  templateUrl: './hint-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HintBoxComponent {}
