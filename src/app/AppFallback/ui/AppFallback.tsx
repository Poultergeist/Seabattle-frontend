import { Route } from 'react-router-dom';

export const AppFallback = () => {
  return (
    <Route path="*">
      <h1>{'I think that you are not supposed to be here'}</h1>
    </Route>
  );
};
