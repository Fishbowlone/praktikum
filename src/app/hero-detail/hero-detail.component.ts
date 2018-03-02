import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Employee} from '../heroes/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.less' ],
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Employee;
  value = '';

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = new Employee(hero));
  }
  goBack(): void {
    window.location.reload();
  }
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
