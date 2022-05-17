import { shuffleArray } from '../utils';
import { db } from '../database/photoList';

describe('Utils', () => {
    test('Shuffled Array ', () => {
        let photos = db['CAT'];
        let result = shuffleArray(photos);
        expect(result).not.toEqual([])
        expect(result).toHaveLength(10);
    });
  });

