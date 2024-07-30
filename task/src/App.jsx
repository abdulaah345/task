
import './App.css'
import Header from './component/Header'
import ProfileCard from './component/ProfileCard'
import Stats from './component/Stats'
import QRCode from './component/QRCode'
import Tabs from './component/Tabs'
import About from './component/About'
import Actions from './component/Actions'
import ContactOptions from './component/ContactOptions'
import TabsSection from './component/Tabs'

function App() {

  return (
    
    <div className="app">
      <Header/>
      <ProfileCard/>
      <Stats/>
      <Actions/>
      <QRCode/>
      <ContactOptions/>
      <TabsSection/>
      
  </div>
  )
}

export default App
