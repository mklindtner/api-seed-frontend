import React, { Component } from 'react';
import settings from '../settings';

export function get(endpoint) {
    return fetch(settings.resultUrl + endpoint);
}

export function put(endpoint, id) {
    return fetch(settings.resultUrl + endpoint + "/" + id);
}

export function remove(endpoint, id) {
    return fetch(settings.resultUrl + endpoint + "/" + id);
}

export function getById(endpoint, id) {
    return fetch(settings.resultUrl + endpoint + "/" + id);
}