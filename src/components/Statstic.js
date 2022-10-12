import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sigstat from './Sigstat';

const Statstic = () => {


    const loaderData = useLoaderData()
    const statData = loaderData.data

    return (
        <div>


            <Sigstat key={statData.id} statData={statData}></Sigstat>

        </div>
    );
};

export default Statstic;