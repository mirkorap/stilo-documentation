import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { DURATION_SCALE_CONFIG, SCALE_CONFIG } from '@app/config/scale.config';

@Component({
  selector: 'app-duration-page',
  templateUrl: './duration-page.component.html',
  styleUrls: ['./duration-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: DURATION_SCALE_CONFIG }]
})
export class DurationPageComponent implements OnInit {
  config: number[] = [];
  columns: string[] = ['name', 'duration'];
  rows: { [key: string]: any }[] = [];
  usageExample = `
  Center(
    child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        AnimatedOpacity(
          opacity: 1.0,
          duration: StiloDuration.d700,
          child: Container(
            width: StiloWidth.w64,
            height: StiloHeight.h36,
            decoration: BoxDecoration(
              color: StiloColor.blue[500],
              borderRadius: StiloBorderRadius.allMd,
              boxShadow: StiloBoxShadow.xl,
            ),
          ),
        ),
      ],
    ),
  )`;

  constructor(@Inject(SCALE_CONFIG) config: number[]) {
    this.config = config;
  }

  ngOnInit(): void {
    this.rows = this.config.map((value) => {
      return { name: `d${value}`, duration: `${value}ms` };
    });
  }
}
