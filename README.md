# D3.js Tree Map Visualization

This is a D3.js script that generates a tree map visualization based on movie data. It retrieves movie data from a JSON file and renders the tree map using D3.js's treemap layout.

## Dependencies

- D3.js library

## Usage

1. Include the D3.js library in your HTML document.
2. Create an HTML element with an ID of "canvas" to serve as the container for the tree map.
3. Create an HTML element with an ID of "tooltip" to display information on mouseover events.
4. Copy the provided code into your project's JavaScript file or script tag.
5. Adjust the `movieDataUrl` variable to point to the correct URL of the movie data JSON file.
6. Run the script and the tree map visualization will be generated.

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

## Example

For an example implementation of the D3.js tree map visualization, refer to the following codepen: [D3.js Tree Map Visualization Example](https://codepen.io/example-tree-map-visualization)

## Credits

This code is adapted from the FreeCodeCamp Data Visualization Certification project "Visualize Data with a Treemap Diagram".
.

