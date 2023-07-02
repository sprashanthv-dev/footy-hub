import { QueryClient } from "@tanstack/react-query";

const threeHours = 1000 * 60 * 60 * 3;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: threeHours
    }
  }
})

export default queryClient;