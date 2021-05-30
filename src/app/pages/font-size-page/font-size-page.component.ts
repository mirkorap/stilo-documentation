import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-font-size-page',
  templateUrl: './font-size-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FontSizePageComponent {
  columns: string[] = ['name', 'fontsize'];
  rows: TableRow[] = [
    {
      name: 'xs',
      fontsize: '9px'
    },
    {
      name: 'sm',
      fontsize: '10.5px'
    },
    {
      name: 'md',
      fontsize: '12px'
    },
    {
      name: 'lg',
      fontsize: '13.5px'
    },
    {
      name: 'xl',
      fontsize: '15px'
    },
    {
      name: 'xl2',
      fontsize: '18px'
    },
    {
      name: 'xl3',
      fontsize: '22.5px'
    },
    {
      name: 'xl4',
      fontsize: '27px'
    },
    {
      name: 'xl5',
      fontsize: '36px'
    },
    {
      name: 'xl6',
      fontsize: '48px'
    }
  ];
  usageExample = `
  Center(
    child: Text(
      'Hello World',
      style: TextStyle(
        fontSize: StiloFontSize.xl4,
      ),
    ),
  )`;
}
