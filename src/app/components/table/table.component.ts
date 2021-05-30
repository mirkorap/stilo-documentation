import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() rows: TableRow[] = [];
}
