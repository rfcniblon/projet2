import React from "react";
import { Link } from "react-router-dom";
import './login.css';
import '../fonts/fonts.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className= "container">
                <div className="ligne1">
                    <div className="haut row">
                        <Link to="/poisson"className="img2"><img className="img2" src="./img/poisson.jpg" title="Pisces" alt="" /></Link>
                        <Link to="/belier" className="img2 imgTop"><img className="img2 imgTop" src="./img/bélier.jpg" title="Aries" alt="" /></Link>
                        <Link to="/taureau" className="img2"><img className="img2" src="./img/taureau.jpg" title="Taurus" alt="" /></Link>
                    </div>
                </div>
                <div className="ligne2 row">
                    <div className="gauche column1">
                        <Link to="/verseau"className="img2 " ><img className="img2" src="./img/verseau.jpg" title="Aquarius" alt="" /></Link>
                        <Link to="/Capricorne"className="img2 imgLeft " ><img className="img2 imgLeft" src="./img/Capricorne.jpg" title="Capricorn" alt="" /></Link>
                        <Link to="sagittaire" className="img2 " ><img className="img2" src="./img/sagittaire.jpg" title="Sagittarius" alt="" /></Link>
                    </div>
                    <div className="card middle">
                        <div className="front">
                            <img className="img" src="./img/athena.jpg" alt="" />
                        </div>
                        <div className="back">
                            <div className="back-content ">
                                <div className="login-box">
                                    <h1 className="titre_article">Login</h1>
                                    <div className="textbox">
                                        <i className = "fa fa-user" aria-hidden = "true"></i>
                                        <input className="text_article" type="text" placeholder="Username" name="" value=""/>
                                    </div>
                                    <div className="textbox">
                                        <i className = "fa fa-lock" aria-hidden = "true"></i>
                                        <input className="text_article" type="password" placeholder="Password" name="" value=""/>
                                    </div>
                                    <input className="btn titre_article" type="button" name="" value="Sign In" />
                                    <input className="text_article" type="checkbox" name="choix" id="choix" />
                                    <label className="titre_article" htmlFor="subscribeNews">Remember me?</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="droite column2">
                        <Link to="/gemeau"className="img2"><img className="img2" src="./img/gémeau.jpg" title="Gemini" alt="" /></Link>
                        <Link to="/cancer"className="img2 imgRight"><img className="img2 imgRight" src="./img/cancer.jpg" title="Cancer" alt="" /></Link>
                        <Link to="/lion"className="img2"><img className="img2" src="./img/lion.jpg" title="Lion" alt="" /></Link>
                    </div>
                </div>
                <div className="ligne3">
                    <div className="bas row">
                        <Link to="/scorpion" className="img2"><img className="img2" src="./img/scorpion.jpg" title="Scorpio" alt="" /></Link>
                        <Link to="/balance" className="img2 imgDown"><img className="img2 imgDown" src="./img/balance.jpg" title="Libra" alt="" /></Link>
                        <Link to="/vierge" className="img2" ><img className="img2" src="./img/vierge.jpg" title="Virgo" alt="" /></Link>
                    </div>
                </div>
            </div>
        );
    }     
}

export default Login;