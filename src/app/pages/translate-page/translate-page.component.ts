import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { SCALE_CONFIG, SPACING_SCALE_UNIT, TRANSLATION_SCALE_CONFIG } from '@app/config/scale.config';
import { TableRow } from '@app/models/table-row.model';

@Component({
  selector: 'app-translate-page',
  templateUrl: './translate-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: SCALE_CONFIG, useValue: TRANSLATION_SCALE_CONFIG }]
})
export class TranslatePageComponent implements OnInit {
  config: number[];
  columns: string[] = ['name', 'translation'];
  rows: TableRow[] = [];
  translationTypes: { name: string; translation: string }[] = [
    {
      name: 'translateX',
      translation: 'offset(X, 0)'
    },
    {
      name: 'translateY',
      translation: 'offset(0, X)'
    },
    {
      name: 'translateXY',
      translation: 'offset(X, X)'
    }
  ];
  usageExample = `
  Center(
    child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        StiloTransformTranslate.translateXY52(
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
    this.rows = this.config.flatMap((value) => {
      return this.translationTypes.map((translationType) => {
        const spacing = value * SPACING_SCALE_UNIT;
        const name = translationType.name + value;
        const translation = translationType.translation.replace(/X/g, spacing.toString());
        return { name, translation };
      });
    });
  }
}
