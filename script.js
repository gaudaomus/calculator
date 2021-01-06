function add(nums) {
  return nums[0] + nums[1];
}

function subtract(nums) {
  return nums[0] - nums[1];
}

function multiply(nums) {
  return nums[0] * nums[1];
}

function divide(nums) {
  return nums[0] / nums[1];
}

function operate(op, nums) {
  switch (op) {
    case '+':
      return add(nums);
      break;
    case '-':
      return subtract(nums);
      break;
    case '*':
      return multiply(nums);
      break;
    case '÷':
      return divide(nums);
      break;
    default:
      break;
  }
}

function display(show) {
  const display = document.querySelector('.display');
  display.textContent = show;
}


const numList = document.querySelectorAll('.numbutton');
let showNums = '';
let nums = [];
for (i=0;i<numList.length;i++) {
  let num = numList[i];
  num.addEventListener('click', function() {
    if (showNums.length < 9) {
    showNums+=num.value;
    display(showNums);
    }
  });
}

const opList = document.querySelectorAll('.opbutton');
let doOp = '';
for (i=0;i<opList.length;i++) {
  let op = opList[i];
  op.addEventListener('click', function() {
    doOp = op.value;
    if (showNums.length > 0) {
      nums.push(parseInt(showNums));
      showNums = '';
      display(showNums);
    }
  });
}

const equal = document.querySelector('.equal');
equal.addEventListener('click', function() {
  if (showNums.length > 0) {
    nums.push(parseInt(showNums));
    showNums = '';
  }
  if (nums.length == 2) {
    ans = operate(doOp, nums);
    display(ans);
    nums = [ans];
  }
});


/*const llama = document.querySelector('.llama');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const b4 = document.querySelector('.b4');
const b5 = document.querySelector('.b5');
const b6 = document.querySelector('.b6');
const b7 = document.querySelector('.b7');
const b8 = document.querySelector('.b8');
const b9 = document.querySelector('.b9');
const b0 = document.querySelector('.b0');
const decimal = document.querySelector('.decimal');

const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');*/
