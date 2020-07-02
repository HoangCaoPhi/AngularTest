import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../data-transfer.service'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private tranferService: DataTransferService) { }

  ngOnInit(): void {
  }
  index: number = 0;
  ChangData(){
    this.tranferService.changeUser(this.index);
    this.index++;
  }

}
