import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
    providedIn : "root"
})
export class UserService {
    constructor(
        private http: HttpClient
      ) { }
    
      post(user: User) : boolean {
        return true
      }
}