import { parseISO, format } from "date-fns";
// 日付整形関数
export const datePlasticSurgery = (dateString) => {
  const date = parseISO(dateString);
  return format(date, "yyyy年M月d日");
};

// 文字を丸める関数
export const split = (text, maxLength) => {
  let modStr = "・・・";

  if (text.length > maxLength) {
    modStr = text.substr(0, maxLength) + "...";
  } else {
    modStr = text;
  }
  return modStr;
};
