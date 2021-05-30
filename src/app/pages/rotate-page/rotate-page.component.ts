import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ROTATION_SCALE_CONFIG, SCALE_CONFIG } from '@app/config/scale.config';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-rotate-page',
  templateUrl: './rotate-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: ROTATION_SCALE_CONFIG }]
})
export class RotatePageComponent implements OnInit {
  config: number[] = [];
  columns: string[] = ['name', 'rotate'];
  rows: TableRow[] = [];
  usageExample = `
  Center(
    child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        StiloTransformRotate.rotate45(
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
      return { name: `rotate${value}`, rotate: `${value}deg` };
    });
  }
}
