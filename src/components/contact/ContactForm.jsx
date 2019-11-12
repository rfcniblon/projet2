import React from 'react';
import "../fonts/fonts.css"; 
import './ContactForm.css';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', message: '' };
    }

    handleChange = (event) => {
        if (event.target.name === 'name') {
            this.setState({ name: event.target.value });
        }
        else if (event.target.name === 'email') {
            this.setState({ email: event.target.value });
        }
        else if (event.target.name === 'subject') {
            this.setState({ subject: event.target.value });
        }
        else if (event.target.name === 'message') {
            this.setState({ message: event.target.value });
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Your message has been transmitted to the staff ');
    }

    render() {
        return (
            <form className="contactForm" onSubmit={this.handleSubmit}>

                <div className="contactName">
                    <label className="titre_article labelForm" htmlFor="name">Name: </label>
                    <input className="text_article labelForm dsk-6 tab-10 mob-11 row"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        size="50"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <div className="contactEmail">
                    <label className="titre_article labelForm tab-12 mob-12 row" htmlFor="email">Email adress: </label>
                    <input className="text_article labelForm dsk-6 tab-10 mob-11 row"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email adress"
                        size="50"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <div className="contactSubject">
                    <label className="titre_article labelForm tab-12 mob-12 row" htmlFor="subject">Subject: </label>
                    <select className="text_article labelForm dsk-6 tab-10 mob-11 row"
                        type="menu"
                        name="subject"
                        id="subject"
                        value={this.state.subject}
                        onChange={this.handleChange}
                        required
                        defaultValue={'Choose a subject'}
                    >
                        <option className="text_article" value="Choose a subject" disabled>Choose a subject</option>
                        <option className="text_article" value="Additional information">Additional information</option>
                        <option className="text_article" value="Problems on the website">Problems on the website</option>
                        <option className="text_article" value="Others">Others</option>
                    </select>
                </div>

                <div className="contactMessage">
                    <label className="titre_article labelForm tab-12 mob-12 row" htmlFor="message">Message: </label>
                    <textarea className="text_article labelForm dsk-6 tab-10 mob-11 row"
                        name="message"
                        id="message"
                        cols="50"
                        rows="5"
                        placeholder="Enter your message here"
                        value={this.state.message}
                        onChange={this.handleChange}
                        required
                    >
                    </textarea>
                </div>

                <div className="titre_article contactSubmit">
                    <input className="titre_article labelForm dsk-2 tab-3 mob-4 row"
                        type="submit"
                        value="Send"
                    />
                </div>

            </form>
        )
    }
}

export default ContactForm;