import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    // Klassen-Instanz
    component = fixture.componentInstance;

    // DOM-Element der Komponente
    // fixture.nativeElement.querySelector()


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
