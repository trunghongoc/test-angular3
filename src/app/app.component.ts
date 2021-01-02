import { Component, Input, OnInit } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular3'
  numberA = 9
  numberB = 2

  weeklyPatterns = ['Mon', 'Tue', 'Web'] as const

  get myTitle(): string {
    return this.title
  }

  get sum(): number {
    return this.numberA + this.numberB
  }
}
