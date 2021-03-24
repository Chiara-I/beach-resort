import React from "react"
import Room from "./Room"

function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className='emptry-search'>
        <h3>unfortunately no rooms matched your search paramters</h3>
      </div>
    )
  }
  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {rooms.map(item => {
          return <Room key={item.id} room={item} />
        })}
      </div>
    </section>
  )
}

export default RoomList
