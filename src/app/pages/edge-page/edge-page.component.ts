import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { SCALE_CONFIG, SPACING_SCALE_CONFIG, SPACING_SCALE_UNIT } from '@app/config/scale.config';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-edge-page',
  templateUrl: './edge-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: SPACING_SCALE_CONFIG }]
})
export class EdgePageComponent implements OnInit {
  config: number[];
  columns: string[] = ['name', 'edge'];
  rows: TableRow[] = [];
  edgeTypes: { name: string; edge: string }[] = [
    {
      name: 'all',
      edge: 'top: Xpx; right: Xpx; bottom: Xpx; left: Xpx'
    },
    {
      name: 'horiz',
      edge: 'right: Xpx; left: Xpx'
    },
    {
      name: 'vert',
      edge: 'top: Xpx; bottom: Xpx'
    },
    {
      name: 'top',
      edge: 'top: Xpx'
    },
    {
      name: 'right',
      edge: 'right: Xpx'
    },
    {
      name: 'bottom',
      edge: 'bottom: Xpx'
    },
    {
      name: 'left',
      edge: 'left: Xpx'
    }
  ];
  usageExample = `
  Center(
    child: Row(
      children: [
        Padding(
          padding: StiloEdge.all4,
          child: Container(
            width: StiloWidth.w36,
            height: StiloHeight.h36,
            color: StiloColor.blue[500],
          ),
        ),
        Container(
          width: StiloWidth.w36,
          height: StiloHeight.h36,
          margin: StiloEdge.top32,
          color: StiloColor.red[500],
        ),
      ],
    ),
  )`;

  constructor(@Inject(SCALE_CONFIG) config: number[]) {
    this.config = config;
  }

  ngOnInit(): void {
    this.rows = this.config.flatMap((value) => {
      return this.edgeTypes.map((edgeType) => {
        const spacing = value * SPACING_SCALE_UNIT;
        const name = edgeType.name + value;
        const edge = edgeType.edge.replace(/X/g, spacing.toString());
        return { name, edge };
      });
    });
  }
}
