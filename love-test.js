```javascript
// =====================================
// 恋愛タイプ診断
// love-test.js
// =====================================

const questions = [

  {
    question: "恋愛で最も大切なのは？",

    answers: [

      {
        text: "安心感",
        type: "moon"
      },

      {
        text: "刺激",
        type: "crimson"
      },

      {
        text: "運命感",
        type: "star"
      },

      {
        text: "理解し合えること",
        type: "blue"
      }

    ]
  },

  {
    question: "好きな人ができた時は？",

    answers: [

      {
        text: "静かに想い続ける",
        type: "moon"
      },

      {
        text: "積極的に行く",
        type: "crimson"
      },

      {
        text: "運命を感じる",
        type: "star"
      },

      {
        text: "相手を観察する",
        type: "blue"
      }

    ]
  },

  {
    question: "失恋した時どうする？",

    answers: [

      {
        text: "1人で泣く",
        type: "moon"
      },

      {
        text: "次へ進む",
        type: "crimson"
      },

      {
        text: "意味を考える",
        type: "star"
      },

      {
        text: "冷静に整理する",
        type: "blue"
      }

    ]
  }

];

// =====================================
// スコア
// =====================================

let currentQuestion = 0;

const scores = {

  moon: 0,
  crimson: 0,
  star: 0,
  blue: 0

};

// =====================================
// HTML取得
// =====================================

const questionElement =
  document.getElementById("question");

const answersElement =
  document.getElementById("answers");

const resultElement =
  document.getElementById("result");

// =====================================
// 質問表示
// =====================================

function showQuestion() {

  const q =
    questions[currentQuestion];

  questionElement.textContent =
    q.question;

  answersElement.innerHTML = "";

  q.answers.forEach(answer => {

    const button =
      document.createElement("button");

    button.textContent =
      answer.text;

    button.classList.add(
      "answer-btn"
    );

    button.onclick = function () {

      scores[answer.type]++;

      currentQuestion++;

      if (
        currentQuestion <
        questions.length
      ) {

        showQuestion();

      } else {

        showResult();

      }

    };

    answersElement.appendChild(
      button
    );

  });

}

// =====================================
// 結果表示
// =====================================

function showResult() {

  questionElement.style.display =
    "none";

  answersElement.style.display =
    "none";

  let resultType =
    Object.keys(scores).reduce(
      function (a, b) {

        return scores[a] > scores[b]
          ? a
          : b;

      }
    );

  let title = "";
  let text = "";
  let icon = "";

  // =====================================
  // タイプ判定
  // =====================================

  switch(resultType) {

    case "moon":

      title =
        "🌙 月影タイプ";

      text =
        "あなたは静かで一途な恋愛をするタイプ。深い愛情を秘めています。";

      icon =
        "🌙";

      break;

    case "crimson":

      title =
        "🩸 紅月タイプ";

      text =
        "情熱的で一直線。恋愛に強いエネルギーを持っています。";

      icon =
        "🩸";

      break;

    case "star":

      title =
        "✨ 星月タイプ";

      text =
        "ロマンチックで運命を信じるタイプ。不思議な魅力があります。";

      icon =
        "✨";

      break;

    case "blue":

      title =
        "🌌 蒼月タイプ";

      text =
        "冷静で知的な恋愛タイプ。信頼を大切にします。";

      icon =
        "🌌";

      break;

  }

  // =====================================
  // 結果表示
  // =====================================

  resultElement.innerHTML =

    '<div class="love-result">' +

      '<div class="result-icon">' +
        icon +
      '</div>' +

      '<h2>' +
        title +
      '</h2>' +

      '<p>' +
        text +
      '</p>' +

    '</div>';

}

// =====================================
// 開始
// =====================================

showQuestion();
```
