import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentLoreComponent } from './agent-lore.component';

describe('AgentLoreComponent', () => {
  let component: AgentLoreComponent;
  let fixture: ComponentFixture<AgentLoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentLoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
