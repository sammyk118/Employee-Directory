import React from "react";

function Card(props) {
    return (
        <tr>
            <th scope="row"><img src={props.image.medium}></img></th>
            <td>{ props.firstName}</td>
            <td>{ props.lastName}</td>
            <td>{ props.email}</td>
        </tr>
    )
}

export default Card