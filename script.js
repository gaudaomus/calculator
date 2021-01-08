function add(nums) {
  return ((nums[0]*10**8)+(nums[1]*10**8))/10**8;
}

function subtract(nums) {
  return ((nums[0]*10**8)-(nums[1]*10**8))/10**8;
}

function multiply(nums) {
  return ((nums[0]*10**8)*(nums[1]*10**8))/10**8;
}

function divide(nums) {
  return ((nums[0]*10**8)/(nums[1]*10**8))/10**8;
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
    if (showNums.length < 9 && activeOp == 1) {
    showNums+=num.value;
    display(showNums);
    }
  });
}

let activeDec = 0;
const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', function() {
  if (showNums.length == 0 && activeOp == 1 && activeDec == 0) {
    activeDec = 1;
    showNums+='0.';
    display(showNums);
  }
  if (showNums.length < 9 && activeOp == 1 && activeDec == 0) {
    activeDec = 1;
    showNums+=decimal.value;
    display(showNums);
  }
});

const opList = document.querySelectorAll('.opbutton');
let holdOp = [];
let backOp = '';
let activeOp = 1;
for (i=0;i<opList.length;i++) {
  let op = opList[i];
  op.addEventListener('click', function() {
    holdOp.push(op.value);
    activeDec = 0;
    if (showNums.length > 0) {
      nums.push(parseFloat(showNums));
      showNums = '';
    }
    if (nums.length > 0) {
      opList.forEach(e => e.classList.remove("opClicked"));
      op.classList.add("opClicked");
      activeOp = 1;
    }
    if (nums.length >= 2) {
      backOp = String(holdOp.slice(-2,-1));
      ans = operate(backOp, nums);
      if (ans == Infinity) {
        display("Loser!");
      } else {
        ans = ans.toFixed(3);
        display(ans);
        nums = [ans];
      }
    }
  });
}

const equal = document.querySelector('.equal');
let doOp = '';
equal.addEventListener('click', function() {
  opList.forEach(e => e.classList.remove("opClicked"));
  activeOp = 0;
  activeDec = 0;
    if (showNums.length > 0) {
    nums.push(parseFloat(showNums));
    showNums = '';
  }
  if (nums.length >= 2) {
    doOp = String(holdOp.slice(-1));
    ans = operate(doOp, nums);
    if (ans == Infinity) {
      display("Loser!");
    } else {
      ans = Math.round(ans * 10**3) / 10**3;
      display(ans);
      nums = [ans];
    }
  }
});

const llama = document.querySelector('.llama');
llama.addEventListener('click', function() {
  opList.forEach(e => e.classList.remove("opClicked"));
  activeOp = 1;
  showNums = '';
  nums = [];
  holdOp = [];
  backOp = '';
  doOp = '';
  ans = '';
  activeDec = 0;
  display(showNums);
});

window.addEventListener('keydown', function(e) {
  let pressedKey = document.querySelector(`button[data-key="${e.keyCode}"]`)
  if (!pressedKey) return;
  pressedKey.click();
});
