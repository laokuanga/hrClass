
// 缓存token
export default  {

	// 公共参数
	common : {
		// 请求根地址
		baseUrl : 'http://hrclass.cdzqcloud.com/api/',
		// 请求方式
		method:'GET',
		// 请求参数
		data:{},
		// 请求头
		header:{
		'Content-Type':'application/json' ,
		// 'Authori-zation':uni.getStorageSync('token')
		},
		// 类型
		dataType:'json',
	},   
	
	// 请求方法
	request(options = {}){
		options.url = this.common.baseUrl + options.url // 请求地址
		options.header = {
			'Content-Type':'application/json' ,
			// 'Authori-zation':uni.getStorageSync('token')
		},
		options.data = options.data || this.common.data // 请求数据
		options.method = options.method || this.common.method // 请求方式
		options.dataType = options.dataType || this.common.dataType // 请求类型
		// 异步返回  
		return new Promise((res,rej)=>{
			// 请求之前验证...
			// // token验证
			// if(options.token){
			// 	let token = uni.getStorageSync('token') // vuex  获取全局token || 缓存token
			// 	options.header.Authori-zation = 'Bearer ' + token  
			// 	// 二次验证
			// 	if (!token) {
			// 		uni.showToast({ title: '请先登录', icon: 'none' });
			// 		// token不存在时跳转
			// 		// uni.navigateTo({
			// 		// 	url: '/pages/login/login',
			// 		// });
			// 		return false
			// 	}
				
				
			
			// 加载中
			wx.showLoading({
				title:'加载中'
			})
			
        // 请求中...
		    wx.request({
		        ...options,
		        success: (result) => {
              // 关闭加载
              wx.hideLoading()
              let data = result.data
              res(data)
		        },
		        fail: (error) => {
					// 关闭加载
					wx.hideLoading()
					wx.showToast({
						title:'请求失败',
						icon:'none'
					})
		            // uni.showToast({ title: error.errMsg || '请求失败', icon: 'none' });
		            return false
		        }
		    });
		})
		
	},
	// get请求
	get(url,data = {},options = {}){
	    options.url = url
	    options.data = data
	    options.method = 'GET'
	    return this.request(options)
	},
	// post请求
	post(url,data = {},options = {}){
	    options.url = url
	    options.data = data
	    options.method = 'POST'
	    return this.request(options)
	},

	 // 公共接口调用
    // userauth(to_page){
    //   let token = uni.getStorageSync('token')
    //   if(!token){
    //     uni.showToast({
    //       title:'登录后查看更多内容!',
    //       icon:'none'
    //     })
    //   }else{
    //     uni.navigateTo({
    //       url:to_page
    //     })
    //   }
    // }

	
	
}




	
	