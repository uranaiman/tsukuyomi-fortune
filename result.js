// ======================
// URLから生年月日取得
// ======================

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

// ======================
// 月タイプ決定
// ======================

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
      "月影の奥で、新たな運命が静かに目覚めています。"
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
      "流れを読むことで良い結果に繋がります。",
      "周囲より遅く見えても確実に進んでいます。"
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

  }

};

// ======================
// データ取得
// ======================

const data =
  fortunes[moon.name];

// ======================
// ランダム選択
// ======================

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