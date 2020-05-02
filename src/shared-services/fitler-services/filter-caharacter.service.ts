import { Injectable } from '@angular/core';
import { FilterDto } from 'src/shared-models/filterDto.model';

@Injectable({
  providedIn: 'root'
})
export class FilterCaharacterService {

  constructor() { }

  public filterCharacters(collection: any[], filter: FilterDto): any[] {
    return collection.filter(o => {
      if (filter.CharacterGender == 'all') {
        return o.name.toLowerCase().search(filter.CharacherName.toLowerCase()) == 0;
      } else {

        return o.name.toLowerCase().search(filter.CharacherName.toLowerCase()) == 0 && o.gender.toLowerCase() == filter.CharacterGender.toLowerCase();
      }
    });
  }
}
