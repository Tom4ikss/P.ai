import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.scss"
import TextBlock from './TextBlocks/TextBlock';
import Main from './Main/Main';
import Block_svg_1 from './images/text_blocks/1.svg';
import Block_svg_2 from './images/text_blocks/2.svg';
import Block_svg_3 from './images/text_blocks/3.svg';
import Quote from './Quote/Quote';
import Footer from './Footer/Footer';
import Scheme from './Scheme/Scheme';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main /> 
    <TextBlock title = "Predict every customer’s future." subtitle = "Accurately predict short and long-term customer outcomes and take action with forward-looking data." svg = {Block_svg_1}/>
    <TextBlock title = "Determine how predictive audiences get built." subtitle = "Use a combination of predictions to build your predictive audiences most suited to the task at hand; acquiring high-value customers or driving repeat customer conversions." mod = "bg-grey" svg = {Block_svg_2}/>
    <TextBlock title = "Activate your predictive audiences anywhere." subtitle = "Sync to any marketing channel for targeting, or run multi-cell holdout experiments to prove lift." svg = {Block_svg_3}/>
    <Scheme/>
    <Quote/>
    <Footer/>
  </React.StrictMode>,
)
