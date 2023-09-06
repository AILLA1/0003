/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  USE_PASSAGE: 'push-plus',

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '广东',
  CITY: '白云',

  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: true,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: true,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: true,
  },
  
  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '8ab5ea3de3a982eccbd6142774750f14',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: true,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 3,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 10,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  
  },

  USERS: [
    {
      // 想要发送的人的名字
      name: 'LL同学',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '2eb4c08621104002a23e6b635013af3e',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: 'YY', year: '2004', date: '09-11',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: 'LL', year: '2004', date: '07-04',
        },
        {
          type: '纪念日', name: '恋爱纪念日', year: '2022', date: '01-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-01-01' },
      ],
       // 课表
        courseSchedule: {
        // 单双周的基准
        benchmark: {
          // 这里设置一个日期，用来作为判断课表是否单双周的依据
          date: '2023-09-06',
          // 该日期是否为单周
          isOdd: true
        },
        // 课表
        courses: {
          // 单周课表
          // 从星期一到星期日（星期六和星期日的课表数组可不填写）
          odd: [
            // 例子，周一的课表
            [
              
            ],
            // 周二
            [
              '18:30-20:00 主题班会，班级建设，入学适应教育（各班课室）'
            ],
            // 周三
            [
              '08:30-12:00 护理专业教育及护理专业新生方向分流讲座(另行通知）',
              '14:00-16:20 教材发放（综合楼B309）'
            ],
            // 周四
            [
              '8:00-8:20 朝花夕拾（B402）'
              '8:30-9:50 信息技术基础'
              '10:10-10:50 信息技术基础'
              '11:10-11:50 信息技术基础'
              '13:40-16:20 体育'
              '19:00-21:00 晚修（B402)'
              '18:30-19:30 校情校史教育（饭堂四楼师生活动中心）'
            ],
            // 周五
            [
              '08:30-16:30 新生体检（综合楼一楼大厅）'
            ],
            //周六
             [
               
             ],
            //周日
             [

             ]
           ],
          // 双周课表
          even: [
            //周一
            [
              '18:30-19:30 教学管理和学籍管理讲座（饭堂四楼师生活动中心）'
            ],
            //周二
            [
              '18:30-19:30 学生管理与社团工作专题讲座（饭堂四楼师生活动中心）'
            ],
            //周三
            [
              '18:30-19:30 食堂管理与服务，医疗保健服务，图书馆管理规则与信息利用讲座（饭堂四楼师生活动中心）'
            ],
            //周四
            [
              '08:00-12:00 信息技术基础',
              '13:40-16:20 体育'
            ],
            //周五
            [
              '13:40-15:00 护士职业素养',
              '15:30-16:20 习近平新时代中国特色社会主义思想概论'
            ],
            //周六
            [
              
            ],
            //周日
            [
              
            ]
          ]
        }
      },
    },
  ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG
