/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '亲爱的LL同学, 早上好',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---

      城市🌆：{{city.DATA}}
      
      今天天气🌥️：{{tian_api_weather_weather_0.DATA}}

      明天天气🌥️：{{tian_api_weather_weather_1.DATA}}
      
      气温(最高/最低)🌡️:{{tian_api_weather_highest_0.DATA}} / {{tian_api_weather_lowest_0.DATA}}
      
      风向💨: {{tian_api_weather_wind_0.DATA}}
      
      风级🌬️: {{tian_api_weather_windsc_0.DATA}}

      明天日出时间☀️：{{tian_api_weather_sunrise_1.DATA}}

      今天日落时间🌙：{{tian_api_weather_sunset_0.DATA}}

      紫外线强度☄️：{{tian_api_weather_uv_index_0.DATA}}

      湿度💦：{{tian_api_weather_humidity_0.DATA}}%

      生活指示🌈：{{tian_api_weather_tips_0.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是我们在一起的第{{love_day.DATA}}天✨
      
      {{birthday_message.DATA}}
      
      ---

       每日一句(英）：{{wx_note_en_0.DATA}}{{wx_note_en_1.DATA}}{{wx_note_en_2.DATA}}{{wx_note_en_3.DATA}}{{wx_note_en_4.DATA}}{{wx_note_en_5.DATA}}

      每日一句（中）：{{wx_note_ch_0.DATA}}{{wx_note_ch_1.DATA}}{{wx_note_ch_3.DATA}}{{wx_note_ch_4.DATA}}
      
      每日情话：{{wx_earthy_love_words_0.DATA}}{{wx_earthy_love_words_1.DATA}}{{wx_earthy_love_words_2.DATA}}
      每日古诗： {{poetry_title.DATA}}   
      {{poetry_content.DATA}}

      今日课程：{{course_schedule.DATA}}

     全国热搜：{{tian_api_network_hot.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
