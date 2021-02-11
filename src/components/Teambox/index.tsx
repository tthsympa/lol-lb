import React from 'react'
import cx from '../../helpers/cx'
import styles from './index.module.scss'

type Props = { src: string; name: string; reversed?: boolean }

function TeamBox({ src = '', name = '', reversed = false }: Props) {
  return (
    <div className={cx(styles.box, reversed && styles.boxReversed)}>
      <div className={cx(styles.name, reversed && styles.nameReversed)}>
        {name}
      </div>
      <div className={cx(styles.image, reversed && styles.imageReversed)}>
        <img src={src} alt={`${name}-team`} />
      </div>
    </div>
  )
}

export default TeamBox
