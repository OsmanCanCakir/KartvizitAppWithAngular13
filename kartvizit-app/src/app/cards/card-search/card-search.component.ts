import { Component} from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent{

  constructor(
    private cardService : CardService
  ) { }

  
  search(searchText: string): void{
    searchText = searchText.toLowerCase();
    this.cardService.filteredCards = this.cardService.cards.filter((card: Card) =>{
      return card.title.toLowerCase().indexOf(searchText) > -1 || (card.name && card.name.toLowerCase().indexOf(searchText) > -1);
    });
   
  }

}
