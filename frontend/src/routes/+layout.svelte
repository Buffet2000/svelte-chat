<script>
  // export let data;
  import "../app.css";
  // import { goto, invalidateAll } from "$app/navigation";
  
  const base = process.env.NODE_ENV === 'production' ? '/chat' : '';
  
</script>

<div id="app">
  <slot />
</div>

