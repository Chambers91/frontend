import { Component } from '@angular/core';
import { AxiosService } from '../axios.service';


@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.css']
})
export class AuthContentComponent {
//variable created to retrieve the backend response
  data: string[] = [];


constructor(private axiosService:AxiosService){}

ngOnInit(): void{
//declaring a Get request for the messages endpoint with no argument
//response is stored in the data variable
  this.axiosService.request( 
    "GET",
    "/messages",
    {}
    ).then(
    (response) => this.data = response.data
  )
};
}
