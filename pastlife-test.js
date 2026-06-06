const questions = [

  {
    question: "理想の休日は？",
    answers: [
      { text: "冒険に出かける", type: "traveler" },
      { text: "本を読む", type: "mage" },
      { text: "人を助ける", type: "priestess" },
      { text: "仲間を率いる", type: "king" },
      { text: "鍛錬をする", type: "warrior" }
    ]
  },

  {
    question: "手に入れたい力は？",
    answers: [
      { text: "剣術", type: "warrior" },
      { text: "知識", type: "mage" },
      { text: "癒し", type: "priestess" },
      { text: "統率力", type: "king" },
      { text: "自由", type: "traveler" }
    ]
  },

  {
    question: "好きな言葉は？",
    answers: [
      { text: "勇気", type: "warrior" },
      { text: "真理", type: "mage" },
      { text: "慈愛", type: "priestess" },
      { text: "栄光", type: "king" },
      { text: "旅", type: "traveler" }
    ]
  },

  {
    question: "運命を感じる場所は？",
    answers: [
      { text: "戦場", type: "warrior" },
      { text: "図書館", type: "mage" },
      { text: "神社や寺院", type: "priestess" },
      { text: "王宮", type: "king" },
      { text: "海辺", type: "traveler" }
    ]
  },

  {
    question: "仲間からよく言われるのは？",
    answers: [
      { text: "頼もしい", type: "warrior" },
      { text: "物知り", type: "mage" },
      { text: "優しい", type: "priestess" },
      { text: "リーダー向き", type: "king" },
      { text: "自由人", type: "traveler" }
    ]
  },

  {
    question: "生まれ変わるなら？",
    answers: [
      { text: "騎士", type: "warrior" },
      { text: "賢者", type: "mage" },
      { text: "巫女", type: "priestess" },
      { text: "王", type: "king" },
      { text: "冒険家", type: "traveler" }
    ]
  },

  {
    question: "心惹かれるものは？",
    answers: [
      { text: "武器", type: "warrior" },
      { text: "古文書", type: "mage" },
      { text: "お守り", type: "priestess" },
      { text: "王冠", type: "king" },
      { text: "地図", type: "traveler" }
    ]
  },

  {
    question: "あなたが最も大切にするものは？",
    answers: [
      { text: "信念", type: "warrior" },
      { text: "知恵", type: "mage" },
      { text: "思いやり", type: "priestess" },
      { text: "責任", type: "king" },
      { text: "自由", type: "traveler" }
    ]
  }

];

let currentQuestion = 0;

const scores = {
  warrior: 0,
  mage: 0,
  priestess: 0,
  king: 0,
  traveler: 0
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

  const q = questions[currentQuestion];

  questionElement.textContent =
    `Q${currentQuestion + 1}. ${q.question}`;

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
  let personality = "";
  let message = "";

  switch(resultType) {

    case "warrior":

      icon = "⚔️";

      title = "戦士の前世";

      personality =
        "勇敢で責任感が強く、仲間を守るために行動する魂です。困難な状況でも最後まで諦めません。";

      message =
        "現世では自分を犠牲にしすぎないこと。あなたの優しさを自分自身にも向けてください。";

      break;

    case "mage":

      icon = "🔮";

      title = "魔術師の前世";

      personality =
        "知識と探究心を愛する魂です。物事の本質を見抜く力を持っています。";

      message =
        "現世では頭で考えすぎず、時には直感を信じて行動してみましょう。";

      break;

    case "priestess":

      icon = "🌿";

      title = "巫女の前世";

      personality =
        "人を癒し導く使命を持った魂です。共感力が高く、人の気持ちを敏感に感じ取ります。";

      message =
        "現世では他人ばかりではなく、自分自身の心も大切にしてください。";

      break;

    case "king":

      icon = "👑";

      title = "王族の前世";

      personality =
        "人々を導き、組織をまとめる力を持つ魂です。自然と信頼を集めます。";

      message =
        "現世では肩の力を抜きましょう。全てを背負う必要はありません。";

      break;

    case "traveler":

      icon = "🌊";

      title = "旅人の前世";

      personality =
        "自由と冒険を求め続ける魂です。新しい世界や価値観との出会いを大切にします。";

      message =
        "現世では恐れずに新しい挑戦をしてください。その先に運命の出会いがあります。";

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

      '<h3>前世の性格</h3>' +

      '<p>' +
      personality +
      '</p>' +

      '<h3>現世へのメッセージ</h3>' +

      '<p>' +
      message +
      '</p>' +

    '</div>';

}

showQuestion();