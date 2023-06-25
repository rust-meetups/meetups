<script lang="ts">
  import 'reveal.js/plugin/highlight/monokai.css';
  import type Reveal from 'reveal.js';
  import { onMount } from 'svelte';
  import Presentation from '../../../../lib/Presentation.svelte';
  import Slide from '../../../../lib/Slide.svelte';

  import FrontPage from './slides/FrontPage.svelte';

  let config: Reveal.Options = {};

  onMount(async () => {
    const Highlight = (await import('reveal.js/plugin/highlight/highlight')).default;
    const Markdown = (await import('reveal.js/plugin/markdown/markdown')).default;
    const MathReveal = (await import('reveal.js/plugin/math/math')).default;
    const RevealNotes = (await import('reveal.js/plugin/notes/notes')).default;

    // trigger change
    // read about svelte binding
    config = {
      plugins: [Highlight, RevealNotes, Markdown, MathReveal],
      hash: true,
      mathjax2: {
        config: 'TeX-AMS_HTML-full',
        // @ts-ignore
        TeX: {
          Macros: {
            R: '\\mathbb{R}',
            set: ['\\left\\{#1 \\; ; \\; #2\\right\\}', 2]
          }
        }
      }
    };
  });
</script>

<Presentation {config}>
  <FrontPage />

  <Slide>
      <h2>Another page!</h2>
  </Slide>
</Presentation>
