import React from 'react'
import Component3 from './Component3'

const Component2 = (props: { count: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined }) => {
  return (
    <div>
      <h3>Count:  {props.count}</h3>
      <Component3 count={props.count}/>
    </div>
  )
}

export default Component2