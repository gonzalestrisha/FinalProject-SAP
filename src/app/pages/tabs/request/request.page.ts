import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})

export class RequestPage {

  constructor(@Inject(DataService) dataService: DataService) {
    dataService.getReq().subscribe(res => {
      console.log(res)
    })

   }



}


