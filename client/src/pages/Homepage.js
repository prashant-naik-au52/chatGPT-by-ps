import React from 'react'
import {Box, Typography, Card, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";

const Homepage = () => {

  const navigate = useNavigate()

  return (
    <>
    <Box sx={{display:'flex', flexDirection:'row'}}>
    <Box p={2}>
      <Typography variant='h4' mb={2} fontWeight="bold" >
        Text Generation
      </Typography>
      <Card onClick={() => navigate('/summary')} sx={{boxShadow:2, borderRadius:5, height:190, width:200, '&:hover':{border:2, boxShadow:0,
      borderColor:"primary.dark"}}}>
        <DescriptionRounded sx={{fontSize: 80, color: 'primary.main', mt:2, ml:2}}/>
        <Stack p={3} pt={0}>
          <Typography fontWeight='bold' variant='h5'>TEXT SUMMARY</Typography>
          <Typography variant='h6'>Summarize long text into short sentences</Typography>
        </Stack>

      </Card>
    </Box>
    <Box p={2}>
      <Typography variant='h4' mb={2} fontWeight="bold" >
        Pharagraph
      </Typography>
      <Card onClick={() => navigate('/paragraph')} sx={{boxShadow:2, borderRadius:5, height:190, width:200, '&:hover':{border:2, boxShadow:0,
      borderColor:"primary.dark"}}}>
        <FormatAlignLeftOutlined sx={{fontSize: 80, color: 'primary.main', mt:2, ml:2}}/>
        <Stack p={3} pt={0}>
          <Typography fontWeight='bold' variant='h5'>Generate Paragraph</Typography>
          <Typography variant='h6'>Generate paragraph with words</Typography>
        </Stack>

      </Card>
    </Box>
    <Box p={2}>
      <Typography variant='h4' mb={2} fontWeight="bold" >
        Javascript Converter
      </Typography>
      <Card onClick={() => navigate('/js-converter')} sx={{boxShadow:2, borderRadius:5, height:190, width:200, '&:hover':{border:2, boxShadow:0,
      borderColor:"primary.dark"}}}>
        <DescriptionRounded sx={{fontSize: 80, color: 'primary.main', mt:2, ml:2}}/>
        <Stack p={3} pt={0}>
          <Typography fontWeight='bold' variant='h5'>JS Converter</Typography>
          <Typography variant='h6'>Trasnlate english to javascript code</Typography>
        </Stack>
      </Card>
    </Box>
    <Box p={2}>
      <Typography variant='h4' mb={2} fontWeight="bold" >
        AI ChatBot
      </Typography>
      <Card onClick={() => navigate('/js-converter')} sx={{boxShadow:2, borderRadius:5, height:190, width:200, '&:hover':{border:2, boxShadow:0,
      borderColor:"primary.dark"}}}>
        <ChatRounded sx={{fontSize: 80, color: 'primary.main', mt:2, ml:2}}/>
        <Stack p={3} pt={0}>
          <Typography fontWeight='bold' variant='h5'>ChatBot</Typography>
          <Typography variant='h6'>Chat with AI Bot</Typography>
        </Stack>
      </Card>
    </Box>
    <Box p={2}>
      <Typography variant='h4' mb={2} fontWeight="bold" >
        Scifi Images
      </Typography>
      <Card onClick={() => navigate('/js-converter')} sx={{boxShadow:2, borderRadius:5, height:190, width:200, '&:hover':{border:2, boxShadow:0,
      borderColor:"primary.dark"}}}>
        <DescriptionRounded sx={{fontSize: 80, color: 'primary.main', mt:2, ml:2}}/>
        <Stack p={3} pt={0}>
          <Typography fontWeight='bold' variant='h5'>Scifi-Iamges</Typography>
          <Typography variant='h6'>Generate Scifi Images</Typography>
        </Stack>
      </Card>
    </Box>
    
    </Box>
    </>
  )
}

export default Homepage