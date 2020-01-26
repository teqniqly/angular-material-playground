import { Exercise } from './exercise';

describe('Exercise', () => {
  let exercise: Exercise;

  beforeAll(() => {
    exercise = new Exercise('foo');
  });

  it('should have a name', () => {
    expect(exercise.name).toEqual('foo');
  });

  it('should have an id', () => {
    expect(exercise.id).not.toBeNull();
  });
});
