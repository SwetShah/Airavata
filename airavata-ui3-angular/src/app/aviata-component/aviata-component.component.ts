import { Component, OnInit } from '@angular/core';
import { AviataServiceService } from '../aviata-service.service';

@Component({
  selector: 'app-aviata-component',
  templateUrl: './aviata-component.component.html',
  styleUrls: ['./aviata-component.component.css']
})
export class AviataComponentComponent implements OnInit {

  teams:any
  constructor(private aviataService: AviataServiceService) { 
  }

  ngOnInit(): void {
    this.aviataService.getTeamDetails().subscribe(team => {
      this.teams = team;
    });
  }

}
