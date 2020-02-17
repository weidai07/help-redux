import React from 'react';
import { Link } from 'react-router-dom';


function GridTest() {

    var parent = {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(12, 1fr)',
        gridColumnGap: '5px',
        gridRowGap: '10px'
    };

    var div1 = {
        gridArea: '1 / 1 / 13 / 5',
        backgroundColor: 'cornflowerblue'
    };

    var div2 = {
        gridArea: '1 / 5 / 13 / 9',
        backgroundColor: 'aqua'
    };

    var div3 = {
        gridArea: '1 / 9 / 13 / 13',
        backgroundColor: 'yellow'
    };



    return (
        <div style={parent} >
            <div style={div1}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magni ea ipsam rerum harum omnis perspiciatis nemo nostrum dolores, rem unde consequatur tempore placeat ad. Nostrum labore veniam voluptatibus sint sapiente suscipit aspernatur, repellat voluptatem fugit nulla harum qui dicta iste, aliquam adipisci quo vitae debitis veritatis dolor nesciunt unde. Velit possimus quia eius iste architecto laboriosam recusandae reiciendis non earum officia quo tenetur rem, ex inventore perspiciatis nemo ad deleniti mollitia quibusdam incidunt at ut doloribus. Dolores, reprehenderit ullam!</p>
            </div>
            <div style={div2}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi qui doloremque beatae laboriosam quo reiciendis tenetur optio nemo, atque rem. Ipsam in dolores nobis unde ducimus nam reprehenderit ea illum ipsum cum porro excepturi fugiat delectus repudiandae magni et aperiam dignissimos, odit officia reiciendis veritatis veniam maiores! Error dolore, eveniet reiciendis perferendis ducimus perspiciatis ipsam nobis porro assumenda accusamus iste inventore. Inventore dicta dolorem, quasi laboriosam excepturi corporis. Officia, omnis. Corporis error quia, tempore eaque dignissimos harum rerum ad excepturi.</p>
            </div>
            <div style={div3}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rerum excepturi nobis, voluptate, saepe eos repellendus corporis, incidunt aut rem consequatur odit. Quos iure veniam impedit vitae ipsa cupiditate, officia consequatur sit placeat ratione quo amet quas, fugit ex, harum dolorum laboriosam numquam cum esse! Numquam, quae maxime reprehenderit ex, voluptate ipsa culpa accusantium incidunt praesentium aliquam dolor voluptatum, temporibus laboriosam architecto! Deserunt numquam, natus repudiandae quo asperiores, quaerat quidem dicta voluptates architecto animi accusantium! Quos maiores voluptas sint repellat!</p>
            </div>
        </div>
    );
}

export default GridTest;