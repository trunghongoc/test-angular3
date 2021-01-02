import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { HeroService } from './../../services/hero/hero.service'

import { Hero } from './hero'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  @Input() hero?: Hero

  ngOnInit(): void {
    // const id = this.route.snapshot.params.id
    // console.log('this.route.snapshot', id)
  }
}
