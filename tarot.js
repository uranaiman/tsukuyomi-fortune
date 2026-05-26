// ========================================
// タロットカード一覧
// ========================================

const tarotCards = [

  {

    symbol: "🃏",

    name: "愚者",

    main:
      "新たな始まりの気配。恐れず進むことで運命が開かれます。",

    love:
      "新しい出会いの予感があります。",

    work:
      "挑戦することで未来が動き始めます。",

    message:
      "直感を信じて進んでください。"
  },

  {

    symbol: "✨",

    name: "魔術師",

    main:
      "あなたの才能が強く輝いています。行動が成功を引き寄せます。",

    love:
      "積極的な言葉が恋愛運を高めます。",

    work:
      "アイデアが高く評価される時です。",

    message:
      "今こそ力を解放する時です。"
  },

  {

    symbol: "🌙",

    name: "女教皇",

    main:
      "静かな知性と直感が未来を導いています。",

    love:
      "焦らず関係を深めることで良い流れになります。",

    work:
      "冷静な判断が成功を呼びます。",

    message:
      "静かな時間が答えを導きます。"
  },

  {

    symbol: "☀️",

    name: "太陽",

    main:
      "強い幸運があなたを照らしています。希望に満ちた流れです。",

    love:
      "魅力が高まり恋愛運が上昇しています。",

    work:
      "周囲から高い評価を得られるでしょう。",

    message:
      "自信を持って進んでください。"
  },

  {

    symbol: "🌑",

    name: "月",

    main:
      "迷いや不安が浮かび上がる時。焦らず本音を見つめましょう。",

    love:
      "感情に流されず冷静さを大切にしてください。",

    work:
      "慎重な判断が重要になります。",

    message:
      "心の声に耳を傾けてください。"
  }

];

// ========================================
// カード生成
// ========================================

const tarotArea =

  document.getElementById(
    "tarot-cards"
  );

// シャッフル

const shuffled =

  tarotCards.sort(
    () => Math.random() - 0.5
  );

// カード生成

shuffled.forEach(

  (card, index) => {

    tarotArea.innerHTML +=

    `
    <div
      class="tarot-card"
      onclick="selectCard(${index})"
    >

      <div class="tarot-back">

        🌙

      </div>

    </div>
    `;
  }
);

// ========================================
// カード選択
// ========================================

function selectCard(index) {

  // カード取得

  const card =
    shuffled[index];

  // 全カード取得

  const allCards =

    document.querySelectorAll(
      ".tarot-card"
    );

  // 一度全部無効化

  allCards.forEach(

    item => {

      item.style.pointerEvents =
        "none";

      item.style.opacity =
        "0.5";
    }
  );

  // 選択カード強調

  allCards[index].style.opacity =
    "1";

  allCards[index].style.transform =
    "scale(1.05)";

  // 結果表示

  const result =

    document.getElementById(
      "tarot-result"
    );

  result.style.display =
    "block";

  // カード表示

  document.getElementById(
    "tarot-card-view"
  ).innerHTML =

  `
    <div class="moon-symbol">
      ${card.symbol}
    </div>
  `;

  // 名前

  document.getElementById(
    "tarot-name"
  ).innerText =

    `🔮 ${card.name}`;

  // 本文

  document.getElementById(
    "tarot-main"
  ).innerText =

    card.main;

  // 恋愛

  document.getElementById(
    "love"
  ).innerText =

    card.love;

  // 仕事

  document.getElementById(
    "work"
  ).innerText =

    card.work;

  // メッセージ

  document.getElementById(
    "message"
  ).innerText =

    card.message;

  // スクロール

  setTimeout(() => {

    result.scrollIntoView({

      behavior: "smooth"
    });

  }, 300);
}