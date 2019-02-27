import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  model = [];
  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.read();
  }

  async read(){
    this.model = await this.apiService.apiService('', "posts", "get");   
  }
}
