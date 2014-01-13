(function () {
  function selectNodes(contextNode, xpathExpression) {
    var nodes = document.evaluate(xpathExpression, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var nodeArray = new Array(nodes.snapshotLength);
    for (var i = 0; i < nodeArray.length; i++)
      nodeArray[i] = nodes.snapshotItem(i);
      return nodeArray;
  }

  var xpath = "//input[(@autocomplete = 'OFF') or (@autocomplete = 'off')] | //form[(@autocomplete = 'OFF') or (@autocomplete = 'off')]";
  var nodes = selectNodes(document, xpath);
  
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].setAttribute("autocomplete", "on");
  }
})();
