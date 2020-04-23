type DataType = {
  attr: '総PCR検査件数'
  value: number
  children: [
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
          attr: '入院調整中'
          value: number
        },
        {
          attr: '県外病院へ入院'
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
  感染症病床から退院: number
  入院中: number
  入院調整中: number
  県外病院へ入院: number
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
    感染症病床から退院: data.children[0].children[0].value,
    入院中: data.children[0].children[1].value,
    入院調整中: data.children[0].children[2].value,
    県外病院へ入院: data.children[0].children[3].value,
    死亡: data.children[0].children[4].value,
  }
  return formattedData
}
