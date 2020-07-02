import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(private tranferService: DataTransferService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.tranferService.userID.subscribe(data =>{
      console.log(data);;
      
    })
  }

}
