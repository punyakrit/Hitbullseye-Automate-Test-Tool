
// chanage keys value
const keys = "DADBBCAACCAABAABCCAAAADABAACAB";
const len = keys.length;

let i = 0;

const inter = setInterval(
  () => {
    document.querySelector(`#${keys[i]}_${i+1}`).click(); // select the correct option
    document.querySelector("#main_div > div.tableWidthPercent > div.onlineTestLeftDiv > div.qnav > span.saveNextButton > a").click(); // move to next question
    i++;
    
    if(i == len){ // stop the interval when all questions are answered
      clearInterval(inter)
      document.querySelector("#activator").click(); // submit the test
      document.querySelector(`#box > div > div > div > div > input[type=radio]:nth-child(1)`).click(); // select the reason for submit
      document.querySelector("#close_confirmed").click(); // submit the test
    }
  }
  // 2 seconds(2000 milliseconds) for each question
,1000);
