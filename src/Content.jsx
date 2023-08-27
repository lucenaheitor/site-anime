
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Favorito from './components/Favorito'

const Content = () => {
  return (
    <div>
        <Routes>
            <Route path ="/" element={<Home />} />
            <Route path="/favorito" element={<Favorito />} />
        </Routes>
    </div>
  )
}

export default Content