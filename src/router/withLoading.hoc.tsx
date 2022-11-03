import React, { Suspense } from 'react'
import Loading from './Loading'

type ReturnType<T> = (props: T) => JSX.Element

export const withLoading = <T extends object>(Component: React.ComponentType<T>): ReturnType<T> => {
  return (props: T) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  )
}
