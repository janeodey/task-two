import React from "react"
import { Link, Routes, Route } from "react-router-dom";

const LinkPage = () =>{

    const Team = "https://training.zuri.team/";
    const Books = "http://books.zuri.team" 
    const Python = " https://books.zuri.team/python-for-beginners?ref_id=JaneOdey" 
    const Pitch = "https://background.zuri.team";
    const Design = "https://books.zuri.team/design-rules";
    return(
        <section className="links">
            <a href="." id="btn__zuri">Twitter Links</a>
            <a href={Team} id="btn__zuri">Zuri Teams</a>

            <a href={Books} id="books" title=" this is where you find books about design and coding">Zuri Books</a>

            <a href={Python} id="book__python" title="where you feature the book as if you were selling it.">Python Books</a>

            <a href={Pitch} id="pitch" title="where you pitch a service for doing background checks on coders.">Background Checks for Coders</a>
            <a href={Design} id="book__design" title="where you pitch the free design book offered by Zuri.">Design Books</a>
            <Link id="contact" to="/contact" target="_blank">Contact</Link>
    </section>
    )
}

export default LinkPage