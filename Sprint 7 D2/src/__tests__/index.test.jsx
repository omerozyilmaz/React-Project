import { beforeEach, expect, test } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.jsx';
import { server } from '../mocks/server';
import 'mutationobserver-shim';
import fs from 'fs';
import path from 'path';

const app = fs
  .readFileSync(path.resolve(__dirname, '../App.jsx'), 'utf8')
  .replaceAll(/(?:\r\n|\r|\n| )/g, '');

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  document.body.innerHTML = '';
});
beforeEach(() => {
  render(<App />);
});

test("App jsx'e Reactstrap için bootstrap css'i eklenmiş", async () => {
  expect(app.includes('bootstrap/dist/css/bootstrap.min.css')).toBe(true);
});

test("App jsx'de kullanıcılar için state tanımlanmış", async () => {
  expect(app.includes('=useState(')).toBe(true);
});

test("App jsx'de kullanıcılar için state'de başlangıç değeri boş array yapılmış", async () => {
  expect(app.includes('=useState([])')).toBe(true);
});

test("App.jsx'de SideBar componentine prop olarak kullanıcılar gönderiliyor.", async () => {
  expect(app.includes('<SideBar/>')).not.toBe(true);
});

test("App.jsx'de Main componentine kayıtlı kullanıcıyı kullanıcılar listesine eklemek için gerekli prop  gönderiliyor.", async () => {
  expect(app.includes('<Main/>')).not.toBe(true);
});

test('Form doldurulunca kullanıcı kayıt oluyor', async () => {
  const user = userEvent.setup();
  const email = screen.getByPlaceholderText(/Çalışanın tam adı ve soyadı/i);
  await user.type(email, 'Emre Şahiner');
  const button = screen.getByText('Kaydet');
  await user.click(button);
  expect(await screen.findAllByText(/Emre Şahiner/i)).toHaveLength(1);
});
