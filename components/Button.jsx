import React from 'react'

export const Button = ({onClick, text}) => {
  return (
    <button className="cursor-pointer" onClick={onClick}>{text}</button>
  )
}
