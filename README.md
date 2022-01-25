# Prepare environment

1. Create new HTML Page
2. Add script reference to your go.js file
3. Add DIV element for diagram
4. Define body onload function

# Create Diagram, Model and Model Data

1. Store go.GraphObject.make in simple variable (such as $)
2. Define myDiagram as a new Diagram

- First argument: go.Diagram
- Second argument: ID of the DIV element our diagram should be associated with

3. Set Diagram height, width, and border
4. Create nodeDataArray and linkDataArray (each element is an object in JSON format)

- nodeDataArray-> Only contains a string value for the "key" property (unique property that acts as an identifier for each Node in GoJS)
- linkDataArray-> We'll have a single element, with two properties: "to" and "from" (keys of the nodes this link connects)

5. Set Diagram.model
