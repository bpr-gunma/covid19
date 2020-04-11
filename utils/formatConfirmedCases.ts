type DataType = {
  attr: '総PCR検査件数'
  value: number
  children: [
    {
      attr: '陰性'
      value: number
    },
    {
      attr: '陽性（県内感染者）'
      value: number
      children: [
        {
          attr: '退院'
          value: number
        },
        {
          attr: '入院中'
          value: number
        },
        {
          attr: '死亡'
          value: number
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  総PCR検査件数: number
  陰性: number
  陽性県内感染者: number
  退院: number
  入院中: number
  死亡: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    総PCR検査件数: data.value,
    陰性: data.children[0].value,
    陽性県内感染者: data.children[1].value,
    退院: data.children[1].children[0].value,
    入院中: data.children[1].children[1].value,
    死亡: data.children[1].children[2].value,
  }
  return formattedData
}
