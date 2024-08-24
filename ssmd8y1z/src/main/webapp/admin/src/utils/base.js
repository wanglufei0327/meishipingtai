const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmd8y1z/",
            name: "ssmd8y1z",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmd8y1z/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序美食社区"
        } 
    }
}
export default base
