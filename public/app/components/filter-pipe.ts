import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterCommit'
})
export class filterCommit implements PipeTransform {
    transform(items: any[], args: any[]): any {
        if(items && args){
          return items.filter(item => item.title.toLowerCase().indexOf(args) !== -1);
        }

        else return items
    }
}
