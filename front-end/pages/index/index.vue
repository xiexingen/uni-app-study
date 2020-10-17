<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots autoplay circular>
			<swiper-item v-for="item in swapers" :key="item.serial_no">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区 -->
		<view class="nav">
			<view class="nav-item">
				<view class="iconfont icon-chaoshi"></view>
				<text>XXG超市</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-xinxi"></view>
				<text>联系我们</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-tupian"></view>
				<text>社区图片</text>
			</view>
			<view class="nav-item">
				<view class="iconfont icon-shipin"></view>
				<text>学习视频</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swapers:[]
			}
		},
		created() {
				this.getSwapers();
		},
		methods: {
			async getSwapers(){
				const result=await this.$request({
					url:'home/getSwapers'
				})
				this.swapers=result;
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width:750rpx;
			height:375rpx;
			image{
				width:100%;
				height:100%;
			}
		}
		
		.nav{
			display: flex;
			.nav-item{
				width:25%;
				text-align: center;
				view{
					height:120rpx;
					width:120rpx;
					background-color: #a10b24;
					border-radius: 60rpx;
					margin:10rpx auto;
					line-height: 120rpx;
					color:#fff;
					font-size: 50rpx;
				}
				text{
					font-size:30rpx;
				};
			}
		}
	}
</style>
