import { changeState } from './../state';

test('check background state changes correctly', () => {
    const state = { isPause: false };
    
    expect(changeState(state, 'isPause', true)).toEqual({ isPause: true });
    expect(changeState(state, 'isPause', false)).toEqual({ isPause: false });
    expect(() => changeState(state, 'isPause', 0)).toThrowError(new Error('The value type is not assignable'));
});