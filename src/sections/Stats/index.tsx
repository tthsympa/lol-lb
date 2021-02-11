import React from 'react'
import styles from './index.module.scss'

import type { LolTeamStats } from '../../Frame'
import Stat from '../../components/Stat'
import cx from '../../helpers/cx'
import formatTime from '../../helpers/formatTime'
import formatGold from '../../helpers/formatGold'

import { ReactComponent as KillsSvg } from '../../assets/kills.svg'
import { ReactComponent as BlueInibSvg } from '../../assets/blue-inib.svg'
import { ReactComponent as BlueTowerSvg } from '../../assets/blue-tower.svg'
import { ReactComponent as BlueGoldSvg } from '../../assets/blue-gold.svg'
import { ReactComponent as BlueHeraldSvg } from '../../assets/blue-herald.svg'
import { ReactComponent as BlueDrakeSvg } from '../../assets/blue-drake.svg'
import { ReactComponent as BlueBaronSvg } from '../../assets/blue-baron.svg'
import { ReactComponent as RedInibSvg } from '../../assets/red-inib.svg'
import { ReactComponent as RedTowerSvg } from '../../assets/red-tower.svg'
import { ReactComponent as RedGoldSvg } from '../../assets/red-gold.svg'
import { ReactComponent as RedHeraldSvg } from '../../assets/red-herald.svg'
import { ReactComponent as RedDrakeSvg } from '../../assets/red-drake.svg'
import { ReactComponent as RedBaronSvg } from '../../assets/red-baron.svg'

type StatsProps = { blue: LolTeamStats; red: LolTeamStats; time: number }
function Stats({ blue, red, time }: StatsProps) {
  return (
    <>
      <div className={styles.statsBuilding}>
        <div className={styles.box}>
          <Stat stat={blue.inhibitors} icon={<BlueInibSvg />} />
          <Stat stat={blue.towers} icon={<BlueTowerSvg />} />
          <Stat stat={formatGold(blue.gold)} icon={<BlueGoldSvg />} />
        </div>
        <Kills blueKills={blue.kills} redKills={red.kills} />
        <div className={cx(styles.box, styles.boxReversed)}>
          <Stat stat={formatGold(red.gold)} icon={<RedGoldSvg />} reversed />
          <Stat stat={red.towers} icon={<RedTowerSvg />} reversed />
          <Stat stat={red.inhibitors} icon={<RedInibSvg />} reversed />
        </div>
      </div>

      <div className={styles.statsJungle}>
        <div className={styles.container}>
          <div>
            <Stat stat={blue.herald} icon={<BlueHeraldSvg />} />
            <Stat stat={blue.nashors} icon={<BlueBaronSvg />} />
          </div>
          <Stat stat={blue.drakes} icon={<BlueDrakeSvg />} />
        </div>
        <Timer time={time} />
        <div className={styles.containerReversed}>
          <Stat stat={red.drakes} icon={<RedDrakeSvg />} reversed />
          <div>
            <Stat stat={red.nashors} icon={<RedBaronSvg />} reversed />
            <Stat stat={red.herald} icon={<RedHeraldSvg />} reversed />
          </div>
        </div>
      </div>
    </>
  )
}
export default Stats

type KillsProps = { blueKills: number; redKills: number }
const Kills = React.memo(({ blueKills, redKills }: KillsProps) => {
  return (
    <div className={styles.kills}>
      <div>{blueKills}</div>
      <KillsSvg />
      <div>{redKills}</div>
    </div>
  )
})

type TimerProps = { time: number }
const Timer = React.memo(({ time }: TimerProps) => {
  return <div className={styles.timer}>{formatTime(time)}</div>
})
