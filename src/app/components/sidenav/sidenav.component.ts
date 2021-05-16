import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidenavItem } from '@app/models/sidenav.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  opened = false;
  sidenavItems: SidenavItem[] = [
    {
      title: 'Getting Started',
      children: [
        {
          title: 'Installation',
          link: '/installation'
        },
        {
          title: 'Release Notes',
          link: 'https://github.com/mirkorap/stilo/releases',
          externalLink: true
        }
      ]
    },
    {
      title: 'Configuration',
      children: [
        {
          title: 'Spacing Scale',
          link: '/spacing-scale'
        }
      ]
    },
    {
      title: 'Layout',
      children: [
        {
          title: 'Elevation',
          link: '/elevation'
        },
        {
          title: 'Positioned',
          link: '/positioned'
        }
      ]
    },
    {
      title: 'Flexbox and grid',
      children: [
        {
          title: 'Gap',
          link: '/grid-gap'
        }
      ]
    },
    {
      title: 'Spacing',
      children: [
        {
          title: 'Edge',
          link: '/edge'
        },
        {
          title: 'Space Between',
          link: '/spacing'
        }
      ]
    },
    {
      title: 'Sizing',
      children: [
        {
          title: 'Height',
          link: '/height'
        },
        {
          title: 'Width',
          link: '/width'
        }
      ]
    },
    {
      title: 'Typography',
      children: [
        {
          title: 'Font Size',
          link: '/font-size'
        },
        {
          title: 'Font Weight',
          link: '/font-weight'
        },
        {
          title: 'Letter Spacing',
          link: '/letter-spacing'
        },
        {
          title: 'Line Height',
          link: '/line-height'
        }
      ]
    },
    {
      title: 'Colors',
      children: [
        {
          title: 'Color',
          link: '/color'
        },
        {
          title: 'Color Opacity',
          link: '/color-opacity'
        }
      ]
    },
    {
      title: 'Borders',
      children: [
        {
          title: 'Border',
          link: '/border'
        },
        {
          title: 'Border Radius',
          link: '/border-radius'
        },
        {
          title: 'Divider',
          link: '/divider'
        }
      ]
    },
    {
      title: 'Effects',
      children: [
        {
          title: 'Box Shadow',
          link: '/box-shadow'
        },
        {
          title: 'Opacity',
          link: '/opacity'
        }
      ]
    },
    {
      title: 'Transitions and Animation',
      children: [
        {
          title: 'Duration',
          link: '/duration'
        }
      ]
    },
    {
      title: 'Transforms',
      children: [
        {
          title: 'Rotate',
          link: '/rotate'
        },
        {
          title: 'Scale',
          link: '/scale'
        },
        {
          title: 'Translate',
          link: '/translate'
        }
      ]
    }
  ];

  toggle(): void {
    this.opened = !this.opened;
  }
}
