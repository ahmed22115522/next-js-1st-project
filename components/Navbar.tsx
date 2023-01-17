"use client"
import React from 'react'
import Link from 'next/link'
import { AppBar, Container, styled, Box, Button, Stack} from '@mui/material'

const Menu = styled(Box)({
  borderBottom: '1px solid black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const MenuItems = styled(Button)({
  fontWeight: 900,
  fontSize: '12px',
  marginRight: '2px'
})

const Logo = styled('div')({
  fontWeight: 900,
  color:'black',
  fontSize: '34px',
  cursor: 'pointer'
})

const LogoDesc = styled(Box)({
  fontWeight: 600,
  color:'black',
  fontSize: '12px',
})

const Navbar = () => {
  return (
    <>
      <Container>
        <AppBar position='static' color='transparent' elevation={0}>
          <Menu>
            <Stack direction={'row'}>
              <Logo>Coding Notes</Logo>
              <Stack direction={'column'} sx={{
                marginLeft: 1
              }}>
                <LogoDesc>The Blog</LogoDesc>
                <LogoDesc>Of Codingstrade</LogoDesc>
              </Stack>
            </Stack>

            <MenuItems>Books</MenuItems>
          </Menu>
        </AppBar>

      </Container>
    </>
  )
}

export default Navbar