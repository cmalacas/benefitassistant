import React from 'react'

function Warning() {

  const today = new Date();

  const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div>
      <p className="font-serif text-md sm:text-lg font-bold mt-2"><span className="font-bold text-red-500">Warning:</span> Enrollment Closes on { day[today.getDay()]}, { today.getMonth() + 1}/{ today.getDate() }/{ today.getFullYear() } at Midnight.
      </p>
    </div>
  )
}

export default Warning