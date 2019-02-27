import { Injectable } from '@angular/core';
import GoNFetch from 'go-n-fetch/browser'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  gnf: any;
  constructor() {
    this.gnf = GoNFetch({
      baseUrl: 'https://jsonplaceholder.typicode.com/'
    });
  }
  async apiService(datos, ruta, tipo) {

    if (tipo == "post") {
      var response = await this.gnf.post(ruta, { body: JSON.stringify(datos), headers: { "Content-Type": "application/json" } });
      var data = await response.json();
      return data;
    }
    if (tipo == "get") {
      var response = await this.gnf.get(`${ruta}` + `${datos}`);
      var data = await response.json();
      return data;
    }
    if (tipo == "delete") {
      var response = await this.gnf.delete(ruta, { body: JSON.stringify(datos), headers: { "Content-Type": "application/json" } });
      var data = await response.json();
      return data;
    }
    if (tipo == "put") {
      var response = await this.gnf.put(ruta, { body: JSON.stringify(datos), headers: { "Content-Type": "application/json" } });
      var data = await response.json();
      return data;
    }
  }
}
