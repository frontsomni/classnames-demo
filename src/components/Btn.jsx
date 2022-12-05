import React, { useMemo, useRef } from 'react'
import classNames from 'classnames'

const Btn = () => {
  const cls = useMemo(() => classNames(
    // class 字符串类型
    'btn',
    // class 数组类型
    ['btn-primary'],
    // class 对象类型
    {
    'text-warning': true
    },
    'btn',
    // 以下 class 无效
    0,
    false,
    undefined,
    null,
    ''
  ), [])

  console.log(`${cls}`)

  return(
    <button className={cls}>{cls}</button>
  )
}

export default Btn