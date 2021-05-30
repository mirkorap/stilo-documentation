import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-box-shadow-page',
  templateUrl: './box-shadow-page.component.html',
  styleUrls: ['./box-shadow-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxShadowPageComponent {
  columns: string[] = ['name', 'shadow'];
  rows: TableRow[] = [
    {
      name: 'xs',
      shadow: '(offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)'
    },
    {
      name: 'sm',
      shadow: `
      (offset: Offset(0.0, 1.0), blurRadius: 3.0, spreadRadius: 0.0);
      (offset: Offset(0.0, 1.0), blurRadius: 2.0, spreadRadius: 0.0)`
    },
    {
      name: 'md',
      shadow: `
      (offset: Offset(0.0, 4.0), blurRadius: 6.0, spreadRadius: -1.0);
      (offset: Offset(0.0, 2.0), blurRadius: 4.0, spreadRadius: -1.0)`
    },
    {
      name: 'lg',
      shadow: `
      (offset: Offset(0.0, 10.0), blurRadius: 15.0, spreadRadius: -3.0);
      (offset: Offset(0.0, 4.0), blurRadius: 6.0, spreadRadius: -2.0)`
    },
    {
      name: 'xl',
      shadow: `
      (offset: Offset(0.0, 20.0), blurRadius: 25.0, spreadRadius: -5.0);
      (offset: Offset(0.0, 10.0), blurRadius: 10.0, spreadRadius: -5.0)`
    },
    {
      name: 'xl2',
      shadow: '(offset: Offset(0.0, 25.0), blurRadius: 50.0, spreadRadius: -12.0)'
    }
  ];
  usageExample = `
  Center(
    child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Container(
          width: StiloWidth.w64,
          height: StiloHeight.h36,
          decoration: BoxDecoration(
            color: StiloColor.blue[500],
            borderRadius: StiloBorderRadius.allMd,
            boxShadow: StiloBoxShadow.xl,
          ),
        ),
      ],
    ),
  )`;
}
