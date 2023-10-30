import { Layout, Menu } from 'antd';
import React from 'react';
import { AiOutlineHome, AiOutlineBars, AiOutlineUser } from "react-icons/ai";;

const SideBar = () => {
  function getItem(label, key, icon) {
    return {
      key,
      icon,
      label,
    };
  }

  const items = [
    getItem(
      <a href="/" >Home</a>,
      'Home_link',
      <AiOutlineHome />,
    ),
    getItem(
      <a href="/" >Category</a>,
      'C_link',
      <AiOutlineBars />,
    ),
    getItem(
      <a href="/login" >Log in</a>,
      'Login_link',
      <AiOutlineUser />,
    ),

  ]
  
  return (
      <Menu
      style={{
        width: '160px',
      }}
      items={items}
      />
  );
};
export default SideBar;