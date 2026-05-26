// ======================
// 生年月日入力
// ======================

const birthdayInput =
  document.getElementById(
    "birthday"
  );

// inputが存在する時だけ実行

if (birthdayInput) {

  birthdayInput.addEventListener(
    "input",
    () => {

      // 数字だけ取得

      let value =
        birthdayInput.value.replace(
          /\D/g,
          ""
        );

      // 8桁制限

      value =
        value.slice(0, 8);

      // YYYY-MM-DD

      if (value.length >= 5) {

        value =
          value.slice(0, 4) +
          "-" +
          value.slice(4);

      }

      if (value.length >= 8) {

        value =
          value.slice(0, 7) +
          "-" +
          value.slice(7);

      }

      birthdayInput.value =
        value;

    }
  );

}

// ======================
// 占い開始
// ======================

function goFortune() {

  const birthday =
    document
      .getElementById(
        "birthday"
      )
      .value
      .trim();

  const error =
    document.getElementById(
      "error-message"
    );

  // 入力チェック

  if (
    !birthday.match(
      /^\d{4}-\d{2}-\d{2}$/
    )
  ) {

    error.innerText =
      "1999-01-01 の形式で入力してください";

    return;
  }

  // エラー削除

  error.innerText = "";

  // ローディング表示

  document.getElementById(
    "loading-screen"
  ).style.display = "flex";

  // resultへ移動

  setTimeout(() => {

    location.href =
      "result.html?birthday=" +
      encodeURIComponent(
        birthday
      );

  }, 1800);

}

// ======================
// result.html専用処理
// ======================

if (
  window.location.pathname.includes(
    "result.html"
  )
) {

  // URL取得

  const params =
    new URLSearchParams(
      location.search
    );

  const birthday =
    params.get("birthday");

  // 無ければ戻す

  if (!birthday) {

    location.href =
      "index.html";
  }

  // ======================
  // 数字化
  // ======================

  const number =
    birthday.replaceAll("-", "");

  let total = 0;

  for (
    let i = 0;
    i < number.length;
    i++
  ) {

    total += Number(number[i]);

  }

  // ======================
  // 月タイプ
  // ======================

  const moonTypes = [

    {
      symbol: "🌑",
      name: "新月",
      class: "bg-newmoon",
      desc:
        "静寂と始まりを司る月"
    },

    {
      symbol: "🌕",
      name: "満月",
      class: "bg-fullmoon",
      desc:
        "魅力と成功を照らす月"
    },

    {
      symbol: "🌌",
      name: "蒼月",
      class: "bg-blue",
      desc:
        "知性と神秘を秘めた月"
    },

    {
      symbol: "🩸",
      name: "紅月",
      class: "bg-red",
      desc:
        "情熱と変化を象徴する月"
    },

    {
      symbol: "✨",
      name: "星月",
      class: "bg-star",
      desc:
        "希望と幸運を呼ぶ月"
    }

  ];

  // 月タイプ決定

  const moon =

    moonTypes[
      total % moonTypes.length
    ];

  // 背景変更

  document.body.classList.add(
    moon.class
  );

  // ======================
  // 月タイプ表示
  // ======================

  document.getElementById(
    "moon-type"
  ).innerHTML =

  `
  <div class="moon-result fade-in">

    <div class="moon-symbol">
      ${moon.symbol}
    </div>

    <div class="moon-label">
      あなたの生まれ持った月
    </div>

    <div class="moon-name">
      ${moon.name}
    </div>

    <div class="moon-desc">
      ${moon.desc}
    </div>

  </div>
  `;

  // ======================
  // 運勢データ
  // ======================

  const fortunes = {

    "新月": {

      oracle: [
        "静かな流れの中で運命が動き始めています。",
        "今宵の月は新しい始まりを告げています。",
        "月影の奥で新たな運命が目覚めています。"
      ],

      love: [
        "焦らず距離を縮めることで縁が深まります。",
        "静かな場所に運命の気配があります。",
        "過去より未来へ視線を向けることで流れが変わります。"
      ],

      money: [
        "小さな積み重ねが未来の豊かさになります。",
        "今は守りを固めることで安定へ向かいます。",
        "必要なものを見極めることで運気が整います。"
      ],

      work: [
        "静かな努力が後から評価されます。",
        "流れを読むことで良い結果へ繋がります。",
        "確実な前進が未来を変えます。"
      ],

      action: [
        "月を見上げ深呼吸してください。",
        "夜に願い事を書くと運気が整います。",
        "静かな音楽が心を浄化します。"
      ]

    },

    "満月": {

      oracle: [
        "強い光があなたの魅力を照らしています。",
        "月光が運命を大きく動かしています。",
        "あなたの存在が周囲へ影響を与えています。"
      ],

      love: [
        "自然体でいるほど魅力が高まります。",
        "人との縁が大きく広がる流れです。",
        "視線を向けられる場面が増えそうです。"
      ],

      money: [
        "人脈から金運が流れ込みそうです。",
        "大胆な行動に月の加護があります。",
        "経験が新しい豊かさへ繋がります。"
      ],

      work: [
        "存在感が周囲に認められる時です。",
        "新しい役割が巡ってくる可能性があります。",
        "責任ある立場へ導かれる気配があります。"
      ],

      action: [
        "銀色の物を身につけてください。",
        "明るい場所へ出かけてみてください。",
        "人と話す時間が運命を動かします。"
      ]

    },

    "蒼月": {

      oracle: [
        "静かな知性が未来を切り開きます。",
        "見えない流れを感じ取る力が高まっています。",
        "直感と論理が運命を導いています。"
      ],

      love: [
        "深い会話が縁を強くします。",
        "心の距離を大切にすると流れが整います。",
        "急がないことで本物の縁が近づきます。"
      ],

      money: [
        "学びへの投資が未来を変えます。",
        "情報収集が大きな価値を生みます。",
        "冷静な判断が安定へ繋がります。"
      ],

      work: [
        "知識が評価へ変わる時期です。",
        "冷静さが周囲から信頼されます。",
        "裏方の努力に光が差し込みます。"
      ],

      action: [
        "夜空を静かに眺めてください。",
        "青い物を持つと感覚が冴えます。",
        "読書が運命のヒントを与えます。"
      ]

    },

    "紅月": {

      oracle: [
        "変化の波が近づいています。",
        "情熱が運命を動かす鍵になります。",
        "新しい道が始まろうとしています。"
      ],

      love: [
        "感情の揺れが恋を深くします。",
        "強く惹かれる相手が現れる可能性があります。",
        "本音を隠さないことで運気が変わります。"
      ],

      money: [
        "大胆な決断が流れを変えるかもしれません。",
        "不要なものを手放すと運気が整います。",
        "大きな変化の前触れがあります。"
      ],

      work: [
        "新しい挑戦に運命の導きがあります。",
        "勢いを信じることが大切です。",
        "強い覚悟が未来を切り開きます。"
      ],

      action: [
        "赤い物を身につけてください。",
        "身体を動かすことで運気が高まります。",
        "新しい場所へ行くことで流れが変わります。"
      ]

    },

    "星月": {

      oracle: [
        "希望の光が静かに近づいています。",
        "小さな奇跡が重なり始めています。",
        "偶然のような出来事に運命が隠れています。"
      ],

      love: [
        "優しさが縁を引き寄せます。",
        "自然な笑顔が運命を動かします。",
        "思いがけない再会があるかもしれません。"
      ],

      money: [
        "少しずつ運気が上昇しています。",
        "小さな幸運が積み重なる時です。",
        "身近な場所に豊かさの種があります。"
      ],

      work: [
        "周囲との協力が成功へ繋がります。",
        "希望を持ち続けることで流れが変わります。",
        "人との縁が新しい道を開きます。"
      ],

      action: [
        "星空を見上げてください。",
        "感謝の言葉が運気を高めます。",
        "好きな香りが流れを整えます。"
      ]

    }

  };

  // ======================
  // 運勢取得
  // ======================

  const data =
    fortunes[moon.name];

  // ランダム取得

  function pick(
    array,
    offset
  ) {

    return array[
      (total + offset)
      % array.length
    ];

  }

  // ======================
  // 結果表示
  // ======================

  document.getElementById(
    "result"
  ).innerHTML =

  `
  <div class="fortune-box fade-in">

    <h2>
      🌙 月の神託 🌙
    </h2>

    <p>
      ${pick(data.oracle, 0)}
    </p>

    <h3>
      💖 恋愛運
    </h3>

    <p>
      ${pick(data.love, 1)}
    </p>

    <h3>
      💰 金運
    </h3>

    <p>
      ${pick(data.money, 2)}
    </p>

    <h3>
      💼 仕事運
    </h3>

    <p>
      ${pick(data.work, 3)}
    </p>

    <h3>
      🍀 開運行動
    </h3>

    <p>
      ${pick(data.action, 4)}
    </p>

  </div>
  `;

}

// ======================
// 月の共鳴診断
// ======================

// 入力フォーマット

function setupBirthdayInput(id) {

  const input =
    document.getElementById(id);

  if (!input) return;

  input.addEventListener(
    "input",
    () => {

      let value =
        input.value.replace(/\D/g, "");

      value =
        value.slice(0, 8);

      if (value.length >= 5) {

        value =
          value.slice(0, 4) +
          "-" +
          value.slice(4);
      }

      if (value.length >= 8) {

        value =
          value.slice(0, 7) +
          "-" +
          value.slice(7);
      }

      input.value = value;
    }
  );
}

// 適用

setupBirthdayInput("birthday1");
setupBirthdayInput("birthday2");

// 数字計算

function calcNumber(birthday) {

  const number =
    birthday.replaceAll("-", "");

  let total = 0;

  for (
    let i = 0;
    i < number.length;
    i++
  ) {

    total += Number(number[i]);
  }

  return total;
}

// ======================
// 共鳴診断
// ======================

function checkCompatibility() {

  const birthday1 =
    document
      .getElementById("birthday1")
      .value
      .trim();

  const birthday2 =
    document
      .getElementById("birthday2")
      .value
      .trim();

  // 入力確認

  const regex =
    /^\d{4}-\d{2}-\d{2}$/;

  if (
    !regex.test(birthday1) ||
    !regex.test(birthday2)
  ) {

    alert(
      "1999-01-01 の形式で入力してください"
    );

    return;
  }

  // 数値化

  const total1 =
    calcNumber(birthday1);

  const total2 =
    calcNumber(birthday2);

  // 共鳴率

  const percent =

    50 +
    (
      (total1 * total2)
      % 51
    );

  // タイプ

  const types = [

    {

      name:
        "運命共鳴型",

      desc:
        "互いの存在が自然と運命を動かしていく関係です。強く惹かれ合う一方で、距離感によって流れが大きく変化する時もあるでしょう。"

    },

    {

      name:
        "引力型",

      desc:
        "気づけば互いを意識してしまう、不思議な引力を持つ関係です。離れても再び巡り合う可能性があります。"

    },

    {

      name:
        "静寂共鳴型",

      desc:
        "言葉よりも空気感で繋がる関係です。穏やかな時間を共有することで、月の流れが安定していきます。"

    },

    {

      name:
        "宿命循環型",

      desc:
        "出会うべくして出会ったような、不思議な縁を持っています。時に試練もありますが、それも運命の一部です。"

    },

    {

      name:
        "月光調和型",

      desc:
        "互いの欠けた部分を自然に補い合える関係です。一緒にいることで安心感が生まれやすいでしょう。"

    }

  ];

  const resultType =

    types[
      (total1 + total2)
      % types.length
    ];

  // 表示

  document.getElementById(
    "compatibility-result"
  ).innerHTML =

  `
  <div class="compatibility-box fade-in">

    <h3>
      🌙 月の共鳴率 🌙
    </h3>

    <div class="compatibility-percent">

      ${percent}%

    </div>

    <div class="compatibility-type">

      ${resultType.name}

    </div>

    <p class="compatibility-desc">

      ${resultType.desc}

    </p>

  </div>
  `;
}