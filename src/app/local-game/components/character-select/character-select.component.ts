import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.scss'],
})
export class CharacterSelectComponent  implements OnInit {


  form = new FormGroup({
    color: new FormControl('#a85c32'),
    name: new FormControl('Player1'),
    type: new FormControl('cat')
  })

  constructor() { }

  ngOnInit() {}

}
