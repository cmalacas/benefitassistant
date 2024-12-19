import React, { useState, useRef, useEffect } from 'react'

const  Question = ({ questions, play, audio }) => {
  return (
    <div>
      {
        questions.map( (q, index ) => {

          return <Wait key={ index } q={ q }  play={ play } audio={ audio } />

        })
      }
    </div>
  )
}

const Wait = ({q, play, audio}) => {

  const [waiting, setWwaiting] = useState(1);

  const messageRef = useRef( null );

  useEffect(() => {

    setTimeout(() => {

      setWwaiting(0);

      messageRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

      
    }, q.wait)


  }, [waiting, q])


  return (
    <div>
      {
        waiting === 1 ?

        ''

        : 

        <div ref={messageRef}>

        <Typing q={ q } play={ play } audio={ audio } />

        </div>
      }
    </div>
  )


}

const Typing = ({q, play, audio}) => {

  const [loaded, setLoading] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(1);

      if (play) {

        audio.play();

      }

    }, q.delay)
  }, [q])

  return (

    <div>

      {
        loaded === 0 ?

          <div className="chat-bubble p-4 bg-gray-200 rounded-md mt-2 ml-3">
            <div className="typing p-4 flex">
              <div className="dot bg-gray-500 h-[10px] w-[10px] rounded-full ml-0"></div>
              <div className="dot bg-gray-500 h-[10px] w-[10px] rounded-full ml-0"></div>
              <div className="dot bg-gray-500 h-[10px] w-[10px] rounded-full ml-0"></div>
            </div>
          </div>

        :

          <div className="w-5/6">
            <div className="mt-2 ml-3 bg-gray-200 p-3 rounded-lg text-gray-800 shadow-sm w-fit">
              { q.text }
            </div>
          </div>


      }

    </div>

  )

}

export default Question