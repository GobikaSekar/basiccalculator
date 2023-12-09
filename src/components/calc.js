import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from "react-bootstrap";
import { clear } from "@testing-library/user-event/dist/clear";
function Calculator(){
    const [number,setNumber]=useState("");
    const handleClick =(e)=>{
         setNumber(number.concat(e.target.name))
    }
     const Clear =() =>{    
          setNumber("")
     }
     const Backspace =() =>{
        setNumber(number.slice(0,number.length-1))
     }
    
     const handleCalculate = () => {
        try {
          const result = customEvaluate(number);
          setNumber(result.toString());
        } catch (error) {
          setNumber('Error');
        }
      };
     const customEvaluate = (expression) => {
    const tokens = expression.split(/([+\-*/])/g);
    let result = 0;
    let operator = '+';

    for (let token of tokens) {
      if (token === '+' || token === '-' || token === '*' || token === '/') {
        operator = token;
      } else {
        const num = parseFloat(token);
        switch (operator) {
          case '+':
            result += num;
            break;
          case '-':
            result -= num;
            break;
          case '*':
            result *= num;
            break;
          case '/':
            result /= num;
            break;
          default:
            break;
        }
      }
    }

    return result;
  };
     
    return(
        <div className="container">
           <Form>
           <Form.Control type="text" value={number}/>
           </Form>
           <div className="keypad">
           <Button variant="info" className="but" onClick={Clear} id="clear">AC</Button>{' '}
           <Button variant="info" className="but" onClick={Backspace} id="backspace">DEL</Button>{' '}
           <Button variant="info" className="but" name="/" onClick={handleClick}>&divide;</Button>{' '}
           <Button variant="light" className="but" name="7" onClick={handleClick}>7</Button>{' '}
           <Button variant="light" className="but" name="8" onClick={handleClick}>8</Button>{' '}
           <Button variant="light" className="but" name="9" onClick={handleClick}>9</Button>{' '}
           <Button variant="info" className="but" name="*" onClick={handleClick}>&times;</Button>{' '}
           <Button variant="light" className="but" name="4" onClick={handleClick}>4</Button>{' '}
           <Button variant="light" className="but" name="5" onClick={handleClick}>5</Button>{' '}
           <Button variant="light" className="but" name="6" onClick={handleClick}>6</Button>{' '}
           <Button variant="info" className="but" name="-" onClick={handleClick}>-</Button>{' '}
           <Button variant="light" className="but" name="1" onClick={handleClick}>1</Button>{' '}
           <Button variant="light" className="but" name="2" onClick={handleClick}>2</Button>{' '}
           <Button variant="light" className="but" name="3" onClick={handleClick}>3</Button>{' '}
           <Button variant="info" className="but" name="+" onClick={handleClick}>+</Button>{' '}
           <Button variant="light" className="but" name="0" onClick={handleClick}>0</Button>{' '}          
           <Button variant="light" className="but" name="." onClick={handleClick}>.</Button>{' '}
           <Button variant="info" className="but" onClick={handleCalculate} id="number">=</Button>{' '}

           
     
           </div>
        </div>
    );
}
export default Calculator;