import { useState } from 'react'
import Taro from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import { View, CoverView, ScrollView } from '@tarojs/components'
import './index.less'
import Index from '../index'
import Member from '../member/index'

const Base = () => {

  const [ current, setCurrent ] = useState(0)

  const list = [
    { title: '首页', text: 8, url: '/pages/index/index' },
    { title: '我的', url: '/pages/member/index' },
  ]

  const handleClick = async (i) => {
    setCurrent(i)
    await Taro.switchTab({
      url: list[i].url
    })
  }

  return (
    <View className='app'>
      <ScrollView className='app-content'>
        {
          current === 0 && <Index></Index>
        }
        {
          current === 1 && <Member></Member>
        }
      </ScrollView>
      <CoverView className='nav-bar'>
        <AtTabBar
          // @ts-ignore
          tabList={list}
          onClick={(i) => handleClick(i)}
          current={current}
        >
        </AtTabBar>
      </CoverView>
    </View>
  )
}

export default Base
