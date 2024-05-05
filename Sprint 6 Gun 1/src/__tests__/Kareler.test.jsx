import { beforeEach, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Kareler from '../components/Kareler';

let dom;
let document;
beforeEach(() => {
  dom = render(<Kareler />);
  document = dom.container;
});

test('Kareler ekranda doğru şekilde oluşmuş', () => {
  expect(screen.getByTestId(/sqA/)).toBeDefined();
  expect(screen.getByTestId(/sqB/)).toBeDefined();
  expect(screen.getByTestId(/sqC/)).toBeDefined();
  expect(screen.getByTestId(/sqD/)).toBeDefined();
});

test('Sayfa ilk yüklendiğinde seçili bir kare yok', () => {
  expect(document.querySelectorAll('.active')).toHaveLength(0);
});

test("Tıklanan kareye active classı ekleniyor.", () => {
  fireEvent.click(screen.getByTestId('sqA'));
  expect(
    document.querySelector('[data-testid=sqA]').classList.contains('active')
  ).toBe(true);
  fireEvent.click(screen.getByTestId('sqB'));
  expect(
    document.querySelector('[data-testid=sqB]').classList.contains('active')
  ).toBe(true);
  fireEvent.click(screen.getByTestId('sqC'));
  expect(
    document.querySelector('[data-testid=sqC]').classList.contains('active')
  ).toBe(true);
  fireEvent.click(screen.getByTestId('sqD'));
  expect(
    document.querySelector('[data-testid=sqD]').classList.contains('active')
  ).toBe(true);
});

test("Bir kareye 2 kere tıklanınca active classı eklenip kaldırılıyor", () => {
  fireEvent.click(screen.getByTestId('sqA'));
  expect(
    document.querySelector('[data-testid=sqA]').classList.contains('active')
  ).toBe(true);
  fireEvent.click(screen.getByTestId('sqA'));
  expect(
    document.querySelector('[data-testid=sqA]').classList.contains('active')
  ).toBe(false);
});

test("Bir kareye tıklanınca diğer karalerdeki active classı kaldırılıyor", () => {
  fireEvent.click(screen.getByTestId('sqA'));
  expect(document.querySelectorAll('.active')).toHaveLength(1);
  fireEvent.click(screen.getByTestId('sqB'));
  expect(document.querySelectorAll('.active')).toHaveLength(1);
  fireEvent.click(screen.getByTestId('sqC'));
  expect(document.querySelectorAll('.active')).toHaveLength(1);
  fireEvent.click(screen.getByTestId('sqD'));
  expect(document.querySelectorAll('.active')).toHaveLength(1);
});