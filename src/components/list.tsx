import { View } from '@tarojs/components'
import { listItem } from '../pages/index/fileds'
import ListItem from './listItem'

const List = (props) => {
  console.log(props)
  const data:listItem[] = props.data

  return (
    <View>
      {
        data.map(d => {
          return (
            <ListItem key={d.title} data={d}></ListItem>
          )
        })
      }
    </View>
  )
}

export default List
