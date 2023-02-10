import { FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import { GlobalThemeProvider, Input, InputGroup } from 'Ocean';
import React from 'react';
import { InputLeftIcon, InputRightIcon } from '../InputIcon';

const Basic = () => {
  return (
    <GlobalThemeProvider>
      <InputGroup>
        <InputLeftIcon fontSize={'lg'}>
          <GithubOutlined />
        </InputLeftIcon>
        <Input placeholder={'A Input'} />
        <InputRightIcon fontSize={'lg'}>
          <FacebookOutlined />
        </InputRightIcon>
      </InputGroup>

      <InputGroup my={3}>
        <InputLeftIcon fontSize={'lg'}>
          <GithubOutlined />
        </InputLeftIcon>
        <Input placeholder={'A Input'} />
      </InputGroup>

      <InputGroup>
        <Input placeholder={'A Input'} />
        <InputRightIcon fontSize={'lg'}>
          <FacebookOutlined />
        </InputRightIcon>
      </InputGroup>
    </GlobalThemeProvider>
  );
};

export default Basic;
