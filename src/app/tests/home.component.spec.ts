import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from '../pages/home/home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should be create', () => {
    expect(component).toBeTruthy();
  });
});
