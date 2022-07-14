import { useEffect, useState } from 'react'
// import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import List from './components/list'
import './index.less'
import dataJson from './data.json'
import { listItem } from './fileds'

export default function () {
  const [ data, setData ] = useState<listItem[]>([])

  useEffect(() => {
    // Taro.request({
    //   url: '../data.json',
    //   success: res => {
    //     console.log(res)
    //   }
    // })
    const arr:listItem[] = dataJson
    setData(arr)
  }, [])

  return (
    <View>
      <List data={data}></List>
    </View>
  )
}
