import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StringTransformService } from '@app/services/string-transform.service';

@Component({
  selector: 'app-border-radius-page',
  templateUrl: './border-radius-page.component.html',
  styleUrls: ['./border-radius-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BorderRadiusPageComponent implements OnInit {
  columns: string[] = ['name', 'radius'];
  rows: { [key: string]: any }[] = [];
  radiusTypes: { name: string; radius: number }[] = [
    {
      name: 'none',
      radius: 0.0
    },
    {
      name: 'xs',
      radius: 2.0
    },
    {
      name: 'sm',
      radius: 4.0
    },
    {
      name: 'md',
      radius: 6.0
    },
    {
      name: 'lg',
      radius: 8.0
    },
    {
      name: 'xl',
      radius: 12.0
    },
    {
      name: 'xl2',
      radius: 16.0
    },
    {
      name: 'xl3',
      radius: 20.0
    },
    {
      name: 'xl4',
      radius: 24.0
    },
    {
      name: 'xl5',
      radius: 28.0
    },
    {
      name: 'xl6',
      radius: 32.0
    },
    {
      name: 'full',
      radius: 9999.0
    }
  ];
  borderRadiusTypes: { name: string; radius: string }[] = [
    {
      name: 'all',
      radius: 'topLeft: Xpx; topRight: Xpx; bottomLeft: Xpx; bottomRight: Xpx'
    },
    {
      name: 'top',
      radius: 'topLeft: Xpx; topRight: Xpx'
    },
    {
      name: 'right',
      radius: 'topRight: Xpx; bottomRight: Xpx'
    },
    {
      name: 'bottom',
      radius: 'bottomLeft: Xpx; bottomRight: Xpx'
    },
    {
      name: 'left',
      radius: 'topLeft: Xpx; bottomLeft: Xpx'
    },
    {
      name: 'topLeft',
      radius: 'topLeft: Xpx'
    },
    {
      name: 'topRight',
      radius: 'topRight: Xpx'
    },
    {
      name: 'bottomLeft',
      radius: 'bottomLeft: Xpx'
    },
    {
      name: 'bottomRight',
      radius: 'bottomRight: Xpx'
    }
  ];
  usageExample = `
  Center(
    child: Row(
      children: [
        Container(
          margin: StiloEdge.all5,
          width: StiloWidth.w56,
          height: StiloHeight.h36,
          decoration: BoxDecoration(
            color: StiloColor.blue[500],
            borderRadius: StiloBorderRadius.allMd,
          ),
        ),
        Container(
          width: StiloWidth.w36,
          height: StiloHeight.h64,
          decoration: BoxDecoration(
            color: StiloColor.red[500],
            borderRadius: StiloBorderRadius.bottomXl,
          ),
        ),
      ],
    ),
  )`;

  constructor(private stringTransform: StringTransformService) {}

  ngOnInit(): void {
    this.rows = this.radiusTypes.flatMap((radiusType) => {
      return this.borderRadiusTypes.map((borderRadiusType) => {
        const name = borderRadiusType.name + this.stringTransform.capitalize(radiusType.name);
        const radius = borderRadiusType.radius.replace(/X/g, radiusType.radius.toString());
        return { name, radius };
      });
    });
  }
}
