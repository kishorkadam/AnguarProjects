import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  private getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(hero.name + ' selected.');
  }
}
