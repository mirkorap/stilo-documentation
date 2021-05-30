import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { SCALE_CONFIG, SPACING_SCALE_CONFIG, SPACING_SCALE_UNIT } from '@app/config/scale.config';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-width-page',
  templateUrl: './width-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: SPACING_SCALE_CONFIG }]
})
export class WidthPageComponent implements OnInit {
  config: number[] = [];
  columns: string[] = ['name', 'width'];
  rows: TableRow[] = [];
  screenSizeMethods: { name: string; width: string }[] = [
    {
      name: 'oneHalf',
      width: '50% of the screen size'
    },
    {
      name: 'oneThird',
      width: '33.333333% of the screen size'
    },
    {
      name: 'twoThirds',
      width: '66.666667% of the screen size'
    },
    {
      name: 'oneQuarter',
      width: '25% of the screen size'
    },
    {
      name: 'twoQuarters',
      width: '50% of the screen size'
    },
    {
      name: 'threeQuarters',
      width: '75% of the screen size'
    },
    {
      name: 'oneFifth',
      width: '20% of the screen size'
    },
    {
      name: 'twoFifths',
      width: '40% of the screen size'
    },
    {
      name: 'threeFifths',
      width: '60% of the screen size'
    },
    {
      name: 'fourFifths',
      width: '80% of the screen size'
    },
    {
      name: 'oneSixth',
      width: '16.666667% of the screen size'
    },
    {
      name: 'twoSixths',
      width: '33.333333% of the screen size'
    },
    {
      name: 'threeSixths',
      width: '50% of the screen size'
    },
    {
      name: 'fourSixths',
      width: '66.666667% of the screen size'
    },
    {
      name: 'fiveSixths',
      width: '83.333333% of the screen size'
    },
    {
      name: 'oneTwelfth',
      width: '8.333333% of the screen size'
    },
    {
      name: 'twoTwelfths',
      width: '16.666667% of the screen size'
    },
    {
      name: 'threeTwelfths',
      width: '25% of the screen size'
    },
    {
      name: 'fourTwelfths',
      width: '33.333333% of the screen size'
    },
    {
      name: 'fiveTwelfths',
      width: '41.666667% of the screen size'
    },
    {
      name: 'sixTwelfths',
      width: '50% of the screen size'
    },
    {
      name: 'sevenTwelfths',
      width: '58.333333% of the screen size'
    },
    {
      name: 'eightTwelfths',
      width: '66.666667% of the screen size'
    },
    {
      name: 'nineTwelfths',
      width: '75% of the screen size'
    },
    {
      name: 'tenTwelfths',
      width: '83.333333% of the screen size'
    },
    {
      name: 'elevenTwelfths',
      width: '91.666667% of the screen size'
    },
    {
      name: 'full',
      width: '100% of the screen size'
    }
  ];
  usageExample = `
  Center(
    child: Row(
      children: [
        Container(
          width: StiloWidth.w64,
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
    const widths = this.config.map((value) => {
      const size = value * SPACING_SCALE_UNIT;
      return { name: `w${value}`, width: `${size}px` };
    });

    this.rows = [...widths, ...this.screenSizeMethods];
  }
}
