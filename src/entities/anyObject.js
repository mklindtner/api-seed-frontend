import React, { Component } from 'react';
import settings from '../settings';

export default () => {
    let restCall = fetch(settings.resultUrl + "anyObject2");
    return restCall;
} 