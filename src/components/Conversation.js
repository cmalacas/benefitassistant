import React, { useState, useMemo }from 'react'

import { agentImg, profile } from '../assets/images';

import { notification } from '../assets/sound';

import Question from './Question'

const Conversation = ({ agent })  => {

  const Agent = () => {

    return (

      <img alt="Agent" src={ agentImg } className="w-8 h-8 rounded-full" />

    )

  }

  const UserProfile = ( { answer } ) => {

    return (
      <div className="flex items-start justify-end mt-2">
        <div className="ml-3 bg-blue-500 text-white p-3 rounded-lg shadow-sm w-fit">{ answer }</div>
        <img alt="Profile" className="w-8 h-8 rounded-full ml-3" src={ profile } />        
      </div>
    )

  } 

  const _questions1 = [
    {
      text: 'Hi 👋',
      wait: 1000,
      delay: 1000
    },
    {
      text: `I'm ${agent} from Orla Health.`,
      wait: 2000,
      delay: 1000
    },
    {
      text: "Want to find out if you're eligible for exclusive health benefits or assistance? Tap Yes!",
      wait: 3000,
      delay: 1000
    },
    {
      text: <button onClick={() => { setAnswer1('Yes'); setPlay(true); }} className="text-white font-bold bg-blue-500 rounded-full py-3 px-12">Yes</button>,
      wait: 4000,
      delay: 1000
    }
  ];

  const _questions2 = [
    {
      text: 'Great! Let me ask you a quick question.',
      wait: 1000,
      delay: 1000
    },
    {
      text: '1. Are you currently on Medicare?',
      wait: 2000,
      delay: 1000
    },
    {
      text: <button onClick={() => setAnswer2('Yes')} className="text-white font-bold bg-blue-500 rounded-full py-3 px-12">Yes</button>,
      wait: 3000,
      delay: 1000
    },
    {
      text: <button onClick={() => setAnswer2('No')} className="text-white font-bold bg-blue-500 rounded-full py-3 px-12">No</button>,
      wait: 4000,
      delay: 1000
    }
  ];

  const _questions3 = [
    {
      text: '2. In addition to your Medicare plan, do you also have a UnitedHealthcare, Humana, Cigna, Aetna, or Kaiser plan?',
      wait: 1000,
      delay: 1000
    },
    {
      text: <button onClick={() => setAnswer3('Yes I Do')} className="text-white font-bold bg-blue-500 rounded-full py-3 px-12">Yes I Do</button>,
      wait: 2000,
      delay: 1000
    },
    {
      text: <button onClick={() => setAnswer3('No I Do Not')} className="text-white font-bold bg-blue-500 rounded-full py-3 px-12">No I Do Not</button>,
      wait: 3000,
      delay: 1000
    }
  ];

  const congratulation1 = [
    {
      text: 'Congratulations! 🎁',
      wait: 1000,
      delay: 1000
    },
    {
      text: 'You are approved for a $5,000 health spending subsidy that you can use on anything you want!',
      wait: 2000,
      delay: 1000
    },
    {
      text: 'To claim your subsidy, tap the button below to CALL NOW. It only takes 2 minutes to finalize.',
      wait: 3000,
      delay: 1000
    },
    {
      text: <a href="tel:18554900712" className="text-white font-bold bg-blue-500 rounded-full py-3 px-3">+1 855-490-0712</a>,
      wait: 4000,
      delay: 1000
    }
  ];

  const congratulation2 = [
    {
      text: 'Congratulations! 🎁',
      wait: 1000,
      delay: 1000
    },
    {
      text: 'You are prequalified for a Medicare Assistance Plan with up to $2,000 in grocery benefits! You can use it for groceries, prescriptions, and more.',
      wait: 2000,
      delay: 1000
    },
    {
      text: `Tap the button below to CALL NOW secure your benefits today.`,
      wait: 3000,
      delay: 1000
    },
    {
      text: <a href="tel:18883930390" className="text-white font-bold bg-blue-500 rounded-full py-3 px-3 block">+1 888-393-0390</a>,
      wait: 4000,
      delay: 1000
    }
  ];

  const congratulation3 = [
    {
      text: 'Congratulations! 🎁',
      wait: 1000,
      delay: 1000
    },
    {
      text: 'You’re prequalified to receive a No-Cost DNA Genetic Test Kit! Confirm your shipping info over the phone to receive your test kit.',
      wait: 2000,
      delay: 1000
    },
    {
      text: 'Tap the button below to CALL NOW and finalize your order. It only takes 2 minutes!',
      waith: 3000,
      delay: 1000
    },    
    {
      text: <a href="tel:18889650711" className="text-white font-bold bg-blue-500 rounded-full py-3 px-3 block">+1 888-965-0711</a>,
      wait: 4000,
      delay: 1000
    },
    {
      text: 'Or, schedule an appointment to speak with our representative at your earliest convenience.',
      wait: 5000,
      delay: 1000
    },
    {
      text: <a rel="noreferrer" target="_blank" className="text-white font-bold bg-blue-500 rounded-full py-3 px-6 block"  href="https://api.leadconnectorhq.com/widget/booking/NcPaWSOyaeqj6ygIveEN">Click Here</a>,
      wait: 5000,
      delay: 1000
    }
  ];

  const congratulation4 = [
    {
      text: '🎉 Congratulations! 🎁',
      wait: 1000,
      delay: 1000
    },
    {
      text: "You're prequalified to receive a No-Cost DNA Genetic Test Kit! Confirm your shipping info over the phone to receive your test kit.",
      wait: 2000,
      delay: 1000
    },
    {
      text: 'Tap the button below to CALL NOW and finalize your order. It only takes 2 minutes!',
      wait: 3000,
      delay: 1000
    },
    {
      text: <button className="text-white font-bold bg-blue-500 rounded-lg py-3 px-2">+1 888-965-0711</button>,
      wait: 4000,
      delay: 1000
    },
    {
      text: 'Or, schedule an appointment to speak with our representative at your earliest convenience.',
      wait: 5000,
      delay: 1000
    },
    {
      text: <a rel="noreferrer" target="_blank" className="text-white font-bold bg-blue-500 rounded-full py-3 px-6"  href="https://api.leadconnectorhq.com/widget/booking/NcPaWSOyaeqj6ygIveEN">Click Here</a>,
      wait: 5000,
      delay: 1000
    }
  ]

  const audio = new Audio( notification ) ;

  const [play, setPlay] = useState( false );

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  const [questions1, setQuestion1] = useState(_questions1); 
  const [questions2, setQuestion2] = useState(_questions2);
  const [questions3, setQuestion3] = useState(_questions3);

  useMemo(() => {

    if (answer1 === 'Yes') {

      setQuestion1([
        {
          text: 'Hi 👋',
          wait: 1000,
          delay: 1000
        },
        {
          text: `I'm ${agent} from Health Benefits Support.`,
          wait: 2000,
          delay: 1000
        },
        {
          text: "Want to find out if you're eligible for exclusive health benefits or assistance? Tap Yes!",
          wait: 3000,
          delay: 1000
        },
      ])
    }

    if (answer2 === 'Yes' || answer2 === 'No') {

      setQuestion2([
        {
          text: 'Great! Let me ask you a quick question.',
          wait: 1000,
          delay: 1000
        },
        {
          text: '1. Are you currently on Medicare?',
          wait: 2000,
          delay: 1000
        },
      ])
    }

    if (answer3 === 'Yes I Do' || answer3 === 'No I Do Not') {

      setQuestion3([
        {
          text: '2. In addition to your Medicare plan, do you also have a UnitedHealthcare, Humana, Cigna, Aetna, or Kaiser plan?',
          wait: 1000,
          delay: 1000
        },
      ])
    }    

    if (play) {

      audio.play()

    }

  }, [answer1, answer2, answer3, agent, play]); 


  return (
    <div className="flex">
      <div className="items-end flex agent"><Agent /></div>

      <div>
        <Question questions={ questions1 } agent={ agent } play={ play } audio={ audio } />
        {
          answer1 === 'Yes' ?

            <div>
              <UserProfile answer={ answer1 } />   
              <Question questions={ questions2 } />
            </div>


          : ''
        }

        {
          answer2 === 'Yes'  ?

            <div>
              <UserProfile answer={ answer2 } />
              <Question questions={ questions3 } />
            </div>

            : answer2 === 'No' ?

              <div>
                <UserProfile answer={ answer2} />
                <Question questions={ congratulation1 } />
              </div>


            : ''

        }

        {
          answer3 === 'Yes I Do'  ?

            <div>
              <UserProfile answer={ answer3 } />
              <Question questions={ congratulation2 } />
            </div>

            : answer3 === 'No I Do Not' ?

              <div>
                <UserProfile answer={ answer3} />
                <Question questions={ congratulation3 } />
              </div>

            : ''
        }
      </div>
      
    </div>
  )
}

export default Conversation