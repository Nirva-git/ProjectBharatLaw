export class User {
    Id: number=0;
    FirstName: string="";
    LastName: string="";
    Username: string="";
    Organization: string="";
    ContactNumber: string="";
    Email: string="";
    Password: string="";

    private static instance: User;

    private constructor() {}
  
    static getInstance(): User {
      if (!User.instance) {
        User.instance = new User();
      }
      return User.instance;
    }
}
