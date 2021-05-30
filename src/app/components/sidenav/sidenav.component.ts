import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidenavItem } from '@app/models/sidenav.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
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
          link: '/docs/installation'
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
          link: '/docs/spacing-scale'
        }
      ]
    },
    {
      title: 'Layout',
      children: [
        {
          title: 'Elevation',
          link: '/docs/elevation'
        },
        {
          title: 'Positioned',
          link: '/docs/positioned'
        }
      ]
    },
    {
      title: 'Flexbox and grid',
      children: [
        {
          title: 'Gap',
          link: '/docs/grid-gap'
        }
      ]
    },
    {
      title: 'Spacing',
      children: [
        {
          title: 'Edge',
          link: '/docs/edge'
        },
        {
          title: 'Space Between',
          link: '/docs/spacing'
        }
      ]
    },
    {
      title: 'Sizing',
      children: [
        {
          title: 'Height',
          link: '/docs/height'
        },
        {
          title: 'Width',
          link: '/docs/width'
        }
      ]
    },
    {
      title: 'Typography',
      children: [
        {
          title: 'Font Size',
          link: '/docs/font-size'
        },
        {
          title: 'Font Weight',
          link: '/docs/font-weight'
        },
        {
          title: 'Letter Spacing',
          link: '/docs/letter-spacing'
        },
        {
          title: 'Line Height',
          link: '/docs/line-height'
        }
      ]
    },
    {
      title: 'Colors',
      children: [
        {
          title: 'Color',
          link: '/docs/color'
        },
        {
          title: 'Color Opacity',
          link: '/docs/color-opacity'
        }
      ]
    },
    {
      title: 'Borders',
      children: [
        {
          title: 'Border',
          link: '/docs/border'
        },
        {
          title: 'Border Radius',
          link: '/docs/border-radius'
        },
        {
          title: 'Divider',
          link: '/docs/divider'
        }
      ]
    },
    {
      title: 'Effects',
      children: [
        {
          title: 'Box Shadow',
          link: '/docs/box-shadow'
        },
        {
          title: 'Opacity',
          link: '/docs/opacity'
        }
      ]
    },
    {
      title: 'Transitions and Animation',
      children: [
        {
          title: 'Duration',
          link: '/docs/duration'
        }
      ]
    },
    {
      title: 'Transforms',
      children: [
        {
          title: 'Rotate',
          link: '/docs/rotate'
        },
        {
          title: 'Scale',
          link: '/docs/scale'
        },
        {
          title: 'Translate',
          link: '/docs/translate'
        }
      ]
    }
  ];

  toggle(): void {
    this.opened = !this.opened;
  }
}
