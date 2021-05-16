import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SidenavItem } from '@app/models/sidenav.model';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavItemComponent {
  @Input() sidenavItem!: SidenavItem;
}
