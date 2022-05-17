import React from 'react'
import Image from '../../../../components/Carousel/Image/Image';
import { render, screen } from '@testing-library/react';

const samplePhotos =  [
    'https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg',
    'https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg',
    'https://founded.media/hiring/photos/sharks/11261840124_dc9ac72bbe_b.jpg'
]

test('renders current image in index', () => {
  render(<Image photos={samplePhotos} />);
  const imageList = screen.getAllByTestId('image');
  expect(imageList.length).toBe(1);
});