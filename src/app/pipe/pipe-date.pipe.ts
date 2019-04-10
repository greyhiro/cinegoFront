import { Pipe, PipeTransform } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Pipe({
  name: 'pipeDate'
})
export class PipeDatePipe implements PipeTransform {

  
      transform(value: NgbDate): Date {
         
          if(value.month = 1){
          
          }

          return new Date(value.day, value.month , value.year);
    
  
  }
}
