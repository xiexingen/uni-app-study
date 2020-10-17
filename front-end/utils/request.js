const BASE_URL='http://localhost:10000/api/'
const request=({url,method='get'})=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:`${BASE_URL}${url}`,
			method,
			success(reponse) {
				resolve(reponse.data);
			},
			fail(reponse) {
				uni.showToast({
					title:'网络开小差啦!!!'
				})
				reject(reponse)
			}
		})
	})
}

export default request;