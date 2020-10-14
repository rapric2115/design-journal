import React, { Component } from 'react';
import {Table } from 'evergreen-ui';


class Covid extends Component {
    constructor() {
        super()
        this.state = {
            newCases: '',
            active: '',
            UCI: '',
            recuperados: '',
            total: '',
            death: '',
            newDeath: ''
        }
    }
    // componentDidMount() {
    //     const url = "https://covid-193.p.rapidapi.com/statistics"
    //     fetch(url, {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "covid-193.p.rapidapi.com",
    //             "x-rapidapi-key": "f43c62c95dmsh880c62a47e27d56p1df237jsn4a8636802c68"
    //         }
    //     }).then((covidrespo) => {
    //         const covidr = covidrespo.json()
    //         return covidr
    //     }).then(covidr => {
    //         console.log(covidr.response[69])
    //         this.setState({
    //             newCases: covidr.response[69].cases.new,
    //             active: covidr.response[69].cases.active,
    //             UCI: covidr.response[69].cases.critical,
    //             recuperados: covidr.response[69].cases.recovered,
    //             total: covidr.response[69].cases.total,
    //             death: covidr.response[69].deaths.total,
    //             newDeath: covidr.response[69].deaths.new
    //         })
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }

    render() {
        const covid = [
            {
              key: '1',
              name: 'Nuevos Casos',
              casos: this.state.newCases,
            },
            { 
                key: '2',
                name: 'activos',
                casos: this.state.active,
            },
            {
                key: '3',
                name: 'Cuidados Intensivos',
                casos: this.state.UCI,
            },
            {
                key:'4',
                name: 'Recuperados',
                casos: this.state.recuperados,
            },
            {
                key:'5',
                name: 'Total',
                casos: this.state.total
            },
            {
                key:'6',
                name: 'Muertes',
                casos: this.state.newDeath
            },
            {
                key:'7',
                name: 'Total Muertes',
                casos: this.state.death
            }

          ];
        return(
            <main>
                <Table>
                <Table.Head>
                    <Table.TextHeaderCell>
                    Covid-19 Informacion
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                    Total
                    </Table.TextHeaderCell>
                </Table.Head>
                <Table.Body height={240}>
                    {covid.map(covid => (
                    <Table.Row key={covid.key} isSelectable onSelect={() => alert(covid.name)}>
                        <Table.TextCell>{covid.name}</Table.TextCell>
                        <Table.TextCell>{covid.casos}</Table.TextCell>                        
                    </Table.Row>
                    ))}
                </Table.Body>
                </Table>
            </main>
        )
    }
}

export default Covid