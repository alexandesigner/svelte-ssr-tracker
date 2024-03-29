import { onPageLoad } from 'meteor/server-render';
import App from '/components/App.svelte';

onPageLoad(() => {
  new App({
    target: document.querySelector('#main'),
    props: INITIAL_STATE,
    hydrate: true
  });
});
