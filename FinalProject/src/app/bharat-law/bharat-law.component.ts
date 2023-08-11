import { Component, OnInit } from '@angular/core';
import { ResearchBook } from '../research-book'; // Make sure to import the ResearchBook interface
import { ResearchBookServiceService } from '../services/research-book-service.service'; // Import the service
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bharat-law',
  templateUrl: './bharat-law.component.html',
  styleUrls: ['./bharat-law.component.css']
})
export class BharatLawComponent implements OnInit{
  researchBooks: ResearchBook[] = []; // Declare and initialize the property
  constructor(
    private researchBookService: ResearchBookServiceService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.researchBookService.getResearchBooks()
      .subscribe((data) => {
        this.researchBooks = data;
      });
  }
  
}
