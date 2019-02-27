import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model: any = {};
  response: any = {};
  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
  }

  async insert() {
    this.model.userId = 1;
    this.response = await this.apiService.apiService(this.model, "posts", "post");
  }
}
