import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get, remove } from "firebase/database";
import { v4 as uuid } from 'uuid'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DB_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
	signInWithPopup(auth, provider)
		.catch(console.error);
}

export function logout() { signOut(auth) }

export function onUserStateChange(callback) {
	onAuthStateChanged(auth, async (user) => {
		const updatedUser = user ? await adminUser(user) : null
		callback(updatedUser)
		localStorage.setItem('user', JSON.stringify(updatedUser))
	});
}

async function adminUser(user) {
	return get(ref(database), 'admins') //
		.then((snapshot) => {
			if (snapshot.exists() && user) {
				const admins = snapshot.val()
				const isAdmin = admins.admins[0] === user.uid
				return { ...user, isAdmin }
			}
			return user
		})
}

export default async function addNewProduct(product, image) {
	const id = uuid();
	return set(ref(database, `products/${id}`), {
		...product,
		id,
		price: parseInt(product.price),
		image,
		options: product.options.split(","),
	})
}

export async function getProducts() {
	return get(ref(database, 'products'))
		.then(snapshot => {
			const products = snapshot.val() || {}
			return products && Object.values(products).sort((a, b) => a.title.localeCompare(b.title))
		})
}

export async function getDetail(productId) {
	return get(ref(database, `products/${productId}`))
		.then(snapshot => {
			const details = snapshot.val() || {}
			return details

		})
}

export async function getCart(userId) {
	return get(ref(database, `cart/${userId}`)) //
		.then(snapshot => {
			const items = snapshot.val() || {}
			return Object.values(items).sort((a, b) => a.title.localeCompare(b.title))
		})
}

export async function addToCart(userId, product, qtyInCart) {
	return qtyInCart > 0
		? set(ref(database, `cart/${userId}/${product.id}`), { ...product, qty: product.qty + qtyInCart })
		: set(ref(database, `cart/${userId}/${product.id}`), product)
}

export async function updateCart(userId, product) {
	return set(ref(database, `cart/${userId}/${product.id}`), product)
}

export async function removeFromCart(userId, productId) {
	return remove(ref(database, `cart/${userId}/${productId}`))
}

export async function addToWishlist(userId, product) {
	return set(ref(database, `wishlist/${userId}/${product.id}`), product)
}

export async function removeFromWishlist(userId, productId) {
	return remove(ref(database, `/wishlist/${userId}/${productId}`))
}

export async function getWishlist(userId) {
	return get(ref(database, `wishlist/${userId}`)) //
		.then(snapshot => {
			const items = snapshot.val() || {}
			return Object.values(items).sort((a, b) => a.title.localeCompare(b.title))
		})
}