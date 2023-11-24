import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CoreUiService } from '../../services/core-ui/core-ui.service';
import { map, tap } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private coreUi = inject(CoreUiService);
  private observer = inject(BreakpointObserver);

  isMobile$ = this.observer
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .pipe(map((data) => data.matches));

  scrolledToTop$ = this.coreUi.scrolledToTop$.pipe(tap(console.log));
}
