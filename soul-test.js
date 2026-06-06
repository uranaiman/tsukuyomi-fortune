const questions = [

  {
    question: "休日はどう過ごしたい？",

    answers: [

      {
        text: "家でゆっくり",
        type: "moon"
      },

      {
        text: "読書や勉強",
        type: "blue"
      },

      {
        text: "アクティブに外出",
        type: "crimson"
      },

      {
        text: "趣味に没頭",
        type: "star"
      }

    ]
  },

  {
    question: "周囲からよく言われるのは？",

    answers: [

      {
        text: "優しい",
        type: "moon"
      },

      {
        text: "頭が良い",
        type: "blue"
      },

      {
        text: "行動力がある",
        type: "crimson"
      },

      {
        text: "個性的",
        type: "star"
      }

    ]
  },

  {
    question: "理想の人生は？",

    answers: [

      {
        text: "穏やかな人生",
        type: "moon"
      },

      {
        text: "知識を極める",
        type: "blue"
      },

      {
        text: "成功を掴む",
        type: "crimson"
      },

      {
        text: "自由に生きる",
        type: "star"
      }

    ]
  }

];

let currentQuestion = 0;

const scores = {

  moon: 0,
  blue: 0,
  crimson: 0,
  star: 0

};

const questionElement =
  document.getElementById("question");

const answersElement =
  document.getElementById("answers");

const resultElement =
  document.getElementById("result");

const questionBox =
  document.getElementById("question-box");

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

    button.onclick = function() {

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

function showResult() {

  questionBox.style.display =
    "none";

  let resultType =
    Object.keys(scores).reduce(
      (a, b) =>
        scores[a] > scores[b]
          ? a
          : b
    );

  let icon = "";
  let title = "";
  let text = "";

  switch(resultType) {

    case "moon":

      icon = "🌙";

      title =
        "月影の魂";

      text =
        "あなたは癒しと優しさを持つ魂。周囲を安心させる特別な力を秘めています。";

      break;

    case "blue":

      icon = "🌌";

      title =
        "蒼月の魂";

      text =
        "あなたは知性と冷静さを持つ魂。物事の本質を見抜く力があります。";

      break;

    case "crimson":

      icon = "🩸";

      title =
        "紅月の魂";

      text =
        "あなたは情熱と行動力を持つ魂。強い意志で未来を切り開くタイプです。";

      break;

    case "star":

      icon = "✨";

      title =
        "星月の魂";

      text =
        "あなたは夢と希望を持つ魂。人に勇気を与える特別な存在です。";

      break;

  }

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

showQuestion();