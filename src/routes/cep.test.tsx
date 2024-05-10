import { queryByAttribute, render, screen, fireEvent } from '@testing-library/react';
import Cep from './cep';
import user from "@testing-library/user-event"

const getById = queryByAttribute.bind(null, 'id');

test('Abre corretamente', () => {
  render(<Cep />);
  const linkElement = screen.getByText('Buscar CEP');
  expect(linkElement).toBeInTheDocument();
});

test('Busca o CEP corretamente', async () => {
  user.setup();
  const doc = render(<Cep />);
  const input = getById(doc.container, 'input-cep') as HTMLElement;
  expect(input).toBeInTheDocument();
  const botao = getById(doc.container, 'busca-cep')!;
  expect(botao).toBeInTheDocument();
  fireEvent.change(input, {target: {value:"70255090"}})
  expect(input).toHaveValue("70255090");
  await user.click(botao)
  await new Promise((r) => setTimeout(r, 2000));
    const logradouro = getById(doc.container, 'logradouro');
  expect(logradouro).toHaveTextContent("SQS 406 Bloco I");
});