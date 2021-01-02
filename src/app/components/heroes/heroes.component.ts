import { Component, OnInit, OnDestroy } from '@angular/core'
import { Hero } from './../hero/hero'
import { HeroService } from './../../services/hero/hero.service'
import { MessagesService } from './../../services/messages/messages.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnDestroy {
  constructor(
    private heroService: HeroService,
    private messagesService: MessagesService
  ) {}

  hero?: Hero
  heroes: Hero[] = []

  showHero(hero: Hero): void {
    this.hero = hero
    this.messagesService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      console.log('---heroes:', heroes)
      this.heroes = heroes
    })
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  ngOnDestroy(): void {
    console.log('---destroyed')
    this.messagesService.clear()
  }
}
