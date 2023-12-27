# Next Meta Console

⚠️ This package is currently just a PoC. A lot of things might change in the future.

A small plugin to debug your Next.js [Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata).

![](https://raw.githubusercontent.com/nlswtlr/next-meta-console/main/demo.gif)

## Usage

Just add the plugin as following in your `app/layout.tsx` file:

```javascript
import NextMetaConsole from 'next-meta-console';
import 'next-meta-console/dist/main.css';

[...]

  <NextMetaConsole enabled={process.env.NODE_ENV === 'development'} />
</body>

[...]
```
