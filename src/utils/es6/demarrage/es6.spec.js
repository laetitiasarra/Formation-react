import * as I from '../input';
import { func1, func2 } from './es6';

import { multiplier, transforme, multiplie_array } from './es6';

describe('ES6', () => {
	describe('Example', () => {
		it('tableau index, valeur', () => {
			//given
			
						//when
            const arr = transforme(I.array);
			//then

				expect(arr).toEqual(["Nombre 1:0", "Nombre 2:27","Nombre 3:-11","Nombre 4:2018"]);
			});
		it('multiplier_tableau valeur', () => {
			//given
			
						//when
            const arr = multiplie_array(I.array);
			//then

				expect(arr).toEqual(["0", "54","-22","4036"]);
			});
//filter(a=>a>0)

		it('multiplier', () => {
			//given
			const a=2;
			const b=3;
			//when
            const total= multiplier(a,b);
			//then

				expect(total).toEqual(6);
			});


		describe('func1', () => {
			it('empty entry should return empty', () => {
				expect(func1()).toEqual();
			});
			it('no empty entry should return entry param', () => {
				expect(func1(I.object)).toEqual(I.object);
			});
		});
		describe('func2', () => {
			it('should return true', () => {
				expect(func2()).toBeTruthy();
			});
		});
	});
});
