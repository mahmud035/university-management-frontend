import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link';

export const SidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps['items'] = [
    {
      label: 'Profile',
      key: 'profile',
      icon: <UserOutlined />,
      children: [
        {
          label: 'Profile Account ',
          key: 'profile',
        },
        {
          label: 'Change Password',
          key: 'change-password',
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps['items'] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      key: 'manage-students',
    },
  ];

  if (role === 'student') {
    return defaultSidebarItems;
  } else if (role === 'admin') {
    return commonAdminSidebarItems;
  }
};
