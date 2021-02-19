<template>
  <div class="error">
    <div class="error_box">
      <h1 class="err_msg">
        <span>404</span>
        <br />File Not Found
      </h1>
      <h3>お探しのページは見つかりませんでした。</h3>
      <p class="mess">
        あなたがアクセスしようとしたページは削除されたかURLが変更されているため、
        <br />見つけることができません。以下の理由が考えられます
      </p>
    </div>
    <div id="white_box">
      <div id="cause">
        <ul>
          <li>・アクセスしようとしたファイルが存在しない（ファイルの設置箇所を誤っている）。</li>
          <li>・URLアドレスが間違っている。</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
/*PC*/
@media screen and (min-width: 1026px) {
  .error {
    height: 110vh;
  }

  .error_box {
    text-align: center;
  }

  .err_msg {
    margin-top: 100px;
    color: red;
    font-weight: bold;
  }

  .err_msg span {
    font-size: 200px;
  }

  .mess {
    letter-spacing: 3px;
  }

  #cause {
    text-align: left;
  }
  #cause li {
    color: #666;
  }

  h3 {
    letter-spacing: 1px;
    padding: 0;
  }

  #white_box {
    width: 50%;
    margin: 55px auto 0;
    border: solid 1px #666;
    padding: 2%;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .error {
    margin-top: 80px;
    padding-top: 10%;
    height: calc(80vh + 30px);
  }

  .err_msg {
    margin-top: 80px;
    text-align: center;
    color: red;
    font-weight: bold;
  }

  .err_msg span {
    font-size: 200px;
  }

  #cause {
    text-align: left;
  }

  #cause li {
    color: #666;
  }

  h3 {
    letter-spacing: 1px;
    padding: 0;
  }

  #white_box {
    width: 85%;
    margin: 55px auto 0;
    border: solid 1px #666;
    padding: 3%;
  }
}
/*スマホ*/
@media screen and (max-width: 481px) {
  .error {
    padding: 10%;
    height: calc(81vh + 50px);
  }

  .err_msg {
    text-align: center;
    color: red;
    font-weight: bold;
    margin-top: 100px;
  }

  .err_msg span {
    font-size: 100px;
  }

  h3,
  .mess,
  #white_box {
    display: none;
  }
}
</style>
