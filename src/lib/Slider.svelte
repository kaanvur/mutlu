<script>
  import Image from '$lib/imageView.svelte';
  
  export let data = '';
  let currentSlideIndex = 0;

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % data.length;
  }

  function previousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + data.length) % data.length;
  }
</script>

<style>
  .slider-container {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 300px;
    position: relative;
  }

  .slider {
    display: flex;
    transition: transform 0.3s ease;
    width: 100%;
    height: 100%;
  }

  .slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
		position: relative;
  }
	.welcome-text {
		position: absolute;
		left:10%;
		top:10%;
		width:60%;
	}
</style>

<div class="slider-container">
  {#if data.length > 0}
    <div class="slider" style="transform: translateX(-{currentSlideIndex * 100}%)">
      {#each data as slide, i}
        <div class="slide">
				<div class="welcome-text">{@html slide.welcome_text}</div>
        <Image image={slide} style="width:100%"/>
				</div>
      {/each}
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</div>

<div>
  <button on:click={previousSlide}>Previous</button>
  <button on:click={nextSlide}>Next</button>
</div>
