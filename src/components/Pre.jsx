import React from 'react'

export const Pre = () => {
  return (
    <div>
        <form>
            <input type="checkbox" checked={false}/>
            <label>Can you attend 90% of the classes</label>

            <input type="checkbox" checked = {false}/>
            <label>Do You have a laptop ?</label>

            <input type="submit" value="Register"/>
        </form>
    </div>
  )
}
