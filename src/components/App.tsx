import Nav from "./Nav/Nav";
import Universities from "./Universities/Universities";
import HeroImg from "../static/hero_img.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-Header">
        <div className="App-Header--Text">
          <h1>Find the University that's right for you.</h1>
          <h2>
            Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem. Voluptas atque
            autem totam.
          </h2>
        </div>
        <img src={HeroImg} alt="hero" className="App-Header--Image" />
      </div>
      <Universities />
    </div>
  );
}

export default App;
