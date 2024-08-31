<script>
  import "../app.css";
  import { readable } from 'svelte/store';
  import client from "../client";

  export const apolloClientStore = readable(client);  
</script>

<div id="app">
  <slot />
</div>

