import { Quote } from './quote';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new Quote(1,'','',new Date())).toBeTruthy();
  });
});
