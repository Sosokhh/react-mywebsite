import React from 'react'
import "../css/nav.css"

export default class Nav extends React.Component {
    render() {
        return(
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <hr/>
                        <li><a href="">About</a></li>
                        <hr/>
                            <li><a href="">Interesting Things</a></li>
                            <hr/>
                                <li><a href="">Boring Things</a></li>
                                <hr/>
                                    <li><a href="">Contact</a></li>
                                    <hr/>
                </ul>

                <p className="peri"> Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.</p>
            </nav>


        )

    }


}