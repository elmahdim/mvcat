import { AppComponent } from './app.component';

describe('AppComponent suite', () => {
  let comp: AppComponent;

  beforeEach(function() {
    comp = new AppComponent();
  });

  it('should create component', () => {    
    expect(comp).toBeDefined();
  });
  
});