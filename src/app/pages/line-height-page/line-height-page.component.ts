import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-line-height-page',
  templateUrl: './line-height-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineHeightPageComponent {
  columns: string[] = ['name', 'height'];
  rows: TableRow[] = [
    {
      name: 'none',
      height: '1.0'
    },
    {
      name: 'tight',
      height: '1.25'
    },
    {
      name: 'snug',
      height: '1.375'
    },
    {
      name: 'normal',
      height: '1.5'
    },
    {
      name: 'relaxed',
      height: '1.625'
    },
    {
      name: 'loose',
      height: '2.0'
    }
  ];
  usageExample = `
  Center(
    child: Text(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      'Curabitur lectus enim, porttitor ac ultrices quis, scelerisque sed massa.'
      'Phasellus ultrices tortor in ipsum sodales, id feugiat arcu maximus.',
      style: TextStyle(
        fontSize: StiloFontSize.xl4,
        fontWeight: StiloFontWeight.extraBold,
        letterSpacing: StiloLetterSpacing.widest,
        height: StiloLineHeight.relaxed,
      ),
    ),
  )`;
}
