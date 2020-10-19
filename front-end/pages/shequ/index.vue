<template>
	<view class="shequ">
		<scroll-view class="left" scroll-y>
			<view v-for="(item,index) in menus" :key="index" class="menu-item" :class="index==1?'active':''" >{{item}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item">
				<image src="http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/126362/30/986/198724/5eb8d485E656bea31/649f6df5d9ee7087.jpg"></image>
				<text>卡萨丁复健科拉啥进度付款了就</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menus:[
					'家居生活','摄影设计','明星美女','空间设计','户型装饰','广告摄影','摄影器材',
					'明星写真','清纯甜美','古典美女','电子数码','笔记本电脑','办公器材','户外道具'
				]
			};
		}
	}
</script>

<style lang="scss">
	page{
		height:100%;
	}
	.shequ {
		height: 100%;
		display: flex;
		.left{
			height: 100%;
			width:180rpx;
			border-right:1px solid $uni-border-color;
			
			.menu-item{
				height:45px;
				line-height: 45px;
				color:#333333;
				text-align: center;
				font-size: 30rpx;
				border-top:1px solid $uni-border-color;
			}
			
			.menu-item.active{
				background-color: $uni-color-primary;
				color: $uni-bg-color;
			}
		}
		.right{
			height:100%;
			width:540rpx;
			margin:10rpx auto;
			.item{
				image{
					width:540rpx;
					height:540rpx;
					border-radius:5px;
				}
				text{
					font-size: 30rpx;
					line-height: 60px;
				}
			}
		}
	}
</style>
