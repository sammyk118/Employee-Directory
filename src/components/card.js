import React from "react";

function Card(props) {
    return (
        <tr>
            <th scope="row"><img src={props.image.medium}></img></th>
            <td>{ props.firstName}</td>
            <td>{ props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.number}</td>
            <td>{props.birthday} ({props.age})</td>
        </tr>
    )
}

export default Card