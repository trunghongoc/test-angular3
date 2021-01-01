import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'angular3'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('angular3')
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('.content span').textContent).toContain(
      'angular3 app is running!'
    )
  })

  it('myTitle should be equal title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance

    expect(app.myTitle).toEqual(app.title)
  })

  describe('my custom test', () => {
    type TestCaseData = {
      numberA: number
      numberB: number
      sum: number
    }

    const testCases: TestCaseData[] = [
      { numberA: 1, numberB: 2, sum: 3 },
      { numberA: 9, numberB: 2, sum: 11 },
      { numberA: 0, numberB: 6, sum: 6 },
      { numberA: 0, numberB: 0, sum: 0 }
    ]

    testCases.forEach((test: TestCaseData) => {
      it(`${test.numberA} + ${test.numberB} should be ${test.sum}`, () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance

        app.numberA = test.numberA
        app.numberB = test.numberB

        expect(app.sum).toBe(test.sum)
      })
    })
  })
})
