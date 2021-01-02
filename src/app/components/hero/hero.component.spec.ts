import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { HeroComponent } from './hero.component'

describe('HeroComponent', () => {
  let component: HeroComponent
  let fixture: ComponentFixture<HeroComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientModule],
      declarations: [HeroComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
