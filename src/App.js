import {useState} from "react";
import "./index.css";
export default function App() {
  const movie = [
    {
      name: "Thuppaki",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZTc4YWY5MzAtOTc4Zi00NDVmLThlMGItYjliOGNkYmM3NDBmXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
      rating: "⭐⭐⭐⭐⭐ 8.1/10",
      year: "2012",
      summary:
"An army captain visits Mumbai to be with his family and find a suitable bride. However, an explosion in the city sets him off on a mission to find and disable a terrorist sleeper cell in the city."
    },
    {
      name: "Spiderman",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlKOtc-RTtE2ns8fMI990-RHrqGwncy_D0w&usqp=CAU",
      rating: "⭐⭐⭐⭐⭐ 7.13/10",
      year: "2002",
      summary:
"Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to help people and finds himself facing the Green Goblin, an evil maniac"
    },
    {
      name: "Red notice",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwYfCCXZcMjUGSM88PBwYhTvWEc_kjUu_Gw&usqp=CAU",
      rating: " ⭐⭐⭐⭐⭐6.4/10",
      year: "2021",
      summary:
"In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief."
    },
    {
      name: "Hera pheri",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeH5wJvCZbY6_lOec9vAmUNAQkBauGNViwA&usqp=CAU",
      rating: "⭐⭐⭐⭐⭐ 8.2/10",
      year: "2000",
      summary:
"Two tenants and a landlord, in desperate need of money, chance upon a ransom call via a cross connection. They hatch a plan to claim the ransom for themselves"
    },
    {
      name: "M S Dhoni",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ334LoTpdtqtYk17XPQjRcBim8qRyKiR1d6Q&usqp=CAU",
      rating: "⭐⭐⭐⭐⭐ 8/10",
      year: "2016",
      summary:
"M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams"
    }
  ];
  return (
    <div className="App">
      {/* <section className="movie-list">
      {movie.map((movie) => (
        <Welcome
          name={movie.name}
          poster={movie.poster}
          rating={movie.rating}
          year={movie.year}
          summary={movie.summary}
        />
      ))}
      </section> */}
      <AddColor/>
    </div>
  );
}
function Welcome({ name, poster, rating, year,summary }) {
  return (
    <div className="new-movie">
      <h1 className="movie-name">{name}</h1>
      <img className="movie-poster" src={poster} alt={name} />{" "}
      <p className="movie-rating">Rating: {rating}</p>
      <p className="movie-year">Year: {year}</p>
      <p className="movie-summary">{summary}</p>
      <Counter />
      
          </div>
  );
}

function Counter ()
{
  const[like,setLike]=useState(0);
  const[dislike,setDislike]=useState(0);
  return (
    <div className="counter">
      <button onClick={()=>setLike(like+1)}> Like 👍 {like}</button>
      <button onClick={()=>setDislike(dislike+1)}> disLike 👎 {dislike}</button>
      </div>
  ) ;
}
function AddColor(){
  const[color,setColor]=useState("orange");
  const styles={background:color};
  const [colorList,setColorList]=useState(["purple", "orange","teal"])
  
  return (
    <div>
      <input
      value={color}
      style={styles}
      onChange={(event)=>{
        setColor(event.target.value); // it only inform react the color is updated.
      }}
      placeholder="Enter a color"
      />
      <button onClick={()=>setColorList([...colorList,color])}>
        Add Color</button>
     {colorList.map((clr)=>(
       <ColorBox color={clr} />
     ))}
      </div>  
     
    
  )
}

function ColorBox({color})
{
  const styles={
    height:"25px",
    width:"250px",
    background:color,
    marrginTop:"10px"
  };
  return <div style={styles}></div> 
}