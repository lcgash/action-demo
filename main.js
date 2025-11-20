// index.js

// 引入 actions/core 库
const core = require('@actions/core');

try {
  // 1. 获取输入参数
  // core.getInput() 会从 action.yml 定义的 inputs 中读取值
  const nameToGreet = core.getInput('hello', { required: true });
  
  // 2. 执行核心逻辑
  console.log(`Hello, ${nameToGreet}!`);
  
  // 3. 设置输出参数
  // core.setOutput() 会设置 action.yml 中定义的 outputs
  const time = new Date().toTimeString();
  core.setOutput('time', time);

  // 4. (可选) 设置环境变量，供后续步骤使用
  core.exportVariable('GREETED_TIME', time);

} catch (error) {
  // 5. 如果发生错误，使用 core.setFailed() 来标记 Action 失败
  core.setFailed(error.message);
}
