import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { SCALE_CONFIG, SPACING_SCALE_CONFIG, SPACING_SCALE_UNIT } from '@app/config/scale.config';

@Component({
  selector: 'app-positioned-page',
  templateUrl: './positioned-page.component.html',
  styleUrls: ['./positioned-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: SPACING_SCALE_CONFIG }]
})
export class PositionedPageComponent implements OnInit {
  config: number[] = [];
  columns: string[] = ['name', 'position'];
  rows: { [key: string]: any }[] = [];
  positionTypes: { name: string; position: string }[] = [
    {
      name: 'inset',
      position: 'top: Xpx; right: Xpx; bottom: Xpx; left: Xpx'
    },
    {
      name: 'insetY',
      position: 'top: Xpx; bottom: Xpx'
    },
    {
      name: 'insetX',
      position: 'right: Xpx; left: Xpx'
    },
    {
      name: 'top',
      position: 'top: Xpx'
    },
    {
      name: 'right',
      position: 'right: Xpx'
    },
    {
      name: 'bottom',
      position: 'bottom: Xpx'
    },
    {
      name: 'left',
      position: 'left: Xpx'
    }
  ];
  usageExample = `
  Stack(
    children: [
      Container(
        width: StiloWidth.w64,
        height: StiloHeight.h64,
        color: StiloColor.blue[500],
      ),
      StiloPositioned.inset12(
        child: Container(
          width: StiloWidth.w32,
          height: StiloHeight.h32,
          color: StiloColor.red[500],
        ),
      ),
    ],
  )`;

  constructor(@Inject(SCALE_CONFIG) config: number[]) {
    this.config = config;
  }

  ngOnInit(): void {
    this.rows = this.config.flatMap((value) => {
      return this.positionTypes.map((positionType) => {
        const size = value * SPACING_SCALE_UNIT;
        const name = positionType.name + value;
        const position = positionType.position.replace(/X/g, size.toString());
        return { name, position };
      });
    });
  }
}
