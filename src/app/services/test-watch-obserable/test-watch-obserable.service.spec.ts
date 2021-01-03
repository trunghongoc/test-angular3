import { TestBed } from '@angular/core/testing'

import { TestWatchObserableService } from './test-watch-obserable.service'

describe('TestWatchObserableService', () => {
  let service: TestWatchObserableService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(TestWatchObserableService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
