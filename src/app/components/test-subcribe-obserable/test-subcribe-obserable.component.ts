import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  SimpleChanges
} from '@angular/core'
import { TestWatchObserableService } from './../../services/test-watch-obserable/test-watch-obserable.service'

@Component({
  selector: 'app-test-subcribe-obserable',
  templateUrl: './test-subcribe-obserable.component.html',
  styleUrls: ['./test-subcribe-obserable.component.scss']
})
export class TestSubcribeObserableComponent implements OnInit, OnDestroy {
  constructor(private testWatchObserableService: TestWatchObserableService) {}
  size?: string
  abc: string = 'abc'

  ngOnInit(): void {
    console.log('---init')
    this.testWatchObserableService.size$.subscribe(newSize => {
      this.size = newSize
    })
  }

  // ngDoCheck(): void {
  //   console.log('---check')
  // }

  ngOnDestroy(): void {}
}
