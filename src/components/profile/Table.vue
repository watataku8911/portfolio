<template>
  <table class="table">
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
      <td>野球, 坂道アイドル, プログラミング</td>
    </tr>
    <tr>
      <th>好きな食べ物</th>
      <td>ラーメンなどの麺系</td>
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
      <th>スキル</th>
      <td class="skil">
        HTML5/CSS3・JavaScript(JQuery,Vue.js,React)・PHP<br />
        Vue.js/Firebaseの開発が得意。
      </td>
    </tr>
    <tr>
      <th>勉強中</th>
      <td class="studing">UI/UXデザイン・TypeScript・アニメーション</td>
    </tr>
    <tr>
      <th>資格</th>
      <td>
        webデザイナー検定 ベーシック
        <br />情報活用試験１級
        <br />システムエンジニア認定
      </td>
    </tr>
  </table>
</template>

<style>
.table .finish{
  display: block;
  text-align: right;
}

/*PC*/
@media screen and (min-width: 1026px) {
  .table {
    table-layout: fixed;
    width: 100%;
    margin-bottom: 20px;
    letter-spacing: 1px;
    word-wrap: break-word;
  }
}

@media screen and (min-width: 482px) and (max-width: 1025px) {
  .table {
    font-size: 1.5em;
    table-layout: fixed;
    width: 100%;
    margin-bottom: 20px;
    letter-spacing: 1px;
    word-wrap: break-word;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  .table {
    table-layout: fixed;
    width: 100%;
    margin-bottom: 20px;
    letter-spacing: 1px;
    word-wrap: break-word;
  }
}
</style>
