import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from "@mui/material"

import Feed from './components/Feed'
import Navbar from './components/Navbar'
import ChannelDetail from './components/ChannelDetail'
import VideoDetail from './components/VideoDetail'
import SearchFeed from './components/SearchFeed'
import LiveStream from './components/LiveStream'

const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
                <Route path='/livestream' element={<LiveStream />} />
            </Routes>
        </Box>
    </BrowserRouter>
)


export default App
