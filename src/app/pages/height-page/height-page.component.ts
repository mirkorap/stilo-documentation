import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { SCALE_CONFIG, SPACING_SCALE_CONFIG, SPACING_SCALE_UNIT } from '@app/config/scale.config';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-height-page',
  templateUrl: './height-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: SPACING_SCALE_CONFIG }]
})
export class HeightPageComponent implements OnInit {
  config: number[] = [];
  columns: string[] = ['name', 'height'];
  rows: TableRow[] = [];
  screenSizeMethods: { name: string; height: string }[] = [
    {
      name: 'oneHalf',
      height: '50% of the screen size'
    },
    {
      name: 'oneThird',
      height: '33.333333% of the screen size'
    },
    {
      name: 'twoThirds',
      height: '66.666667% of the screen size'
    },
    {
      name: 'oneQuarter',
      height: '25% of the screen size'
    },
    {
      name: 'twoQuarters',
      height: '50% of the screen size'
    },
    {
      name: 'threeQuarters',
      height: '75% of the screen size'
    },
    {
      name: 'oneFifth',
      height: '20% of the screen size'
    },
    {
      name: 'twoFifths',
      height: '40% of the screen size'
    },
    {
      name: 'threeFifths',
      height: '60% of the screen size'
    },
    {
      name: 'fourFifths',
      height: '80% of the screen size'
    },
    {
      name: 'oneSixth',
      height: '16.666667% of the screen size'
    },
    {
      name: 'twoSixths',
      height: '33.333333% of the screen size'
    },
    {
      name: 'threeSixths',
      height: '50% of the screen size'
    },
    {
      name: 'fourSixths',
      height: '66.666667% of the screen size'
    },
    {
      name: 'fiveSixths',
      height: '83.333333% of the screen size'
    },
    {
      name: 'oneTwelfth',
      height: '8.333333% of the screen size'
    },
    {
      name: 'twoTwelfths',
      height: '16.666667% of the screen size'
    },
    {
      name: 'threeTwelfths',
      height: '25% of the screen size'
    },
    {
      name: 'fourTwelfths',
      height: '33.333333% of the screen size'
    },
    {
      name: 'fiveTwelfths',
      height: '41.666667% of the screen size'
    },
    {
      name: 'sixTwelfths',
      height: '50% of the screen size'
    },
    {
      name: 'sevenTwelfths',
      height: '58.333333% of the screen size'
    },
    {
      name: 'eightTwelfths',
      height: '66.666667% of the screen size'
    },
    {
      name: 'nineTwelfths',
      height: '75% of the screen size'
    },
    {
      name: 'tenTwelfths',
      height: '83.333333% of the screen size'
    },
    {
      name: 'elevenTwelfths',
      height: '91.666667% of the screen size'
    },
    {
      name: 'full',
      height: '100% of the screen size'
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
        Container(
          width: StiloWidth.w36,
          height: StiloHeight.h64,
          color: StiloColor.red[500],
        ),
      ],
    ),
  )`;

  constructor(@Inject(SCALE_CONFIG) config: number[]) {
    this.config = config;
  }

  ngOnInit(): void {
    const heights = this.config.map((value) => {
      const size = value * SPACING_SCALE_UNIT;
      return { name: `h${value}`, height: `${size}px` };
    });

    this.rows = [...heights, ...this.screenSizeMethods];
  }
}
