import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1570021361996_5367";

  // add your egg config in here
  config.middleware = [];

  config.baidufanyi = {
    baiduAppid: "20181004000215316",
    baiduKey: "cyH6DMryAFIB5cGPGLo0"
  };

  config.google = {
    TKK: ""
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
