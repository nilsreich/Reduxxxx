import React, { Fragment, useState } from 'react';
import type { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, random } from './counterSlice';
import { Button } from './components/Button';

export const Counter = () => {
  const state = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Button label="Increase" action={() => dispatch(increase())} />
      <Button label="Decrease" action={() => dispatch(decrease())} />
      <Button label="Random" action={() => dispatch(random())} />
      {state.count}
    </Fragment>
  );
};
