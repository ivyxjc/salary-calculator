import {NextPage} from 'next'
import React from 'react'

export type IvyPage<P = {}> = NextPage<P> & {
  layout?: React.FC<P>
  isMDXComponent?: Boolean
}
