<script lang="ts">
export let items
export let selectName
</script>
<fieldset>
  <legend class="contents text-base font-medium text-gray-900">What year are you?</legend>
  <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
  <div class="mt-4 space-y-4">
	{#each items as item}
		<div class="flex items-center">
			<input
				id={item.id}
				name={selectName}
				type="radio"
				class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
			/>
			<label for={item.id} class="ml-3 block text-sm font-medium text-gray-700">
				{item.label}
			</label>
		</div>
	{/each}
  </div>
</fieldset>
