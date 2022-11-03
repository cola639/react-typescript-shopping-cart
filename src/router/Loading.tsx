import { FC, useState, useEffect, useCallback, useMemo } from 'react'

export interface ILoadingProps {}

const Loading: FC<ILoadingProps> = ({}) => {
  useEffect(() => {}, [])
  useCallback(() => {}, [])
  useMemo(() => {}, [])

  return <div>Loading</div>
}

export default Loading
