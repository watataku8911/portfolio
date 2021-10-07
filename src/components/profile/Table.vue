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
        <th>好きな色</th>
        <td style="display: flex; align-items: center;">
          #5bbee5
          <p class="colorbox"></p>
        </td>
      </tr>
      <tr>
        <th>経歴</th>
        <td>
          <p v-for="item in careers" :key="item.id">
            {{ item.career }}
            <br />
            <br />
          </p>
          <br />
          <span class="finish">以上。</span>
        </td>
      </tr>
      <tr>
        <th>スキルセット</th>
        <td class="skil">
          <ul>
            <li class="li" v-for="item in skills" :key="item.id">
              {{ item.skill }}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>勉強中のスキル</th>
        <td>
          モダンなWEB開発、WEBデザイン
        </td>
      </tr>
      <tr>
        <th>資格</th>
        <td>
          <ul>
            <li class="li" v-for="item in lisences" :key="item.id">
              {{ item.lisence }}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import careersData from "../../assets/data/career.json";
import skillsData from "../../assets/data/skill.json";
import lisencesData from "../../assets/data/lisence.json";

export default {
  data() {
    return {
      careers: careersData,
      skills: skillsData,
      lisences: lisencesData,
    };
  },
};
</script>

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
