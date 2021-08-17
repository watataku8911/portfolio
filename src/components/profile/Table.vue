<template>
  <table class="table">
    <tbody>
      <tr>
        <th>生年月日</th>
        <td>1996年9月11日</td>
      </tr>
      <tr>
        <th>出身地</th>
        <td>大阪府</td>
      </tr>
      <tr>
        <th>好きなもの</th>
        <td>WEB, 野球観戦, 坂道アイドル</td>
      </tr>
      <tr>
        <th>好きな食べ物</th>
        <td>ラーメンなどの麺系</td>
      </tr>
      <tr>
        <th>好きな色</th>
        <td style="display: flex; align-items: center;">
          #5bbee5
          <p class="colorbox"></p>
        </td>
      </tr>
      <tr>
        <th>経歴</th>
        <td>
          2019年にIT専門学校を卒業。その後、新卒でソフトウェア開発会社に入社するが病気が発覚し退社。
          <br />
          <br />
          退社後,独学でプログラミングを勉強しつつ治療を行う。
          <br />
          <br />
          <span class="finish">以上。</span>
        </td>
      </tr>
      <tr>
        <th>スキルセット</th>
        <td class="skil">
          <ul>
            <li class="li">HTML5/CSS3</li>
            <li class="li">
              JavaScript(JQuery, Vue.js/Nuxt.js, React/Next.js)・TypeScript
            </li>
            <li class="li">PHP・Node.js</li>
            <li class="li">
              Firebase(Authencation, Cloud Firestore, Realtime Database,
              Storage, Cloud Functions, Hosting)
            </li>
            <li class="li">RDB(MySQL)</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>資格</th>
        <td>
          webデザイナー検定 ベーシック
          <br />情報活用試験１級 <br />システムエンジニア認定
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.table {
  table-layout: fixed;
  width: 100%;
  margin-bottom: 20px;
  letter-spacing: 1px;
  word-wrap: break-word;
}

.table .finish {
  display: block;
  text-align: right;
}

.li {
  list-style: square !important;
  line-height: 2em;
  letter-spacing: 0.1em;
}

.colorbox {
  width: 30px;
  height: 30px;
  background-color: #5bbee5;
  margin-left: 13px;
}

@media screen and (min-width: 482px) and (max-width: 1025px) {
  th {
    width: 35%;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  th {
    width: 45%;
  }
}
</style>
