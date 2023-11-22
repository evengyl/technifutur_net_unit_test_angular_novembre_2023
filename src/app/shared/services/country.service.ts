import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Country } from "../models/country.model";

@Injectable({
    providedIn : "root"
})
export class CountryService{


    constructor(private readonly httpC : HttpClient) {
        
    }

    get() : Observable<Country[]> {
        return this.httpC.get("https://restcountries.com/v3.1/all").pipe(
            map((countries : any) => countries.sort((c1 : any, c2 : any) => c1.translations.fra.common < c2.translations.fra.common ? -1 : 1))
        )
    }
}