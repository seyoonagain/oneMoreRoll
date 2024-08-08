import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import addNewProduct, { getProducts } from '../API/firebase';

export default function useProducts() {
    const queryClient = useQueryClient();

    const productsQuery = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
    });

    const addProduct = useMutation({
        mutationFn: ({ product, url }) => addNewProduct(product, url),
        onSuccess: async () =>
            await queryClient.invalidateQueries({
                queryKey: ['products'],
                refetchType: 'all',
            }),
    });

    return { productsQuery, addProduct };
}
