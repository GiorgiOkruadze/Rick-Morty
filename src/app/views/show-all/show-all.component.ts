import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { WebClientService } from 'src/shared-services/proxy-services/web-client.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  public serverDatas:any[] = [];
  public sliderRenderData:any[] = [];
  constructor(private route:ActivatedRoute,private webClientService:WebClientService) { }

  ngOnInit() {
    this.subscribeQueryParams();
  }

  subscribeQueryParams(){
    this.route.queryParams.subscribe((result:Route) => {
      var data = result as any;
      this.getAlterEgoDatas(data.name.toLowerCase().split(' ')[0], data.status);
    })
  }

  private getAlterEgoDatas(name:string,status:string)
  {
    this.webClientService.getAlterEgos(name,status)
    .subscribe((response:any) => {
      var data = response.results.concat(new Array());
      this.serverDatas= response.results;
      try{
        this.sliderRenderData = data.splice(0,3);
      }catch(arr){}
    })
  }
}
