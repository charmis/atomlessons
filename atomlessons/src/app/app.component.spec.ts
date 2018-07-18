import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Routes, Router } from '@angular/router';
import { Location } from '@angular/common';

import { AppComponent } from './app.component';
import { LessonlistComponent } from './components/lessonlist/lessonlist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrormessageComponent } from './components/errormessage/errormessage.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'lessons', component: LessonlistComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'error', component: ErrormessageComponent },
  { path: '**', component: ErrormessageComponent }
];

describe('AppComponent', () => {
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        LessonlistComponent,
        DashboardComponent,
        ErrormessageComponent
      ],
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render a Home Link', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.nav-link').textContent).toContain('Home');
  }));

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/');
  }));

  it('navigate to "lessons" takes you to /lessons', fakeAsync(() => {
    router.navigate(['lessons']);
    tick();
    expect(location.path()).toBe('/lessons');
  }));
});
