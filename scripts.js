// 변수 선언
let turn = "one";
const modal = document.querySelector(".modal");
const buttons = document.querySelectorAll(".init");
const boxs = document.querySelectorAll(".box");
const span = document.querySelector(".span");
const titles = document.querySelectorAll(".title");
const titletexts = document.querySelectorAll(".titletext");
const modaltext = modal.querySelector(".modaltext");
const boxouter = document.querySelector(".boxs");
const play = document.querySelector(".play");

// 초기 효과
setTimeout(() => {
  titles.forEach((title) => title.classList.add("change"));
  titletexts.forEach((titletext) => titletext.classList.add("change"));
  setTimeout(() => {
    boxs.forEach((box) => box.classList.add("change"));
    setTimeout(() => {
      play.style.display = "flex";
    }, 500);
  }, 500);
}, 500);

// 버튼 이벤트 리스너
for (let button of buttons) {
  button.addEventListener("click", () => {
    turn = "one";
    modal.style.display = "none";
    span.innerText = "1";
    boxs.forEach((box) => {
      box.classList.remove("one");
      box.classList.remove("two");
      box.classList.add("none");
      box.innerText = "";
    });
  });
}

// 마킹하기
const mark = (target) => {
  return new Promise((resolve) => {
    if (target.classList.contains("none")) {
      target.classList.remove("none");
      target.classList.add(turn);
      if (turn === "one") {
        target.innerText = "o";
        span.innerText = "2";
      } else {
        target.innerText = "x";
        span.innerText = "1";
      }
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

// 턴 바꾸기
const changeTurn = () => {
  return new Promise((resolve) => {
    if (turn === "one") {
      turn = "two";
    } else {
      turn = "one";
    }
    resolve(turn);
  });
};

// 답인지 확인하기
const checkWin = (target) => {
  return new Promise((resolve) => {
    const isWin = {
      1: ["123", "147", "159"],
      2: ["123", "258"],
      3: ["123", "357", "369"],
      4: ["147", "456"],
      5: ["159", "357", "258", "456"],
      6: ["369", "456"],
      7: ["147", "789", "357"],
      8: ["258", "789"],
      9: ["159", "369", "789"],
    };
    const targetId = target.id;
    let flag = false;
    let wins = isWin[targetId];
    for (let win of wins) {
      const a = document.getElementById(`${win[0]}`);
      const b = document.getElementById(`${win[1]}`);
      const c = document.getElementById(`${win[2]}`);
      let _turn = "";
      if (turn === "one") {
        _turn = "two";
      } else {
        _turn = "one";
      }
      if (
        a.classList.contains(_turn) &&
        b.classList.contains(_turn) &&
        c.classList.contains(_turn)
      ) {
        flag = true;
        break;
      }
    }
    if (turn === "one" && flag === true) {
      resolve([true, "플레이어 2승리"]);
    } else if (turn === "two" && flag === true) {
      resolve([true, "플레이어 1승리"]);
    }
    resolve([false, ""]);
  });
};

// 클릭 이벤트
const onClick = async (target) => {
  const marked = await mark(target);
  if (marked) {
    const changedTurn = await changeTurn();
    const result = await checkWin(target);
    // 승리시
    if (result[0] === true) {
      modaltext.innerText = result[1];
      modal.style.display = "flex";
    }
  } else {
    return;
  }
};

// 이벤트 리스너
boxouter.addEventListener("click", function (e) {
  const targetId = e.target.id;
  const targetClassList = e.target.classList;
  if (targetClassList.contains("box")) {
    const targetArray = targetId.split("_");
    onClick(e.target);
  }
});
