import React from 'react'
import styles from '../styles/components/Header.module.scss'
import {
  HomeOutlined,
  YoutubeOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons';

import {Row,Col, Menu} from 'antd'
const Header = () => (
  <div className={styles.header}>
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className={styles.header_logo}>AmazingZ</span>
        <span className={styles.header_text}>人生碌碌，竟短论长。</span>
      </Col>

      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu  mode="horizontal">
          <Menu.Item key="home">
            <HomeOutlined />
            首页
          </Menu.Item>
          <Menu.Item key="video">
            <YoutubeOutlined />
            视频
          </Menu.Item>
          <Menu.Item key="life">
            <CustomerServiceOutlined />
            生活
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default Header