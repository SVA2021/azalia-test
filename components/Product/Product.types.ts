export interface ProductProps {
    product: IProduct
    isFavorite: boolean
    isInBasket: boolean
    addToBasket: () => void
    addToFavorites: () => void
}

export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: IRating | null | undefined
}

export interface IRating {
    rate: number
    count: number
}