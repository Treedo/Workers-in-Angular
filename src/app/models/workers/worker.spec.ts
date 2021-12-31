import { DatePipe } from '@angular/common';
import { Worker } from './worker';

describe('Worker', () => {
  it('should create an instance', () => {
    expect(new Worker(1, "test", new Date(2000, 1, 1), true)).toBeTruthy();
  });
})
