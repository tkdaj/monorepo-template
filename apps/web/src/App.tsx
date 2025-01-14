import { useState } from 'react';
import { Button } from '@monorepo-template/atoms/Button';
import { DesignSystemProvider } from './theme';

const themeOptions = ['light', 'dark'] as const;

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <DesignSystemProvider theme={themeOptions[counter % 2]}>
      <Button onClick={() => setCounter((prev) => prev + 1)}>Toggle Theme</Button>
    </DesignSystemProvider>
  );
}

export default App;
