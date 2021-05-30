import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { OPACITY_SCALE_CONFIG, SCALE_CONFIG } from '@app/config/scale.config';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-opacity-page',
  templateUrl: './opacity-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: OPACITY_SCALE_CONFIG }]
})
export class OpacityPageComponent implements OnInit {
  config: number[];
  columns: string[] = ['name', 'opacity'];
  rows: TableRow[] = [];
  usageExample = `
  Center(
    child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        StiloOpacity.opacity40(
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
      return { name: `opacity${value}`, opacity: value };
    });
  }
}
