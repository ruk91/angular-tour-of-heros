import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  // heroes: HEROES;
  heroes: Hero[] = [];
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  //** Method to retrieve the heroes from the service. */
  // * Observable*/
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // * Original*/
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

}
