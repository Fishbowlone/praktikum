import {Component, HostListener} from '@angular/core';
import {LocalstorageService} from './localstorage.service';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'MCL';
  undertitle = 'IT. Günstig. Kompetent.';
  header = 'Who is who';

  constructor(
    private localstorageService: LocalstorageService,
    private heroService: HeroService,
  ) { }

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHander(event) {
    this.heroService.getHeroes()
      .subscribe(employees => this.localstorageService.SaveLocalstorage(employees));
  }
}
