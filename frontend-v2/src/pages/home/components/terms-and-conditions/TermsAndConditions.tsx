import {  } from 'react'
import { Box, Button, Typography } from '@mui/material'
import Overview from './components/overview/Overview'
import StudyOutline from './components/study-outline/StudyOutline'
import ParticipantInformation from './components/participant-information/ParticipantInformation'
import CompsciLogo from '../../../../assets/compsci-logo.svg'
import ContactDetails from './components/contact-details/ContactDetails'

interface TermsAndConditionsProps {
    show: boolean,
    onAgree: () => void,
    onClose: () => void,
}

const TermsAndConditions = ({ 
    show, 
    onAgree, 
    onClose 
}: TermsAndConditionsProps) => {

    return (
        <Box
            sx={{
                position: 'absolute',
                top: show ? '0rem' : '100%',
                left: '0rem',
                height: 'calc(100% - 8rem)',
                width: 'calc(100% - 36rem - 8rem)',
                bgcolor: 'white',
                padding: '4rem',
                overflowY: 'scroll',

                display: 'flex',
                flexDirection: 'column',
                rowGap: '3rem'
            }}
            style={{
                transition: '.4s ease'
            }}
            >
            <Box
                sx={{
                    // outline: '1px solid black',
                    // pb: '3rem'
                }}
                >
                <Box
                    component='img'
                    src={CompsciLogo}
                    sx={{
                        height: '7rem'
                    }}
                    />
            </Box>
            <Typography variant='h3'>Participant Information Sheet</Typography>
            <Box>
                <Overview />
                <StudyOutline />
                <ParticipantInformation />
                <ContactDetails />
            </Box>
            <Box
                sx={{
                    // outline: '1px solid gray',
                    display: 'flex',
                    justifyContent: 'end',
                    columnGap: '.5rem'
                }}>
                <Button
                    variant='contained'
                    sx={{
                        height: '100%',
                        width: '8rem'
                        // borderRadius: '10%'
                    }}
                    onClick={onAgree}
                    >I Agree</Button>
                <Button
                    variant='outlined'
                    sx={{
                        height: '100%',
                        width: '8rem'
                    }}
                    onClick={onClose}
                    >Close</Button>
            </Box>
        </Box>
    )
}

export default TermsAndConditions