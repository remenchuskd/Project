import Button from './Button';
import React from 'react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: { control: 'radio', options: ['blue', 'darkblue', 'green'] },
    text: { control: 'text' },
    outlined: { control: 'boolean' },
    small: { control: 'boolean' },
  },
};

export const Default = ({ text, outlined, color }) => {
  return (
    <Button
      text={text || 'текст'}
      outlined={outlined || false}
      color={color || 'blue'}
    />
  );
};

export const Blue = ({ text, outlined }) => {
  return (
    <Button
      text={text || 'текст'}
      outlined={outlined || false}
      color={'blue'}
    />
  );
};

export const Green = ({ text, outlined }) => {
  return (
    <Button
      text={text || 'текст'}
      outlined={outlined || false}
      color={'green'}
    />
  );
};

export const DarkBlue = ({ text, outlined }) => {
  return (
    <Button
      text={text || 'текст'}
      outlined={outlined || false}
      color={'darkblue'}
    />
  );
};

export const Small = ({ text, small }) => {
  return (
    <Button
      text={text || 'текст'}
      color={color || 'blue'}
    />
  );
};
