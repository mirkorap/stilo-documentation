import * as fromComponents from './components';
import * as fromPages from './pages';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    fromComponents.SidenavComponent,
    fromComponents.SidenavItemComponent,
    fromComponents.CodeSnippetComponent,
    fromPages.InstallationPageComponent,
    fromPages.SpacingScalePageComponent,
    fromPages.ElevationPageComponent,
    fromPages.PositionedPageComponent,
    fromPages.GridGapPageComponent,
    fromPages.EdgePageComponent,
    fromPages.SpacingPageComponent,
    fromPages.HeightPageComponent,
    fromPages.WidthPageComponent,
    fromPages.FontSizePageComponent,
    fromPages.FontWeightPageComponent,
    fromPages.LetterSpacingPageComponent,
    fromPages.LineHeightPageComponent,
    fromPages.ColorPageComponent,
    fromPages.ColorOpacityPageComponent,
    fromPages.BorderPageComponent,
    fromPages.BorderRadiusPageComponent,
    fromPages.DividerPageComponent,
    fromPages.BoxShadowPageComponent,
    fromPages.OpacityPageComponent,
    fromPages.DurationPageComponent,
    fromPages.RotatePageComponent,
    fromPages.ScalePageComponent,
    fromPages.TranslatePageComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
