import { BrowserRouter } from 'react-router-dom';

import { EnvironmentProvider } from './shared/providers/environment';

export const App = () => {
  return (
    <BrowserRouter>
      <EnvironmentProvider />
    </BrowserRouter>
  );
};
