import { useState} from 'react'
import Section from 'components/Section/Section.jsx'

const App = () => {

  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const goodOnClick = () => {
    setGood(c => c + 1)
  }

  const neutralOnClick = () => {
    setNeutral(c => c + 1)
  }

  const badOnClick = () => {
    setBad(c => c + 1)
  }

  const countTotalFeedback = ( good, neutral, bad ) => {
    return bad + neutral + good

  }

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    let positiveFeedbackPercentage = good/(good + neutral + bad)*100
        
    if (positiveFeedbackPercentage >= 0) {
      return Math.round(positiveFeedbackPercentage)
    }
    
    return 0
  }
  

    return (
      <>
        <Section
        good={good}
        neutral={neutral}
        bad={bad}
        goodOnClick={goodOnClick}
        neutralOnClick={neutralOnClick}
        badOnClick={badOnClick}
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}/>
      </>)

  
 
  
};


export default App