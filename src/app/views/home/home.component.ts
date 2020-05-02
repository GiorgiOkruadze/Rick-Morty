import { Component, OnInit } from '@angular/core';
import { WebClientService } from 'src/shared-services/proxy-services/web-client.service';
import { FilterCaharacterService } from 'src/shared-services/fitler-services/filter-caharacter.service';
import { FilterDto } from 'src/shared-models/filterDto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FilterCaharacterService]
})
export class HomeComponent implements OnInit {
  private serverDataBackUp: any;
  public serverRenderData: any[] = [];
  public sliderRenderData:any[] = [];

  constructor(private webWorker: WebClientService, private filterService: FilterCaharacterService) { }

  ngOnInit() {
    this.subscribeWebWorker();
  }

  subscribeWebWorker() {
    this.webWorker.getCharactersApiData()
      .subscribe(response => {
        this.serverDataBackUp = response;
        this.serverRenderData = response.results;
        this.sliderRenderData = response.results.splice(Math.floor(Math.random()*response.results.length),3);
      })
  }

  public onFilterStateChange(event:FilterDto){
    if (event.CharacherName.length == 0 && event.CharacterGender == 'all') {
      this.serverRenderData = this.serverDataBackUp.results;
    } else {
      this.serverRenderData = this.filterService.filterCharacters(this.serverDataBackUp.results, event);
    }
  }
}
