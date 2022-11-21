import React from "react";

class SearchBar extends React.Component {
    state = { term: '' };
    onFunctionChange = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    render() {
        return <div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.onFunctionChange}>
                <div className="field">
                    <label htmlFor="input">Video Search</label>
                    <input id="input" type="text" value={this.state.term} onChange={(event) => { this.setState({ term: event.target.value }) }} />
                </div>
            </form>
        </div>
    }
}

export default SearchBar;