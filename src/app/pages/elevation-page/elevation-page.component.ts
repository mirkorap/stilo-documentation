import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ELEVATION_SCALE_CONFIG, SCALE_CONFIG } from '@app/config/scale.config';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-elevation-page',
  templateUrl: './elevation-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: ELEVATION_SCALE_CONFIG }]
})
export class ElevationPageComponent implements OnInit {
  config: number[];
  columns: string[] = ['name', 'elevation'];
  rows: TableRow[] = [];
  usageExample = `
  Card(
    elevation: StiloElevation.z10,
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      mainAxisSize: MainAxisSize.min,
      children: [
        const ListTile(
          title: Text('Hello World'),
        ),
      ],
    ),
  )`;

  constructor(@Inject(SCALE_CONFIG) config: number[]) {
    this.config = config;
  }

  ngOnInit(): void {
    this.rows = this.config.map((value) => {
      return { name: `z${value}`, elevation: value };
    });
  }
}
