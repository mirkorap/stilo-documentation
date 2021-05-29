import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-font-weight-page',
  templateUrl: './font-weight-page.component.html',
  styleUrls: ['./font-weight-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FontWeightPageComponent {
  config: number[] = [];
  columns: string[] = ['name', 'weight'];
  rows: { [key: string]: any }[] = [
    {
      name: 'thin',
      weight: '100'
    },
    {
      name: 'extraLight',
      weight: '200'
    },
    {
      name: 'light',
      weight: '300'
    },
    {
      name: 'regular',
      weight: '400'
    },
    {
      name: 'medium',
      weight: '500'
    },
    {
      name: 'semiBold',
      weight: '600'
    },
    {
      name: 'bold',
      weight: '700'
    },
    {
      name: 'extraBold',
      weight: '800'
    },
    {
      name: 'black',
      weight: '900'
    }
  ];
  usageExample = `
  Center(
    child: Text(
      'Hello World',
      style: TextStyle(
        fontSize: StiloFontSize.xl4,
        fontWeight: StiloFontWeight.extraBold,
      ),
    ),
  )`;
}
