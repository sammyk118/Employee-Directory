import React from "react";
import Card from "./card"

function Directory(props) {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map((employee, index) => {
                    return (
                        <Card
                            firstName={employee.name.first}
                            lastName={employee.name.last}
                            email={employee.email}
                            image={employee.picture}
                            title={employee.name.title}
                            number={employee.phone}
                            birthday={employee.dob.date}
                            age={employee.dob.age}
                            key={index}
                            id={index}
                        />
                    )
                })
                }
            </tbody>
        </table>
    )
}

export default Directory;