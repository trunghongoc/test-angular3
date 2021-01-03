import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core'
import { Subject } from 'rxjs'
import { TestWatchObserableService } from './../../services/test-watch-obserable/test-watch-obserable.service'

@Component({
  selector: 'app-test-change-obserable',
  templateUrl: './test-change-obserable.component.html',
  styleUrls: ['./test-change-obserable.component.scss']
})
export class TestChangeObserableComponent implements OnInit {
  constructor(private testWatchObserableService: TestWatchObserableService) {}
  currentSize?: string
  private subject = new Subject<string>()

  changeSize(sizeName: string): void {
    this.testWatchObserableService.setSize(sizeName)
  }

  ngOnInit(): void {
    console.log('---init')
    this.testWatchObserableService.size$.subscribe(
      newSize => (this.currentSize = newSize)
    )
  }
}
