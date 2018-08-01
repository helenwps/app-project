/*
    首页 API
*/
import Ajax from "lib/Ajax";

export default {
  // banner图
  getruleapi (params) {
    return Ajax({
      url: "/ruleCenter/findRuleCenter",
      method: "get",
      params: params
    });
  }
}
;
