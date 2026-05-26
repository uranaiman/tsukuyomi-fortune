// ========================================
// 星座占い 完全版 zodiac.js
// ========================================

// 星座データ

const fortunes = {

  aries: {

    name: "♈ おひつじ座",

    main:
      "情熱が運命を切り開く日。迷わず進むことで新しい流れが始まります。",

    love:
      "素直な気持ちが恋を前進させます。",

    money:
      "小さな挑戦が金運アップに繋がります。",

    work:
      "積極的な行動が評価される日です。",

    action:
      "朝の空気を深く吸い込んでください。"
  },

  taurus: {

    name: "♉ おうし座",

    main:
      "穏やかな運気が流れる日。焦らず進むことで良い結果に繋がります。",

    love:
      "安心感が恋愛運を高めます。",

    money:
      "節約意識が未来の豊かさを生みます。",

    work:
      "丁寧な対応が信頼を得るでしょう。",

    action:
      "好きな香りを身につけてください。"
  },

  gemini: {

    name: "♊ ふたご座",

    main:
      "新しい出会いが幸運を運びます。会話に運命の鍵があります。",

    love:
      "軽やかな会話が距離を縮めます。",

    money:
      "情報収集が金運アップの鍵です。",

    work:
      "アイデアが評価されやすい日。",

    action:
      "新しい音楽を聴いてください。"
  },

  cancer: {

    name: "♋ かに座",

    main:
      "優しさが運命を変える日。周囲への気遣いが幸運を呼びます。",

    love:
      "思いやりが恋愛運を高めます。",

    money:
      "無駄遣いを控えると安定します。",

    work:
      "仲間との協力が成功に繋がります。",

    action:
      "温かい飲み物を飲んでください。"
  },

  leo: {

    name: "♌ しし座",

    main:
      "強い存在感が輝く日。自信を持つことで運命が味方します。",

    love:
      "魅力が高まり注目を集めます。",

    money:
      "大胆な行動が良い流れを生みます。",

    work:
      "リーダーシップが評価されます。",

    action:
      "太陽の光を浴びてください。"
  },

  virgo: {

    name: "♍ おとめ座",

    main:
      "静かな努力が実を結ぶ日。細かな気配りが幸運を導きます。",

    love:
      "自然体が恋愛運を高めます。",

    money:
      "整理整頓が金運アップに繋がります。",

    work:
      "丁寧な作業が高評価を得ます。",

    action:
      "机の周りを整理してください。"
  },

  libra: {

    name: "♎ てんびん座",

    main:
      "人との調和が幸運を呼ぶ日。バランス感覚が鍵になります。",

    love:
      "優雅な振る舞いが魅力を高めます。",

    money:
      "人脈からチャンスが舞い込みそうです。",

    work:
      "対人関係が良い結果を生みます。",

    action:
      "鏡を見て笑顔を作ってください。"
  },

  scorpio: {

    name: "♏ さそり座",

    main:
      "深い直感が冴える日。静かな決断が未来を変えます。",

    love:
      "強い絆が生まれやすい時です。",

    money:
      "慎重な判断が運気を安定させます。",

    work:
      "集中力が成果を引き寄せます。",

    action:
      "夜空を静かに見上げてください。"
  },

  sagittarius: {

    name: "♐ いて座",

    main:
      "冒険心が幸運を呼ぶ日。新しい挑戦が流れを変えます。",

    love:
      "自由な空気感が恋を進展させます。",

    money:
      "行動力が金運アップに繋がります。",

    work:
      "新しい発想が評価されます。",

    action:
      "少し遠くまで散歩してください。"
  },

  capricorn: {

    name: "♑ やぎ座",

    main:
      "努力が形になる日。積み重ねた経験が力になります。",

    love:
      "誠実な姿勢が信頼を深めます。",

    money:
      "計画的なお金の使い方が吉。",

    work:
      "責任感が評価される時です。",

    action:
      "今日の予定を整理してください。"
  },

  aquarius: {

    name: "♒ みずがめ座",

    main:
      "独創的な発想が輝く日。新しい流れを作る力があります。",

    love:
      "自然な会話が恋愛運を高めます。",

    money:
      "ひらめきが金運に繋がります。",

    work:
      "個性が高く評価されます。",

    action:
      "新しい場所へ行ってみてください。"
  },

  pisces: {

    name: "♓ うお座",

    main:
      "優しい感性が運命を導く日。心の声に従うと良い流れになります。",

    love:
      "ロマンチックな空気が高まります。",

    money:
      "直感的な選択が幸運を呼びます。",

    work:
      "柔軟な対応が成功へ繋がります。",

    action:
      "好きな音楽を聴いてください。"
  }

};

// ========================================
// 表示関数
// ========================================

function showFortune(sign) {

  // データ取得

  const data = fortunes[sign];

  // 表示エリア

  const result =

    document.getElementById(
      "zodiac-result"
    );

  // 表示ON

  result.style.display = "block";

  // データ反映

  document.getElementById(
    "zodiac-name"
  ).innerText =
    data.name;

  document.getElementById(
    "zodiac-main"
  ).innerText =
    data.main;

  document.getElementById(
    "love"
  ).innerText =
    data.love;

  document.getElementById(
    "money"
  ).innerText =
    data.money;

  document.getElementById(
    "work"
  ).innerText =
    data.work;

  document.getElementById(
    "action"
  ).innerText =
    data.action;

  // スクロール

  result.scrollIntoView({

    behavior: "smooth"
  });
}