const questions = [

  {
    question: "夜の過ごし方は？",

    answers: [

      {
        text: "一人で静かに過ごす",
        type: "abyss"
      },

      {
        text: "好きなことに熱中する",
        type: "crimson"
      },

      {
        text: "本や映画を楽しむ",
        type: "phantom"
      },

      {
        text: "人と交流する",
        type: "naraku"
      }

    ]
  },

  {
    question: "力を手に入れるなら？",

    answers: [

      {
        text: "精神力",
        type: "abyss"
      },

      {
        text: "炎の力",
        type: "crimson"
      },

      {
        text: "幻術",
        type: "phantom"
      },

      {
        text: "支配力",
        type: "naraku"
      }

    ]
  },

  {
    question: "好きな言葉は？",

    answers: [

      {
        text: "孤高",
        type: "abyss"
      },

      {
        text: "情熱",
        type: "crimson"
      },

      {
        text: "知略",
        type: "phantom"
      },

      {
        text: "覇道",
        type: "naraku"
      }

    ]
  }

];

let currentQuestion = 0;

const scores = {

  abyss: 0,
  crimson: 0,
  phantom: 0,
  naraku: 0

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

    case "abyss":

      icon = "🌑";

      title =
        "深淵属性";

      text =
        "あなたは孤高の闇を宿す深淵属性。静かな強さと揺るがぬ精神力を持っています。";

      break;

    case "crimson":

      icon = "🔥";

      title =
        "紅蓮属性";

      text =
        "あなたは燃え上がる情熱を秘めた紅蓮属性。感情と行動力で未来を切り開くタイプです。";

      break;

    case "phantom":

      icon = "🦇";

      title =
        "幻影属性";

      text =
        "あなたは知略と観察力に優れた幻影属性。人の本質を見抜く不思議な力を持っています。";

      break;

    case "naraku":

      icon = "☠️";

      title =
        "奈落属性";

      text =
        "あなたは圧倒的な存在感を持つ奈落属性。人を惹きつけるカリスマを秘めています。";

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
