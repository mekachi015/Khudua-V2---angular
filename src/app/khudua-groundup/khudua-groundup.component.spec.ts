import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhuduaGroundupComponent } from './khudua-groundup.component';

describe('KhuduaGroundupComponent', () => {
  let component: KhuduaGroundupComponent;
  let fixture: ComponentFixture<KhuduaGroundupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KhuduaGroundupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KhuduaGroundupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
