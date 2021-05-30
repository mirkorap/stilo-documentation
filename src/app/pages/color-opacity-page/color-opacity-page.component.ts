import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { OPACITY_SCALE_CONFIG, SCALE_CONFIG } from '@app/config/scale.config';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-color-opacity-page',
  templateUrl: './color-opacity-page.component.html',
  styleUrls: ['./color-opacity-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: OPACITY_SCALE_CONFIG }]
})
export class ColorOpacityPageComponent implements OnInit {
  config: number[] = [];
  columns: string[] = ['name', 'opacity'];
  rows: TableRow[] = [];
  usageExample = `
  Center(
    child: Row(
      children: [
        Container(
          width: StiloWidth.w64,
          height: StiloHeight.h36,
          color: StiloColor.blue[500].withOpacity(StiloColorOpacity.opacity50),
        ),
        Container(
          width: StiloWidth.w36,
          height: StiloHeight.h64,
          color: StiloColor.red[500].withOpacity(StiloColorOpacity.opacity95),
        ),
      ],
    ),
  )`;

  constructor(@Inject(SCALE_CONFIG) config: number[]) {
    this.config = config;
  }

  ngOnInit(): void {
    this.rows = this.config.map((value) => {
      return { name: `opacity${value}`, opacity: value };
    });
  }
}
