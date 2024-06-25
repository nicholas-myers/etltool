import { NavLink, Outlet } from 'react-router-dom';

function App() {
  
return (
  <div className="App">
    <div className="instructions">
      <p>
        1. Pull data from multiple sources, possibly different data types. XML, JSON, excel, etc.
      </p>
      <p>
        2. Determine which fields will be used and which ones are the source of truth.
      </p>
      <p>
        3. choose format to transfer data to.
      </p>
      <p>
        4. upload to destination database or CMS.
      </p>
    </div>
    <nav>
      <NavLink to="extract" className={({ isActive }) =>
        isActive ? "active-link" : ""
      }>
        Extract
      </NavLink>
      <NavLink to="transform" className={({ isActive }) =>
        isActive ? "active-link" : ""
      }>
        Transform
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
