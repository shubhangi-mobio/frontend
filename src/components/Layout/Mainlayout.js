import React from 'react'
import { Layout } from 'antd'
import '../../Assets/Styles/Mainlayout.css'

const {  Content, Footer } = Layout;
const Mainlayout = (props) => {
  return (
    <>
        <Layout hasSider
        style={{
        minHeight: '100vh',
        }}
        >
            <Layout className="site-layout">
                
          <Content
          style={{
            margin: '0 ',
            flexShrink: '0',
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          /> */}
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {props.children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Gyanbhandar ©2022
        </Footer>
            </Layout>
        </Layout>
    </>
  )
}

export default Mainlayout
