import React from 'react'
import { Layout, Input, Divider, ConfigProvider } from 'antd';
const { Header } = Layout;


const NavBar = () => {
  const { Search } = Input;

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div>
      <Layout style={{ width: '100%', height: '100px', backgroundColor: 'white'}}>
        <Header
          style={{
            padding: 0,
            background: 'white',
            height: '100px',
          }}
        >
        <img
        src={`/img/logo.png`}
        ait = 'logo'
        style={{
          width: '300px', 
          height: '100px',
          float: 'left',
          clear: 'left'
      }}
        />
      <div style={{ position : 'relative', 
                  width: '100%',
                  textAlign: 'center', 
                  top: '50px',
                  right: '130px'  
                  }}>
     <ConfigProvider
      theme={{
        token: {
          colorPrimaryHover: ' #fdd835'
        },
      }}
    >
        <Search
          placeholder="상품을 입력해주세요"
          onSearch={onSearch}
          style={{
            width: '300px',
          }}
        />
    </ConfigProvider>
      </div>
        </Header>
      </Layout>
      <Divider orientation="left"></Divider>
    </div>
  )
}

export default NavBar
