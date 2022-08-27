<template>
  <table class="table">
    <tbody>
      <tr>
        <th>生年月日</th>
        <td>{{ birthDay }}</td>
      </tr>
      <tr>
        <th>出身地</th>
        <td>{{ liveIn }}</td>
      </tr>
      <tr>
        <th>好きな色</th>
        <td style="display: flex; align-items: center;">
          {{ color }}
          <p
            :style="{
              backgroundColor: `${color}`,
              width: `30px`,
              height: `30px`,
              marginLeft: `15px`,
            }"
          ></p>
        </td>
      </tr>
      <tr>
        <th>スキルセット</th>
        <td>
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
        <th ref="leftTimeLine">タイムライン</th>
        <td ref="rightTimeLine">
          <ul class="timeline">
            <li
              class="right-timeline-li"
              v-for="item in careers"
              :key="item.id"
            >
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
      birthDay: "1996年9月11日",
      liveIn: "大阪府",
      color: "#5bbee5",
      careers: careersData,
      skills: skillsData,
      lisences: lisencesData,
    };
  },
  mounted() {
    const options = {};
    const observer = new IntersectionObserver(this.setItemActive, options);

    const th = this.$el.querySelectorAll("th");
    th.forEach((el) => {
      observer.observe(el);
    });

    const td = this.$el.querySelectorAll("td");
    td.forEach((el) => {
      observer.observe(el);
    });

    const timeline = this.$el.querySelectorAll(".right-timeline-li");
    timeline.forEach((el) => {
      observer.observe(el);
    });
  },
  methods: {
    setItemActive(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
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

th.active {
  animation: example 0.5s ease 0.5s 1 forwards;
}

td.active {
  animation: example 0.5s ease 0.5s 1 forwards;
}

.right-timeline-li.active {
  animation: example 0.5s ease 0.5s 1 forwards;
}

@keyframes example {
  100% {
    opacity: 1;
    transform: translate(0, 0px);
  }
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

.rightTimeLine {
  opacity: 0;
}

.timeline {
  list-style: none;
}
.timeline > li {
  margin-bottom: 60px;
}

@media screen and (min-width: 1026px) {
  th {
    opacity: 0;
    transform: translate(-30px, 0);
  }

  td {
    opacity: 0;
    transform: translate(30px, 0);
  }

  .right-timeline-li {
    opacity: 1;
  }

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
    font-weight: bold;
  }

  .timeline-content:before {
    content: "";
    width: 12px;
    height: 12px;
    background-color: #5bbee5;
    position: absolute;
    left: 106px;
    top: 24px;
    border-radius: 100%;
  }
}

@media screen and (min-width: 482px) and (max-width: 1025px) {
  th {
    font-size: 2.5vw;
    width: 35%;
    opacity: 0;
    transform: translate(-10px, 0);
  }

  td {
    opacity: 0;
    font-size: 2.5vw;
    letter-spacing: 1.2px;
    transform: translate(10px, 0);
  }

  .right-timeline-li {
    opacity: 0;
    transform: translate(10px, 0);
  }

  .timeline-content h3 {
    letter-spacing: 1px;
    font-size: 25px;
    font-weight: bold;
  }
}

/*スマホ*/
@media screen and (max-width: 481px) {
  th {
    width: 35%;
    opacity: 0;
  }

  td {
    letter-spacing: 1.2px;
    opacity: 0;
  }

  .right-timeline-li {
    opacity: 0;
  }

  .timeline-content h3 {
    letter-spacing: 1px;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
