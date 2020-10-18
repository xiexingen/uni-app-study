<template>
	<view>
		<view class="good-list">
			<view class="good-item" v-for="item in dataSource" :key="item._id">
				<image :src="item.main_image"></image>
				<view class="price">
					<text>￥{{item.price}}</text>
					<text>￥{{item.old_price}}</text>
				</view>
				<view class="title">{{item.title}}</view>
			</view>
		</view>
		<xw-empty v-if="dataSource.length" text="暂无商品数据" textColor="#777777"></xw-empty>
	</view>
</template>

<script>
	export default {
		props:['dataSource']
	}
</script>

<style lang="scss">
	.good-list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		>.good-item {
			background-color: $uni-bg-color;
			padding: 10rpx;
			width: 355rpx;
			margin: 10rpx 0;
			box-sizing: border-box;

			image {
				width: 80%;
				height: 150px;
				display: block;
				margin: 0 auto;
			}

			>.price {
				color: $uni-color-primary;
				font-size: 36rpx;
				margin: 20rpx 0 10rpx 0;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 18rpx;
					text-decoration: line-through;
				}
			}

			>.title {
				font-size: 28rpx;
				line-height: 50rpx;
				padding: 15rpx 0 10rpx 0;
				white-space: normal;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
		}
	}
</style>
