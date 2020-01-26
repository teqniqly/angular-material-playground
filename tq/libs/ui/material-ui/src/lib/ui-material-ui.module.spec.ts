import { async, TestBed } from '@angular/core/testing';
import { UiMaterialUiModule } from './ui-material-ui.module';

describe('UiMaterialUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiMaterialUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiMaterialUiModule).toBeDefined();
  });
});
