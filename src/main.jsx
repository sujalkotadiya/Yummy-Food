import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SortingProvider } from './components/ShortingContext.jsx'

createRoot(document.getElementById('root')).render(
  <SortingProvider>
    <App />
  </SortingProvider>

)
