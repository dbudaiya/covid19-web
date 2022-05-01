import axios from 'axios'

const base = {
  baseUrl: 'http://api.tianapi.com',
  casenum: '/ncov/index',
  // casenum: "/txapi/ncovcity/index",
  ncovabroad: '/ncovabroad/index',
  // juheBaseUrl: "http://apis.juhe.cn",
  juheBaseUrl: '/api/travel',
  springTravel: '/springTravel/citys', // 这个天行数据炸了，我也不想为了一个api搞个实名认证。
}
interface Params {
  key: String
}

const api = {
  // 中国疫情
  getCaseNum(params: Params) {
    return axios.get(base.baseUrl + base.casenum, {
      params,
    })
  },
  // 抗击疫情数据
  getNcov() {
    return axios.get('api/news/wap/fymap2020_data.d.json')
  },
  // 世界疫情
  getNcovabroad(params: string) {
    return axios.get(base.baseUrl + base.ncovabroad, {
      params,
    })
  },
  // 各地政策
  springTravel(params: string) {
    return axios.get(base.juheBaseUrl + base.springTravel, {
      params,
    })
  },
}
export default api
