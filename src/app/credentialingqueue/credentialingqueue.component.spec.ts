import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialingqueueComponent } from './credentialingqueue.component';

describe('CredentialingqueueComponent', () => {
  let component: CredentialingqueueComponent;
  let fixture: ComponentFixture<CredentialingqueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialingqueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialingqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
