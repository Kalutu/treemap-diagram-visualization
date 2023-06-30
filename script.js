let movieDataURL ="https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json";

let movieData;

let canvas = d3.select("#canvas");

let drawTreeMap = () => {

}

d3.json(movieDataURL)
  .then((data,error)=>{
    if(error){
        console.log(error);
    }
    else{
        movieData = data;
        console.log(movieData);
        drawTreeMap();
    }
  })

