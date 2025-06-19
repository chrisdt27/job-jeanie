import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
