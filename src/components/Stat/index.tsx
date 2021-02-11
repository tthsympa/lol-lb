import React from 'react'
import cx from '../../helpers/cx'
import styles from './index.module.scss'

type Props = {
  stat: number | string
  icon: React.ReactNode
  reversed?: boolean
}
function Stat({ stat = 0, icon = () => null, reversed = false }: Props) {
  return (
    <span className={styles.container}>
      {reversed && icon}
      <div className={cx(styles.stat, reversed && styles.statReversed)}>
        {stat}
      </div>
      {!reversed && icon}
    </span>
  )
}

export default React.memo(Stat)
