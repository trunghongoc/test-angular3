import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TestChangeObserableComponent } from './test-change-obserable.component'

describe('TestChangeObserableComponent', () => {
  let component: TestChangeObserableComponent
  let fixture: ComponentFixture<TestChangeObserableComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestChangeObserableComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TestChangeObserableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
