"use client"
import React from 'react'
import { FidgetSpinner } from 'react-loader-spinner'

export default function Loading() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="fidget-loading"
                ballColors={['#ff0000', '#00ff00', '#0000ff']}
                backgroundColor="#F0F0F0"
            />
        </div>
    )
}
