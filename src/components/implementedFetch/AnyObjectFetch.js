import React, { Component } from 'react';
import { get, getById, put, post, remove } from '../FetchCRUD';


export function getAnyObjectAll() {
    return get("anyObject2");
}

export function getAnyObjectById(id) {
    return getById("anyObject2", id);
}

export function putAnyObject(id){
    return put("anyObject2", id);
}

export  function deleteAnyObject(id) {
    return remove("anyObject2", id);
}






