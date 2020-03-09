import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'
// var option = {
//     // title: {
//     //     text: 'ECharts 入门示例'
//     // },
//     // tooltip: {},
//     // legend: {
//     //     data: ['销量']
//     // },
//     // xAxis: {
//     //     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
//     // },
//     // yAxis: {},
//     // series: [{
//     //     name: '销量',
//     //     type: 'pie',
//     //     data: [5, 20, 36, 10, 10, 20]
//     // }]

//     // xAxis: {
//     //     type: 'category',
//     //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//     // },
//     // yAxis: {
//     //     type: 'value'
//     // },
//     // tooltip: {
//     //     trigger: 'item',
//     //     formatter: '数值: {c} '
//     // },
//     // series: [{
//     //     data: [120, 200, 150, 80, 70, 110, 130],
//     //     type: 'line',
//     //     symbol: 'triangle',
//     //     symbolSize: 20,
//     //     lineStyle: {
//     //         color: 'green',
//     //         width: 4,
//     //         type: 'dashed'
//     //     },
//     //     itemStyle: {
//     //         borderWidth: 3,
//     //         borderColor: 'yellow',
//     //         color: 'blue'
//     //     }
//     // }]
//     // title: {
//     //     text: '艺典销售数据',
//     //     subtext: '3.3号数据报表',
//     //     left: 'center'
//     // },
//     // tooltip: {
//     //     trigger: 'item',
//     //     formatter: '{b} : {c} ({d}%)'
//     // },
//     // legend: {
//     //     orient: 'vertical',
//     //     left: 'left',
//     //     top: 50,
//     //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
//     // },
//     // series: [
//         // {
//         //     // name: '销售数据',
//         //     type: 'pie',
//         //     radius: '50%',
//         //     center: ['50%', '70%'],
//         //     data: [
//         //         { value: 335, name: '直接访问' },
//         //         { value: 310, name: '邮件营销' },
//         //         { value: 234, name: '联盟广告' },
//         //         { value: 135, name: '视频广告' },
//         //         { value: 1548, name: '搜索引擎' }
//         //     ],
//             // emphasis: {
//             //     itemStyle: {
//             //         shadowBlur: 10,
//             //         shadowOffsetX: 0,
//             //         shadowColor: 'rgba(0, 0, 0, 0.1)'
//             //     }
//             // }
//         }
//     ]
// };

class Echarts extends Component {
    constructor() {
        super()
        this.state = {
            option: {
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    top: 50,
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [
                    {
                        name: '销售数据',
                        type: 'pie',
                        radius: '50%',
                        center: ['50%', '70%'],
                        data: [
                            { value: 335, name: '直接访问' },
                            { value: 310, name: '邮件营销' },
                            { value: 234, name: '联盟广告' },
                            { value: 135, name: '视频广告' },
                            { value: 1548, name: '搜索引擎' }
                        ]

                    }
                ]
            }
        }
    }
    componentDidMount() {
        setTimeout(() => {
            let option = JSON.parse(JSON.stringify(this.state.option))
            let data = [
                { value: 3, name: '54678' },
                { value: 10, name: '87676' },
                { value: 4, name: '78676' },
                { value: 5, name: '6877' },
                { value: 48, name: '7867' }
            ]
            option.series[0].data = data
            this.setState({ option })
        }, 3000)
    }
    render() {
        let { option } = this.state
        return (
            <div id='main'
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <h2 style={{
                    textAlign: 'center',
                }}>Echarts仪表盘</h2>
                <ReactEcharts
                    option={option}
                    notmerge={'true'}
                    lazyupdate={'false'}>
                </ReactEcharts>
            </div>
        )
    }
}
export default Echarts