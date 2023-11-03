import React, { PropsWithChildren } from 'react';

export function Button(props: PropsWithChildren) {
  return <button className={`text-red-1-500`}>{props.children}</button>;
}

export default Button;
