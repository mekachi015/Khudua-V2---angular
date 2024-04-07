import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhuduaResourcesComponent } from './khudua-resources.component';

describe('KhuduaResourcesComponent', () => {
  let component: KhuduaResourcesComponent;
  let fixture: ComponentFixture<KhuduaResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KhuduaResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KhuduaResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
