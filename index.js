#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const shell = require('shelljs');
shell.exec('git status')
const initAction = () => {
  inquirer.prompt([
    {
      type: 'input',
      message: '请输入项目名称',
      name: 'name'
    }
  ]).then((answers) => {
    console.log('项目名称为:', answers.name)
    console.log('正在拷贝项目，请稍等')
    const remote = 'https://github.com/chengRoss/react-cli.git'; // 程旭峰构建的react单页面应用 499699878@qq.com    tel: 18937629707
    const curName = 'reactPage'
    const tarName = answers.name
    shell.exec(`git clone ${remote}`,(error, stdout, stderr) => {
      if(error) {
        console.error(`exec error: ${error}`)
        return
      }
      console.log(`${stdout}`)
      console.log(`${stderr}`)
    })
  })
}







program.version(require('./package.json').version);
program
  .command('init')
  .description('创建项目')
  .action(initAction)

program
  .command('show')
  .description('显示颜色')
  .action(()=>{
    console.log('我是黑色')
  })


program.parse(process.argv);



