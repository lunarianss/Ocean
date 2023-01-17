import { Button, DropMenu } from 'Ocean';
import React, { useState } from 'react';

const Basic = () => {
  const [visible, setVisible] = useState(false);

  return (
    <DropMenu
      setVisible={setVisible}
      visible={visible}
      data={[
        { content: 'Download' },
        { content: 'Copy' },
        { content: '关闭菜单', click: () => setVisible(false) },
      ]}
      content="下拉菜单"
      as={<Button type="primary">下拉菜单</Button>}
    />
  );
};

export default Basic;
