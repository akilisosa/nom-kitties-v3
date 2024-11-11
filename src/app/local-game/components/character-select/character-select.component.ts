import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.scss'],
})
export class CharacterSelectComponent  implements OnInit {
  @Input() score: number = 0;
  @Output() colorChange = new EventEmitter<any>();

  form = new FormGroup({
    color: new FormControl('#a85c32'),
    name: new FormControl('Player1'),
    type: new FormControl('cat')
  })

  constructor() { }

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      this.colorChange.emit(value.color);
    });
  }

}
