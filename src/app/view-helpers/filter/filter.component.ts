import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FilterDto } from 'src/shared-models/filterDto.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  private filterModel:FilterDto = new FilterDto("","");
  @Output() onFilterStateChange:EventEmitter<FilterDto> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSearchCharacterPress(event:Event)
  {
    this.filterModel.CharacherName = (event.target as HTMLInputElement).value;
    this.onFilterStateChange.emit(this.filterModel);
  }

  onGenderFilterChange(event:Event)
  {
    this.filterModel.CharacterGender = (event.target as HTMLSelectElement).value;
    this.onFilterStateChange.emit(this.filterModel);
  }
}
