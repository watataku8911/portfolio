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
        <td>野球観戦, 坂道アイドル etc...</td>
      </tr>
      <tr>
        <th>好きな色</th>
        <td style="display: flex; align-items: center;">
          #5bbee5
          <p class="colorbox"></p>
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
        <th>資格</th>
        <td>
          <ul>
            <li class="li" v-for="item in lisences" :key="item.id">
              {{ item.lisence }}
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>タイムライン</th>
        <td>
          <ul class="timeline">
            <li v-for="item in careers" :key="item.id">
              <p class="timeline-date">{{ item.timeline_date }}</p>
              <div class="timeline-content">
                <h3>{{ item.timeline_title }}</h3>
                <p>
                  {{ item.timeline_content }}
                </p>
              </div>
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

CSSResult Skip Results iframe EDIT ON .timeline {
  list-style: none;
}
.timeline > li {
  margin-bottom: 60px;
}

@media screen and (min-width: 1026px) {
  .timeline > li {
    overflow: hidden;
    margin: 0;
    position: relative;
  }
  .timeline-date {
    width: 110px;
    float: left;
    margin-top: 20px;
  }
  .timeline-content {
    width: 75%;
    float: left;
    border-left: 3px #5bbee5 solid;
    padding-left: 30px;
  }

  .timeline-content h3 {
    font-size: 22px;
  }

  .timeline-content:before {
    content: "";
    width: 12px;
    height: 12px;
    background: #5bbee5;
    position: absolute;
    left: 106px;
    top: 24px;
    border-radius: 100%;
  }
}

@media screen and (min-width: 482px) and (max-width: 1025px) {
  th {
    width: 35%;
  }

  .timeline-content h3 {
    font-size: 32px;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  th {
    width: 45%;
  }

  .timeline-content h3 {
    font-size: 22px;
  }
}
</style>
