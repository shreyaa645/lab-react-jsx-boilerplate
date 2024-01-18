
import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here

  const images = imageData();
  console.log(images);
 return (
 
  <div id='grid'>
    {/* <img src={images[0].img} alt="" id={images[0].id} /> */}
    
    {images.map((element) => (
      <img src={element.img} id={element.id}/>
    ))};
 </div>
 )
}

export default App;
