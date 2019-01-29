import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
    quotes = [
        new Quote(1,"You may be down in the dumps at the moment, but take solace in the fact that you're definitely not the first one to have your heart broken.",' Mae West',new Date(2018,3,14) ),
        new Quote(2,'Dont cry because its over, smile because it happened.'," Mae West",new Date(2018,6,9) ),
        new Quote(3, 'Be yourself; everyone else is already taken.',' Mahatma Gandhi',new Date(2018,1,12) ),
        new Quote(4, 'So many books, so little time','Robert Frost',new Date(2018,0,18) ),
        new Quote(5, 'A room without books is like a body without a soul.','Albert Camus',new Date(2018,2,14) ),
        new Quote(6, 'You only live once, but if you do it right, once is enough.','Elbert Hubbard',new Date(2018,3,14) ),

    ]
    deleteQuote(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
            
            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }

    addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

    }
toogleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete,index){
    if (isComplete){
        this.quotes.splice(index,1);
        }
        }
  constructor() { }
  ngOnInit() {
  }

  
      }

      