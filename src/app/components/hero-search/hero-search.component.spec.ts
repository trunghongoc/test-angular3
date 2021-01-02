import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router'

import { HeroSearchComponent } from './hero-search.component'

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent
  let fixture: ComponentFixture<HeroSearchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],
      imports: [RouterModule.forRoot([]), HttpClientModule]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
