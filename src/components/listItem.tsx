import { View, Text } from '@tarojs/components'
import { listItem } from '../pages/index/fileds'

const ListItem = (props) => {
  const item:listItem = props.data

  return (
    <View>
      <Text>{item.title}</Text>:
      <Text>{item.content}</Text>
    </View>
  )
}

export default ListItem
