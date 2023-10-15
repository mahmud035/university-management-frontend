'use client';

import { Layout } from 'antd';
import UMBreadcrumb from './UMBreadcrumb';

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = 'admin';

  return (
    <Content
      style={{
        minHeight: '100vh',
        color: 'black',
      }}
    >
      <div
        style={{
          padding: '10px',
        }}
      >
        <UMBreadcrumb
          items={[
            {
              label: `${base}`,
              link: `/${base}`,
            },
            {
              label: `student`,
              link: `/${base}/student`,
            },
          ]}
        />
        {children}
      </div>
    </Content>
  );
};

export default Contents;
