import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacesOfInterestsPage } from './places-of-interests.page';

describe('PlacesOfInterestsPage', () => {
  let component: PlacesOfInterestsPage;
  let fixture: ComponentFixture<PlacesOfInterestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesOfInterestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacesOfInterestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
