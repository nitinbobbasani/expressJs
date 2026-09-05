import React from 'react'

const Component3 = (props: { count: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined }) => {
  return (
    <div className='comp3'>
      <h2>This is component 3</h2>
      <p>Counter Value: {props.count}</p>
    </div>
  )
}

export default Component3