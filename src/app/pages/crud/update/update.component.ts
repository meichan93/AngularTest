import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnDestroy {
  model: any = {};
  response: any = {};
  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {
    this.model = {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    }
  }
  async update() {
    this.response = await this.apiService.apiService(this.model, "posts/1", "put");
  }
  ngOnDestroy(){
    this.response = [];
    this.model = {};
  }
}
