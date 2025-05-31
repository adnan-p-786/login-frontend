import { Divider, Table, TableColumnsType } from "antd";
import { useQuery } from "react-query";
import { getUser } from "../apis/users/userApi";


interface DataType {
  key: React.Key;
  name: string;
  email: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  }
];

function Users() {
  const { data, isLoading,} = useQuery("getUser", getUser)

  return (
    <div>
      <Divider>Users</Divider>
      <Table 
      columns={columns} 
      dataSource={data?.data} 
      loading={isLoading}
      size="middle" />
    </div>
  )
}

export default Users