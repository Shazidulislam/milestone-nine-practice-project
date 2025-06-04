import React, { Suspense } from 'react';
import Categoris from '../Categoris/Categoris';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<>
                <p>Loading..</p>
                </>}>
            <Categoris></Categoris>

            </Suspense>
        </div>
    );
};

export default LeftAside;