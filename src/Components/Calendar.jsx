import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(startDate, endDate) {
    this.setState({
      startDate: startDate,
      endDate: endDate
    });
  }

  connectedCallback() {
    const datePicker = document.querySelector(DatePicker);
    datePicker.addEventListener('value-changed', e => console.log(e));
    //t//his.attachShadow({ mode: 'open' }).appendChild(mountPoint);
  }

  //customElements.define('x-search', XSearch);

  render() {
    return (
      <div className="date-picker-main">
        <div>
          <DatePicker
            //format={value => (value ? new Date(value) : null)}
            className="input-field"
            //defaultValue={null}
            selected={this.state.startDate}
            onChange={this.handleChange && this.connectedCallback}
          />
        </div>
        <div className="text-center">
          <span className="white-text">To:</span>
        </div>
        <div>
          <DatePicker
            //format={value => (value ? new Date(value) : null)}
            className="input-field"
            //defaultValue={null}
            selected={this.state.endDate}
            onChange={this.handleChange && this.connectedCallback}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;
