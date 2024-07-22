import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
    addToCart,
    getCart,
    updateCart,
    removeFromCart,
} from '../API/firebase';
import { useAuthContext } from '../Contexts/AuthContext';

export default function useCart() {
    const { uid } = useAuthContext();
    const queryClient = useQueryClient();

    const cartQuery = useQuery({
        queryKey: ['cart', uid],
        queryFn: () => getCart(uid),
    });
    const { data: inCart } = cartQuery && cartQuery;

    const addItem = useMutation({
        mutationFn: (product) => {
            if (
                inCart.length === 0 ||
                !inCart.some((item) => item.id === product.id)
            ) {
                addToCart(uid, product);
            } else {
                const qtyInCart = inCart.filter(
                    (item) => item.id === product.id
                )[0].qty;
                addToCart(uid, product, qtyInCart);
            }
        },
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ['cart', uid],
                refetchType: 'all',
            });
        },
    });

    const updateItem = useMutation({
        mutationFn: (product) => updateCart(uid, product),
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ['cart', uid],
                refetchType: 'all',
            });
        },
    });

    const removeItem = useMutation({
        mutationFn: (id) => removeFromCart(uid, id),
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ['cart', uid],
                refetchType: 'all',
            });
        },
    });

    return { cartQuery, addItem, updateItem, removeItem };
}
