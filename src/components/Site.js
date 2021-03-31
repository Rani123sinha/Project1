import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import './Site.css';

class Site extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            isLoading: false,
            iserror: false
        }
       /* componentDidMount().than((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });*/
    }
    //async function get request

    async componentDidMount() {
        this.setState({ isLoading: true })

        const response = await fetch("https://sheetdb.io/api/v1/h5dvu1zywij8q");

        if (response.ok) {
            const users = await response.json()
            console.log(users)
            this.setState({ users, isLoading: false })
        } else {
            this.setState({ isError: true, isLoading: false })
        }
     

    }

    renderTableHeader() {
            return (Object.keys(this.state.users[0]).map((attr) => {
            return <th key="{attr}">{attr.toUpperCase()}</th>;
            //return "<th>";
        }));
        //useSortBy//
    }



    renderTableRows() {
        //this.state.users(column.getSortByToggleprops())//
        return this.state.users.map(user => {
            return (
                <div style='width: 500px; height: 200px;'>
                <tr key={user.ID}>
                    <td>{user.Name}</td>
                    <td>{user.Location}</td>
                    <td>{user.Devices}</td>
                    <td>{user.LastServicedDate}</td>
                    <td>{user.ServiceDueDate}</td>
                    <td>{user.Devices}</td>
                    <td>{user.Contact}</td>
                    </tr>
                    </div>
            )
        })
    }

    createTable(users) {
        const columns = [
            {
                name: 'ID',
                selector: 'ID',
                sortable: true,
                left: true,
            },
            {
                name: 'Name',
                selector: 'Name',
                sortable: true,
                left: true,
            },
            {
                name: 'Location',
                selector: 'Location',
                sortable: true,
                left: true,
            },
            {
                name: 'Devices',
                selector: 'Devices',
                sortable: true,
                left: true,
            },
            {
                name: 'LastServicedDate',
                selector: 'LastServicedDate',
                sortable: true,
                left: true,
            },
            {
                name: 'ServiceDueDate',
                selector: 'ServiceDueDate',
                sortable: true,
                left: true,
            },
            {
                name: 'Devices',
                selector: 'Devices',
                sortable: true,
                left: true,
            },
            {
                name: 'Contact',
                selector: 'Contact',
                sortable: true,
                left: true,
            },


        ];
        return (<DataTable
            
            columns={columns}
            data={users}
        />);
    }

    render() {
        const { users, isLoading, isError } = this.state

        if (isLoading) {
            return <div>Loading...</div>
        }
        if (isError) {
            return <div>Error...</div>
        }
        return users.length > 0
            ? (
                this.createTable(users)
            ) : (
                <div>No Users</div>

            )
    }
}
    export default Site;

















