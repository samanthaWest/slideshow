import React from 'react'
import Arrow from '../../../../components/Carousel/Arrow/Arrow';
import { render, screen } from '@testing-library/react';

test('renders left arrow icon', () => {
  render(<Arrow direction='left' />);
  const arrow = screen.getByTestId('arrow-icon');
  expect(arrow.className).toBe('arrow alternate circle left big icon');
});

test('renders right arrow icon', () => {
    render(<Arrow direction='right' />);
    const arrow = screen.getByTestId('arrow-icon');
    expect(arrow.className).toBe('arrow alternate circle right big icon');
  });

test('renders disabled grey arrow', () => {
  render(<Arrow direction='left' disabled={true} />);
  const arrow = screen.getByTestId('arrow-icon');
  const color = arrow.style._values.color;
  expect(color).toEqual('grey');
});

test('renders black arrow', () => {
  render(<Arrow direction='right' disabled={false} />);
  const arrow = screen.getByTestId('arrow-icon');
  const color = arrow.style._values.color;
  expect(color).toEqual('black');
});