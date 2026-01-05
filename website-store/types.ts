export interface Banner {
    id: string
    label: string
    imageUrl: string
}

export interface Category {
    id: string
    name: string
    banner: Banner
}