import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TestSubcribeObserableComponent } from './test-subcribe-obserable.component'

describe('TestSubcribeObserableComponent', () => {
  let component: TestSubcribeObserableComponent
  let fixture: ComponentFixture<TestSubcribeObserableComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestSubcribeObserableComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSubcribeObserableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
