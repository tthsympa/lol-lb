import React from 'react'
import { Chart } from 'react-google-charts'
import styles from './index.module.scss'

import formatTime from '../../helpers/formatTime'

type Props = { blueGold: number; redGold: number; time: number }
function Graph({ blueGold, redGold, time }: Props) {
  const [series, setSeries] = React.useState<(string | number)[][]>([
    ['x', 'blue', 'red'],
    ['00:00', 2500, 2500],
  ])

  React.useEffect(() => {
    const isNewValuesDifferent: boolean =
      blueGold !== series[series.length - 1][1] &&
      redGold !== series[series.length - 1][2]

    if (isNewValuesDifferent) {
      setSeries(series => [...series, [formatTime(time), blueGold, redGold]])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blueGold, redGold, time])

  return (
    <div className={styles.graph}>
      <h2>Gold</h2>

      <Chart
        height="400px"
        width="100%"
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={series}
        options={{
          chartArea: {
            width: '85%',
            height: '85%',
            right: 0,
          },
          vAxis: {
            minValue: 2500,
          },
          colors: ['#5580ED', '#ED5565'],
          legend: { position: 'none' },
        }}
      />
    </div>
  )
}

export default React.memo(Graph)
