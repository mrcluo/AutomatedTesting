import { useState } from "react";

export function MyButton() {
  const [disabled, setDisabled] = useState<boolean>(false)
  return <button disabled={disabled} onClick={() =>{
    setDisabled(true)
    setTimeout(() => {
      setDisabled(false)
    }, 2000)
  }}>点我</button>
}