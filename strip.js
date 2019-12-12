export default class Strip {
  unwanted($items) {
    this.unwantedItems = $items

    return this
  }
  from($list) {
    // console.log(this.unwantedItems)
    return $list.filter(item => !this.unwantedItems.includes(item))
  }
}
