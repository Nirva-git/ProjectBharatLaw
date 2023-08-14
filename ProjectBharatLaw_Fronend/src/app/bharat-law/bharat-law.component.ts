import { Component, OnInit } from '@angular/core';
import { ResearchBook } from '../research-book';
import { User } from '../user';
import { ResearchBookServiceService } from '../services/research-book-service.service';
import { ActivatedRoute } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';


@Component({
  selector: 'app-bharat-law',
  templateUrl: './bharat-law.component.html',
  styleUrls: ['./bharat-law.component.css'],
  providers: [UserStoreService]
})
export class BharatLawComponent implements OnInit {
  researchBooks: ResearchBook[] = [];
   user: User= User.getInstance() ;

  constructor(
    private researchBookService: ResearchBookServiceService,
    private route: ActivatedRoute,
    public userStoreService: UserStoreService
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const userId: number = params['userId'];
   
      
      // Fetch user by userId
      this.researchBookService.getUserById(userId)
        .subscribe((data) => {
          //this.user = data;
          //console.log("username is="+this.user.Username);
         
        });

      // Fetch research books by userId
      this.researchBookService.getResearchBooksbyUserId(userId)
        .subscribe((data) => {
          this.researchBooks = data;
          //console.log(`length= ${this.researchBooks.length} UserId=${userId}`)
          UserStoreService.setUserIdForStore(userId);
        });
    });
  }
}
