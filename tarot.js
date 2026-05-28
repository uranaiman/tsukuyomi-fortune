const tarotCards = [

  {
    name: "愚者",
    symbol: "🃏",
    message: "新しい旅立ちの時です。",
    love: "自然体の恋が始まりそう。",
    work: "新しい挑戦が運命を開く。",
    money: "大胆な行動が金運UP。"
  },

  {
    name: "魔術師",
    symbol: "✨",
    message: "才能が開花し始めています。",
    love: "魅力が高まり注目されます。",
    work: "能力が認められる時。",
    money: "新しい収入源が見つかる。"
  },

  {
    name: "女教皇",
    symbol: "🌙",
    message: "冷静な判断が未来を導きます。",
    love: "静かな愛が深まります。",
    work: "知識が武器になります。",
    money: "慎重な管理が吉。"
  },

  {
    name: "女帝",
    symbol: "👑",
    message: "豊かさが流れ込みます。",
    love: "愛情運が高まっています。",
    work: "人間関係が好転。",
    money: "安定した運気。"
  },

  {
    name: "皇帝",
    symbol: "⚔️",
    message: "強い意志が成功を導く。",
    love: "頼もしさが魅力になる。",
    work: "リーダー運上昇。",
    money: "計画的行動で安定。"
  },

  {
    name: "教皇",
    symbol: "⛪",
    message: "導きを受ける時です。",
    love: "誠実な関係が育つ。",
    work: "信頼が評価に変わる。",
    money: "堅実運。"
  },

  {
    name: "恋人",
    symbol: "💖",
    message: "大切な選択の時。",
    love: "恋愛運最高潮。",
    work: "良きパートナーに恵まれる。",
    money: "人脈が金運を呼ぶ。"
  },

  {
    name: "戦車",
    symbol: "🏇",
    message: "勢いが運命を動かす。",
    love: "積極性が吉。",
    work: "突き進むほど成功。",
    money: "勝負運あり。"
  },

  {
    name: "力",
    symbol: "🦁",
    message: "内なる強さを信じて。",
    love: "優しさが絆を深める。",
    work: "忍耐が成果を生む。",
    money: "安定運。"
  },

  {
    name: "隠者",
    symbol: "🕯️",
    message: "静かな時間が必要です。",
    love: "焦らず距離を縮める時。",
    work: "研究や学びに吉。",
    money: "節約が運気UP。"
  },

  {
    name: "運命の輪",
    symbol: "🎡",
    message: "運命が大きく動く。",
    love: "偶然の出会いあり。",
    work: "転機到来。",
    money: "チャンス運上昇。"
  },

  {
    name: "正義",
    symbol: "⚖️",
    message: "真実が明らかになる。",
    love: "誠実さが鍵。",
    work: "公平な評価。",
    money: "冷静判断が重要。"
  },

  {
    name: "吊るされた男",
    symbol: "🔻",
    message: "視点を変える時。",
    love: "待つことで見える愛。",
    work: "今は準備期間。",
    money: "焦らない方が吉。"
  },

  {
    name: "死神",
    symbol: "💀",
    message: "終わりと再生。",
    love: "新しい恋への転換。",
    work: "環境変化あり。",
    money: "不要な出費を断つ時。"
  },

  {
    name: "節制",
    symbol: "🕊️",
    message: "調和が運気を整える。",
    love: "穏やかな関係へ。",
    work: "協力で成功。",
    money: "安定した流れ。"
  },

  {
    name: "悪魔",
    symbol: "😈",
    message: "誘惑に注意。",
    love: "執着しすぎに注意。",
    work: "欲望が暴走しやすい。",
    money: "浪費注意。"
  },

  {
    name: "塔",
    symbol: "⚡",
    message: "突然の変化が訪れる。",
    love: "価値観の変化。",
    work: "大きな転機。",
    money: "予想外の出費注意。"
  },

  {
    name: "星",
    symbol: "⭐",
    message: "希望の光が差し込む。",
    love: "理想的な出会い。",
    work: "夢が現実へ近づく。",
    money: "運気上昇。"
  },

  {
    name: "月",
    symbol: "🌕",
    message: "直感を信じてください。",
    love: "神秘的な縁。",
    work: "感性が武器になる。",
    money: "不安に流されないこと。"
  },

  {
    name: "太陽",
    symbol: "☀️",
    message: "最高の幸運期。",
    love: "幸福な愛に包まれる。",
    work: "成功運MAX。",
    money: "豊かさが訪れる。"
  },

  {
    name: "審判",
    symbol: "📯",
    message: "運命の目覚め。",
    love: "復縁や再会運。",
    work: "再挑戦が成功する。",
    money: "停滞から回復。"
  },

  {
    name: "世界",
    symbol: "🌍",
    message: "完成と達成。",
    love: "理想的な関係。",
    work: "努力が実を結ぶ。",
    money: "満たされた運気。"
  }

];

const tarotArea =
  document.getElementById(
    "tarot-cards"
  );

const shuffleBtn =
  document.getElementById(
    "shuffle-btn"
  );

let alreadySelected = false;

let shuffled = false;

/* =========================
   シャッフル
========================= */

shuffleBtn.onclick = () => {

  if (shuffled) return;

  shuffled = true;

  shuffleBtn.innerText =
    "🌙 シャッフル中...";

  tarotArea.classList.add(
    "shuffling"
  );

  setTimeout(() => {

    tarotArea.classList.remove(
      "shuffling"
    );

    tarotArea.style.height =
  "auto";

    shuffleBtn.style.display =
      "none";

  }, 3000);
};

/* =========================
   カード生成
========================= */

for (let i = 0; i < 22; i++) {

  const card =
    document.createElement("div");

  card.className =
    "tarot-card";

  card.innerHTML =
    `
    <div class="tarot-back">
      🌙
    </div>
    `;

  card.onclick = () => {

    if (alreadySelected) return;

    if (!shuffled) {

      alert(
        "先にカードを混ぜてください"
      );

      return;
    }

    alreadySelected = true;

    const random =
      tarotCards[
        Math.floor(
          Math.random() *
          tarotCards.length
        )
      ];

    const reversed =
      Math.random() < 0.5;

    /* 他カード暗転 */

    const allCards =
      document.querySelectorAll(
        ".tarot-card"
      );

    allCards.forEach(c => {

      if (c !== card) {

        c.classList.add(
          "fade-card"
        );
      }
    });

    /* 選択カード */

    card.classList.add(
      "selected-card"
    );

    card.classList.add(
      "opened"
    );

    if (reversed) {

      card.classList.add(
        "reversed"
      );
    }

    card.innerHTML =
      `
      <div class="tarot-front">
        ${random.symbol}
      </div>
      `;

    /* 結果表示 */

    document.getElementById(
      "tarot-result"
    ).style.display = "block";

    document.getElementById(
      "drawn-card"
    ).innerHTML =
      random.symbol;

    document.getElementById(
      "card-name"
    ).innerText =
      random.name;

    document.getElementById(
      "card-orientation"
    ).innerText =
      reversed
      ? "逆位置"
      : "正位置";

    document.getElementById(
      "card-message"
    ).innerText =
      random.message;

    document.getElementById(
      "love"
    ).innerText =
      random.love;

    document.getElementById(
      "work"
    ).innerText =
      random.work;

    document.getElementById(
      "money"
    ).innerText =
      random.money;

    /* スクロール */

    document.getElementById(
      "tarot-result"
    ).scrollIntoView({

      behavior: "smooth"
    });
  };

  tarotArea.appendChild(card);
}