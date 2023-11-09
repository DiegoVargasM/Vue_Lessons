<template>
	<div class="backdrop" ref="backdrop">
		<div class="modal" :class="{sale: theme === 'sale'}" @click="closeModal" ref="modal">
			<h1>{{header}}</h1>
			<p>{{text}}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Modal',
	methods: {
		closeModal() {
			this.$refs.modal.style.display = 'none'
			this.$refs.backdrop.style.display = 'none'
		}
	},
	props: ['header', 'text', 'theme']
}
</script>


<style scoped>
	.modal {
		width: 400px;
		padding: 20px;
		background: white;
		margin: 100px auto;
		border-radius: 10px;
	}
	.backdrop {
		top: 0;
		left: 0;
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}

	h1 {
		color: rgb(35, 185, 110);
		border: none;
		padding: 0;
	}

	.modal p {
		font-style: normal;
	}

	.modal.sale {
		background: crimson;
		color: white
	}

	.modal.sale h1 {
		color: white;
	}
</style>