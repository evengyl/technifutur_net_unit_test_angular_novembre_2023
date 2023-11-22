import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RegisterComponent } from '../pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../pages/home/home.component';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';
import { of } from 'rxjs';
import { Location } from '@angular/common'

@Injectable()
class UserServiceMock {
  post(data: User) {
    return of({ ...data, id: 42 });
  }
}


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let router : Router
  let userService : UserService
  let location : Location

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers : [
        { provide : UserService, useClass : UserServiceMock}
      ],
      imports: [RegisterComponent, ReactiveFormsModule, RouterTestingModule.withRoutes([
        { path : "", component : HomeComponent}
      ])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterComponent);
    router = TestBed.inject(Router)
    router.initialNavigation()
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService)
    location = TestBed.inject(Location)

    fixture.detectChanges();
  });

  it('should be component create', () => {
    expect(component).toBeTruthy();
  });

  it('should email be invalid without value', () => {
    component.fg.patchValue({ email : null})
    expect(component.fg.get("email")?.valid).toBeFalse()
  })

  it("should email be invalid with invalid pattern", () => {
    component.fg.patchValue({ email : "invalid.email"})
    expect(component.fg.get("email")?.valid).toBeFalse()
  })

  it("should email be valid with valid pattern", () => {
    component.fg.patchValue({ email : "lb@lb.be" })
    expect(component.fg.get("email")?.valid).toBeTrue()
  })

  it('should nationality be invalid without value', () =>{
    component.fg.patchValue({ nationality : null })
    expect(component.fg.get("nationality")?.valid).toBeFalse()
  })

  it('should nationality be valid with value', () =>{
    component.fg.patchValue({ nationality : "be" })
    expect(component.fg.get("nationality")?.valid).toBeTrue()
  })

  it('should ssn be disabled with nationality other than be', () =>{
    component.fg.patchValue({ nationality : "fr", ssn : null })
    expect(component.fg.get("ssn")?.disabled).toBeTrue()
  })


  it('should ssn be enable with nationality be', () =>{
    component.fg.patchValue({ nationality : "be", ssn : null })
    expect(component.fg.get("ssn")?.enabled).toBeTrue()
  })

  it('should ssn be invalid without value', () =>{
    component.fg.patchValue({ nationality : "be", ssn : null })
    expect(component.fg.get("ssn")?.valid).toBeFalse()
  })

  it('should ssn be invalid with invalid pattern', () => {
    component.fg.patchValue({ nationality : "be", ssn : "12_34_56_789.00"})
    expect(component.fg.get("ssn")?.valid).toBeFalse()
  })

  it('should ssn be valid with valid pattern', () => {
    component.fg.patchValue({ nationality : "be", ssn : "91.06.01-379.89"})
    expect(component.fg.get("ssn")?.valid).toBeTrue()
  })

  it('should ssn be valid with valid pattern after 2000', () => {
    component.fg.patchValue({ nationality : "be", ssn : "01.01.01-003.24"})
    expect(component.fg.get("ssn")?.valid).toBeTrue()
  })


  it('should ssn be valid with valid pattern before 2000', () => {
    component.fg.patchValue({ nationality : "be", ssn : "82.05.06-203.16"})
    expect(component.fg.get("ssn")?.valid).toBeTrue()
  })


  it('should be submit form return on home page', fakeAsync(() => {
    component.fg.patchValue({
      nationality : "be",
      ssn : "91.06.01-379.89",
      email : "test@example.com"
    })
    component.submit()
    tick(500)
    expect(location.path()).toBe("/")
  }))


});
