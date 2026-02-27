import path from 'path';
import { pathToFileURL } from 'url';

export async function resolve(specifier, context, nextResolve) {
  if (specifier === 'next/server') {
    return {
      shortCircuit: true,
      url: pathToFileURL(path.resolve('./test/mocks/next-server.js')).href,
    };
  }

  // Also handle the relative import issue we saw earlier ("../../data/apis" -> needs .ts)
  // We can intercept the import from the route file and append .ts if missing
  // The error was: ERR_MODULE_NOT_FOUND for '.../data/apis'

  if (specifier.endsWith('/data/apis') && !specifier.endsWith('.ts')) {
      // Resolve it relative to parent
      // context.parentURL is the file doing the importing (route.ts)
      const parentPath = new URL(context.parentURL).pathname;
      if (parentPath.includes('app/api/proxy/route.ts')) {
          // We know where it is relative to route.ts
          return {
              shortCircuit: true,
              url: pathToFileURL(path.resolve('./app/data/apis.ts')).href,
          };
      }
  }

  return nextResolve(specifier, context);
}
