import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import { Navigate } from 'react-router-dom'

export interface IindexProps {}

const index: FC<IindexProps> = ({}) => {
  return (
    <div>
      <input type="text" value={'email'} />
      <input type="text" value={'password'} />
      <button>CLICK ME TO LOGIN</button>
    </div>
  )
}

export default index
