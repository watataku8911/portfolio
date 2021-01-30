<template>
  <div>
    <div class="row">
      <p v-if="isName">
        <font color="red">お名前が入力されていません。</font>
      </p>
      <div class="input-field col s6">
        <input
          placeholder
          id="first_name"
          type="text"
          class="validate"
          v-model="firstName"
        />
        <label for="first_name">First Name</label>
      </div>
      <div class="input-field col s6">
        <input id="last_name" type="text" class="validate" v-model="lastName" />
        <label for="last_name">Last Name</label>
      </div>
    </div>
    <div class="row">
      <p v-if="isEmptyEmail">
        <font color="red">メールアドレスが入力されていません。</font>
      </p>
      <p v-if="isValidEmail">
        <font color="red">メールアドレスの形式が違います。</font>
      </p>
      <div class="input-field col s12">
        <input id="email" type="email" class="validate" v-model="email" />
        <label for="email">Email</label>
      </div>
    </div>
    <div class="row">
      <p v-if="isEmptyDescription">
        <font color="red">お問い合わせ内容が入力されていません。</font>
      </p>
      <div class="input-field col s12">
        <textarea
          id="textarea1"
          class="materialize-textarea"
          v-model="description"
        ></textarea>
        <label for="textarea2">Content Of Inquiry</label>
      </div>
    </div>
    <p>
      <label>
        <input type="checkbox" v-model="cheacked"/>
        <span>プライバシーポリシーに同意します。</span>
      </label>
    </p>
    <div class="module--spacing--small"></div>
    <div class="privacy">
        <h4 class="privacy-ttl">プライバシーポリシー</h4>
        <div class="module--spacing--small"></div>
        <p>Watataku's（以下、「当サイト」）では、個人情報の取り扱いについて下記のように定めます。</p>
        <h5>【個人情報の取得】</h5>
        <p>
          当サイトでは、ユーザーの皆様の個人情報（氏名、住所、メールアドレス、電話番号など個人を特定できる情報）を取得させて頂くことがあります。
        </p>
        <h5>【個人情報の利用】</h5>
        <p>
          取得した個人情報は、下記の目的で利用いたします。<br>
          <ul>
            <li>お客様からのお問い合わせに対する回答送付</li>
          </ul>
        </p>
        <h5>【個人情報の安全管理】</h5>
        <p>
          当サイトでは取得した個人情報について適切な管理に努めると共に個人情報の漏洩、改ざん、不正な侵入の防止に努めます。
        </p>
        <h5>【第三者への開示・提供の禁止】</h5>
        <p>
          当サイトではお客様よりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。<br>
          <ul>
            <li>法律上照会権限を有する者から書面による正式な協力要請、照会があった場合</li>
            <li>お客様の同意があった場合</li>
          </ul>
        </p>
        <h5>【個人情報に関する問い合わせ】</h5>
        <p>
          個人情報に関するお問い合わせは、下記までお願い致します。<br>
          Watataku<br>
          メールアドレス:watano.takuya@gmail.com
        </p>
        <h5>【改変と見直しについて】</h5>
        <p>個人情報については、法令変更などを受けて随時見直しを行います。</p>
    </div>
    <div class="module--spacing--small"></div>
    <div class="module--spacing--small"></div>
    <div class="module--spacing--small"></div>
    <button
      class="btn waves-effect waves-light"
      type="submit"
      name="action"
      :disabled="!cheacked"
      @click="submitForm"
      v-show="!isLoading"
    >
      送信
    </button>
    <div class="loading">
      <pulse-loader :loading="isLoading"></pulse-loader>
    </div>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader";
import {slackApiURL} from "../../seacretDirectory/seacret"

export default {
  components: {
    PulseLoader,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      description: "",
      cheacked: false,
      isLoading: false, //ローディングフラグ

      // ⇩⇩⇩⇩エラーフラグ
      isName: false,
      isEmptyEmail: false,
      isValidEmail: false,
      isEmptyDescription: false,
    };
  },
  methods: {
    // fetchメソッドでフォームの内容をSlackのIncoming Webhook URL に送信する
    goSlack() {
      this.isLoading = true;

      const payload = {
        text:
          "お問い合わせがありました\n" +
          "お名前: " +
          this.firstName +
          " " +
          this.lastName +
          "\n" +
          "メールアドレス: " +
          this.email +
          "\n" +
          "【問い合わせ内容】\n" +
          this.description,
      };

      const WEBHOOK_URL = slackApiURL();
      fetch(WEBHOOK_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      }).then(() => {
        alert("送信が完了しました。追ってご連絡いたします🙌");
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.description = "";
        this.isLoading = false;
        this.cheacked = false;
      });
    },

    //メアド形式チェック
    validateEmailFormat(email) {
      const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
      return regex.test(email);
    },

    // clickイベント
    submitForm() {
      let flg = false;

      //name error
      if (this.firstName.length == 0) {
        flg = true;
        this.isName = true;
      } else {
        this.isName = false;
      }
      if (this.lastName.length == 0) {
        flg = true;
        this.isName = true;
      } else {
        this.isName = false;
      }

      //email error
      if (this.email.length == 0) {
        flg = true;
        this.isEmptyEmail = true;
        this.isValidEmail = false;
      } else if (!this.validateEmailFormat(this.email)) {
        flg = true;
        this.isEmptyEmail = false;
        this.isValidEmail = true;
      } else {
        this.isEmptyEmail = false;
        this.isValidEmail = false;
      }

      //description error
      if (this.description.length == 0) {
        flg = true;
        this.isEmptyDescription = true;
      } else {
        this.isEmptyDescription = false;
      }

      if (!flg) {
        //Slack送信処理
        this.goSlack();
      }
    },
  },
};
</script>

<style scoped>
input {
  margin-top: 20px !important;
}
textarea {
  margin-top: 20px !important;
}
.materialize-textarea {
  height: 180px !important;
}
.module--spacing--small {
  height: 10px;
}
.privacy li {
  list-style: square inside;
}
button {
  width: 30%;
}
/*PC*/
@media screen and (min-width: 1026px) {
  .privacy {
    margin: 0 auto;
    padding: 1%;
    width: 50%;
    height: 200px;
    border: 1px solid #000;
    overflow: scroll;
  }
  .privacy-ttl {
    margin-top: 0px;
    font-size: 17px;
  }

  .privacy h5 {
    font-size: 15px;
    text-align: left;
  }

  .privacy p {
    font-size: 10px;
    text-align: left;
  }
}
/*タブレット*/
@media screen and (min-width: 482px) and (max-width: 1025px) {
  .privacy {
    margin: 0 auto;
    padding: 1.5%;
    width: 95%;
    height: 250px;
    border: 1px solid #000;
    overflow: scroll;
  }

  .privacy-ttl {
    margin-top: 0px;
    font-size: 17px;
  }

  .privacy h5 {
    font-size: 15px;
    text-align: left;
  }

  .privacy p {
    font-size: 10px;
    text-align: left;
  }
}
@media screen and (max-width: 481px) {
  .privacy {
    margin: 0 auto;
    padding: 1%;
    width: 95%;
    height: 200px;
    border: 1px solid #000;
    overflow: scroll;
  }

  .privacy-ttl {
    font-size: 17px;
  }

  .privacy h5 {
    font-size: 15px;
    text-align: left;
  }

  .privacy p {
    font-size: 10px;
    text-align: left;
  }
}
</style>
