
import {Avatar, Divider, Tooltip} from 'antd'
import React, { useState } from "react";
import {
  GithubOutlined,
  QqOutlined,
  WechatOutlined
} from '@ant-design/icons'
import styles from '../styles/components/Author.module.scss'

const Author =()=>{
  const [concatMeList, setConcatMeList] = useState([
    {
      text: 'https://github.com/AmazingZ-sys',
      component: <GithubOutlined />
    },{
      text: '1085266067',
      component: <QqOutlined />
    },{
      text: 'lz1085266067',
      component: <WechatOutlined />
    }
  ])

  return (
    <div className={`${styles.author_div} comm_box`}>
      <div> <Avatar size={100} src="https://tva1.sinaimg.cn/large/008i3skNly1gpttiqdevxj31400u0x6p.jpg"  /></div>
      <div className={styles.author_introduction}>
        人生碌碌，竟短论长，却不道枯荣有数，得失难量。
        <Divider>社交账号</Divider>
        {concatMeList.map((item, index) => {
          return (
            <Tooltip placement="top" title={item.text} key={index}>
              <Avatar size={35} icon={item.component} className={styles.account}  />
            </Tooltip>
          )
        })}
      </div>
    </div>
  )

}

export default Author