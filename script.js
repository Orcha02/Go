function init() {
  var $ = go.GraphObject.make;
  myDiagram = $(go.Diagram, "myDiagramDIV");
  var nodeDataArray = [{ key: "Alpha" }, { key: "Beta" }];
  var linkedDataArray = [{ to: "Beta", from: "Alpha" }];
  myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkedDataArray);
}
