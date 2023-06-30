let movieDataURL ="https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json";

let movieData;

let canvas = d3.select("#canvas");

let drawTreeMap = () => {

    let hierarchy = d3.hierarchy(movieData,node=>node["children"]).sum(node=>node["value"]).sort((node1,node2)=>node2["value"]-node1["value"]);

    let createTreemap = d3.treemap()
                          .size(100, 600)
    createTreemap(hierarchy)
    let movieTiles = hierarchy.leaves();

    let block = canvas.selectAll("g")
                      .data(movieTiles)
                      .enter()
                      .append("g")
    block.append("rect")
          .attr("class","tile")
          .attr('fill', (movie) => {
            let category = movie['data']['category']
            if(category === 'Action'){
                return 'orange'
            }else if(category === 'Drama'){
                return 'lightgreen'
            }else if(category === 'Adventure'){
                return 'crimson'
            }else if(category === 'Family'){
                return 'steelblue'
            }else if(category === 'Animation'){
                return 'pink'
            }else if(category === 'Comedy'){
                return 'khaki'
            }else if(category === 'Biography'){
                return 'tan'
            }
        })
        .attr("data-name",movie=>movie["data"]["name"])
        .attr("data-category",movie=>movie["data"]["category"])
        .attr("data-value",movie=>movie["data"]["value"])
}

d3.json(movieDataURL)
  .then((data,error)=>{
    if(error){
        console.log(error);
    }

    else{
        movieData = data;
        drawTreeMap();
    }
  })

