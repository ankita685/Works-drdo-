
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useState, useEffect } from 'react';

import 'firebase/database';

import { getDatabase, ref, onValue } from "firebase/database";




const firebaseConfig = {
  //paste your config code here...
};



const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);


export { firebaseApp, database };
