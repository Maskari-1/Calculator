let num1 = "";
        let num2 = "";
        let operation = "";

        function numberSaver(num) {
            if (operation) {
                num2 = `${num2}${num}`;
                document.getElementById("display").innerHTML = num1 + operation + num2;
            } else {
                num1 = `${num1}${num}`;
                document.getElementById("display").innerHTML = num1;
            }
        }

        function operationSelector(oper) {
            if(operation){
                calculate(oper)
            } else{ 
                operation = oper;
            document.getElementById("display").innerHTML = num1 + operation + num2;} 
        }

        function clearDisplay() {
            num1 = "";
            num2 = "";
            operation = "";
            document.getElementById("display").innerHTML = '&nbsp;';
        }
        function currentDisplay() {
            if (num2) {
                num2 = num2.slice(0, -1);
            } else if (operation) {
                operation = operation.slice(0, -1);
            } else {
                num1 = num1.slice(0, -1);
            }
            document.getElementById("display").innerHTML = num1 + operation + num2;
        }
        function calculate(oper) {
            if (num2 !=='' && operation !== '') {
                const result = eval(`${num1} ${operation} ${num2}`);
                document.getElementById("display").innerHTML = result + oper || "";
                num1 = result;
                num2 = '';
                operation = oper |'';
            }
          }
