import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ColorSwatch } from '@app/models/color-swatch.model';

@Component({
  selector: 'app-color-grid',
  templateUrl: './color-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorGridComponent {
  @Input() colorSwatch!: ColorSwatch;

  get colorKeys(): string[] {
    return Object.keys(this.colorSwatch);
  }
}
