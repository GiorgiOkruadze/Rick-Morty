import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as $ from 'node_modules/jquery';

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {
  private _loading:boolean = false;
  public loadingStatus:Subject<boolean> = new Subject();
  constructor() { }

  ngOnInit() {
  }

  get loading():boolean {
    return this._loading;
  }

  set loading(value:boolean) {
    this._loading = value;
    this.loadingStatus.next(value);
  }

  public startLoading() {
    this.loading = true;
    console.log("start");
    $("body").css("overflow","hidden");
  }

  public stopLoading() {
    this.loading = false;
    console.log("end");
    $("body").css("overflow","visible")
  }
}
