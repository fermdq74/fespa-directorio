import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBil298LeydzWSgqzOeAwm5Ig8DMMDx3lo",
  authDomain: "fespa-directorio.firebaseapp.com",
  projectId: "fespa-directorio",
  storageBucket: "fespa-directorio.appspot.com",
  messagingSenderId: "269450383977",
  appId: "1:269450383977:web:30e0ee1bf731e5b83b48f8"
};

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
