# Next Meta Console

A small plugin to debug your Next.js [Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata).

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
