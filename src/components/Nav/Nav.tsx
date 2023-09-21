import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
      <h1>YourUni</h1>
      <span className="Nav--Links">
        <span className="Nav--Link Active">Product</span>
        <span className="Nav--Link">Download</span>
        <span className="Nav--Link">Pricing</span>
      </span>
    </div>
  );
};

export default Nav;
