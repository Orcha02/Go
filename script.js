function init() {
  var $ = go.GraphObject.make;
  var myDiagram = $(go.Diagram, "myDiagramDiv");
  var nodeDataArray = [{ key: "Alpha" }, { key: "Beta" }];
  var linkDataArray = [{ to: "Beta", from: "Alpha" }];

  myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
}
