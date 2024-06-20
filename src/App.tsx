import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="extract" className={({ isActive }) =>
          isActive ? "active-link" : ""
        }>
          Extract
        </NavLink>
        <NavLink to="transfer" className={({ isActive }) =>
          isActive ? "active-link" : ""
        }>
          Transfer
        </NavLink>
        <NavLink to="load" className={({ isActive }) =>
          isActive ? "active-link" : ""
        }>
          Load
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
