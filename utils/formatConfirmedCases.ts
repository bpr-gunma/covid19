type DataType = {
  attr: '総PCR検査件数'
  value: number
  children: [
    {
      attr: '陽性（県内感染者）'
      value: number
      children: [
        {
          attr: '入院中'
          value: number
        },
        {
          attr: '宿泊施設療養中'
          value: number
        },
        {
          attr: '退院退所'
          value: number
        },
        {
          attr: '入院調整中'
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
  陽性県内感染者: number
  入院中: number
  宿泊施設療養中: number
  退院退所: number
  入院調整中: number
  死亡: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    陽性県内感染者: data.children[0].value,
    入院中: data.children[0].children[0].value,
    宿泊施設療養中: data.children[0].children[1].value,
    退院退所: data.children[0].children[2].value,
    入院調整中: data.children[0].children[3].value,
    死亡: data.children[0].children[4].value,
  }
  return formattedData
}
