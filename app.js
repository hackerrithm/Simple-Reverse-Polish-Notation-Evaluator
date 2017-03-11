function postfixSolver() {
    this.solvePostfix = function (postfix) {
        var resultStack = [];
        postfix = postfix.split(" ");
        for (var index = 0; index < postfix.length; index++) {
            if (postfix[index].isNumeric()) {
                resultStack.push(postfix[index]);
            } else {
                var a = resultStack.pop();
                var b = resultStack.pop();
                if (postfix[index] == "+") {
                    resultStack.push(parseInt(a) + parseInt(b));
                } else if (postfix[index] == "-") {
                    resultStack.push(parseInt(b) - parseInt(a));
                } else if (postfix[index] == "*") {
                    resultStack.push(parseInt(a) * parseInt(b));
                } else if (postfix[index] == "/") {
                    resultStack.push(parseInt(b) / parseInt(a));
                } else if (postfix[index] == "^") {
                    resultStack.push(Math.pow(parseInt(b), parseInt(a)));
                }
            }
            
        }
        if (resultStack.length > 1) {
            return "error"
        } else {
            return resultStack.pop();
        }
    }
}
String.prototype.isNumeric = function() {
    return !isNaN(parseFloat(this)) && isFinite(this)
}