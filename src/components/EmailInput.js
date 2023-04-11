import React from 'react';
import PropTypes from 'prop-types';

class EmailInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <input type="email" placeholder="Entrez votre Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
            </div>
        );
    }
}

EmailInput.propTypes = {};

export default EmailInput;













// import React from 'react';

// class EmailInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: '' };
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ value: event.target.value });
//     }

//     render() {
//         return (
//             <div>
//                 <input type="email" placeholder="Entrez votre email" value={this.state.value} onChange={this.handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
//             </div>
//         );
//     }
// }

// export default EmailInput;
