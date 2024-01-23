import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: `./list.component.html`,
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()
  public charactersList: Character[]=[
    {name:'Krillin', power:1000},
    {name:'Goku',power:9500},
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDelete = Index value:number

  // onDeleteCharacter(index:number):void{
  //   this.onDelete.emit(index);
  // }

  deleteCharacterById(id?:string):void{

      if(!id) return;

      this.onDelete.emit(id);
  }
 }
