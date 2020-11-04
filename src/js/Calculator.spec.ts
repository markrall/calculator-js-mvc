import { isExportDeclaration } from 'typescript';
import model from './Calculator';

test('Should return 1', () => {
  expect(model.calculate(1, 'add')).toBe(1);
});

test('Should return 3', () => {
  expect(model.calculate(2, 'multiply')).toBe(3);
});

test('Should return 9', () => {
  expect(model.calculate(3, 'divide')).toBe(9);
});

test('Should return 3', () => {
  expect(model.calculate(3, 'add')).toBe(3);
});

test('Should return 10', () => {
  expect(model.calculate(7, 'subtract')).toBe(10);
});

test('Should return 5', () => {
  expect(model.calculate(5, 'add')).toBe(5);
});