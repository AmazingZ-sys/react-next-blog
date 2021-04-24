import React from 'react'
import styles from '../styles/components/ArticleCard.module.scss'
import {
  CalendarOutlined,
  FolderAddOutlined,
  FireOutlined,
} from '@ant-design/icons';

import {Row, Col, Menu, List} from 'antd'
const ArticleCard = (props) => {
  let {item} = props
  return (
    <>
      <div className={styles.card_title}>{item.title}</div>
      <div className={styles.card_icon}>
        <span><CalendarOutlined/> 2019-06-28</span>
        <span><FolderAddOutlined/> 视频教程</span>
        <span><FireOutlined/>5498人</span>
      </div>
      <div className={styles.card_context}>{item.context}</div>
    </>
  )
}

export default ArticleCard