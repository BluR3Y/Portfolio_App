import './App.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'

function ScrollBarSectionItem() {
  return(
    <div className='scrollBarSectionItem'>
      <FontAwesomeIcon icon={solid('user-secret')} />
      <FontAwesomeIcon icon={regular('coffee')} />
      <FontAwesomeIcon icon={solid('house-chimney')} />
    </div>
  );
}

function CustomScrollBar() {
  return(
    <div className='customScrollBar'>
      <div className='customScrollSectionCont'>
        <ScrollBarSectionItem/>
      </div>
      <div className='customScrollerCont'>

      </div>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <div className='contentContainer'>
        <CustomScrollBar/>
      </div>
    </div>
  );
}

export default App;
