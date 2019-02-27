import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  model: any = {};
  response = "";
  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getData();
  }
  async getData() {
    this.model = await this.apiService.apiService('1', "posts/", "get");
  }
  async delete(id) {
    this.response = JSON.stringify(await this.apiService.apiService(this.model, "posts/1", "delete"));
  }
}
