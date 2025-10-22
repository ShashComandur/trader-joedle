<script lang="ts">
	import { goto } from '$app/navigation';
	import { toast } from '@zerodevx/svelte-toast';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	let password = '';
	let showPassword = false;

	async function handleSubmit() {
		try {
			const response = await fetch('/api/auth', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ password })
			});

			if (response.ok) {
				goto('/');
			} else {
				toast.push(`<div class="font-lato">Incorrect password. Try again!</div>`, {
					theme: {
						'--toastColor': '#ffffff',
						'--toastBackground': '#dc143c',
						'--toastBarBackground': '#ffffff'
					}
				});
				password = '';
			}
		} catch (error) {
			toast.push(`<div class="font-lato">Something went wrong. Please try again!</div>`, {
				theme: {
					'--toastColor': '#ffffff',
					'--toastBackground': '#dc143c',
					'--toastBarBackground': '#ffffff'
				}
			});
			password = '';
		}
	}

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}
</script>

<svelte:head>
	<title>Trader Joedle</title>
</svelte:head>

<SvelteToast />

<div class="flex justify-center items-center min-h-[80vh]">
	<div
		class="border border-gray-200 rounded-lg shadow dark:border-gray-700 font-poly tracking-tight bg-[#FFFFFF] p-8 max-w-lg w-full mx-4"
	>
		<div class="text-center mb-8">
			<h1 class="font-traderjoes text-4xl text-crimson mb-4">🔒 Password Required</h1>
			<p class="font-lato text-gray-600">
				This site is currently password protected. Please enter the access code to continue.
			</p>
		</div>

		<form on:submit|preventDefault={handleSubmit} class="space-y-6">
			<div>
				<label for="password" class="block text-md font-medium text-gray-700 mb-2">
					Access Code
				</label>
				<div class="relative">
					{#if showPassword}
						<input
							id="password"
							type="text"
							bind:value={password}
							placeholder="Enter access code"
							class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-crimson focus:border-crimson font-mono"
							required
						/>
					{:else}
						<input
							id="password"
							type="password"
							bind:value={password}
							placeholder="Enter access code"
							class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-crimson focus:border-crimson font-mono"
							required
						/>
					{/if}
					<button
						type="button"
						on:click={togglePasswordVisibility}
						class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
					>
						{showPassword ? '🙈' : '👁️'}
					</button>
				</div>
			</div>

			<button
				type="submit"
				class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#ffffff] bg-[#dc143c] hover:bg-red-700 hover:text-[#ffffff] hover:shadow-xl hover:scale-105 active:scale-95 transform transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 group"
			>
				<span class="group-hover:animate-pulse">🔓</span>
				<span class="ml-2 font-lato font-bold">GET ME IN!</span>
			</button>
		</form>

		<div class="mt-6 text-center">
			<p class="text-md text-gray-500 font-lato">
				This site is temporarily restricted while we resolve some legal matters. If you're supposed
				to have access, you know the code 😉
			</p>
		</div>
	</div>
</div>

<style>
	.bg-crimson {
		background-color: #dc143c;
	}

	.focus\:ring-crimson:focus {
		--tw-ring-color: #dc143c;
	}

	.focus\:border-crimson:focus {
		border-color: #dc143c;
	}
</style>
