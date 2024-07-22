import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '../Contexts/AuthContext';
import {
    addToWishlist,
    getWishlist,
    removeFromWishlist,
} from '../API/firebase';

export default function useWishlist() {
    const { uid } = useAuthContext();
    const queryClient = useQueryClient();

    const wishlistQuery = useQuery({
        queryKey: ['wishlist', uid],
        queryFn: () => getWishlist(uid),
    });

    const addWishItem = useMutation({
        mutationFn: (product) => addToWishlist(uid, product),
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ['wishlist', uid],
                refetchType: 'all',
            });
        },
    });

    const removeWishItem = useMutation({
        mutationFn: (id) => removeFromWishlist(uid, id),
        onSuccess: async () => {
            queryClient.invalidateQueries({
                queryKey: ['wishlist', uid],
                refetchType: 'all',
            });
        },
    });

    return { wishlistQuery, addWishItem, removeWishItem };
}
