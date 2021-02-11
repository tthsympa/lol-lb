import React from 'react'
import BlueTeamImg from '../../assets/blue-team.png'
import RedTeamImg from '../../assets/red-team.png'
import Teambox from '../../components/Teambox'
import styles from './index.module.scss'

type Props = { blueName: string; redName: string }
function Teams({ blueName, redName }: Props) {
  return (
    <div className={styles.teams}>
      <Teambox name={blueName} src={BlueTeamImg} />
      <span className={styles.vs}>vs</span>
      <Teambox name={redName} src={RedTeamImg} reversed />
    </div>
  )
}

export default React.memo(Teams)
