<template>
	<view class="new-detail">
		<view class="title">{{model.title}}</view>
		<view class="info">
			<text>发表时间: {{model.publish_time}}</text>
			<text>浏览:{{model.view}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="model.detail" ></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				model: {}
			};
		},
		async onLoad(options) {
			this.id = options.id;
			const result = await this.getNew(this.id);
			this.model = result;
		},
		methods: {
			async getNew(id) {
				const result = await this.$request({
					url: `new/getNew?id=${id}`
				});
				return result;
			}
		}
	}
</script>

<style lang="scss">
	.new-detail {
		font-size: 30rpx;
		padding:0 20px;
		.title{
			width:710rpx;
			display: block;
			margin:20rpx 0;
		}
		.info{
			display: flex;
			justify-content: space-between;
		}
		.content{
			margin-top: 10px;
		}
	}
</style>
