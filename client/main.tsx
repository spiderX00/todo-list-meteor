import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import App from '/imports/ui/App';

/* turretcss style */
import 'turretcss/dist/turretcss.min.css';

/* react-datepicker */
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale, setDefaultLocale } from "react-datepicker";

import * as it from 'date-fns/locale/it';

Meteor.startup(() => {
    registerLocale('it', it);
    setDefaultLocale(it);
    ReactDOM.render(<App/>, document.getElementById('react-target'));
});
