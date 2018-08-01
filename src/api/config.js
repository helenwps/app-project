const DEVELOPMENT_API_URL = "http://dev.shop.com/api/";

export default {
  DEVELOPMENT_API_URL, // 开发环境地址
  MSGCENTER_URL: "http://192.168.10.217:20006/",
  PLATFORM_URL: "http://192.168.10.217:7078" // 开发环境，平台端接口地址
};

export const EnvPreURL = {
  BASE_URL: "/api/h5user/", // 生产环境，服务端地址
  PLATFORM_URL: "/api/platform/", // 生产环境，平台端地址
  MSGCENTER_URL: "/api/msgcenter/" // 生产环境，消息中心地址
};
