"use client"
import React from 'react'
import { useState } from 'react';
import { Button } from '@/components/Button';

const Dashboard = () => {
    const [submittedData, submitData] = useState([])
    const [emailText, setEmailText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault() // don't want to prevent default form submission (would reload the page)
        submitData([...submittedData, {emails}]) // take previous array and make a new one with object holding string of emails (need to parse)
    }

  return (
    <div className="flex justify-center min-h-screen">

        <form>
            <textarea
            className="w-full p-2 border border-gray-300 rounded resize-none"
            rows="5"
            value={emailText} //set submitted value to current value of text box
            onChange={(e) => setEmailText(e.target.value)} //update current value of textbox when new text enters
            placeholder="Enter text for flashcard front"
            />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Dashboard;
