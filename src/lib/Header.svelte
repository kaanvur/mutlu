<script>
	import { page } from '$app/stores';
const menuItems = [
  {
    text: 'Anasayfa',
    href: '/',
  },
  {
    text: 'Blog',
    href: '/blog',
   
  },
  {
    text: 'Foto Galeri',
    href: '/foto-galeri',
    children: [
      {
        text: 'Kamp & Doğa',
        href: '/foto-galeri/kamp-doga',
      },
      {
        text: 'Ülkeler',
        href: '/foto-galeri/ulkeler',
      },
      {
        text: 'Şehirler',
        href: '/foto-galeri/sehirler',
      },
    ],
  },
  {
    text: 'İletişim',
    href: '/iletisim',
   
  },
];

</script>

<header>

	<nav data-sveltekit-preload-data="tap">
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
<ul>
  {#each menuItems as item}
    <li aria-current={$page.url.pathname === item.href ? 'page' : undefined}>
      <a href="{item.href}">{item.text}</a>
			{#if item.children}
        <ul>
          {#each item.children as child}
            <li aria-current={$page.url.pathname === child.href ? 'page' : undefined}>
              <a href="{child.href}">{child.text}</a>
            </li>
          {/each}
        </ul>
      {/if}
    </li>
  {/each}
</ul>

		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>


</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding:0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}
	ul ul {
		display:none;
	}
	ul li:hover ul {
		position: absolute;
		display:block;
		height: auto;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		align-items: center;
		padding: 1rem 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
