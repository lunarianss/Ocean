import { Button, GlobalThemeProvider, ocean } from 'Ocean';
import React from 'react';

const BasicButton = () => {
  return (
    <GlobalThemeProvider>
      <ocean.div display="flex">
        <Button type="text">Button</Button>
        <Button type="outline" marginX={5}>
          Button
        </Button>
        <Button type="primary" marginX={5}>
          Button
        </Button>
        <Button type="gradual" marginX={5}>
          Button
        </Button>
        <Button type="danger" marginX={5}>
          Button
        </Button>
      </ocean.div>
    </GlobalThemeProvider>
  );
};

export default BasicButton;
