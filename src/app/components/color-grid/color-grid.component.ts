import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ColorSwatch } from '@app/models/color-swatch.model';

@Component({
  selector: 'app-color-grid',
  templateUrl: './color-grid.component.html',
  styleUrls: ['./color-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorGridComponent {
  @Input() colorSwatch!: ColorSwatch;

  get colorNames(): string[] {
    return Object.keys(this.colorSwatch);
  }
}
