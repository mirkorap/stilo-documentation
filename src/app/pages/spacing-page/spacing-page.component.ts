import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { SCALE_CONFIG, SPACING_SCALE_CONFIG, SPACING_SCALE_UNIT } from '@app/config/scale.config';

@Component({
  selector: 'app-spacing-page',
  templateUrl: './spacing-page.component.html',
  styleUrls: ['./spacing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: SPACING_SCALE_CONFIG }]
})
export class SpacingPageComponent implements OnInit {
  config: number[] = [];
  columns: string[] = ['name', 'space'];
  rows: { [key: string]: any }[] = [];
  spaceTypes: { name: string; space: string }[] = [
    {
      name: 'all',
      space: 'width: Xpx; height: Xpx'
    },
    {
      name: 'horiz',
      space: 'width: Xpx'
    },
    {
      name: 'vert',
      space: 'height: Xpx'
    }
  ];
  usageExample = `
  Center(
    child: Row(
      children: [
        Container(
          width: StiloWidth.w36,
          height: StiloHeight.h36,
          color: StiloColor.blue[500],
        ),
        StiloSpacing.horiz20,
        Container(
          width: StiloWidth.w36,
          height: StiloHeight.h36,
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
      return this.spaceTypes.map((spaceType) => {
        const size = value * SPACING_SCALE_UNIT;
        const name = spaceType.name + value;
        const space = spaceType.space.replace(/X/g, size.toString());
        return { name, space };
      });
    });
  }
}
