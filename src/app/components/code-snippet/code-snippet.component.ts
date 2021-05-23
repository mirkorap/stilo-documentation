import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeSnippetComponent {
  @Input() codeSnippet!: string;
}
