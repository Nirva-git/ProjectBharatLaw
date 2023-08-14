import { Component, Input} from '@angular/core';
import { ResearchBook } from '../research-book'; // Make sure to import the ResearchBook interface
import { ResearchBookServiceService } from '../services/research-book-service.service'; // Import the service
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-research-book-dashbord',
  templateUrl: './research-book-dashbord.component.html',
  styleUrls: ['./research-book-dashbord.component.css']
})
export class ResearchBookDashbordComponent  {
  researchBooks: ResearchBook[] = []; // Declare and initialize the property
  constructor( ) {}
  @Input() book:any;

}