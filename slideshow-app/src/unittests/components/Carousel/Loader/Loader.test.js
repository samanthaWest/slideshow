import React from 'react'
import Loader from '../../../../components/Carousel/Loader/Loader';
import { render, screen } from '@testing-library/react';

test('renders current image in index', () => {
  render(<Loader />);
  const loader = screen.getAllByTestId('loader');
  expect(loader.length).toBe(1);
});