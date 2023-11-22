import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { RouterTestingModule } from '@angular/router/testing'

describe('AppComponent', () => {

  let fixture : ComponentFixture<AppComponent>;
  let component : AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'technifutur_net_unit_test_angular_novembre_2023' title`, () => {
    expect(component.title).toEqual('technifutur_net_unit_test_angular_novembre_2023');
  });

  // it('should render title', () => {
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, technifutur_net_unit_test_angular_novembre_2023');
  // });
});
