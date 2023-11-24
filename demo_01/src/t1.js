/*
 * @Author: shenjilin-home
 * @Date: 2023-11-16 21:21:06
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2023-11-16 21:54:57
 * @Description:
 */
import _ from "lodash";
const getName = () => {
  console.log(_.chunk(["a", "b", "c", "d"], 2));
  return "shenjiln";
};
const setName = (value) => {
  console.log("setName", value);
};
export default { getName, setName };
