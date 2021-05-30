import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { SCALE_CONFIG, SPACING_SCALE_CONFIG, SPACING_SCALE_UNIT } from '@app/config/scale.config';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-spacing-scale-page',
  templateUrl: './spacing-scale-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: SPACING_SCALE_CONFIG }]
})
export class SpacingScalePageComponent implements OnInit {
  config: number[] = [];
  columns: string[] = ['name', 'size'];
  rows: TableRow[] = [];

  constructor(@Inject(SCALE_CONFIG) config: number[]) {
    this.config = config;
  }

  ngOnInit(): void {
    this.rows = this.config.map((value) => {
      const size = value * SPACING_SCALE_UNIT;
      return { name: `space${value}`, size: `${size}px` };
    });
  }
}
