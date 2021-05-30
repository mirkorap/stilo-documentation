import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-letter-spacing-page',
  templateUrl: './letter-spacing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LetterSpacingPageComponent {
  columns: string[] = ['name', 'spacing'];
  rows: TableRow[] = [
    {
      name: 'tighter',
      spacing: '-0.6'
    },
    {
      name: 'tight',
      spacing: '-0.3'
    },
    {
      name: 'normal',
      spacing: '0.0'
    },
    {
      name: 'wide',
      spacing: '0.3'
    },
    {
      name: 'wider',
      spacing: '0.6'
    },
    {
      name: 'widest',
      spacing: '1.2'
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
      ),
    ),
  )`;
}
