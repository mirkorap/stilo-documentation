import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { SCALE_CONFIG, SCALING_SCALE_CONFIG } from '@app/config/scale.config';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-scale-page',
  templateUrl: './scale-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: SCALING_SCALE_CONFIG }]
})
export class ScalePageComponent implements OnInit {
  config: number[];
  columns: string[] = ['name', 'scaling'];
  rows: TableRow[] = [];
  usageExample = `
  Center(
    child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        StiloTransformScale.scale150(
          child: Container(
            width: StiloWidth.w64,
            height: StiloHeight.h36,
            decoration: BoxDecoration(
              color: StiloColor.blue[500],
              borderRadius: StiloBorderRadius.allMd,
              boxShadow: StiloBoxShadow.xl,
            ),
          ),
        ),
      ],
    ),
  )`;

  constructor(@Inject(SCALE_CONFIG) config: number[]) {
    this.config = config;
  }

  ngOnInit(): void {
    this.rows = this.config.map((value) => {
      return { name: `scale${value}`, scaling: `${value}%` };
    });
  }
}
