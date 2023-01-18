import logo from './logo.svg';
import './App.css';
import LogInComp from './components/LogIn';
import { Route, Routes } from 'react-router-dom';
import MoviesPageComp from './components/MoviesPage';
import NavBarComp from './components/NavBar';
import MemberComp from './components/member';
import AllMembersComp from './components/AllMembers';
import MembersAndSubscriptionscomp from './components/Members';
import EditMemberComp from './components/EditMember';
import AddMemberComp from './components/AddMember';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<LogInComp />} />
        <Route path='/navBar' element={<NavBarComp />}>
          <Route path='members' element={<MembersAndSubscriptionscomp />}>
            <Route path='allMembers' element={<AllMembersComp />} />
            <Route path='editMember' element={<EditMemberComp />} />
            <Route path='addMember' element={<AddMemberComp />} />
          </Route>
            <Route path='movies' element={<MoviesPageComp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
