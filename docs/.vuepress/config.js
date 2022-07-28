/*
 * @Description: 配置页面
 * @Version: 2.0
 * @Autor: 吕玲
 * @Date: 2022-07-06 20:49:03
 * @LastEditors: Seven
 * @LastEditTime: 2022-07-28 11:44:56
 */
module.exports = {
  base: '',
  head: [
    ['link', { rel: 'icon', href: `/public/image/avatar.jpg` }]
  ],
  title: 'QianXi Blog',
  description: 'qianxi blog',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'guide', link: '/guide/js/' }
    ],
    sidebar: [
      ['/guide/js/JavaScript进阶', 'js'],
      ['/guide/other/随笔', '随笔']
    ]
  }
}