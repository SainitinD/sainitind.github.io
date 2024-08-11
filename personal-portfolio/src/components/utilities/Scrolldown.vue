<template>
    <div class="scrolldown"></div>
</template>

<style scoped>
.scrolldown {
	width: 28px;
	height: 50px;
	border: 3px solid #333;
	border-radius: 30px;
	position: relative;
	&::before {
		content: '';
		width: 6px;
		height: 6px;
		position: absolute;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);
		background-color: #174727;
		border-radius: 50%;
		opacity: 1;
		animation: wheel 2s infinite;
		-webkit-animation: wheel 2s infinite;
	}
}

@keyframes wheel {
	to {
		opacity: 0;
		top: 30px;
	}
}

@-webkit-keyframes wheel {
	to {
		opacity: 0;
		top: 30px;
	}
}
</style>