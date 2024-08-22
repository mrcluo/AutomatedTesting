const { transform } = require("typescript");

module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest", // 匹配ts或者tsx文件，使用ts-jest进行转换
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$", // 匹配test或者spec命名的jsx或者tsx的文件，使用ts-jest进行转换
  moduleFileExtensions: ["tsx", "ts", "js", "jsx", "json", "node"], // 匹配文件后缀
};
