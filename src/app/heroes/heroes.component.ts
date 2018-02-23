import { Component, OnInit } from '@angular/core';

import { Employee} from './hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {
  employees: Employee[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.employees = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  delete(hero: Employee): void {
    this.employees = this.employees.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
