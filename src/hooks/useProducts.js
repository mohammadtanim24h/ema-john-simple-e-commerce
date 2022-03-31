import { useEffect, useState } from "react"

let count = 0
const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log('this is from use product hook', count)
    count++
    return [products, setProducts];
}

export default useProducts;