
import '../sass/userTable.scss'

const UserTable = () => {
    return(
        <div className="tableContainer">
            <table className="userTable">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>ali</td>
                    <td>ali@gmail.commmmmmmmmmmmmmm</td>
                    <td>+8976455468</td>
                    <td>42</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>veliiiiiii ahmetttttttttttt</td>
                    <td>ali@gmail.com</td>
                    <td>+8976455463218</td>
                    <td>42</td>
                </tr>
            </table>
        </div>
    )
}

export default UserTable