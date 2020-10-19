<template>
	<view class="contact">
		<image class="about" src="../../static/images/pages/about.jpg"></image>
		<view class="info">
			<view @click="callPhone">联系电话: 18569690930 (点击拨打)</view>
			<view>联系地址:湖南省长沙市岳麓区润泽园D区X栋XXX室</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale" ></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:112.932166,
				latitude:28.221959,
				scale:18,
				markers:[
					{
						longitude:112.932166,
						latitude:28.221959,
						iconPath:'../../static/images/pages/xxg.png',
						width:30,
						height:30,
						callout:{
							content:'目标所在地',
							display:'ALWAYS',
							borderRadius:5,
							bgColor:'#ff0000'
						}
					}
				]
			};
		},
		methods:{
			callPhone(){
				uni.makePhoneCall({
					phoneNumber:'18569690930'
				})
			}
		}
	}
</script>

<style lang="scss">
 .contact{
	 .about{
		 width: 750rpx;
		 height:330rpx;
	 }
	 .info{
		 padding:10rpx 20rpx;
		 font-size:30rpx;
		 view{
			 line-height: 80rpx;
			 border-bottom: 1px solid $uni-border-color;
		 }
	 }
	 .map{
		 width:750rpx;
		 height:750rpx;
	 }
 }
</style>
