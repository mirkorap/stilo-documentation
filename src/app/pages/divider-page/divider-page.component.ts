import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { DIVIDER_SCALE_CONFIG, SCALE_CONFIG } from '@app/config/scale.config';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-divider-page',
  templateUrl: './divider-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: DIVIDER_SCALE_CONFIG }]
})
export class DividerPageComponent implements OnInit {
  config: number[] = [];
  columns: string[] = ['name', 'height'];
  rows: TableRow[] = [];
  usageExample = `
  Center(
    child: ListView.separated(
      separatorBuilder: (context, index) => StiloDivider.divide2(),
      itemCount: 100,
      itemBuilder: (context, index) {
        return ListTile(title: Text('Item $index'));
      },
    ),
  )`;

  constructor(@Inject(SCALE_CONFIG) config: number[]) {
    this.config = config;
  }

  ngOnInit(): void {
    this.rows = this.config.map((value) => {
      return { name: `divide${value}`, height: value };
    });
  }
}
