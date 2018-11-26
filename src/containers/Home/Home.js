import React, { Component } from 'react';
import TableauHolder from '../../components/TableauHolder/TableauHolder';
import './Home.css';
import Auxiliar from '../../hoc/auxiliar';

class Home extends Component {
    state = {
        showFilters: false,
        views: [
            {
                url: 'https://public.tableau.com/views/RP2-v2/Planilha5?:embed=y&:display_count=yes',
                urlFilter: 'https://public.tableau.com/views/RP2-v2/Planilha6?:embed=y&:display_count=yes',
                className: 'full fixed-height',
                title: 'Distribuição geográfica das ocorrências'
            },
            {
                url: 'https://public.tableau.com/views/RP2-v2/Planilha7?:embed=y&:display_count=yes',
                urlFilter: 'https://public.tableau.com/views/RP2-v2/Planilha8?:embed=y&:display_count=yes',
                className: 'half fixed-height',
                title: 'Ocorrências por sexo do paciente'
            },
            {
                url: 'https://public.tableau.com/views/RP2-v2/Planilha2?:embed=y&:display_count=yes',
                urlFilter: 'https://public.tableau.com/views/RP2-v2/Planilha1?:embed=y&:display_count=yes',
                className: 'half fixed-height',
                title: 'Distribuição mensal de ocorrências (2018)'
            },
            {
                url: 'https://public.tableau.com/views/RP2-v2/Planilha3?:embed=y&:display_count=yes',
                urlFilter: 'https://public.tableau.com/views/RP2-v2/Planilha4?:embed=y&:display_count=yes',
                className: 'full extra-height',
                title: 'Ocorrências por cidade dos pacientes'
            },
            {
                url: 'https://public.tableau.com/views/RP2-v2/Planilha9?:embed=y&:display_count=yes',
                urlFilter: 'https://public.tableau.com/views/RP2-v2/Planilha10?:embed=y&:display_count=yes',
                className: 'full extra-height capped',
                title: 'Ocorrências por idade dos pacientes'
            },
        ]
    }

    filterHandler = () => {
        const { showFilters } = { ...this.state };
        let toggledValue = !showFilters;
        this.setState({ showFilters: toggledValue });
    };

    render() {

        const { views, showFilters } = { ...this.state };

        return (
            <Auxiliar>
                <div className="filter" onClick={this.filterHandler} >{showFilters ? 'Exibir totais' : 'Filtrar por doenças'}</div>
                <div className="home">
                    {views.map((view, index) => {
                        return (
                            <Auxiliar key={index}>
                                <TableauHolder
                                    url={view.url}
                                    className={view.className}
                                    show={!showFilters}
                                    title={view.title} />
                                <TableauHolder
                                    url={view.urlFilter}
                                    className={view.className}
                                    show={showFilters}
                                    title={view.title} />
                            </Auxiliar>
                        )
                    })}
                </div>
            </Auxiliar>
        );
    }
}

export default Home;