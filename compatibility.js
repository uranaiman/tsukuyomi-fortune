function formatBirthday(input) {

  input.addEventListener("input", () => {

    let value = input.value.replace(/\D/g, "");

    value = value.slice(0, 8);

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
  });
}

const person1 =
  document.getElementById("person1");

const person2 =
  document.getElementById("person2");

formatBirthday(person1);
formatBirthday(person2);

function checkCompatibility() {

  const birth1 =
    person1.value.trim();

  const birth2 =
    person2.value.trim();

  if (
    !birth1.match(/^\d{4}-\d{2}-\d{2}$/) ||
    !birth2.match(/^\d{4}-\d{2}-\d{2}$/)
  ) {

    alert(
      "1999-01-01 の形式で入力してください"
    );

    return;
  }

  // 数字化

  const num1 =
    birth1.replaceAll("-", "");

  const num2 =
    birth2.replaceAll("-", "");

  let total = 0;

  for (let i = 0; i < num1.length; i++) {

    total += Number(num1[i]);
  }

  for (let i = 0; i < num2.length; i++) {

    total += Number(num2[i]);
  }

  // 相性%

  const percent =
    (total * 7) % 101;

  // タイプ

  const types = [

    {
      name: "運命共鳴型",
      desc:
        "強い運命で結ばれた特別な関係。"
    },

    {
      name: "引力型",
      desc:
        "自然に惹かれ合う不思議な縁。"
    },

    {
      name: "静寂共鳴型",
      desc:
        "穏やかで心地よい関係性。"
    },

    {
      name: "宿命循環型",
      desc:
        "離れても再び巡り会う運命。"
    },

    {
      name: "月光調和型",
      desc:
        "互いを癒し高め合える相性。"
    }

  ];

  const resultType =
    types[total % types.length];

  // 表示

  document.getElementById(
    "compatibility-result"
  ).innerHTML =

  `
  <div class="compatibility-box fade-in">

    <h3>
      🌙 共鳴結果 🌙
    </h3>

    <div class="compatibility-percent">
      ${percent}%
    </div>

    <div class="compatibility-type">
      ${resultType.name}
    </div>

    <div class="compatibility-desc">
      ${resultType.desc}
    </div>

  </div>
  `;
}