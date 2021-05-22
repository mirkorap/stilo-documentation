import * as fromPages from './pages';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'docs',
    children: [
      {
        path: 'installation',
        component: fromPages.InstallationPageComponent
      },
      {
        path: 'spacing-scale',
        component: fromPages.SpacingScalePageComponent
      },
      {
        path: 'elevation',
        component: fromPages.ElevationPageComponent
      },
      {
        path: 'positioned',
        component: fromPages.PositionedPageComponent
      },
      {
        path: 'grid-gap',
        component: fromPages.GridGapPageComponent
      },
      {
        path: 'edge',
        component: fromPages.EdgePageComponent
      },
      {
        path: 'spacing',
        component: fromPages.SpacingPageComponent
      },
      {
        path: 'height',
        component: fromPages.HeightPageComponent
      },
      {
        path: 'width',
        component: fromPages.WidthPageComponent
      },
      {
        path: 'font-size',
        component: fromPages.FontSizePageComponent
      },
      {
        path: 'font-weight',
        component: fromPages.FontWeightPageComponent
      },
      {
        path: 'letter-spacing',
        component: fromPages.LetterSpacingPageComponent
      },
      {
        path: 'line-height',
        component: fromPages.LineHeightPageComponent
      },
      {
        path: 'color',
        component: fromPages.ColorPageComponent
      },
      {
        path: 'color-opacity',
        component: fromPages.ColorOpacityPageComponent
      },
      {
        path: 'border',
        component: fromPages.BorderPageComponent
      },
      {
        path: 'border-radius',
        component: fromPages.BorderRadiusPageComponent
      },
      {
        path: 'divider',
        component: fromPages.DividerPageComponent
      },
      {
        path: 'box-shadow',
        component: fromPages.BoxShadowPageComponent
      },
      {
        path: 'opacity',
        component: fromPages.OpacityPageComponent
      },
      {
        path: 'duration',
        component: fromPages.DurationPageComponent
      },
      {
        path: 'rotate',
        component: fromPages.RotatePageComponent
      },
      {
        path: 'scale',
        component: fromPages.ScalePageComponent
      },
      {
        path: 'translate',
        component: fromPages.TranslatePageComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/docs/installation'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
