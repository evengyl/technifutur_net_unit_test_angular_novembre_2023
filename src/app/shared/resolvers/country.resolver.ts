import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Country } from "../models/country.model";
import { CountryService } from "../services/country.service";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn : "root"
})
export class CountryResolver implements Resolve<Country[]>{

    constructor(private readonly countryService : CountryService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Country[] | Observable<Country[]> | Promise<Country[]> {
        return this.countryService.get().pipe(
            map(countries => countries.filter(country => country.continents.includes("Europe")))
        )
    }
}