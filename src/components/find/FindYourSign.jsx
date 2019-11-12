import React from 'react';
/* import '../fonts/fonts.css'; */
import './FindYourSign.css';

class FindYourSign extends React.Component {
    constructor(props) {
        super(props);
        this.state = { day: '', month: '', sign: '' };
    }

    handleSubmit = () => {
        if (this.state.sign === 'aries') {
            alert("You're aries");
        }
        else if (this.state.sign === 'taurus') {
            alert("You're taurus");
        }
        else if (this.state.sign === 'gemini') {
            alert("You're gemini");
        }
        else if (this.state.sign === 'cancer') {
            alert("You're cancer");
        }
        else if (this.state.sign === 'lion') {
            alert("You're lion");
        }
        else if (this.state.sign === 'virgo') {
            alert("You're virgo");
        }
        else if (this.state.sign === 'libra') {
            alert("You're libra");
        }
        else if (this.state.sign === 'scorpio') {
            alert("You're scorpio");
        }
        else if (this.state.sign === 'sagittarius') {
            alert("You're sagittarius");
        }
        else if (this.state.sign === 'capricorne') {
            alert("You're capricorne");
        }
        else if (this.state.sign === 'aquarius') {
            alert("You're aquarius");
        }
        else if (this.state.sign === 'pisces') {
            alert("You're pisces");
        }
    }

    getSign(month, day) {
        const zodiac = [
            {
                "first": "capricorne",
                "second": "aquarius",
                "limit": 21
            },
            {
                "first": "aquarius",
                "second": "pisces",
                "limit": 20
            },
            {
                "first": "pisces",
                "second": "aries",
                "limit": 21
            },
            {
                "first": "aries",
                "second": "taurus",
                "limit": 21
            },
            {
                "first": "taurus",
                "second": "gemini",
                "limit": 21
            },
            {
                "first": "gemini",
                "second": "cancer",
                "limit": 22
            },
            {
                "first": "cancer",
                "second": "lion",
                "limit": 23
            },
            {
                "first": "lion",
                "second": "virgo",
                "limit": 23
            },
            {
                "first": "virgo",
                "second": "libra",
                "limit": 23
            },
            {
                "first": "libra",
                "second": "scorpio",
                "limit": 23
            },
            {
                "first": "scorpio",
                "second": "sagittarius",
                "limit": 23
            },
            {
                "first": "sagittarius",
                "second": "capricorne",
                "limit": 22
            },

        ];

        let monthInfo = zodiac[month - 1];
        if (day >= monthInfo.limit) {
            return monthInfo.second;
        }
        else {
            return monthInfo.first;
        }

    }

    handleChange = (event) => {
        if (event.target.value === "")
            return;

        let birthDate = event.target.value.split("-");
        let month = birthDate[1];
        let day = birthDate[2];

        this.setState(
            {
                day: Number(birthDate[2]),
                month: Number(birthDate[1]),
                sign: this.getSign(month, day)
            }
        )
    }

    render() {
        return (
            <form className="FindYourSign" onSubmit={this.handleSubmit}>
                <div className="Day">
                    <label className="titre_article dsk-12 tab-12 mob-11">Enter your date of birth to know your astrological sign</label>
                    <input className=" titre_article dsk-2 tab-3 mob-4" type="date" onChange={this.handleChange} />
                </div>

                <div className="titre_article Submit ">
                    <label htmlFor="submit"></label>
                    <button className="titre_article dsk-2 tab-3 mob-4"
                        type="button"
                        onClick={this.handleSubmit}
                    >
                        Send
                    </button>
                </div>
            </form>
        )
    }
}

export default FindYourSign;