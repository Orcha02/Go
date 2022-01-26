function init() {
  var $ = go.GraphObject.make;
  var myDiagram = $(go.Diagram, "myDiagramDiv");
  var nodeDataArray = [
    { key: "Alpha", color: "lime" },
    { key: "Beta", color: "cyan" },
  ];
  var linkDataArray = [{ to: "Beta", from: "Alpha", color: "red" }];

  myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);
  myDiagram.nodeTemplate = $(
    go.Node,
    "Auto",
    $(
      go.Shape,
      "RoundedRectangle",
      { fill: "white" },
      new go.Binding("fill", "color")
    ),
    $(go.TextBlock, "text", { margin: 10 }, new go.Binding("text", "key"))
  );
  myDiagram.linkTemplate = $(
    go.Link,
    $(go.Shape, { strokeWidth: 3 }, new go.Binding("stroke", "color")),
    $(
      go.Shape,
      { toArrow: "Standard", stroke: null },
      new go.Binding("fill", "color")
    )
  );
}
