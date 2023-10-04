import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full backdrop-blur-sm">
      <nav className="flex items-center justify-between gap-4 w-11/12 mx-auto py-4 border-b-2 border-zinc-700">
        <h1>Parking System</h1>

        <ul className="flex items-center gap-4 list-none">
          <li className="hover:opacity-80 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:opacity-80 hover:underline">
            <Link to="/spots">Parking Places</Link>
          </li>
          <li className="hover:opacity-80 hover:underline">
            <Link to="/create-spot">Create Parking Place</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
