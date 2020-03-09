import React, { Component } from 'react'
import { getData } from '../../api/info'
import { Table, Pagination ,Button} from 'antd'

const columns = [
    {
        title: '品牌',
        dataIndex: 'brand',
        width: "10%",
        // fixed: 'left'
        // key: 'stock',
    },
    {
        title: '产品',
        dataIndex: 'proname',
        width: "20%"
    },
    {
        title: '价格',
        dataIndex: 'price',
        width: "10%"
    },
    {
        title: '图片',
        dataIndex: 'proimg',
        // key: 'stock'
        width: '10%',
        render(data) {
            return <img src={data}></img>
        }
    },
    {
        title: '配置',
        dataIndex: 'note',
        width: "35%"
        // ellipsis:true
    },
    {
        title: '操作',
        width: "15%",
        dataIndex: 'stock',
        // key:1,
        render(key) {
            return (
                <>
                    <Button onClick={(e)=>{
                        console.log('dataIndex',key)
                    }}>删除</Button>
                    <Button>修改</Button>
                </>
            )
        }
        // ellipsis:true
    },
];


class AddList extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            bool: false
        }
    }
    componentDidMount() {
        this.getlist(1)
    }
    getlist(page, pageSize = 5) {
        this.setState({ bool: !this.state.bool })
        getData(page, pageSize).then(res => {
            console.log(res)
            this.setState({ dataSource: res.data })
            this.setState({ bool: !this.state.bool })
        })
    }
    change(page, pageSize) {
        this.getlist(page, pageSize)
    }
    del(params=1) {
        console.log(...params)
    }
    render() {
        let { dataSource, bool } = this.state
        return (
            <div>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    rowKey='stock'
                    scroll={{ y: 400, x: 600 }}
                    pagination={false}
                    loading={bool}
                />;
                <Pagination
                    showQuickJumper={true}
                    simple
                    defaultCurrent={1}
                    pageSize={5}
                    total={50}
                    onChange={this.change.bind(this)}
                >
                </Pagination>
            </div>
        )
    }
}
export default AddList