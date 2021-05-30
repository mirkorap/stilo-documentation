import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { SCALE_CONFIG, SPACING_SCALE_CONFIG, SPACING_SCALE_UNIT } from '@app/config/scale.config';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-grid-gap-page',
  templateUrl: './grid-gap-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: SPACING_SCALE_CONFIG }]
})
export class GridGapPageComponent implements OnInit {
  config: number[] = [];
  columns: string[] = ['name', 'gap'];
  rows: TableRow[] = [];
  usageExample = `
  GridView.count(
    crossAxisCount: 5,
    mainAxisSpacing: StiloGridGap.gap10,
    crossAxisSpacing: StiloGridGap.gap2,
    children: List.generate(100, (index) {
      return Center(
        child: Text('Item $index'),
      );
    }),
  )`;

  constructor(@Inject(SCALE_CONFIG) config: number[]) {
    this.config = config;
  }

  ngOnInit(): void {
    this.rows = this.config.map((value) => {
      const size = value * SPACING_SCALE_UNIT;
      return { name: `gap${value}`, gap: `${size}px` };
    });
  }
}
