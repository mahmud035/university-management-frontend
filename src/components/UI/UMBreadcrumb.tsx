import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import Link from 'next/link';

const UMBreadcrumb = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href="/">
          <HomeOutlined />
        </Link>
      ),
    },

    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link}>{item.label}</Link>
        ) : (
          <span>{item.label}</span>
        ),
      };
    }),
  ];

  return <Breadcrumb items={breadCrumbItems} />;
};

export default UMBreadcrumb;
