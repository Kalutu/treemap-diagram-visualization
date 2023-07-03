# Tree Map Visualization
This is a D3.js script that generates a tree map visualization based on movie data. It retrieves movie data from a JSON file and renders the tree map using D3.js's treemap layout.

## Dependencies
- D3.js library

## How It Works
1. The script fetches movie data from the specified JSON file using the `d3.json` function.
2. The `drawTreeMap` function is called to render the tree map visualization.
3. Inside the `drawTreeMap` function:
   - The movie data is transformed into a hierarchical structure using the `d3.hierarchy` function.
   - The `d3.treemap` function is used to calculate the positions and sizes of the tree map nodes.
   - The leaves of the hierarchy are extracted to represent the movie tiles.
   - 'g' elements are appended to the canvas, with each element representing a movie tile.
   - 'rect' elements are appended to the 'g' elements, representing the tiles of the tree map.
   - Event listeners are added to show/hide tooltips on mouseover/mouseout events.
   - 'text' elements are appended to display the movie names.
4. The generated tree map is displayed within the specified "canvas" element.

Feel free to modify the code according to your specific needs.

## Contributing
Contributions to the calculator application are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Credits
This Tree Map Visualization project is part of the [FreeCodeCamp Data Visualization Certification](https://www.freecodecamp.org/learn/data-visualization/) course. It was completed as one of the required projects in the curriculum.

FreeCodeCamp (FCC) is a nonprofit organization that offers a comprehensive curriculum for learning data visualization. The Data Visualization Certification focuses on teaching students how to effectively represent and analyze data through visualizations.

The course covers various data visualization techniques and libraries such as D3.js and Chart.js. Students learn how to create different types of visualizations including bar charts, scatter plots, heatmaps, treemaps, and more.

Completing projects like the Tree Map Visualization project helps solidify your understanding of data visualization concepts and provides hands-on experience in creating interactive visualizations. It's an excellent way to showcase your skills and knowledge in this field.

To learn more about FreeCodeCamp and explore their educational programs, visit their official website: [https://www.freecodecamp.org/](https://www.freecodecamp.org/). They offer a wide range of resources and a supportive community to assist you in your journey to becoming a proficient data visualizer.



