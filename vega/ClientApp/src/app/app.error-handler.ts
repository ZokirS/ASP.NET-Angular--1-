
import { ToastyService } from 'ng2-toasty';
import { ErrorHandler, NgZone, Injectable } from '@angular/core';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(
    private ngZone: NgZone,
    private toastyService: ToastyService) {
  }

  handleError(error: any): void {
    

    this.ngZone.run(() => {
      this.toastyService.error({
        title: 'Error',
        msg: 'An unexpected error happened.',
        theme: 'bootstrap',
        showClose: true,
        timeout: 5000
      });
    });
  }
}