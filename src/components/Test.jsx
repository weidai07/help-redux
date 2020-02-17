import React from 'react';
import cool from '../assets/images/cool.jpeg';
import homer from '../assets/images/homer.png';
import Navbar from './Navbar';
// import FormBox from './FormBox';
import BeerList from './BeerList';

export default function Test2() {

    let parent = {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(12, 1fr)',
        gridColumnGap: '5px',
        gridRowGap: '6px'
    }

    let div1 = {
        gridArea: '1 / 1 / 2 / 13',
        backgroundColor: '#4D9DEO',
        padding: '20px'
    }

    let div2 = {
        gridArea: '2 / 1 / 6 / 4',
        backgroundColor: '#121430',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        padding: '65',
        overflow: 'hidden'
    }

    let div3 = {
        gridArea: '2 / 10 / 6 / 13',
        backgroundColor: '#E15554',
        padding: '20px'
    }

    let div4 = {
        gridArea: '2 / 4 / 3 / 10',
        backgroundColor: '#3BB273',
        padding: '20px',
        textAlign: 'center',
        fontSize: '18px'
    }

    let div5 = {
        gridArea: '3 / 4 / 13 / 10',
        backgroundColor: '#7768AE',
        padding: '20px',
        overflow: 'hidden'
    }

    let div6 = {
        gridArea: '6 / 1 / 13 / 4',
        backgroundColor: 'cornflowerblue',
        padding: '20px',
        padding: '20px',
        padding: '15',
        overflow: 'hidden'
    }

    let div7 = {
        gridArea: '6 / 10 / 13 / 13',
        backgroundColor: 'gray',
        padding: '20px'
    }

    let coolStyling = {
        width: '300px',
        height: '300px'
    }

    let homerPara = {
        float: 'left',
        marginRight: '25px'
    }

    return (
        <div>

            <div style={parent}>
                <div style={div1}>
                    <Navbar />
                </div>
                <div style={div2}>
                    <img src={cool} style={coolStyling} />
                </div>
                <div style={div3}>
                    {/* <p>I am the salmon box</p> */}
                </div>
                <div style={div4}>
                    <h1>I am an h1 in div4</h1>
                </div>
                <div style={div5}>
                    <BeerList />
                </div>
                <div style={div6}>
                    <p><img src={homer} style={homerPara} />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, molestias! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsam, quo saepe quaerat aliquid mollitia impedit nam aspernatur iusto incidunt beatae officiis fugiat dignissimos expedita libero nobis ea corrupti ullam iure eaque veniam totam eveniet? Mollitia animi ipsa consequatur commodi nemo, id rem assumenda accusamus aperiam nisi repellendus, libero corporis iusto! Quidem sint nihil cupiditate laboriosam animi consectetur labore? Sunt.</p>
                </div>
                <div style={div7}>
                    {/* <p>I am the gray box</p> */}
                </div>

            </div>
        </div>
    );
}
