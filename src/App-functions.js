import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const headingText = 'Academy React News Bulletin'
  const today = new Date().toLocaleDateString()

  return (
    <div className='App'>

      <header className='App-header'>
        <h1>{headingText}</h1>
        <p>Today is {today}</p>
      </header>

      <News
        title='React is the best!'
        preamble='Lorem ipsum dolor...'
        date={today}
      />

      <News title='News with children' date='2020-03-01'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Vestibulum pretium sapien sit amet dui feugiat, nec tempus leo
          aliquam.
        </p>
        <p>Donec mattis lorem nec ante maximus, nec suscipit lacus rutrum.</p>
      </News>


    </div>
  )
}

const News = (props) => {

  const [showChildren, setShowChildren] = useState(false);
  const [counter, setCounter] = useState(0)
  let childrenElement = null;

  const titleClicked = () => {
    setShowChildren(!showChildren)

    if (!showChildren) {
      setCounter(counter + 1)
    }
  }
  childrenElement = showChildren ? props.children : null;

  return (
    <div className="News">
      <h2 onClick={titleClicked}>{props.title}</h2>
      <p>{props.date} <br />
        <strong> Views: {counter}</strong></p>
      <div className="NewsChildren">
        {childrenElement}
      </div>
    </div>
  )
}



// ---------------------------------
// CHECKPOINT
// ---------------------------------

export default App