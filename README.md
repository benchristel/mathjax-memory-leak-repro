# MathJax memory leak repro

When rendering math with `mathjax-full@3.2.2` and the `textmacros` package, MathJax leaks memory.

To repro the issue:

```
npm install # or yarn install
npm run dev # or yarn dev
```

Open http://127.0.0.1:5173/ in two Google Chrome tabs.

Click "Start tests without textmacros" in one, and "Start tests with textmacros" in the other.

Watch the "Memory" devtools tab. When rendering without textmacros, memory usage stays below 20MB.
When rendering with textmacros, memory usage quickly exceeds 20MB and continues climbing.
