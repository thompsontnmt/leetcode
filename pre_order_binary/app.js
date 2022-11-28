var preOrderTraversal = function(root) {
    if (root == null) {
        return [];
    }
    if (root.left == null && root.right == null) {
        return [root.val];
    }
    var res = [];
    var nodes = [root];
    var tempNodes = [];
    while (nodes.length > 0) {
        while (nodes.length > 0) {
            var node = nodes.pop();
            res.push(node.val);
            if (node.right) {
                tempNodes.push(node.right);
            }
            if (node.left) {
                tempNodes.push(node.left);
            }
        }
        nodes = tempNodes;
    }
    return res;
}
preOrderTraversal(root);