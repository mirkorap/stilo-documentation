import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SidenavItem } from '@app/models/sidenav.model';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavItemComponent {
  @Input() sidenavItem!: SidenavItem;
  @Output() sidenavItemClick = new EventEmitter<void>();

  onLinkClick(): void {
    this.sidenavItemClick.emit();
  }
}
