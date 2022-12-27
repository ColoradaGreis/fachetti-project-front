import { BehaviorSubject } from 'rxjs'

export class SubjectManager {
  subject$ = new BehaviorSubject(false)

  getSubject () {
    return this.subject$.asObservable()
  }

  setSubject (value) {
    this.subject$.next(value)
  }
}
