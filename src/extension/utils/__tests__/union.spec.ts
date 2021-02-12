import { changeState, sync } from '../union';

describe('test union', () => {
    test('check state changes correctly', () => {
        const state = { isPause: false };
            
        expect(changeState(state, 'isPause', true)).toEqual({ isPause: true });
        expect(changeState(state, 'isPause', false)).toEqual({ isPause: false });
        expect(() => changeState(state, 'isPause', 0)).toThrowError(new Error('The value type is not assignable'));
    });

    test('is sync function works correctly', async () => {
        const func = (a: string, b: string, resolve: any) => resolve({[a]: b});
        const data = {"test": "correct"};

        await expect(sync(func, "test", "correct")).resolves.toEqual(data);
    });
});