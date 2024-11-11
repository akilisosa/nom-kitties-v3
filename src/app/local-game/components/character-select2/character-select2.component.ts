import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-character-select2',
  templateUrl: './character-select2.component.html',
  styleUrls: ['./character-select2.component.scss'],
})
export class CharacterSelect2Component  implements OnInit {

  @Input() score: number = 0;

  @Output() colorChange = new EventEmitter<any>();

  form = new FormGroup({
    color: new FormControl('#000'),
    name: new FormControl('Player2'),
    type: new FormControl('cat')
  })
  constructor() { }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      this.colorChange.emit(value.color);
    });
  }

}
