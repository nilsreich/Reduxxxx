import React from 'react';

type ButtonState = {
  label: string;
  action: () => void;
};

export const Button = ({ label, action }: ButtonState) => {
  return <button onClick={action}>{label}</button>;
};
