import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { CountryResolver } from '../shared/resolvers/country.resolver'
import { ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router'
import { CountryService } from '../shared/services/country.service'
import { Country } from '../shared/models/country.model'
import { of } from 'rxjs'



const COUNTRIES: Country[] = [
    { cca2: 'BE', translations: { fra: { common: 'Belgique' } }, continents: ['Europe'] },
    { cca2: 'FR', translations: { fra: { common: 'France' } }, continents: ['Europe']  },
    { cca2: 'JP', translations: { fra: { common: 'Japon' } }, continents: ['Asia']  },
  ]

  
describe('CountryResolver', () => {

    let resolver : CountryResolver
    let activatedRouteSnapshot : ActivatedRouteSnapshot
    let routerStateSnapshot : RouterStateSnapshot

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers : [{ 
                provide : CountryService,
                useValue : {
                    get: () => of(COUNTRIES)
                }
            }]
        })
        resolver = TestBed.inject(CountryResolver)
    })

    it('should be created', () => {
        expect(resolver).toBeTruthy()
    })

})
