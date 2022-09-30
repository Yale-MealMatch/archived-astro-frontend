<script lang="ts">
  import { RadioGroup, RadioGroupLabel, RadioGroupOption, RadioGroupDescription } from '@rgossiaux/svelte-headlessui';

  const plans = [
    {
      name: 'Startup',
      ram: '12GB',
      cpus: '6 CPUs',
      disk: '160 GB SSD disk',
    },
    {
      name: 'Business',
      ram: '16GB',
      cpus: '8 CPUs',
      disk: '512 GB SSD disk',
    },
    {
      name: 'Enterprise',
      ram: '32GB',
      cpus: '12 CPUs',
      disk: '1024 GB SSD disk',
    },
  ];

  let selected = plans[0];
</script>

<div class="w-full px-4 py-16">
  <div class="mx-auto w-full max-w-md">
    <RadioGroup value={selected} on:change={(e) => console.log(e)}>
      <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
      {#each plans as plan}
        <div class="space-y-2">
          <RadioGroupOption value={plan} let:checked let:active>
            <div
              class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none {active
                ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                : ''} {checked ? 'bg-sky-900 bg-opacity-75 text-white ' : 'bg-white'}"
            >
              <div class="flex w-full items-center justify-between">
                <div class="flex items-center">
                  <div class="text-sm">
                    <RadioGroupLabel as="p" class="font-medium {checked ? 'text-white' : 'text-gray-900'}">
                      {plan.name}
                    </RadioGroupLabel>
                    <RadioGroupDescription as="span" :class="checked ? 'text-sky-100' : 'text-gray-500'" class="inline">
                      <span> {plan.ram}/{plan.cpus}</span>
                      <span aria-hidden="true"> &middot; </span>
                      <span>{plan.disk}</span>
                    </RadioGroupDescription>
                  </div>
                </div>
                {#if checked}
                  <div class="shrink-0 text-white">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
                      <path
                        d="M7 13l3 3 7-7"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                {/if}
              </div>
            </div>
          </RadioGroupOption>
        </div>
      {/each}
    </RadioGroup>
  </div>
</div>
