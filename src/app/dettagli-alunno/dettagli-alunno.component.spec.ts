import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliAlunnoComponent } from './dettagli-alunno.component';

describe('DettagliAlunnoComponent', () => {
  let component: DettagliAlunnoComponent;
  let fixture: ComponentFixture<DettagliAlunnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliAlunnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliAlunnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
