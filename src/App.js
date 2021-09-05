import jsx from "./images/jsx.jpg"
import  "./style.css"
function App() {
  return (
    <div className="App">
     <h1 className="titleRed">  React JSX</h1><br/>
     <img className="img1" src="/images/img1.png" alt="react"/><br/>
     
     <img className="img2" src ={jsx} alt ="jsxp"/><br/>
     <video  controls  src="/vidéo/video.mp4"/>

    </div>

  );
}

export default App;
