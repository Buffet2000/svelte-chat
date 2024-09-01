<script>
  import "../app.css";
  import { readable } from 'svelte/store';
  import client from "src/client";

  export const apolloClientStore = readable(client);  
</script>

<div id="app">
  <slot />
</div>

