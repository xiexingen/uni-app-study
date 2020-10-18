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
			<view class="nav-item" v-for="(item,index) in navs" :key="index" @click="navigateTo(item.page)">
				<view class="iconfont" :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot-goods">
			<view class="title">推荐商品</view>
			<good-list :dataSource="goods" />
		</view>
	</view>
</template>

<script>
	import GoodList from '@/components/good-list/index';
	export default {
		components: {
			'good-list':GoodList
		},
		data() {
			return {
				// 轮播图
				swapers:[],
				// 商品列表
				goods:[],
				// 导航栏
				navs:[
					{
						title:'XXG超市',
						icon:'iconfont icon-chaoshi',
						page:'/pages/goods/index'
					},
					{
						title:'联系我们',
						icon:'iconfont icon-xinxi',
						page:'/pages/contact/index'
					},
					{
						title:'社区图片',
						icon:'iconfont icon-tupian',
						page:'/pages/shequ/index'
					},
					{
						title:'学习视频',
						icon:'iconfont icon-shipin',
						page:'/pages/video/index'
					}
				]
			}
		},
		created() {
				this.getSwapers();
				this.getGoods(1);
		},
		methods: {
			async getSwapers(){
				const result=await this.$request({
					url:'home/getSwapers'
				})
				this.swapers=result;
			},
			async getGoods(page){
				const result=await this.$request({
					url:`good/getGoods?page=${page}`
				});
				this.goods=result;
			},
			navigateTo(page){
				uni.navigateTo({
					url:page
				})
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
					background-color: $uni-color-primary;
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
		
		.hot-goods{
			background-color: $uni-bg-color-grey;
			>.title{
				height:50px;
				line-height: 50px;
				color:$uni-color-primary;
				text-align: center;
				letter-spacing: 20rpx;
				background-color: $uni-bg-color;
				border-top:6px solid $uni-border-color;
				border-bottom:6px solid $uni-border-color;
			}
		}
	}
</style>
