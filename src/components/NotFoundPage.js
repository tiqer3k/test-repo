import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () =>
(
    <div>
        Page not found 404 - <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;