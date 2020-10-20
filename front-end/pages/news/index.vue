<template>
	<view>
		<new-list :dataSource="news" @view-detail="viewDetail"></new-list>
	</view>
</template>

<script>
	import NewList from '@/components/new-list/index';
	export default {
		data() {
			return {
				news:[]
			};
		},
		components:{
			'new-list':NewList
		},
		async created() {
			const news=await this.getNews();
			this.news=news;
		},
		methods:{
			async getNews(){
				const result=await this.$request({
					url:'new/getNews?page=1'
				});
				return result;
			},
			viewDetail(id){
				uni.navigateTo({
					url:`/pages/news/detail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	
</style>
