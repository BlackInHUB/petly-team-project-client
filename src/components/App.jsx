import UserPage from 'pages/UserPage/UserPage';
import { Routes, Route } from 'react-router-dom' 

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<h2>React homework template</h2>}/>
        <Route path='/user' element={<UserPage />}/>
      </Routes>
    </div>
  );
};
