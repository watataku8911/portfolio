<template>
  <div>
    <div class="row">
      <p v-if="isName">
        <ErrMsg msg="お名前が入力されていません。" />
      </p>
      <div class="input-field col s6">
        <TextInput
          placeholder=""
          type="text"
          v-model="firstName"
          :value="firstName"
        />
        <label>First Name</label>
      </div>
      <div class="input-field col s6">
        <TextInput
          placeholder=""
          type="text"
          v-model="lastName"
          :value="lastName"
        />
        <label>Last Name</label>
      </div>
    </div>
    <div class="row">
      <p v-if="isEmptyEmail">
        <ErrMsg msg="メールアドレスが入力されていません。" />
      </p>
      <p v-if="isValidEmail">
        <ErrMsg msg="メールアドレスの形式が違います。" />
      </p>
      <div class="input-field col s12">
        <TextInput placeholder="" type="text" v-model="email" :value="email" />
        <label>Email</label>
      </div>
    </div>
    <div class="row">
      <p v-if="isEmptyDescription">
        <ErrMsg msg="お問い合わせ内容が入力されていません。" />
      </p>
      <div class="input-field col s12">
        <TextArea placeholder="" rows="0" cols="0" v-model="description" />
        <label>Contents</label>
      </div>
    </div>
    <p>
      <label>
        <CheckBox v-model="checked" :checked="checked" />
        <span>プライバシーポリシーに同意します。</span>
      </label>
    </p>
    <div class="module--spacing--small"></div>
    <Privacy />
    <div class="module--spacing--veryLarge"></div>
    <Button
      :disabled="!checked"
      @push="submitForm"
      v-show="!isLoading"
      msg="送信"
    />
    <pulse-loader :loading="isLoading"></pulse-loader>
    <div class="module--spacing--large"></div>
    <div class="module--spacing--large"></div>
    <p style="text-align: left; font-size: 1em;">
      <ErrMsg
        msg="※一週間経っても返信がない場合、恐れ入りますが「Twitter等のDM」または「watano.takuya@gmail.com」までお願いします。"
      />
    </p>
  </div>
</template>

<script>
import TextInput from "../UIKit/TextInput";
import TextArea from "../UIKit/TextArea";
import ErrMsg from "../UIKit/ErrMsg";
import CheckBox from "../UIKit/CheckBox";
import Privacy from "../Privacy";
import Button from "../UIKit/Button";
import PulseLoader from "vue-spinner/src/PulseLoader";
import { slackApiURL } from "../../seacretDirectory/seacret";

export default {
  components: {
    TextInput,
    TextArea,
    ErrMsg,
    CheckBox,
    Privacy,
    Button,
    PulseLoader,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      description: "",
      checked: false,
      isLoading: false, //ローディングフラグ

      // ⇩⇩⇩⇩エラーフラグ
      isName: false,
      isEmptyEmail: false,
      isValidEmail: false,
      isEmptyDescription: false,
    };
  },
  methods: {
    submitForm() {
      let flg = false;

      // name error
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

      // email error
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

      // description error
      if (this.description.length == 0) {
        flg = true;
        this.isEmptyDescription = true;
      } else {
        this.isEmptyDescription = false;
      }

      if (!flg) {
        this.goSlack();
      } else {
        this.checked = false;
      }
    },

    //メアド形式チェック
    validateEmailFormat(email) {
      const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
      return regex.test(email);
    },

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

      fetch(slackApiURL, {
        method: "POST",
        body: JSON.stringify(payload),
      }).then(() => {
        alert("お問い合わせありがとうございます。追ってご連絡いたします🙌");
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.description = "";
        this.isLoading = false;
        this.checked = false;
      });
    },
  },
};
</script>

<style scoped></style>
