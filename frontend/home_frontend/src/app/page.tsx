'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const queryClient = new QueryClient();

export default function Home() {
  const router = useRouter();

  const handleHome = () =>
  {
    router.push('/home')
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to X1 Real Estate</h1>

          <button
            className="btn btn-primary"
            onClick={handleHome}
          >
            Go to Homes
          </button>
        </div>
      </div>
    </QueryClientProvider>
  );
}
