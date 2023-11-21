import React from 'react'

export default function Cart({ cart, handleDelete }) {
    // {cart} ~ lay ket cart ra từ object props

    // viết hàm render array cart
    let renderCart = () => {
        return cart.map(({ id, name, image, soLuong }) => {
            return (
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td><img src={image} style={{ width: 100 }} alt='' /></td>
                    <td>{soLuong}</td>
                    <td><button onClick={() => { handleDelete(id) }} className='btn btn-danger'>Delete</button></td>
                </tr>
            )
        })
    }
    return (
        <div className='col-8'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{renderCart()}</tbody>
            </table>
        </div>

    )
}
