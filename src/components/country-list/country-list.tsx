import * as React from 'react';
import  './country-list.scss';

export default class Country extends React.Component {
    public readonly apiBasePath: string = "https://restcountries.eu/rest/v2/";
    public readonly apiNameUri: string = "name/";
    public readonly apiRegionUri: string = "region/";
    public readonly img: string = "region/";

    state = {
        countryList: []
    }
    

    componentDidMount() {
        fetch(`${this.apiBasePath}${this.apiRegionUri}europe`)
            .then(stream => stream.json())
            .then(data => this.setState({
               countryList: data
            }))
            .catch(error => console.log(error))
    }

    render() {
        return (
        <div id="country">
            {
                this.state.countryList.map(country => 
                    <div className="country-list"  key={country.name}>
                        <img src={country.flag} alt="" className="flag" />
                        <p>{country.name}</p>
                    </div>
                )
            }
        </div>
        );
      }
}
