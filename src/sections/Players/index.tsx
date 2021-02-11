import React from 'react'

import styles from './index.module.scss'

import type { LolTeamPlayer } from '../../Frame'
import Stat from '../../components/Stat'
import cx from '../../helpers/cx'
import { ReactComponent as BlueMinion } from '../../assets/blue-minion.svg'
import { ReactComponent as RedMinion } from '../../assets/red-minion.svg'

type AllPlayers = {
  adc: LolTeamPlayer
  top: LolTeamPlayer
  mid: LolTeamPlayer
  jun: LolTeamPlayer
  sup: LolTeamPlayer
}

type Props = {
  bluePlayers: AllPlayers
  redPlayers: AllPlayers
}
function Players({ bluePlayers, redPlayers }: Props) {
  return (
    <div className={styles.players}>
      <h2>Players</h2>

      <div className={styles.columns}>
        <div className={cx(styles.column, styles.border)}>
          {Object.values(bluePlayers).map(player => (
            <div key={player.name}>
              <div>{player.level}</div>
              <img
                src={player.champion.image_url || undefined}
                alt={player.champion.name}
              />
              <div>
                {player.kills}/{player.deaths}/{player.assists}
              </div>
              <Stat stat={player.cs} icon={<BlueMinion />} reversed />
            </div>
          ))}
        </div>
        <div className={cx(styles.column, styles.ml16)}>
          {Object.values(redPlayers).map(player => (
            <div key={player.name}>
              <div>{player.level}</div>
              <img
                src={player.champion.image_url || undefined}
                alt={player.champion.name}
              />
              <div>
                {player.kills}/{player.deaths}/{player.assists}
              </div>
              <Stat stat={player.cs} icon={<RedMinion />} reversed />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default React.memo(Players)
