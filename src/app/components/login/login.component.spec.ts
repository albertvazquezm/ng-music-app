import { AuthenticationService } from './../../services/authentication/authentication.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSmartComponent } from './login.component';

const AuthenticationServiceStub = {
  authenticateUsingSpotify() {}
}

describe('LoginSmartComponent', () => {
  let component: LoginSmartComponent;
  let fixture: ComponentFixture<LoginSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSmartComponent ],
      providers: [{provide: AuthenticationService, useValue: AuthenticationServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render a button for spotify login', async(() => {
    const fixture = TestBed.createComponent(LoginSmartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Login using Spotify');
  }));

  it('should execute auth service method on click on login using spotify', async(() => {
    const fixture = TestBed.createComponent(LoginSmartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const btn = compiled.querySelector('button');
    btn.triggerEventHandler('click', null);
    const authService = fixture.debugElement.injector.get(AuthenticationService);
    const authUsingSpotifySpy = spyOn(authService, 'authenticateUsingSpotify');
    expect(authUsingSpotifySpy).toHaveBeenCalled();
  }));
});
