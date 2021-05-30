import { BORDER_SCALE_CONFIG, SCALE_CONFIG } from '@app/config/scale.config';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-border-page',
  templateUrl: './border-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: BORDER_SCALE_CONFIG }]
})
export class BorderPageComponent implements OnInit {
  config: number[];
  columns: string[] = ['name', 'border'];
  rows: TableRow[] = [];
  borderTypes: { name: string; border: string }[] = [
    {
      name: 'all',
      border: 'top: Xpx; right: Xpx; bottom: Xpx; left: Xpx'
    },
    {
      name: 'horiz',
      border: 'left: Xpx; right: Xpx'
    },
    {
      name: 'vert',
      border: 'top: Xpx; bottom: Xpx'
    },
    {
      name: 'top',
      border: 'top: Xpx'
    },
    {
      name: 'right',
      border: 'right: Xpx'
    },
    {
      name: 'bottom',
      border: 'bottom: Xpx'
    },
    {
      name: 'left',
      border: 'left: Xpx'
    }
  ];
  usageExample = `
  Center(
    child: Row(
      children: [
        Container(
          width: StiloWidth.w64,
          height: StiloHeight.h36,
          decoration: BoxDecoration(
            color: StiloColor.blue[500],
            border: StiloBorder.all4(StiloColor.green),
          ),
        ),
        Container(
          width: StiloWidth.w36,
          height: StiloHeight.h64,
          decoration: BoxDecoration(
            color: StiloColor.red[500],
            border: StiloBorder.bottom4(StiloColor.yellow),
          ),
        ),
      ],
    ),
  )`;

  constructor(@Inject(SCALE_CONFIG) config: number[]) {
    this.config = config;
  }

  ngOnInit(): void {
    this.rows = this.config.flatMap((value) => {
      return this.borderTypes.map((borderType) => {
        const name = borderType.name + value;
        const border = borderType.border.replace(/X/g, value.toString());
        return { name, border };
      });
    });
  }
}
